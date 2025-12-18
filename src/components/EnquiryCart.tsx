import { useState } from "react";
import { X, Trash2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { submitForm } from "@/lib/submitForm";

export interface CartItem {
  id: string;
  name: string;
  variant: string;
  quantity: number;
  notes: string;
}

interface EnquiryCartProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, quantity: number) => void;
  onUpdateNotes: (id: string, notes: string) => void;
  onRemoveItem: (id: string) => void;
  onClearCart: () => void;
}

export const EnquiryCart = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onUpdateNotes,
  onRemoveItem,
  onClearCart,
}: EnquiryCartProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    businessType: "",
    companyName: "",
    city: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);

    try {
      await submitForm({
        formType: "EnquiryCart",
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
        extra: `${formData.businessType} | ${formData.companyName} | ${formData.city}`,
        cart: items,
      });

      toast({ title: "Enquiry Submitted Successfully!" });
      onClearCart();
      onClose();
    } catch {
      toast({ title: "Submission failed", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
        onClick={onClose}
      />
      <div className="fixed right-0 top-0 h-full w-full md:w-[500px] bg-background z-50 shadow-2xl overflow-y-auto">
        <div className="sticky top-0 bg-background border-b border-border p-4 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-foreground">Enquiry Cart</h2>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-6 w-6" />
          </Button>
        </div>

        <div className="p-6">
          {items.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground mb-4">
                Your enquiry cart is empty
              </p>
              <Button onClick={onClose}>Continue Shopping</Button>
            </div>
          ) : (
            <>
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-foreground">
                    Selected Products ({items.length})
                  </h3>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={onClearCart}
                    className="text-destructive"
                  >
                    Clear All
                  </Button>
                </div>

                <div className="space-y-4">
                  {items.map((item) => (
                    <div
                      key={item.id}
                      className="glass-card rounded-lg p-4 space-y-3"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h4 className="font-semibold text-foreground">
                            {item.name}
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            {item.variant}
                          </p>
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => onRemoveItem(item.id)}
                          className="text-destructive"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>

                      <div>
                        <Label htmlFor={`qty-${item.id}`} className="text-xs">
                          Quantity
                        </Label>
                        <Input
                          id={`qty-${item.id}`}
                          type="number"
                          min="1"
                          value={item.quantity}
                          onChange={(e) =>
                            onUpdateQuantity(
                              item.id,
                              parseInt(e.target.value) || 1
                            )
                          }
                          className="mt-1"
                        />
                      </div>

                      <div>
                        <Label htmlFor={`notes-${item.id}`} className="text-xs">
                          Notes (optional)
                        </Label>
                        <Textarea
                          id={`notes-${item.id}`}
                          value={item.notes}
                          onChange={(e) =>
                            onUpdateNotes(item.id, e.target.value)
                          }
                          placeholder="Special requirements..."
                          rows={2}
                          className="mt-1"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t border-border pt-6">
                <h3 className="font-semibold text-foreground mb-4">
                  Your Information
                </h3>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="cart-name">Name *</Label>
                    <Input
                      id="cart-name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="cart-email">Email *</Label>
                    <Input
                      id="cart-email"
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="cart-phone">Phone *</Label>
                    <Input
                      id="cart-phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="cart-businessType">Business Type *</Label>
                    <Select
                      value={formData.businessType}
                      onValueChange={(value) =>
                        setFormData({ ...formData, businessType: value })
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="household">Household</SelectItem>
                        <SelectItem value="horeca">HoReCa</SelectItem>
                        <SelectItem value="office">Office</SelectItem>
                        <SelectItem value="distributor">Distributor</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="cart-company">
                      Company Name (if Business)
                    </Label>
                    <Input
                      id="cart-company"
                      value={formData.companyName}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          companyName: e.target.value,
                        })
                      }
                    />
                  </div>

                  <div>
                    <Label htmlFor="cart-city">City / Region *</Label>
                    <Input
                      id="cart-city"
                      value={formData.city}
                      onChange={(e) =>
                        setFormData({ ...formData, city: e.target.value })
                      }
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="cart-message">
                      Additional Requirements
                    </Label>
                    <Textarea
                      id="cart-message"
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Delivery preferences, special requests, etc."
                      rows={3}
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg
                          className="h-4 w-4 animate-spin"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                          />
                        </svg>
                        Submitting…
                      </span>
                    ) : (
                      <span className="flex items-center justify-center gap-2">
                        <Send className="h-4 w-4" />
                        Submit Enquiry
                      </span>
                    )}
                  </Button>
                </form>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

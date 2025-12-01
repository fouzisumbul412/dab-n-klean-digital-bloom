import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ProductCard, Product } from "./ProductCard";

import kitchenTowelsImg from "/images/kitchen-towels.jpg";
import facialTissuesImg from "/images/facial-tissues.jpg";
import butterPaperImg from "/images/butter-paper.jpg"; // (unused for now)
import toiletRollImg from "/images/toilet-roll.jpg";   // (unused for now)
import napkinsImg from "/images/napkins.jpg";
import paperCupsImg from "/images/paper-cups.png";
import nonWovenImg from "/images/non-woven-tissue.jpg";
import toiletRoll2PlyImg from "/images/toiletRoll2Ply.jpg";
import toiletRoll3PlyImg from "/images/toilet-roll-3ply.jpg";

gsap.registerPlugin(ScrollTrigger);

interface ProductsProps {
  onAddToEnquiry: (product: Product, variant: string, quantity: number) => void;
}

export const Products = ({ onAddToEnquiry }: ProductsProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  const products: Product[] = [
    {
      id: "facial-tissues",
      name: "Facial Tissues",
      description:
        "Soft, gentle, and highly absorbent facial tissues made from premium virgin pulp. Ideal for home, office, and personal hygiene.",
      features: [
        "Ultra-soft and skin-friendly",
        "Highly absorbent 2-ply / 3-ply options",
        "Made from premium virgin pulp",
        "Hygienic and dermatologically safe",
      ],
      uses: ["Home", "Office", "Travel", "Personal Care"],
      image: facialTissuesImg,
      variants: ["Box of 100", "Box of 200", "Cube Box", "Family Pack (10 Boxes)"],
    },

    {
      id: "toilet-roll-2ply",
      name: "Toilet Roll – 2 Ply",
      description:
        "Soft yet strong 2-ply toilet rolls designed for everyday use. Perfect for homes, offices, and commercial spaces.",
      features: [
        "2-ply premium comfort",
        "Soft and gentle on skin",
        "High absorbency",
        "Long-lasting rolls",
      ],
      uses: ["Home", "Office", "HoReCa"],
      image: toiletRoll2PlyImg,
      variants: ["Pack of 4", "Pack of 12", "Pack of 24", "Bulk (96 rolls)"],
    },

    {
      id: "toilet-roll-3ply",
      name: "Toilet Roll – 3 Ply",
      description:
        "Ultra-soft, premium 3-ply toilet rolls for superior comfort and durability. Perfect for a premium hygiene experience.",
      features: [
        "3-ply luxurious softness",
        "Highly absorbent layers",
        "Extra strength and durability",
        "Made from premium virgin pulp",
      ],
      uses: ["Home", "Premium Hotels", "Commercial Use"],
      image: toiletRoll3PlyImg,
      variants: ["Pack of 4", "Pack of 12", "Pack of 24", "Bulk (96 rolls)"],
    },

    {
      id: "kitchen-towel",
      name: "Kitchen Towel",
      description:
        "High-absorbency, strong, and grease-resistant kitchen towels for all household cleaning and wiping needs.",
      features: [
        "3-ply/4-ply extra absorbent layers",
        "Grease and spill resistant",
        "Durable and long-lasting",
        "Ideal for household and commercial kitchens",
      ],
      uses: ["Kitchen", "HoReCa", "Cleaning", "Everyday Use"],
      image: kitchenTowelsImg,
      variants: ["Single Roll", "Pack of 2", "Pack of 4", "Bulk (24 rolls)"],
    },

    {
      id: "non-woven-tissue",
      name: "Non-Woven Tissue (Re-usable)",
      description:
        "Eco-friendly, thick, and reusable non-woven tissues designed for heavy-duty cleaning and multipurpose usage.",
      features: [
        "Reusable and washable",
        "Stronger and thicker than paper tissues",
        "Eco-friendly material",
        "Perfect for kitchen and industrial use",
      ],
      uses: ["Kitchen", "Dusting", "Cleaning", "Multipurpose Wiping"],
      image: nonWovenImg,
      variants: ["Pack of 25", "Pack of 50", "Pack of 100", "Bulk Pack"],
    },

    {
      id: "napkins",
      name: "Napkins",
      description:
        "Soft, hygienic paper napkins available in various sizes—ideal for dining tables, events, and everyday use.",
      features: [
        "Soft and absorbent",
        "Food-grade and hygienic",
        "Available in multiple sizes",
        "Durable for dry and wet use",
      ],
      uses: ["Dining", "Events", "Restaurants", "Everyday Use"],
      image: napkinsImg,
      variants: ["Pack of 100", "Pack of 200", "Pack of 500", "Bulk (5000 pcs)"],
    },

    {
      id: "paper-cups",
      name: "Paper Cups",
      description:
        "Strong, leak-resistant paper cups ideal for hot and cold beverages. Made from high-quality food-grade material.",
      features: [
        "100% food-grade material",
        "Leak-resistant structure",
        "Suitable for hot and cold drinks",
        "Eco-friendly and safe",
      ],
      uses: ["Home", "Office", "Cafes", "Events"],
      image: paperCupsImg,
      variants: ["150ml", "200ml", "250ml", "Custom Print Bulk Orders"],
    },
  ];

  // GSAP fade/slide on scroll
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".product-card", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
        y: 40,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Horizontal scroll with arrows (one card at a time)
  const scrollByAmount = (direction: "left" | "right") => {
    const slider = sliderRef.current;
    if (!slider) return;

    const firstChild = slider.firstElementChild as HTMLElement | null;
    const cardWidth = firstChild?.offsetWidth ?? slider.clientWidth / 3;
    const gap = 24; // ≈ gap-6
    const amount = cardWidth + gap;

    const newScrollLeft =
      direction === "right"
        ? slider.scrollLeft + amount
        : slider.scrollLeft - amount;

    slider.scrollTo({ left: newScrollLeft, behavior: "smooth" });
  };

  return (
    <section
      id="products"
      ref={sectionRef}
      className="
        relative py-20 overflow-hidden bg-gradient-to-b
        from-[#f5fcff]
        via-[#32b2fc]
        to-[#1b9ce4]/18
      "
    >
      {/* Soft glow blobs in background */}
      <div className="pointer-events-none absolute inset-0 opacity-80">
        <div className="absolute -top-28 -left-24 h-72 w-72 rounded-full bg-white/60 blur-3xl" />
        <div className="absolute top-6 -right-28 h-80 w-80 rounded-full bg-[#1b9ce4]/40 blur-3xl" />
        <div className="absolute bottom-[-80px] left-1/3 h-72 w-72 rounded-full bg-[#11153f]/18 blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Premium Products
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            Discover our complete range of premium tissue and hygiene products,
            designed for comfort, strength, and reliability.
          </p>
        </div>

        {/* Slider wrapper with fixed max width so 3 cards show fully */}
        <div className="relative max-w-7xl mx-auto">
          {/* Desktop / tablet arrows – placed outside card row */}
          <button
            type="button"
            onClick={() => scrollByAmount("left")}
            className="
              hidden md:flex items-center justify-center
              absolute -left-11 top-1/2 -translate-y-1/2
              h-11 w-11 rounded-full bg-card
              hover:bg-muted transition
              z-20
            "
          >
            <ChevronLeft className="h-5 w-5 text-foreground" />
          </button>

          <button
            type="button"
            onClick={() => scrollByAmount("right")}
            className="
              hidden md:flex items-center justify-center
              absolute -right-11 top-1/2 -translate-y-1/2
              h-11 w-11 rounded-full bg-card
              hover:bg-muted transition
              z-20
            "
          >
            <ChevronRight className="h-5 w-5 text-foreground" />
          </button>

          {/* Mobile arrows – bottom center */}
          <div className="flex md:hidden justify-center gap-4 mb-4">
            <button
              type="button"
              onClick={() => scrollByAmount("left")}
              className="flex items-center justify-center h-9 w-9 rounded-full bg-card hover:bg-muted transition"
            >
              <ChevronLeft className="h-4 w-4 text-foreground" />
            </button>
            <button
              type="button"
              onClick={() => scrollByAmount("right")}
              className="flex items-center justify-center h-9 w-9 rounded-full bg-card hover:bg-muted transition"
            >
              <ChevronRight className="h-4 w-4 text-foreground" />
            </button>
          </div>

          {/* Horizontal grid slider – shows up to 3 full cards on desktop */}
          <div
            ref={sliderRef}
            className="
              grid grid-flow-col
              auto-cols-[minmax(320px,1fr)]
              md:auto-cols-[minmax(320px,1fr)]
              lg:auto-cols-[minmax(370px,1fr)]
              gap-12 sm:gap-6
              overflow-x-auto overflow-y-visible scroll-smooth
              [scrollbar-width:none] [&::-webkit-scrollbar]:hidden
            "
          >
            {products.map((product) => (
              <div key={product.id} className="h-full">
                <ProductCard
                  product={product}
                  onAddToEnquiry={onAddToEnquiry}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

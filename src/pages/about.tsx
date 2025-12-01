"use client";

import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  ShieldCheck,
  Sparkles,
  Leaf,
  Quote,
} from "lucide-react";
import heroImage from "/images/dnk.jpg";

const AboutPage = () => {
  // Simple local cart state just to satisfy Navigation props
  const [cartItems] = useState<any[]>([]);
  const [cartOpen, setCartOpen] = useState(false); // if you have a real cart drawer, hook into this

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* NAVBAR */}
      <header className="bg-background z-40">
        <Navigation
          onCartOpen={() => setCartOpen(true)}
          cartItemCount={cartItems.length}
        />
      </header>

      <main className="flex-1">
        {/* HERO + BREADCRUMB */}
        <section className="relative w-full h-[260px] sm:h-[320px] md:h-[380px] overflow-hidden mt-[65px]">
          {/* Background image */}
          <div className="absolute inset-0">
            <div
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${heroImage})` }}
            />
            {/* Light overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/35 to-black/65" />
          </div>

          {/* Content */}
          <div className="relative h-full max-w-5xl mx-auto px-4 flex flex-col justify-end pb-10">
            {/* Breadcrumb */}
            <p className="text-xs sm:text-sm text-white/80 mb-2">
              <span className="cursor-pointer hover:text-[#FFD6E8] transition-colors">
                Home
              </span>
              <span className="mx-2">/</span>
              <span className="font-medium">About</span>
            </p>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              About DAB&apos;N&apos;KLEAN
            </h1>
            <p className="mt-2 text-sm sm:text-base text-white/80 max-w-xl">
              Softness, hygiene, and trust — delivered in every sheet. Get to
              know the story and standards behind DAB&apos;N&apos;KLEAN.
            </p>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section className="py-16 md:py-20 bg-background">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="mb-10 text-center">
              <p className="text-xs uppercase tracking-[0.25em] text-primary mb-3">
                Who We Are
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Everyday Hygiene, Elevated
              </h2>
              <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
                DAB&apos;N&apos;KLEAN was created with a simple promise: make
                tissues and hygiene products that people actually love using –
                soft on the skin, strong in performance, and trustworthy for
                families, businesses, and HoReCa partners.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 items-start">
              <div className="space-y-4 text-sm md:text-base text-muted-foreground">
                <p>
                  From facial tissues and toilet rolls to kitchen towels and
                  food-grade papers, each DAB&apos;N&apos;KLEAN product is
                  designed to handle real-life messes while feeling luxurious in
                  everyday use.
                </p>
                <p>
                  We work closely with quality-certified manufacturers, follow
                  strict hygiene protocols, and keep your comfort at the heart
                  of every product decision.
                </p>
                <p>
                  Whether it&apos;s a quick dab, a clean wipe, or a full
                  kitchen clean-up — DAB&apos;N&apos;KLEAN is there in every
                  moment that needs care.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-primary/10 bg-primary/5 px-5 py-6">
                  <p className="text-3xl font-bold text-primary mb-1">10K+</p>
                  <p className="text-sm font-semibold text-foreground">
                    Happy Households
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Families who trust DAB&apos;N&apos;KLEAN for everyday
                    hygiene and comfort.
                  </p>
                </div>

                <div className="rounded-2xl border border-primary/10 bg-primary/5 px-5 py-6">
                  <p className="text-3xl font-bold text-primary mb-1">500+</p>
                  <p className="text-sm font-semibold text-foreground">
                    HoReCa Partners
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Restaurants, cafés and hospitality brands using our
                    products every day.
                  </p>
                </div>

                <div className="rounded-2xl border border-primary/10 bg-primary/5 px-5 py-6 sm:col-span-2">
                  <p className="text-lg font-semibold text-foreground mb-1">
                    Designed for Everyday Life
                  </p>
                  <p className="text-xs text-muted-foreground">
                    From home counters to commercial kitchens, our range is
                    crafted to fit seamlessly into your routines, not disrupt
                    them.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* MISSION & VISION */}
        <section className="py-16 md:py-20 bg-accent/40">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="mb-10 text-center">
              <p className="text-xs uppercase tracking-[0.25em] text-primary mb-3">
                Mission &amp; Vision
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                What Drives DAB&apos;N&apos;KLEAN
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-3xl bg-background shadow-sm p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-3">
                  Our Mission
                </h3>
                <p className="text-sm md:text-base text-muted-foreground">
                  To make premium hygiene products accessible for every home and
                  business — combining softness, strength, and safety in every
                  sheet while maintaining ethical, responsible manufacturing.
                </p>
              </div>

              <div className="rounded-3xl bg-background shadow-sm p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-3">
                  Our Vision
                </h3>
                <p className="text-sm md:text-base text-muted-foreground">
                  To become the most trusted tissue and hygiene brand in every
                  pantry, washroom, and service counter — known for clean
                  design, clean ingredients, and cleaner experiences.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* QUALITY & TRUST BADGES */}
        <section className="py-16 md:py-20 bg-background">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="mb-10 text-center">
              <p className="text-xs uppercase tracking-[0.25em] text-primary mb-3">
                Quality &amp; Trust
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Why People Choose DAB&apos;N&apos;KLEAN
              </h2>
              <p className="text-sm md:text-base text-muted-foreground max-w-3xl mx-auto">
                We don&apos;t treat tissues as disposable products — we treat
                them as daily essentials that touch your skin, your food, and
                your family.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-2xl border border-primary/10 bg-[#FFF2F3] px-5 py-6 text-center">
                <ShieldCheck className="h-9 w-9 mx-auto text-primary mb-3" />
                <h3 className="text-sm md:text-base font-semibold text-foreground mb-2">
                  Certified Quality
                </h3>
                <p className="text-xs md:text-sm text-muted-foreground">
                  ISO-aligned processes and thorough QC checks on every batch.
                </p>
              </div>

              <div className="rounded-2xl border border-primary/10 bg-[#FFF2F3] px-5 py-6 text-center">
                <Sparkles className="h-9 w-9 mx-auto text-primary mb-3" />
                <h3 className="text-sm md:text-base font-semibold text-foreground mb-2">
                  Soft, Strong &amp; Safe
                </h3>
                <p className="text-xs md:text-sm text-muted-foreground">
                  Dermatologically considered, highly absorbent, and gentle on
                  skin.
                </p>
              </div>

              <div className="rounded-2xl border border-primary/10 bg-[#FFF2F3] px-5 py-6 text-center">
                <Leaf className="h-9 w-9 mx-auto text-primary mb-3" />
                <h3 className="text-sm md:text-base font-semibold text-foreground mb-2">
                  Eco-Conscious Approach
                </h3>
                <p className="text-xs md:text-sm text-muted-foreground">
                  Focus on responsible sourcing and reduced packaging where
                  possible.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="py-16 md:py-20 bg-accent/30">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="mb-10 text-center">
              <p className="text-xs uppercase tracking-[0.25em] text-primary mb-3">
                Testimonials
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                Loved by Homes &amp; Businesses
              </h2>
              <p className="text-sm md:text-base text-muted-foreground max-w-3xl mx-auto">
                Here&apos;s what our customers say about bringing
                DAB&apos;N&apos;KLEAN into their kitchens, washrooms, and
                service counters.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-2xl bg-background shadow-sm p-6 flex flex-col h-full">
                <Quote className="h-6 w-6 text-primary mb-3" />
                <p className="text-sm text-muted-foreground flex-1">
                  &quot;The kitchen towels are insanely absorbent. One sheet
                  does what three used to do.&quot;
                </p>
                <div className="mt-4">
                  <p className="text-sm font-semibold text-foreground">
                    Aditi, Home Chef
                  </p>
                  <p className="text-xs text-muted-foreground">Bangalore</p>
                </div>
              </div>

              <div className="rounded-2xl bg-background shadow-sm p-6 flex flex-col h-full">
                <Quote className="h-6 w-6 text-primary mb-3" />
                <p className="text-sm text-muted-foreground flex-1">
                  &quot;For our café, consistency matters. DAB&apos;N&apos;KLEAN
                  napkins and rolls are always on point.&quot;
                </p>
                <div className="mt-4">
                  <p className="text-sm font-semibold text-foreground">
                    Rahul, Café Owner
                  </p>
                  <p className="text-xs text-muted-foreground">Hyderabad</p>
                </div>
              </div>

              <div className="rounded-2xl bg-background shadow-sm p-6 flex flex-col h-full">
                <Quote className="h-6 w-6 text-primary mb-3" />
                <p className="text-sm text-muted-foreground flex-1">
                  &quot;Soft enough for kids, strong enough for everyday mess.
                  Our go-to tissue brand now.&quot;
                </p>
                <div className="mt-4">
                  <p className="text-sm font-semibold text-foreground">
                    Meera &amp; Family
                  </p>
                  <p className="text-xs text-muted-foreground">Chennai</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="py-14 md:py-16 bg-[#DA2576]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-white/80 mb-2">
                  Partner With DAB&apos;N&apos;KLEAN
                </p>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  Ready to stock premium hygiene products?
                </h2>
                <p className="text-sm md:text-base text-white/85 max-w-2xl">
                  Talk to us about custom packs, regular supply, or HoReCa bulk
                  requirements. We&apos;ll help you choose the right mix for
                  your needs.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  size="lg"
                  className="bg-white text-[#DA2576] hover:bg-[#FFF2F3]"
                  onClick={() => {
                    const el = document.getElementById("contact");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Contact Sales
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10"
                  onClick={() => {
                    const el = document.getElementById("products");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Explore Products
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <Footer />
    </div>
  );
};

export default AboutPage;

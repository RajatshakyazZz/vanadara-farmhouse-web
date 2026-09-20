import React from "react";
import Image from "next/image";
import { Mountain, Sparkles, Flame, UtensilsCrossed, BedDouble, Users } from "lucide-react";

export const ExperienceGridSection: React.FC = () => {
  const experiences = [
    {
      num: "01",
      title: "Mountain Views",
      description: "Wake up surrounded by rolling hills and open skies.",
      icon: Mountain,
      image: "/images/sunset.jpg",
      span: "lg:col-span-7",
    },
    {
      num: "02",
      title: "Yoga & Stillness",
      description: "Begin the day with calm, fresh air and mindful moments.",
      icon: Sparkles,
      image: "/images/yoga.jpg",
      span: "lg:col-span-5",
    },
    {
      num: "03",
      title: "Campfire Evenings",
      description: "Music, conversations and stories beneath the stars.",
      icon: Flame,
      image: "/images/campfire.jpg",
      span: "lg:col-span-4",
    },
    {
      num: "04",
      title: "Local Food",
      description: "Home-cooked desi delicacies made with fresh ingredients.",
      icon: UtensilsCrossed,
      image: "/images/food.jpg",
      span: "lg:col-span-4",
    },
    {
      num: "05",
      title: "Modern Comfort",
      description: "Clean bathrooms, airy rooms and thoughtful interiors.",
      icon: BedDouble,
      image: "/images/stay.jpg",
      span: "lg:col-span-4",
    },
    {
      num: "06",
      title: "Time Together",
      description: "Create memorable moments with family and friends.",
      icon: Users,
      image: "/images/hero.jpg",
      span: "lg:col-span-12",
    },
  ];

  return (
    <section id="experience" className="py-24 sm:py-32 bg-[#FAF8F5] relative scroll-mt-20 lg:scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-16 space-y-3">
          <span className="text-xs uppercase tracking-[0.3em] font-semibold text-[#BD5B3E] block">
            CURATED MOMENTS
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#121E17] tracking-tight">
            Find Your Kind of Escape
          </h2>
          <p className="text-sm sm:text-base text-[#4D3C32] font-light leading-relaxed">
            Whether you seek silent introspection, sunrise meditations, or joyous family laughter over dinner, Varanadah holds space for what you need.
          </p>
        </div>

        {/* Asymmetric Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 sm:gap-8">
          {experiences.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.num}
                className={`${card.span} group relative rounded-2xl overflow-hidden border border-[#E2D7C5] bg-white shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col justify-end min-h-[300px] sm:min-h-[360px]`}
              >
                {/* Image Background */}
                <div className="absolute inset-0 z-0">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover img-zoom"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121E17]/95 via-[#121E17]/50 to-transparent transition-opacity duration-300 group-hover:from-[#0B130E]" />
                </div>

                {/* Content Overlay */}
                <div className="relative z-10 p-6 sm:p-8 text-white flex flex-col justify-between h-full pointer-events-none">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-[#D8BA74] tracking-widest px-2.5 py-1 rounded bg-black/40 backdrop-blur-sm border border-white/10">
                      {card.num}
                    </span>
                    <div className="p-2 rounded-full bg-white/10 backdrop-blur-sm text-[#D8BA74] group-hover:bg-[#BD5B3E] group-hover:text-white transition-colors duration-300">
                      <Icon size={18} />
                    </div>
                  </div>

                  <div className="space-y-2 mt-auto pt-16">
                    <h3 className="font-serif text-2xl sm:text-3xl text-white font-light tracking-wide group-hover:text-[#D8BA74] transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#EFE8DC]/85 font-light leading-relaxed max-w-lg">
                      {card.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

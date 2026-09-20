import React from "react";

interface LogoProps {
  variant?: "light" | "dark" | "gold";
  size?: "sm" | "md" | "lg";
  className?: string;
  showIcon?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  variant = "light",
  size = "md",
  className = "",
  showIcon = true,
}) => {
  const isLight = variant === "light";
  const isGold = variant === "gold";

  const textColor = isLight
    ? "text-[#FCFAF7]"
    : isGold
    ? "text-[#D8BA74]"
    : "text-[#1A2B21]";

  const subColor = isLight
    ? "text-[#EFE8DC]/80"
    : isGold
    ? "text-[#C39F50]"
    : "text-[#5C674E]";

  const iconStroke = isLight
    ? "#FCFAF7"
    : isGold
    ? "#D8BA74"
    : "#1A2B21";

  const sizeClasses = {
    sm: {
      title: "text-lg tracking-[0.25em]",
      sub: "text-[8px] tracking-[0.35em] mt-0.5",
      icon: 24,
    },
    md: {
      title: "text-xl sm:text-2xl tracking-[0.28em]",
      sub: "text-[9px] sm:text-[10px] tracking-[0.4em] mt-1",
      icon: 32,
    },
    lg: {
      title: "text-3xl sm:text-4xl tracking-[0.32em]",
      sub: "text-xs sm:text-sm tracking-[0.45em] mt-1.5",
      icon: 42,
    },
  }[size];

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {showIcon && (
        <svg
          width={sizeClasses.icon}
          height={sizeClasses.icon}
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="shrink-0 transition-transform duration-500 hover:scale-105"
        >
          {/* Subtle Outer Diamond / Arch Frame */}
          <path
            d="M24 3L44 24L24 45L4 24L24 3Z"
            stroke={iconStroke}
            strokeWidth="1.2"
            strokeOpacity="0.4"
          />
          {/* Stylized L-shaped Roof & Verandah Gable */}
          <path
            d="M12 28L24 16L36 28"
            stroke={iconStroke}
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Open Verandah Porch Posts */}
          <line
            x1="18"
            y1="28"
            x2="18"
            y2="36"
            stroke={iconStroke}
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <line
            x1="24"
            y1="24"
            x2="24"
            y2="36"
            stroke={iconStroke}
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <line
            x1="30"
            y1="28"
            x2="30"
            y2="36"
            stroke={iconStroke}
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          {/* Ground / Stone Plinth */}
          <line
            x1="14"
            y1="36"
            x2="34"
            y2="36"
            stroke={iconStroke}
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          {/* Morning Sunrise Arc */}
          <circle
            cx="24"
            cy="11"
            r="2.5"
            fill={iconStroke}
            fillOpacity="0.85"
          />
        </svg>
      )}

      <div className="flex flex-col">
        <span
          className={`font-serif uppercase font-semibold leading-none ${sizeClasses.title} ${textColor}`}
        >
          VARANADAH
        </span>
        <span
          className={`uppercase font-sans font-medium leading-none ${sizeClasses.sub} ${subColor}`}
        >
          THE FARMSTAY
        </span>
      </div>
    </div>
  );
};

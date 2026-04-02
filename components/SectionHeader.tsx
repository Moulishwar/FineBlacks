interface SectionHeaderProps {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export default function SectionHeader({
  label,
  title,
  description,
  align = "left",
}: SectionHeaderProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "";

  return (
    <div className={`max-w-3xl mb-12 lg:mb-16 ${alignClass}`}>
      {label && (
        <span className="inline-block text-sm text-gray-500 mb-3 tracking-wide">
          [ {label} ]
        </span>
      )}
      <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-carbon">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base md:text-lg text-gray-500 leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}

import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
  type?: "button" | "submit";
  className?: string;
  onClick?: () => void;
}

export default function Button({
  children,
  href,
  variant = "primary",
  type = "button",
  className = "",
  onClick,
}: ButtonProps) {
  const base = "inline-flex items-center justify-center gap-2 rounded-button transition-colors duration-300 px-8 py-3 text-sm font-medium";

  const variants = {
    primary: "bg-carbon text-white hover:bg-eco",
    secondary: "border border-gray-200 text-carbon hover:bg-gray-50",
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}

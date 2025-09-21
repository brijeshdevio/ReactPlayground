interface ButtonProps {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  className?: string;
  onClick?: () => void;
}

export default function Button({
  children,
  type = "button",
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button type={type} className={`btn ${className}`} {...props}>
      {children}
    </button>
  );
}

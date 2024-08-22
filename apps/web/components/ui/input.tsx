import * as React from "react";

import { cn } from "@/lib/cssClass";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  description?: string | React.ReactNode;
}

interface LabelWrapperProps {
  label?: string;
  description?: string | React.ReactNode;
  children: React.ReactNode;
  name?: string;
}

const LabelWrapper = ({
  label,
  children,
  description,
  name,
}: LabelWrapperProps) => {
  if (!(label || description)) return <>{children}</>;

  return (
    <div className="space-y-1">
      {label && (
        <label htmlFor={name} className="mb-1 text-subtle">
          {label}
        </label>
      )}
      {children}
      {description && <div className="text-xs">{description}</div>}
    </div>
  );
};

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, type, name, description, ...props }, ref) => {
    return (
      <LabelWrapper name={name} label={label} description={description}>
        <input
          type={type}
          name={name}
          id={name}
          className={cn(
            "placeholder:text-muted-foreground focus-visible:ring-ring flex h-9 w-full rounded-md border border-accent bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50",
            className,
          )}
          ref={ref}
          {...props}
        />
      </LabelWrapper>
    );
  },
);
Input.displayName = "Input";

export default Input;

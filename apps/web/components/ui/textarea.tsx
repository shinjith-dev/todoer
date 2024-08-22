import * as React from "react";

import { cn } from "@/lib/cssClass";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  description?: string | React.ReactNode;
  fullHeight?: boolean;
}

interface LabelWrapperProps {
  label?: string;
  description?: string | React.ReactNode;
  children: React.ReactNode;
  name?: string;
  fullHeight?: boolean;
}

const LabelWrapper = ({
  label,
  children,
  description,
  name,
  fullHeight = false,
}: LabelWrapperProps) => {
  if (!(label || description)) return <>{children}</>;

  return (
    <div
      className={cn("space-y-1", fullHeight && "flex h-full w-full flex-col")}
    >
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

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, fullHeight, name, description, ...props }, ref) => {
    return (
      <LabelWrapper
        name={name}
        label={label}
        description={description}
        fullHeight={fullHeight}
      >
        <textarea
          rows={4}
          name={name}
          id={name}
          className={cn(
            "placeholder:text-muted-foreground focus-visible:ring-ring flex w-full rounded-md border border-accent bg-transparent px-3 py-1.5 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50",
            fullHeight && "grow",
            className,
          )}
          ref={ref}
          {...props}
        />
      </LabelWrapper>
    );
  },
);
Textarea.displayName = "Textarea";

export { Textarea };

import { ElementType, HTMLAttributes, ReactNode } from "react";

export interface FormLabelProps extends HTMLAttributes<HTMLLabelElement> {
  children: ReactNode;
  icon?: ElementType;
}

export const FormLabel = ({
  children,
  icon: Icon,
  ...props
}: FormLabelProps) => {
  return (
    <div className="flex gap-2 relative w-full items-center">
      <label
        {...props}
        className="absolute z-50 pl-2 uppercase text-sm font-semibold"
      >
        {Icon && <Icon className="text-orange-500 text-base" />}
      </label>
      {children}
    </div>
  );
};

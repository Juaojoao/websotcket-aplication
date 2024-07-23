import { ReactNode } from "react";

export interface FormBodyProps {
  children: ReactNode;
  handleSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
}

export const FormBody = ({ children, handleSubmit }: FormBodyProps) => {
  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center justify-center flex-col gap-3 w-full"
    >
      {children}
    </form>
  );
};

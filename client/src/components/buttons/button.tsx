export interface buttonProps extends React.HTMLProps<HTMLButtonElement> {
  value: string;
  type: "submit" | "reset" | "button";
}

export const ButtonCustom = ({ value, type, ...props }: buttonProps) => {
  return (
    <button
      {...props}
      className="w-full border-transparent bg-white rounded-md drop-shadow-md p-2 uppercase font-semibold"
      type={type}
    >
      {value}
    </button>
  );
};

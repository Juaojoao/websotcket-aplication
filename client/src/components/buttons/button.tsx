interface buttonProps extends React.HTMLProps<HTMLButtonElement> {
  value: string;
  type: "submit" | "reset" | "button";
}

export const ButtonCustom: React.FC<buttonProps> = ({
  value,
  type,
  ...props
}) => {
  return (
    <button
      {...props}
      className="w-full border-transparent bg-white rounded-md drop-shadow-md p-2"
      type={type}
    >
      {value}
    </button>
  );
};

interface inputProps extends React.HTMLProps<HTMLInputElement> {}

export const InputCustom: React.FC<inputProps> = ({ ...props }) => {
  return (
    <input
      {...props}
      className="bg-white rounded-md drop-shadow-md w-full text-orange-700 py-3 px-2 leading-tight focus:outline-none"
    ></input>
  );
};

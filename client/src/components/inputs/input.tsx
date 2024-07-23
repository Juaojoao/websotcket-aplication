export interface inputProps extends React.HTMLProps<HTMLInputElement> {}

export const InputCustom = ({ ...props }: inputProps) => {
  return (
    <input
      {...props}
      className="bg-white rounded-md drop-shadow-md w-full text-orange-700 py-3 px-2 leading-tight focus:outline-none text-sm pl-7"
    ></input>
  );
};

export interface FormContainerProps {
  children: JSX.Element;
  title: string;
}

export const FormContainer = ({ children, title }: FormContainerProps) => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="w-96 rounded-md drop-shadow-lg h-96 gap-2 bg-orange-400 p-4 flex justify-center items-center flex-col">
        <h1 className="mb-10 text-3xl font-extrabold">{title}</h1>
        {children}
      </div>
    </div>
  );
};

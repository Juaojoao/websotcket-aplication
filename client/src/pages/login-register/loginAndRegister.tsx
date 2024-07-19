import { InputCustom } from "../../components/inputs/input";
import { ButtonCustom } from "../../components/buttons/button";
import { ChangeEvent, useState } from "react";
import { login } from "../../api/request/auth";

export const LoginPage = () => {
  const [inputFields, setInputFields] = useState({
    email: "",
    password: "",
  });

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputFields({ ...inputFields, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await login(inputFields.email, inputFields.password);
  };

  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="w-96 rounded-md drop-shadow-lg h-96 gap-2 bg-orange-400 p-4 flex justify-center items-center flex-col">
        <h1 className="mb-10 text-3xl font-extrabold">ENTRAR</h1>
        <form
          onSubmit={handleSubmit}
          className="flex items-center justify-center flex-col gap-3 w-full"
        >
          <InputCustom
            onChange={handleChangeInput}
            required
            type="email"
            name="email"
            id="email"
            placeholder="Email@email.com"
          />
          <InputCustom
            onChange={handleChangeInput}
            required
            type="password"
            name="password"
            id="password"
            placeholder="Senha"
          />
          <ButtonCustom value="Entrar" type="submit" />
        </form>
      </div>
    </div>
  );
};

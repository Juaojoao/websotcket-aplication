import { ChangeEvent, useState } from "react";
import { Form } from "../../components/form/form";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { createUser, userRequest } from "../../api/request/userRequest";
import { FaUserCircle } from "react-icons/fa";
import { z } from "zod";
import { useAlert } from "../../context/alertContext";

const registerSchema = z
  .object({
    username: z
      .string()
      .min(5, "Tamanho mínimo 5 caracters")
      .max(20, "Tamanho máximo 20 caracters"),
    email: z.string().email("Email inválido"),
    password: z.string().min(6, "Tamanho mínimo 6 caracters"),
    repeatPassword: z.string().min(6, "Tamanho mínimo 6 caracters"),
  })
  .superRefine((data, ctx) => {
    if (data.password != data.repeatPassword) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Senhas não conferem",
        path: ["repeatPassword"],
      });
    }
  });

export const RegisterPage = () => {
  const alert = useAlert();
  const [inputFields, setInputFields] = useState({
    username: "",
    email: "",
    password: "",
    repeatPassword: "",
  });

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputFields({ ...inputFields, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const result = registerSchema.safeParse(inputFields);

    if (!result.success) {
      // Concatena todas as mensagens de erro em uma única string
      const errorMessage = result.error.errors
        .map((error) => error.message)
        .join(" ");

      // Exibe o alerta com a mensagem de erro
      alert.showAlert(errorMessage, "warning");
      return;
    }

    // Limpa os erros se a validação for bem-sucedida
    const response: userRequest = await createUser({
      username: inputFields.username,
      email: inputFields.email,
      password: inputFields.password,
    });

    if (response.success) {
      console.log(response.message);
    }
  };

  return (
    <Form.FormContainer title="REGISTRAR">
      <Form.FormBody handleSubmit={handleSubmit}>
        <Form.FormLabel icon={FaUserCircle}>
          <Form.InputCustom
            id="username"
            name="username"
            type="text"
            onChange={handleChangeInput}
            placeholder="Usuário"
            required
          />
        </Form.FormLabel>
        <Form.FormLabel icon={MdEmail}>
          <Form.InputCustom
            id="email"
            name="email"
            type="email"
            onChange={handleChangeInput}
            placeholder="Email@email.com"
            required
          />
        </Form.FormLabel>

        <Form.FormLabel icon={RiLockPasswordFill}>
          <Form.InputCustom
            id="senha"
            name="senha"
            type="password"
            onChange={handleChangeInput}
            placeholder="Senha"
            required
          />
        </Form.FormLabel>
        <Form.FormLabel icon={RiLockPasswordFill}>
          <Form.InputCustom
            id="repeatPassword"
            name="repeatPassword"
            type="password"
            onChange={handleChangeInput}
            placeholder="Repita a Senha"
            required
          />
        </Form.FormLabel>

        <Form.ButtonCustom type="submit" value="Entrar" />
      </Form.FormBody>
    </Form.FormContainer>
  );
};
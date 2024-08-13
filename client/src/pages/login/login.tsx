import { ChangeEvent, useState } from "react";
import { login, userRequest } from "../../api/request/userRequest";
import { useAuth } from "../../context/authContext";
import { Form } from "../../components/form/form";
import { RiLockPasswordFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { z } from "zod";
import { useAlert } from "../../context/alertContext";
import { useNavigate } from "react-router-dom";

const loginSchema = z.object({
  email: z.string().email("Email inválido"),
  password: z.string().min(6, "Tamanho mínimo 6 caracters"),
});

export const LoginPage = () => {
  const [inputFields, setInputFields] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const { setAuth } = useAuth();
  const alert = useAlert();

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputFields({ ...inputFields, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const result = loginSchema.safeParse(inputFields);

    if (!result.success) {
      const errorMessage = result.error.errors[0].message;
      alert.showAlert(errorMessage, "warning");
    }

    const response: userRequest = await login(
      inputFields.email,
      inputFields.password
    );

    if (!response.status) {
      console.log("false");
    }

    setAuth(response?.token);
    alert.showAlert(response.message, "success");
    setInputFields({ email: "", password: "" });

    navigate("/");
  };

  return (
    <Form.FormContainer title="ENTRAR">
      <Form.FormBody handleSubmit={handleSubmit}>
        <Form.FormLabel icon={MdEmail}>
          <Form.InputCustom
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            onChange={handleChangeInput}
            required
          />
        </Form.FormLabel>

        <Form.FormLabel icon={RiLockPasswordFill}>
          <Form.InputCustom
            id="password"
            name="password"
            type="password"
            placeholder="Senha"
            onChange={handleChangeInput}
            required
          />
        </Form.FormLabel>

        <Form.ButtonCustom type="submit" value="Entrar" />
      </Form.FormBody>
    </Form.FormContainer>
  );
};

import { ChangeEvent, useState } from "react";
import { login } from "../../api/request/userRequest";
import { useAuth } from "../../context/authContext";
import { Form } from "../../components/form/form";
import { RiLockPasswordFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";

export const LoginPage = () => {
  const [inputFields, setInputFields] = useState({
    email: "",
    password: "",
  });

  const { setAuth } = useAuth();

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputFields({ ...inputFields, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await login(inputFields.email, inputFields.password);
    if (response.status === 200) {
      setAuth(response.token);
    }
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

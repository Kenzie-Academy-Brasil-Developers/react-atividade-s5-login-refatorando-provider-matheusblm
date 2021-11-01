import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useAuth } from "../../Providers/Auth";
import { Box, TextField, Button } from "@material-ui/core";
import "./styles.css";
interface UserData {
  email: string;
  password: string;
}

const Login = () => {
  const formSchema = yup.object().shape({
    email: yup.string().required("Campo Obrigatorio").email("Email Invalido"),
    password: yup.string().required("Campo Obrigatorio"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserData>({ resolver: yupResolver(formSchema) });
  const { signIn } = useAuth();

  const handleSubmitForm = (data: UserData) => {
    signIn(data);
  };
  return (
    <Box display="flex" width={450} height={450} bgcolor="white">
      <Box display="flex" flexDirection="column" m="auto">
        <h3>Login</h3>
        <form onSubmit={handleSubmit(handleSubmitForm)}>
          <TextField
            id="outlined-basic"
            label="email"
            variant="outlined"
            {...register("email")}
            helperText={errors.email?.message}
          />
          <TextField
            id="outlined-basic"
            label="password"
            variant="outlined"
            type="password"
            {...register("password")}
            helperText={errors.password?.message}
          />
          <Button type="submit" variant="outlined">
            Entrar
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default Login;

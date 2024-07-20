import { createContext, ReactNode, useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { User } from "../models/userModel";
import { logout, setCredentials } from "../features/authSlice";
import { RootState } from "../redux/store";
import { JwtPayload, jwtDecode } from "jwt-decode"; // Import the jwtDecode function and JwtPayload type
import { useNavigate } from "react-router-dom";

interface AuthContextType {
  user: User | null;
  token: string | null;
  setAuth: (token: string) => void;
  logout: () => void;
}

interface AuthProviderProps {
  children: ReactNode;
}
export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const auth = useSelector((state: RootState) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const decodedToken = (token: string) => {
    return jwtDecode<JwtPayload>(token);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return;

    const user = decodedToken(token).user;
    if (user) {
      dispatch(setCredentials({ token, user }));
      navigate("/");
    }
  }, []);

  const setAuth = (token: string) => {
    const user = decodedToken(token).user;
    if (!user) return;

    dispatch(setCredentials({ token, user }));
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <AuthContext.Provider
      value={{
        user: auth.user,
        token: auth.token,
        setAuth,
        logout: handleLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
};

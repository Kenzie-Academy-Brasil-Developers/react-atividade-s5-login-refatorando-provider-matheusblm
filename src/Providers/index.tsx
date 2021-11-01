import { AuthProvider } from "./Auth";
import { ReactNode } from "react";
interface UserProvider {
  children: ReactNode;
}

const Providers = ({ children }: UserProvider) => {
  return <AuthProvider>{children}</AuthProvider>;
};

export default Providers;

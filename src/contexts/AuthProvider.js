import { createContext } from "react";
import useFirebase from "../hooks/useFirebase.js";
import useCart from "../hooks/useCart.js";
import useServices from "../hooks/useServices.js";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

  const AllContexts = useFirebase();
  const { services } = useServices();
  const { addToCart, selectedService, remove, setSelectedService } = useCart();

  const data = {
    AllContexts,
    services,
    addToCart,
    selectedService,
    remove,
    setSelectedService
  };

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export default AuthProvider;

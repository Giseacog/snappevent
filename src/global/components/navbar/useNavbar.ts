import { useEffect, useState } from "react";
import { supabase } from "config/supabase";
import { useNavigate } from "react-router-dom";
import Paths from "routes/paths";

export const useNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      // Bloquea el scroll
      document.body.style.overflow = "hidden";
    } else {
      // Habilita el scroll
      document.body.style.overflow = "unset";
    }

    // Limpieza al desmontar el componente (importante)
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const logOut = async () => {
    await supabase.auth.signOut();
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate(Paths.LOGIN);
  };

  return {
    isOpen,
    setIsOpen,
    logOut,
  };
};

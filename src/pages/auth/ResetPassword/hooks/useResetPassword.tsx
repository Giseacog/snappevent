import { useEffect, useState } from "react";
import { supabase } from "config/supabase";
import { TEXTS } from "global/texts";

export const useResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleReset = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (password !== confirm) {
      setError(TEXTS.auth.resetPassword.errors.passwordsDoNotMatch);
      return;
    }

    setLoading(true);

    const { error } = await supabase.auth.updateUser({
      password,
      data: {
        is_first_login: false,
      },
    });

    setLoading(false);

    if (error) {
      setError(
        error.status === 400
          ? TEXTS.auth.resetPassword.errors.invalidOrExpiredLink
          : TEXTS.auth.resetPassword.errors.updateError
      );
      return;
    }

    setSuccess(true);
  };

  useEffect(() => {
    const initSession = async () => {
      const code = new URLSearchParams(window.location.search).get(
        "access_token"
      );

      if (!code) return;

      const { error } = await supabase.auth.exchangeCodeForSession(code);

      if (error) {
        setError(TEXTS.auth.resetPassword.errors.invalidResetLink);
      }
    };

    initSession();
  }, []);

  return {
    password,
    setPassword,
    confirm,
    setConfirm,
    loading,
    error,
    success,
    setSuccess,
    handleReset,
  };
};

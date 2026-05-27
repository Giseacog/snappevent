import { Lock } from "lucide-react";
import { useResetPassword } from "./hooks/useResetPassword";
import { ResetPasswordForm } from "./components/ResetPasswordForm";
import { ResetSuccess } from "./components/ResetSuccess";
import { getTextsByState, PSSWORD_RESET_STATES } from "./contstans";
import { useEffect } from "react";
import { supabase } from "config/supabase";
import { AuthLayout } from "layouts/AuthLayout";
import { useHashTokenValidation } from "hooks/useHashTokenValidation";
import { ResetError } from "./components/ResetError";
import { ResetVerifying } from "./components/ResetVerifying";

export const ResetPassword = () => {
  const resetProps = useResetPassword();
  const { success } = resetProps;

  const tokenStatus = useHashTokenValidation();

  const setState = () => {
    if (tokenStatus === "verifying") return PSSWORD_RESET_STATES.VERIFYING;
    if (tokenStatus === "invalid") return PSSWORD_RESET_STATES.ERROR;
    if (success) return PSSWORD_RESET_STATES.SUCCESS;

    return PSSWORD_RESET_STATES.FORM;
  };
  const state = setState();

  const title = getTextsByState(state).title;
  const subtitle = getTextsByState(state).subtitle;

  const contentByState = {
    [PSSWORD_RESET_STATES.FORM]: <ResetPasswordForm {...resetProps} />,
    [PSSWORD_RESET_STATES.SUCCESS]: <ResetSuccess />,
    [PSSWORD_RESET_STATES.VERIFYING]: <ResetVerifying />,
    [PSSWORD_RESET_STATES.ERROR]: <ResetError />,
  };

  useEffect(() => {
    return () => {
      supabase.auth.signOut();
    };
  }, []);

  return (
    <AuthLayout>
      <div className="flex flex-col items-center mb-6">
        <div className="bg-primary-100 p-3 rounded-full mb-3">
          <Lock className="w-6 h-6 text-primary-600" />
        </div>

        {state !== PSSWORD_RESET_STATES.VERIFYING && (
          <>
            <h1 className="text-2xl font-semibold text-gray-900">{title}</h1>
            <p className="text-sm text-gray-500 mt-1 text-center">{subtitle}</p>
          </>
        )}
      </div>

      {contentByState[state]}
    </AuthLayout>
  );
};

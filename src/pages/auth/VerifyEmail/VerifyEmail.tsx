import { MailCheck } from "lucide-react";
import { Link } from "react-router-dom";
import Paths from "routes/paths";
import { AuthLayout } from "layouts/AuthLayout";
import { TEXTS } from "global/texts";

export const VerifyEmail = () => {
  return (
    <AuthLayout>
      <div className="bg-primary-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
        <MailCheck className="w-8 h-8 text-primary-600" />
      </div>

      <h2 className="text-2xl font-semibold text-primary-900 mb-2">
        {TEXTS.auth.verifyEmail.title}
      </h2>

      <p className="text-primary-600 text-sm leading-relaxed">
        {TEXTS.auth.verifyEmail.description}
      </p>

      <p className="text-xs text-gray-400 mt-4">
        {TEXTS.auth.verifyEmail.spamNotice}
      </p>

      <div className="mt-6">
        <Link
          to={Paths.LOGIN}
          className="text-sm text-primary-600 hover:underline"
        >
          {TEXTS.general.backToLogin}
        </Link>
      </div>
    </AuthLayout>
  );
};

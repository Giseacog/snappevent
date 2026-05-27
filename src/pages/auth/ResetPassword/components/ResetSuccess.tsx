import { Link } from "react-router-dom";
import Paths from "routes/paths";
import { TEXTS } from "global/texts";

export const ResetSuccess = () => {
  return (
    <div className="text-center">
      <p className="text-green-600 font-medium mb-4">
        {TEXTS.auth.resetPassword.success.message}
      </p>

      <Link
        to={Paths.LOGIN}
        className="text-primary-600 hover:underline text-sm"
      >
        {TEXTS.auth.resetPassword.success.backToLogin}
      </Link>
    </div>
  );
};

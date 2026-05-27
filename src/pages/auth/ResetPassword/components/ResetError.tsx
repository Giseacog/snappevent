import { Link } from "react-router-dom";
import Paths from "routes/paths";
import { TEXTS } from "global/texts";

export const ResetError = () => {
  return (
    <div className="text-center">
      <Link
        to={Paths.LOGIN}
        className="text-primary-600 hover:underline text-sm"
      >
        {TEXTS.auth.resetPassword.success.backToLogin}
      </Link>
    </div>
  );
};

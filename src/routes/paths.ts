class Paths {
  //auth
  public static readonly REGISTER = "/register";
  public static readonly VERIFY_EMAIL = "/verify-email";
  public static readonly EMAIL_VERIFIED = "/email-verified";
  public static readonly LOGIN = "/login";
  public static readonly FORGOT_PASSWORD = "/forgot-password";
  public static readonly CHECK_EMAIL_FOR_PASSWORD_RESET =
    "/check-email-for-password-reset";
  public static readonly RESET_PASSWORD = "/reset-password";

  public static readonly HOME = "/";

  public static readonly DEFAULT_AUTHENTICATED = this.HOME;
}

export default Paths;

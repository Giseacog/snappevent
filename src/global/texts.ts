export const TEXTS = {
  general: {
    cancel: "Cancel",
    ok: "OK",
    close: "Close",
    delete: "Delete",
    save: "Save",
    confirm: "Confirm",
    loading: "Setting things up...",
    backToLogin: "Back to login",
    somethingWentWrong: "Something went wrong",
    errorAddingItem: "Error adding item",
    thisItem: "this item",
  },

  navbar: {
    logo: {
      prefix: "Supa",
      highlight: "React",
    },
    menu: "Menú",
    closeSession: "Close Session",
    logOut: "Cerrar Sesión",
    menuItems: {
      home: "Inicio",
    },
  },

  auth: {
    register: {
      title: "Supareact",
      description:
        "Everything you need to kickstart your next React + Supabase project.",
      alreadyHaveAccount: "Already have an account?",
      signIn: "Sign in",
      form: {
        fullName: {
          label: "Full Name",
          placeholder: "e.g. John Doe",
        },
        email: {
          label: "Email Address",
          placeholder: "you@example.com",
        },
        submitButton: "Create account",
      },
    },

    login: {
      title: "Login",
      description:
        "Access your account and manage your projects with ease. Enter your credentials below to sign in and start building with Supareact.",
      noAccount: "You don't have an account?",
      signUp: "Sign up",
      form: {
        email: {
          label: "Email",
          placeholder: "your@email.com",
        },
        forgotPassword: "Forgot password?",
        submitButton: "Login",
      },
    },

    forgotPassword: {
      title: "Forgot Password?",
      description:
        "Enter your email address below and we'll send you a link to reset your password.",
      backToLogin: "Back to Login",
      form: {
        email: {
          label: "Email Address",
          placeholder: "your@email.com",
        },
        submitButton: "Send reset link",
      },
    },

    checkEmailForPasswordReset: {
      title: "Please check your email",
      description:
        "We have sent a password reset link to your email address. Click the link in the email to reset your password and regain access to your account.",
      spamNotice:
        "If you don't see the email in your inbox, please check your spam or junk folder. If you still can't find it, you can request another password reset link from the login page.",
    },

    verifyEmail: {
      title: "Please check your email",
      description:
        "We have sent a verification link to your email address. Click the link in the email to verify your account and start using Supareact.",
      spamNotice:
        "If you don't see the email in your inbox, please check your spam or junk folder. If you still can't find it, you can request another link from the register page.",
    },

    emailVerified: {
      error: {
        title: "Invalid Link",
        description:
          "The verification link has expired or is invalid. Please request a new link from the login page.",
        goToLogin: "Back to Login",
      },

      verifying: {
        title: "Verifying...",
        subtitle:
          "Please wait while we verify your email address. This should only take a few moments.",
      },

      success: {
        title: "Email Verified",
        subtitle:
          "Your email has been successfully verified. You can now sign in and start using the app.",
        goToLogin: "Go to Login",
        closeTabNotice: "You can safely close this tab if you prefer.",
      },
    },

    resetPassword: {
      form: {
        title: "Reset your password",
        subtitle: "Enter your new password below",
        newPasswordLabel: "New password",
        confirmPasswordLabel: "Confirm password",
        submitButton: "Update password",
      },
      success: {
        title: "Password updated",
        subtitle: "You can now log in with your new password.",
        message: "Your password has been reset successfully.",
        backToLogin: "Go back to login",
      },
      errors: {
        passwordsDoNotMatch: "Passwords do not match.",
        invalidOrExpiredLink: "This reset link is invalid or has expired.",
        updateError:
          "An error occurred while updating the password. Please try again.",
        invalidResetLink: "This reset link is invalid or expired.",
      },
      verifying: {
        title: "Verifying link",
        subtitle: "Please wait while we verify your reset link.",
      },
    },

    passwordInput: {
      defaultLabel: "Password",
    },
  },

  home: {},
} as const;

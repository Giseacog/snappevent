import { TEXTS } from "global/texts";

export const PSSWORD_RESET_STATES = {
  FORM: "FORM",
  SUCCESS: "SUCCESS",
  VERIFYING: "VERIFYING",
  ERROR: "ERROR",
} as const;

type StateType = keyof typeof PSSWORD_RESET_STATES;

export const getTextsByState = (state: StateType) => {
  const texts: Record<StateType, { title: string; subtitle: string }> = {
    [PSSWORD_RESET_STATES.FORM]: {
      title: TEXTS.auth.resetPassword.form.title,
      subtitle: TEXTS.auth.resetPassword.form.subtitle,
    },
    [PSSWORD_RESET_STATES.SUCCESS]: {
      title: TEXTS.auth.resetPassword.success.title,
      subtitle: TEXTS.auth.resetPassword.success.subtitle,
    },
    [PSSWORD_RESET_STATES.VERIFYING]: {
      title: TEXTS.auth.resetPassword.verifying.title,
      subtitle: TEXTS.auth.resetPassword.verifying.subtitle,
    },
    [PSSWORD_RESET_STATES.ERROR]: {
      title: TEXTS.auth.resetPassword.errors.invalidResetLink,
      subtitle: TEXTS.auth.resetPassword.errors.invalidOrExpiredLink,
    },
  };

  return texts[state];
};

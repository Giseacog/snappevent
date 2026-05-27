import { useEffect, useState } from "react";

export type TokenStatus = "verifying" | "valid" | "invalid";

export const useHashTokenValidation = (): TokenStatus => {
  const [status, setStatus] = useState<TokenStatus>("verifying");

  useEffect(() => {
    // 1. Extract params from hash
    const hash = window.location.hash.substring(1);
    const params = new URLSearchParams(hash);

    // 2. Get required data
    const accessToken = params.get("access_token");
    const error = params.get("error");
    const errorCode = params.get("error_code");

    // 3. Strict validation
    if (accessToken && !error && errorCode !== "otp_expired") {
      setTimeout(() => setStatus("valid"), 0);
    } else {
      setTimeout(() => setStatus("invalid"), 0);
    }
  }, []);

  return status;
};
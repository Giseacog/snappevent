import { createContext, useEffect, useState } from "react";
import { supabase } from "config/supabase";
import type { LocalUser } from "types/entities/User";
import { mapUserFromDB } from "api/mappers/user.mapper";

const AuthContext = createContext<{ user: LocalUser | null; loading: boolean }>(
  {
    user: null,
    loading: true,
  }
);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<LocalUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      const transformedUser = session?.user
        ? mapUserFromDB(session.user)
        : null;

      setUser(transformedUser);
      setLoading(false);
    };

    getSession();

    // Listen for auth state changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      const transformedUser = session?.user
        ? mapUserFromDB(session.user)
        : null;

      setUser(transformedUser);
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };

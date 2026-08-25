import { useAuth } from "hooks/useAuth";
import { MainLayout } from "layouts/MainLayout";

export const Home = () => {
  const { user } = useAuth();

  return <MainLayout>Hola {user?.name}</MainLayout>;
};

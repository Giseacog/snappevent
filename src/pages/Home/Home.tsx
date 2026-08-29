import { useEffect, useContext } from "react";
import { useBranches } from "api/hooks/branches";
import { useAuth } from "hooks/useAuth";
import { MainLayout } from "layouts/MainLayout";
import { Sidebar } from "./components/Sidebar";
import { useBusinessByAdmin } from "api/hooks/businesses";
import { ModalContext } from "context/ModalContext";
import { AddBusinessForm } from "./components/AddBusinessForm";

export const Home = () => {
  const { user } = useAuth();
  const { business, isLoading: isLoadingBusiness } = useBusinessByAdmin(
    user?.id || "",
  );
  const { branches, isLoading: isLoadingBranches, error } = useBranches();

  const { openModal } = useContext(ModalContext);

  useEffect(() => {
    if (!isLoadingBusiness && !business) {
      openModal(<AddBusinessForm />);
    }
  }, [business, isLoadingBusiness, openModal]);

  const hasError = !!error || !business;

  return (
    <MainLayout>
      <div className="flex h-full bg-gray-50">
        <Sidebar
          branches={branches || []}
          isLoading={isLoadingBranches}
          hasError={hasError}
        />

        <main className="flex-1 p-8">
          <header className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">
              Hola, {user?.name || "Administrador"} 👋
            </h1>
            <p className="text-gray-600 mt-2">
              Selecciona una sucursal en el panel lateral para ver sus
              reservaciones o agrega una nueva.
            </p>
          </header>

          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm min-h-[400px] flex items-center justify-center">
            <p className="text-gray-400">Contenido del dashboard principal</p>
          </div>
        </main>
      </div>
    </MainLayout>
  );
};

import { useBranches } from "api/hooks/branches";
import { useAuth } from "hooks/useAuth";
import { MainLayout } from "layouts/MainLayout";
import { Sidebar } from "./components/Sidebar";

export const Home = () => {
  const { user } = useAuth();
  // Asumo que useBranches podría devolver también estados como isLoading o isError
  const { branches, isLoading } = useBranches();

  return (
    <MainLayout>
      <div className="flex h-full bg-gray-50">
        <Sidebar branches={branches} isLoading={isLoading} />

        {/* --- CONTENIDO PRINCIPAL --- */}
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

          {/* Aquí puedes renderizar componentes dinámicos dependiendo de la sucursal seleccionada */}
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm min-h-[400px] flex items-center justify-center">
            <p className="text-gray-400">Contenido del dashboard principal</p>
          </div>
        </main>
      </div>
    </MainLayout>
  );
};

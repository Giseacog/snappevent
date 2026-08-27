import type { Branch } from "api/mappers/branches";
import { Button } from "global/components/forms/Button";
import { SidebarLoading } from "./SidebarLoading";
import { BranchesList } from "./BranchesList";
import { SidebarEmpty } from "./SidebarEmpty";
import { useContext } from "react";
import { ModalContext } from "context/ModalContext";
import { AddBranchForm } from "./AddBranchForm";
import { SidebarError } from "./SidebarError";

interface SidebarProps {
  branches: Branch[];
  isLoading: boolean;
  hasError?: boolean;
}

export const Sidebar = ({ branches, isLoading, hasError }: SidebarProps) => {
  const { openModal } = useContext(ModalContext);

  const renderContent = () => {
    if (isLoading) return <SidebarLoading />;
    if (hasError) return <SidebarError />;
    if (!branches?.length) return <SidebarEmpty />;

    return <BranchesList branches={branches} />;
  };

  return (
    <aside className="w-72 bg-white border-r border-gray-200 p-6 flex flex-col shadow-sm">
      <h2 className="text-xl font-bold text-gray-800 mb-6">Mis Sucursales</h2>

      <div className="flex-1 overflow-y-auto">{renderContent()}</div>

      <div className="pt-4 mt-4 border-t border-gray-200">
        <Button onClick={() => openModal(<AddBranchForm />)}>
          <span>+</span> Agregar Sucursal
        </Button>
      </div>
    </aside>
  );
};

import type { Branch } from "api/mappers/branches";
import { Button } from "global/components/forms/Button";
import { SidebarLoading } from "./SidebarLoading";
import { BranchesList } from "./BranchesList";
import { SidebarEmpty } from "./SidebarEmpty";
import { useContext } from "react";
import { ModalContext } from "context/ModalContext";
import { AddBranchForm } from "./AddBranchForm";

interface SidebarProps {
  branches: Branch[];
  isLoading: boolean;
}

export const Sidebar = ({ branches, isLoading }: SidebarProps) => {
  const { openModal } = useContext(ModalContext);

  return (
    <aside className="w-72 bg-white border-r border-gray-200 p-6 flex flex-col shadow-sm">
      <h2 className="text-xl font-bold text-gray-800 mb-6">Mis Sucursales</h2>

      <div className="flex-1 overflow-y-auto">
        {isLoading ? (
          <SidebarLoading />
        ) : branches?.length > 0 ? (
          <BranchesList branches={branches} />
        ) : (
          <SidebarEmpty />
        )}
      </div>

      <div className="pt-4 mt-4 border-t border-gray-200">
        <Button onClick={() => openModal(<AddBranchForm/>)}>
          <span>+</span> Agregar Sucursal
        </Button>
      </div>
    </aside>
  );
};

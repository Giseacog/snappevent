import { Ticket } from "lucide-react";
import { TEXTS } from "global/texts";
import { MainLayout } from "layouts/MainLayout";
import { AddItemForm } from "./components/AddItemForm";
import { ItemList } from "./components/ItemsList";

export const Home = () => {
  return (
    <MainLayout>
      <div className="flex items-center gap-3 mb-8">
        <div className="bg-secondary-500 p-2 rounded-lg">
          <Ticket className="text-white w-6 h-6" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-primary-900">
            {TEXTS.home.addItem.title}
          </h2>
          <p className="text-sm text-primary-500">
            {TEXTS.home.addItem.subtitle}
          </p>
        </div>
      </div>

      <AddItemForm />

      <br />

      <ItemList />
    </MainLayout>
  );
};

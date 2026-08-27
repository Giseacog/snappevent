import { Navbar } from "global/components/navbar/Navbar";
import { Modal } from "global/components/modals/Modal";

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <main className="max-h-dvh h-dvh flex flex-col">
      <Navbar />

      <div className="max-w-full w-full bg-white h-full">{children}</div>

      <Modal />
    </main>
  );
};

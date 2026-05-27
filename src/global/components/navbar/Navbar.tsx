import { LogoMenu } from "./components/LogoMenu";
import { DesktopMenu } from "./components/DesktopMenu";
import { MobileMenuButton } from "./components/MobileMenuButton";
import { MobileSidebar } from "./components/MobileSidebar";
import { useNavbar } from "./useNavbar";

export const Navbar = () => {
  const { setIsOpen, isOpen } = useNavbar();

  return (
    <nav className="bg-white/70 backdrop-blur-md border-b border-primary-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <LogoMenu />

          <DesktopMenu />

          <MobileMenuButton setIsOpen={setIsOpen} />
        </div>
      </div>

      <MobileSidebar isOpen={isOpen} setIsOpen={setIsOpen} />
    </nav>
  );
};

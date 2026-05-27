import { ModalProvider } from "./context/ModalContext";
import { RootRouter } from "./routes/RootRouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthProvider } from "./context/AuthContext";

import "./App.css";

function App() {
  const queryClient = new QueryClient();

  return (
    <AuthProvider>
      <ModalProvider>
        <QueryClientProvider client={queryClient}>
          <RootRouter />
        </QueryClientProvider>
      </ModalProvider>
    </AuthProvider>
  );
}

export default App;

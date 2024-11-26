import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import Router from "./Router";
import UserProvider from "./Context/userContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import AuthProvider from "./Context/AuthContext";

const queryClient = new QueryClient({});
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider>
      <UserProvider>
        <QueryClientProvider client={queryClient}>
          <Toaster position="bottom-center" reverseOrder={false} />
          <RouterProvider router={Router} />
        </QueryClientProvider>
      </UserProvider>
    </AuthProvider>
  </StrictMode>
);

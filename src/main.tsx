import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import Router from "./Router";
import UserProfider from "./Context/userContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";

const queryClient = new QueryClient({});
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <UserProfider>
      <QueryClientProvider client={queryClient}>
        <Toaster position="bottom-center" reverseOrder={false} />
        <RouterProvider router={Router} />
      </QueryClientProvider>
    </UserProfider>
  </StrictMode>
);

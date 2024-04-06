import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Routes.jsx";
import AuthCont from "./Providers/AuthCont.jsx";

const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>

 <QueryClientProvider client={queryClient}>
 <AuthCont>
 <RouterProvider router={router}></RouterProvider>
 </AuthCont>
      
      
    </QueryClientProvider>
 
  </React.StrictMode>
);

"use client";

import { ThemeProvider } from "next-themes";
import { DataContextProvider } from "./context/DataContext";

export function Providers({ children }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <DataContextProvider>{children}</DataContextProvider>
    </ThemeProvider>
  );
}

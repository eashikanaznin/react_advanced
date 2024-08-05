import { Toaster } from "@/components/ui/toaster"
import { Outlet, ScrollRestoration } from "react-router-dom"
import { MyNav } from "./MyNav"

import { ThemeProvider } from "@/contexts/ThemeProvider"
import { AuthProvider } from "@/features/authentication"

export function RootLayout() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <div className="flex flex-col min-h-screen">
          <MyNav />
          <div className="container my-4 flex-grow grid grid-cols-1">
            <div>
              <Outlet />
            </div>
          </div>
        </div>
        <ScrollRestoration />
        <Toaster />
      </AuthProvider>
    </ThemeProvider>
  )
}

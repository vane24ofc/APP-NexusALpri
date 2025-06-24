import AppSidebar from "@/components/shared/AppSidebar";
import Header from "@/components/shared/Header";
import {
  Sidebar,
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar";
import { getUserRole } from "@/lib/helpers";

export default async function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const userRole = await getUserRole();

  return (
    <SidebarProvider>
      <div className="min-h-screen w-full">
        <Sidebar>
          <AppSidebar userRole={userRole} />
        </Sidebar>
        <SidebarInset className="flex flex-col @container/main">
          <Header />
          <main className="flex-1 overflow-y-auto bg-background p-4 md:p-6 lg:p-8">
            {children}
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}

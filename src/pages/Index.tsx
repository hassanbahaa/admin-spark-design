
import { useState } from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AdminSidebar } from "@/components/AdminSidebar";
import { DashboardContent } from "@/components/DashboardContent";
import { ProductsContent } from "@/components/ProductsContent";
import { CategoriesContent } from "@/components/CategoriesContent";
import { OrdersContent } from "@/components/OrdersContent";
import { AdminsContent } from "@/components/AdminsContent";
import { UsersContent } from "@/components/UsersContent";
import { OffersContent } from "@/components/OffersContent";
import { CouponsContent } from "@/components/CouponsContent";
import { AnalyticsContent } from "@/components/AnalyticsContent";
import { ThemeProvider } from "@/components/ThemeProvider";

const Index = () => {
  const [activeSection, setActiveSection] = useState("dashboard");
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const renderContent = () => {
    switch (activeSection) {
      case "dashboard":
        return <DashboardContent />;
      case "products":
        return <ProductsContent />;
      case "categories":
        return <CategoriesContent />;
      case "orders":
        return <OrdersContent />;
      case "admins":
        return <AdminsContent />;
      case "users":
        return <UsersContent />;
      case "offers":
        return <OffersContent />;
      case "coupons":
        return <CouponsContent />;
      case "analytics":
        return <AnalyticsContent />;
      default:
        return <DashboardContent />;
    }
  };

  return (
    <ThemeProvider>
      <SidebarProvider>
        <div className="min-h-screen flex w-full bg-background transition-colors duration-300">
          <AdminSidebar 
            activeSection={activeSection}
            setActiveSection={setActiveSection}
            collapsed={sidebarCollapsed}
            setCollapsed={setSidebarCollapsed}
          />
          <main className={`flex-1 transition-all duration-300 ${sidebarCollapsed ? 'ml-16' : 'ml-64'}`}>
            {renderContent()}
          </main>
        </div>
      </SidebarProvider>
    </ThemeProvider>
  );
};

export default Index;

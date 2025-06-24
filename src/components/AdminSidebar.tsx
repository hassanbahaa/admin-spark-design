
import { useState } from "react";
import { 
  ChevronLeft, 
  ChevronRight, 
  Settings, 
  LogOut,
  ChevronDown
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/ThemeProvider";

const menuItems = [
  { id: "dashboard", title: "Dashboard", icon: "🏠" },
  { id: "products", title: "Products", icon: "📦" },
  { id: "categories", title: "Categories", icon: "🏷️" },
  { id: "orders", title: "Orders", icon: "📋" },
  { id: "admins", title: "Admins", icon: "👥" },
  { id: "users", title: "Users", icon: "👤" },
  { id: "offers", title: "Offers", icon: "🎯" },
  { id: "coupons", title: "Coupons", icon: "🎟️" },
  { id: "analytics", title: "Sales / Analytics", icon: "📊" },
];

interface AdminSidebarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
}

export const AdminSidebar = ({ 
  activeSection, 
  setActiveSection, 
  collapsed, 
  setCollapsed 
}: AdminSidebarProps) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`fixed left-0 top-0 h-full bg-card border-r border-border transition-all duration-300 z-50 ${collapsed ? 'w-16' : 'w-64'}`}>
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="p-4 border-b border-border">
          <div className="flex items-center justify-between">
            {!collapsed && (
              <h2 className="text-xl font-bold text-foreground animate-fade-in">
                Admin Panel
              </h2>
            )}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setCollapsed(!collapsed)}
              className="hover:bg-accent"
            >
              {collapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        {/* Navigation Menu */}
        <div className="flex-1 overflow-y-auto py-4">
          <nav className="space-y-2 px-3">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left transition-all duration-200 hover:bg-accent group ${
                  activeSection === item.id 
                    ? 'bg-primary text-primary-foreground shadow-sm' 
                    : 'text-foreground hover:text-accent-foreground'
                }`}
              >
                <span className="text-lg flex-shrink-0">{item.icon}</span>
                {!collapsed && (
                  <span className="font-medium truncate animate-fade-in">
                    {item.title}
                  </span>
                )}
                {collapsed && (
                  <div className="absolute left-full ml-2 px-2 py-1 bg-popover text-popover-foreground text-sm rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50">
                    {item.title}
                  </div>
                )}
              </button>
            ))}
          </nav>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-border">
          <DropdownMenu open={dropdownOpen} onOpenChange={setDropdownOpen}>
            <DropdownMenuTrigger asChild>
              <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-accent transition-colors duration-200 text-left">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold flex-shrink-0">
                  A
                </div>
                {!collapsed && (
                  <>
                    <div className="flex-1 min-w-0 animate-fade-in">
                      <p className="font-medium text-foreground truncate">Admin User</p>
                      <p className="text-xs text-muted-foreground truncate">admin@company.com</p>
                    </div>
                    <ChevronDown className="w-4 h-4 text-muted-foreground" />
                  </>
                )}
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56 bg-popover border border-border">
              <DropdownMenuItem onClick={toggleTheme} className="cursor-pointer">
                <Settings className="w-4 h-4 mr-2" />
                Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="cursor-pointer text-destructive">
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
};

import { useState } from "react";
import { 
  Calendar, 
  Users, 
  Activity, 
  ClipboardList, 
  BarChart3, 
  Settings, 
  FileText,
  Stethoscope,
  Bed,
  UserCheck,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const menuItems = [
  { title: "Dashboard", url: "/", icon: BarChart3 },
  { title: "Agendamentos", url: "/agendamentos", icon: Calendar },
  { title: "Pacientes", url: "/pacientes", icon: Users },
  { title: "Médicos", url: "/medicos", icon: Stethoscope },
  { title: "Consultas", url: "/consultas", icon: Activity },
  { title: "Leitos", url: "/leitos", icon: Bed },
  { title: "Prontuários", url: "/prontuarios", icon: FileText },
  { title: "Check-in", url: "/checkin", icon: UserCheck },
];

const adminItems = [
  { title: "Relatórios", url: "/relatorios", icon: ClipboardList },
  { title: "Configurações", url: "/configuracoes", icon: Settings },
];

interface HospitalSidebarProps {
  collapsed: boolean;
  onToggle: () => void;
}

export function HospitalSidebar({ collapsed, onToggle }: HospitalSidebarProps) {
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path: string) => currentPath === path;

  const getNavCls = (path: string) =>
    cn(
      "w-full justify-start text-sm font-medium transition-colors rounded-lg px-3 py-2",
      isActive(path) 
        ? "bg-primary text-primary-foreground shadow-sm" 
        : "text-muted-foreground hover:bg-muted hover:text-foreground"
    );

  return (
    <div className={cn(
      "bg-card border-r shadow-card transition-all duration-300 flex flex-col",
      collapsed ? "w-16" : "w-64"
    )}>
      {/* Header */}
      <div className="p-4 border-b flex items-center justify-between">
        {!collapsed && (
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-primary p-2 rounded-lg">
              <Activity className="h-6 w-6 text-white" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-foreground">MediCare</h2>
              <p className="text-xs text-muted-foreground">Sistema Hospitalar</p>
            </div>
          </div>
        )}
        {collapsed && (
          <div className="flex justify-center w-full">
            <div className="bg-gradient-primary p-2 rounded-lg">
              <Activity className="h-6 w-6 text-white" />
            </div>
          </div>
        )}
        <Button 
          variant="ghost" 
          size="sm"
          onClick={onToggle}
          className="p-2"
        >
          {collapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
        </Button>
      </div>

      {/* Navigation */}
      <div className="flex-1 p-4 space-y-6">
        {/* Main Menu */}
        <div>
          {!collapsed && (
            <h3 className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-3">
              Principal
            </h3>
          )}
          <nav className="space-y-1">
            {menuItems.map((item) => (
              <NavLink 
                key={item.title}
                to={item.url} 
                className={getNavCls(item.url)}
              >
                <item.icon className="h-4 w-4 shrink-0" />
                {!collapsed && <span className="ml-2">{item.title}</span>}
              </NavLink>
            ))}
          </nav>
        </div>

        {/* Admin Menu */}
        <div>
          {!collapsed && (
            <h3 className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-3">
              Administração
            </h3>
          )}
          <nav className="space-y-1">
            {adminItems.map((item) => (
              <NavLink 
                key={item.title}
                to={item.url} 
                className={getNavCls(item.url)}
              >
                <item.icon className="h-4 w-4 shrink-0" />
                {!collapsed && <span className="ml-2">{item.title}</span>}
              </NavLink>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}
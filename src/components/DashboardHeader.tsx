import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Bell, Search, Plus, User } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export function DashboardHeader() {
  return (
    <header className="bg-card border-b shadow-sm">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center space-x-4">
          <div>
            <h1 className="text-xl font-semibold text-foreground">Dashboard</h1>
            <p className="text-sm text-muted-foreground">
              Bem-vindo ao sistema de gestão hospitalar
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="relative hidden md:block">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="Buscar pacientes, médicos..." 
              className="pl-9 w-64 bg-muted/50 border-0 focus:ring-2 focus:ring-primary"
            />
          </div>

          <Button size="sm" className="bg-gradient-primary text-white shadow-sm hover:shadow-md transition-all">
            <Plus className="h-4 w-4 mr-2" />
            Novo Agendamento
          </Button>

          <Button variant="ghost" size="sm" className="relative">
            <Bell className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 h-3 w-3 bg-destructive rounded-full text-xs"></span>
          </Button>

          <div className="flex items-center space-x-2">
            <Avatar className="h-8 w-8">
              <AvatarFallback className="bg-primary text-primary-foreground text-sm">
                <User className="h-4 w-4" />
              </AvatarFallback>
            </Avatar>
            <div className="hidden md:block">
              <p className="text-sm font-medium text-foreground">Dr. João Silva</p>
              <p className="text-xs text-muted-foreground">Administrador</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
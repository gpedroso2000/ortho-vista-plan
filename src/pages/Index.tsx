import { useState } from "react";
import { HospitalSidebar } from "@/components/HospitalSidebar";
import { DashboardHeader } from "@/components/DashboardHeader";
import { StatsCard } from "@/components/StatsCard";
import { AppointmentCard } from "@/components/AppointmentCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  Calendar, 
  Activity, 
  Bed,
  Clock,
  TrendingUp,
  Plus
} from "lucide-react";

const mockStats = [
  {
    title: "Total Pacientes",
    value: "1.247",
    change: "+12% vs mês anterior",
    changeType: "positive" as const,
    icon: Users,
    description: "Pacientes ativos"
  },
  {
    title: "Agendamentos Hoje",
    value: 89,
    change: "23 pendentes",
    changeType: "neutral" as const,
    icon: Calendar,
    description: "Consultas programadas"
  },
  {
    title: "Consultas em Andamento",
    value: 12,
    change: "Média: 15min/consulta",
    changeType: "positive" as const,
    icon: Activity,
    description: "Atendimentos ativos"
  },
  {
    title: "Leitos Disponíveis",
    value: 34,
    change: "85% ocupação",
    changeType: "neutral" as const,
    icon: Bed,
    description: "De 120 leitos totais"
  }
];

const mockAppointments = [
  {
    id: "1",
    patientName: "Maria Santos",
    doctorName: "Ana Costa",
    time: "08:30",
    type: "Consulta Cardiológica",
    status: "confirmado" as const,
    location: "Sala 201"
  },
  {
    id: "2",
    patientName: "João Oliveira",
    doctorName: "Pedro Lima",
    time: "09:00",
    type: "Check-up Geral",
    status: "em-andamento" as const,
    location: "Sala 103"
  },
  {
    id: "3",
    patientName: "Ana Ferreira",
    doctorName: "Carlos Mendes",
    time: "09:30",
    type: "Consulta Neurológica",
    status: "pendente" as const,
    location: "Sala 305"
  },
  {
    id: "4",
    patientName: "Roberto Silva",
    doctorName: "Lucia Rocha",
    time: "10:00",
    type: "Fisioterapia",
    status: "confirmado" as const,
    location: "Sala 150"
  }
];

const Index = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <div className="min-h-screen flex w-full bg-background">
      <HospitalSidebar 
        collapsed={sidebarCollapsed}
        onToggle={() => setSidebarCollapsed(!sidebarCollapsed)}
      />
      
      <main className="flex-1 flex flex-col overflow-hidden">
        <DashboardHeader />
        
        <div className="flex-1 overflow-auto">
          <div className="p-6 space-y-8">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {mockStats.map((stat, index) => (
                <StatsCard key={index} {...stat} />
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Agendamentos de Hoje */}
              <div className="lg:col-span-2 space-y-6">
                <Card className="shadow-card">
                  <CardHeader className="flex flex-row items-center justify-between">
                    <div>
                      <CardTitle className="flex items-center space-x-2">
                        <Clock className="h-5 w-5 text-primary" />
                        <span>Agendamentos de Hoje</span>
                      </CardTitle>
                      <p className="text-sm text-muted-foreground mt-1">
                        Próximos atendimentos programados
                      </p>
                    </div>
                    <Button size="sm" variant="outline">
                      <Plus className="h-4 w-4 mr-2" />
                      Adicionar
                    </Button>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {mockAppointments.map((appointment) => (
                      <AppointmentCard 
                        key={appointment.id} 
                        appointment={appointment} 
                      />
                    ))}
                  </CardContent>
                </Card>
              </div>

              {/* Quick Actions & Stats */}
              <div className="space-y-6">
                <Card className="shadow-card">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <TrendingUp className="h-5 w-5 text-primary" />
                      <span>Ações Rápidas</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Button className="w-full bg-gradient-primary text-white justify-start">
                      <Plus className="h-4 w-4 mr-2" />
                      Novo Agendamento
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Users className="h-4 w-4 mr-2" />
                      Cadastrar Paciente
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Activity className="h-4 w-4 mr-2" />
                      Iniciar Consulta
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Bed className="h-4 w-4 mr-2" />
                      Gerenciar Leitos
                    </Button>
                  </CardContent>
                </Card>

                <Card className="shadow-card bg-gradient-subtle">
                  <CardHeader>
                    <CardTitle className="text-lg">Status do Sistema</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Ocupação Geral</span>
                      <span className="text-sm font-medium">85%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-gradient-primary h-2 rounded-full" style={{ width: '85%' }}></div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Eficiência</span>
                      <span className="text-sm font-medium text-success">92%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-success h-2 rounded-full" style={{ width: '92%' }}></div>
                    </div>

                    <div className="pt-2 border-t">
                      <p className="text-xs text-muted-foreground">
                        Sistema operando normalmente
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;

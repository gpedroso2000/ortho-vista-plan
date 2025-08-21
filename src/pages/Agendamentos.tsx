import { useState } from "react";
import { Calendar, Plus, Search, Clock, Users, CalendarDays } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { AppointmentCard } from "@/components/AppointmentCard";
import { HospitalSidebar } from "@/components/HospitalSidebar";
import { DashboardHeader } from "@/components/DashboardHeader";

const Agendamentos = () => {
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
          <AgendamentosContent />
        </div>
      </main>
    </div>
  );
};

const AgendamentosContent = () => {
  const [filter, setFilter] = useState("todos");

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
    },
    {
      id: "5",
      patientName: "Carla Souza",
      doctorName: "André Pereira",
      time: "10:30",
      type: "Consulta Ortopédica",
      status: "pendente" as const,
      location: "Sala 220"
    },
    {
      id: "6",
      patientName: "Fernando Costa",
      doctorName: "Beatriz Lima",
      time: "11:00",
      type: "Exame de Sangue",
      status: "concluido" as const,
      location: "Laboratório"
    }
  ];

  const filteredAppointments = mockAppointments.filter(appointment => {
    if (filter === "todos") return true;
    return appointment.status === filter;
  });

  const statusCounts = {
    confirmado: mockAppointments.filter(a => a.status === "confirmado").length,
    pendente: mockAppointments.filter(a => a.status === "pendente").length,
    "em-andamento": mockAppointments.filter(a => a.status === "em-andamento").length,
    concluido: mockAppointments.filter(a => a.status === "concluido").length,
  };

  return (
    <div className="p-6 space-y-6 bg-background min-h-screen">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Calendar className="h-6 w-6 text-primary" />
            Agendamentos
          </h1>
          <p className="text-muted-foreground">
            Gerencie todos os agendamentos do hospital
          </p>
        </div>
        <Button className="bg-primary text-primary-foreground shadow-sm hover:shadow-md">
          <Plus className="h-4 w-4 mr-2" />
          Novo Agendamento
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-card shadow-sm border-0">
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <div className="bg-primary/10 p-2 rounded-lg">
                <CalendarDays className="h-4 w-4 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Total Hoje</p>
                <p className="text-xl font-bold text-foreground">{mockAppointments.length}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card shadow-sm border-0">
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <div className="bg-success/10 p-2 rounded-lg">
                <Clock className="h-4 w-4 text-success" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Confirmados</p>
                <p className="text-xl font-bold text-foreground">{statusCounts.confirmado}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card shadow-sm border-0">
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <div className="bg-warning/10 p-2 rounded-lg">
                <Users className="h-4 w-4 text-warning" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Pendentes</p>
                <p className="text-xl font-bold text-foreground">{statusCounts.pendente}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card shadow-sm border-0">
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <div className="bg-primary/10 p-2 rounded-lg">
                <Clock className="h-4 w-4 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Em Andamento</p>
                <p className="text-xl font-bold text-foreground">{statusCounts["em-andamento"]}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters and Search */}
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div className="flex flex-wrap gap-2">
          <Button 
            variant={filter === "todos" ? "default" : "outline"}
            size="sm"
            onClick={() => setFilter("todos")}
            className={filter === "todos" ? "bg-primary text-primary-foreground" : ""}
          >
            Todos ({mockAppointments.length})
          </Button>
          <Button 
            variant={filter === "confirmado" ? "default" : "outline"}
            size="sm"
            onClick={() => setFilter("confirmado")}
            className={filter === "confirmado" ? "bg-success text-success-foreground" : ""}
          >
            Confirmados ({statusCounts.confirmado})
          </Button>
          <Button 
            variant={filter === "pendente" ? "default" : "outline"}
            size="sm"
            onClick={() => setFilter("pendente")}
            className={filter === "pendente" ? "bg-warning text-warning-foreground" : ""}
          >
            Pendentes ({statusCounts.pendente})
          </Button>
          <Button 
            variant={filter === "em-andamento" ? "default" : "outline"}
            size="sm"
            onClick={() => setFilter("em-andamento")}
            className={filter === "em-andamento" ? "bg-primary text-primary-foreground" : ""}
          >
            Em Andamento ({statusCounts["em-andamento"]})
          </Button>
        </div>

        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input 
            placeholder="Buscar agendamento..." 
            className="pl-9 w-64 bg-card"
          />
        </div>
      </div>

      {/* Appointments List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredAppointments.map((appointment) => (
          <AppointmentCard key={appointment.id} appointment={appointment} />
        ))}
      </div>

      {filteredAppointments.length === 0 && (
        <div className="text-center py-12">
          <Calendar className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-lg font-medium text-foreground mb-2">
            Nenhum agendamento encontrado
          </h3>
          <p className="text-muted-foreground">
            Não há agendamentos para o filtro selecionado.
          </p>
        </div>
      )}
    </div>
  );
};

export default Agendamentos;
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Clock, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

interface Appointment {
  id: string;
  patientName: string;
  doctorName: string;
  time: string;
  type: string;
  status: "confirmado" | "pendente" | "em-andamento" | "concluido";
  location: string;
}

interface AppointmentCardProps {
  appointment: Appointment;
}

const statusConfig = {
  confirmado: { color: "bg-success text-success-foreground", label: "Confirmado" },
  pendente: { color: "bg-warning text-warning-foreground", label: "Pendente" },
  "em-andamento": { color: "bg-primary text-primary-foreground", label: "Em Andamento" },
  concluido: { color: "bg-muted text-muted-foreground", label: "Concluído" }
};

export function AppointmentCard({ appointment }: AppointmentCardProps) {
  const status = statusConfig[appointment.status];

  return (
    <Card className="shadow-card hover:shadow-elegant transition-all duration-300 border-l-4 border-l-primary">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold">{appointment.type}</CardTitle>
          <Badge className={cn("text-xs", status.color)}>
            {status.label}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center space-x-3">
          <Avatar>
            <AvatarFallback className="bg-primary text-primary-foreground">
              {appointment.patientName.split(' ').map(n => n[0]).join('').substring(0, 2)}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <p className="font-medium text-foreground truncate">
              {appointment.patientName}
            </p>
            <p className="text-sm text-muted-foreground">
              Dr. {appointment.doctorName}
            </p>
          </div>
        </div>
        
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <div className="flex items-center space-x-1">
            <Clock className="h-4 w-4" />
            <span>{appointment.time}</span>
          </div>
          <div className="flex items-center space-x-1">
            <MapPin className="h-4 w-4" />
            <span>{appointment.location}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
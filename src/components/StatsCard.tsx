import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface StatsCardProps {
  title: string;
  value: string | number;
  change?: string;
  changeType?: "positive" | "negative" | "neutral";
  icon: LucideIcon;
  description?: string;
}

export function StatsCard({ 
  title, 
  value, 
  change, 
  changeType = "neutral", 
  icon: Icon, 
  description 
}: StatsCardProps) {
  const changeColor = {
    positive: "text-success",
    negative: "text-destructive",
    neutral: "text-muted-foreground"
  };

  return (
    <Card className="shadow-card hover:shadow-elegant transition-shadow duration-300 border-0 bg-gradient-subtle">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div className="space-y-2">
            <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
              {title}
            </p>
            <div className="space-y-1">
              <p className="text-2xl font-bold text-foreground">
                {value}
              </p>
              {change && (
                <p className={cn("text-xs font-medium", changeColor[changeType])}>
                  {change}
                </p>
              )}
              {description && (
                <p className="text-xs text-muted-foreground">
                  {description}
                </p>
              )}
            </div>
          </div>
          <div className="bg-gradient-primary p-3 rounded-xl">
            <Icon className="h-6 w-6 text-white" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
import { format } from "date-fns";
import { es } from "date-fns/locale";

export function formatReadableDate(dateString: string): string {
  const date = new Date(dateString);
  return format(date, "dd 'de' MMMM yyyy", { locale: es });
}

export function formatReadableTime(dateString: string): string {
  const date = new Date(dateString);
  return format(date, "HH:mm", { locale: es });
}

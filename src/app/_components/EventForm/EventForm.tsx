import {
  Flex,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  FormErrorMessage,
} from "@chakra-ui/react";
import React from "react";
import { useForm } from "react-hook-form";

interface EventFormProps {
  start: string;
  onCreateEvent: (newEvent: {
    summary: string;
    email: string;
    phone: string;
    reason?: string;
    start: string;
    end: string;
  }) => Promise<void>;
  onClose: () => void;
}

const EventForm: React.FC<EventFormProps> = ({
  start,
  onCreateEvent,
  onClose,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Initialize startTime with the selected date and time in local time zone
  const [startTime, setStartTime] = React.useState(() => {
    const date = new Date(start);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    return `${year}-${month}-${day}T${hours}:${minutes}`;
  });

  const onSubmit = async (data: any) => {
    const eventEnd = new Date(
      new Date(startTime).getTime() + 60 * 60 * 1000
    ).toISOString();
    await onCreateEvent({
      summary: data.name,
      email: data.email,
      phone: data.phone,
      reason: data.reason,
      start: startTime,
      end: eventEnd,
    });
    onClose();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Flex direction="column" gap={4}>
        <FormControl isInvalid={!!errors.name}>
          <FormLabel color="#b0341a">Nombre</FormLabel> {/* Warm Red */}
          <Input
            placeholder="¿Cuál es tu nombre?"
            {...register("name", { required: "El nombre es requerido" })}
            bg="#f5f5dc" /* Beige */
          />
          <FormErrorMessage>
            {errors.name && (errors.name.message as string)}
          </FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={!!errors.email}>
          <FormLabel color="#b0341a">Email</FormLabel> {/* Warm Red */}
          <Input
            placeholder="¿Cuál es tu email?"
            {...register("email", { required: "El email es requerido" })}
            bg="#f5f5dc" /* Beige */
          />
          <FormErrorMessage>
            {errors.email && (errors.email.message as string)}
          </FormErrorMessage>
        </FormControl>
        <FormControl>
          <FormLabel color="#b0341a">Teléfono</FormLabel> {/* Warm Red */}
          <Input
            type="number"
            placeholder="¿Cuál es tu número de telefono?"
            {...register("phone")}
            bg="#f5f5dc" /* Beige */
          />
        </FormControl>
        <FormControl>
          <FormLabel color="#b0341a">Fecha y hora de inicio</FormLabel>{" "}
          {/* Warm Red */}
          <Input
            type="datetime-local"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
            bg="#f5f5dc" /* Beige */
          />
        </FormControl>
        <FormControl>
          <FormLabel color="#b0341a">Razón por la que busca terapia</FormLabel>{" "}
          {/* Warm Red */}
          <Textarea
            resize={"vertical"}
            placeholder="Razón por la que buscas terapia"
            {...register("reason")}
            bg="#f5f5dc" /* Beige */
          />
        </FormControl>

        <Button
          type="submit"
          bg="#008080" /* Teal */
          color="#ffffff" /* Pure White */
          mb={2}
          _hover={{ bg: "#b0341a", color: "white" }} /* Warm Red on hover */
        >
          Crear Evento
        </Button>
      </Flex>
    </form>
  );
};

export default EventForm;

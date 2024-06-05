import { useState } from "react";
import {
  Flex,
  Box,
  Button,
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
} from "@chakra-ui/react";
import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  useForm,
  SubmitHandler,
  FieldValues,
  FieldError,
} from "react-hook-form";

interface EventFormProps {
  start: string;
  onCreateEvent: (newEvent: {
    summary: string;
    phone: string;
    email: string;
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
  } = useForm<{ name: string; email: string; phone: string }>();
  const [startDate, setStartDate] = useState(new Date(start));

  const onSubmit: SubmitHandler<{
    name: string;
    email: string;
    phone: string;
  }> = async (data) => {
    const endDate = new Date(startDate.getTime() + 60 * 60 * 1000); // Set end time to one hour after start time
    await onCreateEvent({
      summary: data.name,
      phone: data.phone,
      email: data.email,
      start: startDate.toISOString(),
      end: endDate.toISOString(),
    });
    onClose();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Flex direction="column" gap={4}>
        <FormControl isInvalid={!!errors.name}>
          <FormLabel>Nombre</FormLabel>
          <Input
            placeholder="¿Cuál es tu nombre?"
            {...register("name", { required: "Este campo es requerido" })}
          />
          <FormErrorMessage>{errors.name?.message as string}</FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={!!errors.email}>
          <FormLabel>Email</FormLabel>
          <Input
            placeholder="¿Cuál es tu email?"
            {...register("email", { required: "Este campo es requerido" })}
          />
          <FormErrorMessage>{errors.email?.message as string}</FormErrorMessage>
        </FormControl>

        <FormControl>
          <FormLabel>Número de teléfono</FormLabel>
          <Input
            placeholder="¿Cuál es tu número de telefono?"
            {...register("phone")}
          />
        </FormControl>

        <FormControl>
          <FormLabel>Fecha y hora de inicio</FormLabel>
          <DatePicker
            selected={startDate}
            onChange={(date: Date) => setStartDate(date)}
            showTimeSelect
            dateFormat="MMMM d, yyyy h:mm aa"
            className="chakra-input css-1c6u7zm"
          />
        </FormControl>

        <Button type="submit">Create Event</Button>
        <Button onClick={onClose} mb={2}>
          Cancel
        </Button>
      </Flex>
    </form>
  );
};

export default EventForm;

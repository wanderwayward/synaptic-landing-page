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

  const onSubmit = async (data: any) => {
    const eventEnd = new Date(
      new Date(start).getTime() + 60 * 60 * 1000
    ).toISOString();
    await onCreateEvent({
      summary: data.name,
      email: data.email,
      phone: data.phone,
      reason: data.reason,
      start,
      end: eventEnd,
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
            {...register("name", { required: "El nombre es requerido" })}
          />
          <FormErrorMessage>
            {errors.name && (errors.name.message as string)}
          </FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={!!errors.email}>
          <FormLabel>Email</FormLabel>
          <Input
            placeholder="¿Cuál es tu email?"
            {...register("email", { required: "El email es requerido" })}
          />
          <FormErrorMessage>
            {errors.email && (errors.email.message as string)}
          </FormErrorMessage>
        </FormControl>
        <FormControl>
          <FormLabel>Teléfono</FormLabel>
          <Input
            type="number"
            placeholder="¿Cuál es tu número de telefono?"
            {...register("phone")}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Razón por la que busca terapia</FormLabel>
          <Textarea
            resize={"vertical"}
            placeholder="Razón por la que busca terapia"
            {...register("reason")}
          />
        </FormControl>
        <Button type="submit" colorScheme="blue">
          Create Event
        </Button>
        <Button onClick={onClose}>Cancel</Button>
      </Flex>
    </form>
  );
};

export default EventForm;

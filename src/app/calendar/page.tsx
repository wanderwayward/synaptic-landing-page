"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  Box,
  Flex,
  Heading,
  useToast,
  Spinner,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useMediaQuery,
} from "@chakra-ui/react";
import FullCalendar from "@fullcalendar/react";
import { EventInput } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import axios from "axios";
import esLocale from "@fullcalendar/core/locales/es";
import EventForm from "../_components/EventForm/EventForm";
import "./fullcalendar.css";
import { MEDIA_QUERIES } from "../_constants/mediaQueries";

const CalendarPage = () => {
  const [isFetching, setIsFetching] = useState(false);
  const [events, setEvents] = useState<EventInput[]>([]);
  const [selectedEvent, setSelectedEvent] = useState<{
    start: string;
  } | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);
  const toast = useToast();
  const router = useRouter();

  const [isSmallScreen] = useMediaQuery(MEDIA_QUERIES.sm);
  const [isMediumScreen] = useMediaQuery(MEDIA_QUERIES.md);

  useEffect(() => {
    const fetchEvents = async () => {
      setIsFetching(true);
      try {
        const response = await axios.get("/api/calendar-events");
        const events = response.data.map((event: any) => ({
          title: "Ocupado", // Set title to "Ocupado"
          start: event.start.dateTime || event.start.date,
          end: new Date(
            new Date(event.start.dateTime || event.start.date).getTime() +
              60 * 60 * 1000
          ).toISOString(),
        }));
        setEvents(events); // Set events once
      } catch (error) {
        console.error("Error fetching calendar events:", error);
      } finally {
        setIsFetching(false); // Stop fetching
      }
    };

    fetchEvents();
  }, []);

  const handleDateSelect = (selectInfo: any) => {
    console.log("Date selected:", selectInfo.startStr);
    setSelectedEvent({
      start: selectInfo.startStr,
    });
    setIsModalOpen(true); // Show the modal
  };

  const handleCreateEvent = async (newEvent: {
    summary: string;
    email: string;
    phone: string;
    reason?: string;
    start: string;
    end: string;
  }) => {
    try {
      const response = await axios.post("/api/calendar-events", newEvent);
      setEvents((prevEvents) => [...prevEvents, response.data]);
      toast({
        title: "Event created.",
        description: "Se ha añadido el evento al calendario.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      setIsModalOpen(false); // Close the modal
      setIsConfirmationOpen(true); // Show confirmation modal
    } catch (error) {
      console.error("Error creating event:", error);
      toast({
        title: "Error",
        description: "Intenta otra vez, ocurrió un error al crear el evento.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedEvent(null);
  };

  const handleCloseConfirmation = () => {
    setIsConfirmationOpen(false);
    router.push("/about"); // Use router.push instead of window.location.href
  };

  return (
    <Box
      position="relative"
      minHeight="calc(100vh - 48px)"
      overflow="hidden"
      px={4}
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      className="fade-in"
      pb={24}
    >
      <Heading
        as="h1"
        mb={{ base: 4, md: 8, lg: 24 }}
        color="#0d00a4"
        fontFamily="roca"
        fontSize={{ base: "3em", xl: "6em" }}
      >
        Selecciona un horario a tu conveniencia
      </Heading>
      {isFetching ? (
        <Flex
          width="60%"
          height="56vh"
          bg="#48A9A6"
          boxShadow="lg"
          borderRadius="md"
          p={4}
          overflow="hidden"
          justify="center"
          align="center"
        >
          <Spinner />
        </Flex>
      ) : (
        <Box
          width={{ base: "100vw", md: "100%", lg: "80%", xl: "60%" }}
          height={isSmallScreen ? "50vh" : "49vh"}
          bg="#48A9A6"
          boxShadow="lg"
          borderRadius="md"
          p={4}
          overflowX="auto" // Enable horizontal scrolling on mobile
        >
          <FullCalendar
            timeZone="local"
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            initialView={isSmallScreen ? "customTwoDay" : "timeGridWeek"}
            views={{
              customTwoDay: {
                type: "timeGrid",
                duration: { days: 2 },
                buttonText: "2 días",
              },
            }}
            events={events}
            selectable={true}
            select={handleDateSelect}
            height="100%"
            locale={esLocale}
            headerToolbar={{
              left: isSmallScreen ? "prev,next" : "prev,next today",
              center: "title",
              right: isSmallScreen
                ? "customTwoDay"
                : "dayGridMonth,timeGridWeek,timeGridDay",
            }}
            slotMinTime="07:00:00"
            slotMaxTime="22:00:00"
            slotLabelFormat={{
              hour: "2-digit",
              minute: "2-digit",
              meridiem: "short",
            }}
            slotDuration="01:00:00"
            slotLabelInterval="01:00"
            eventTimeFormat={{
              hour: "2-digit",
              minute: "2-digit",
              meridiem: "short",
            }}
            hiddenDays={[0, 6]}
            businessHours={{
              daysOfWeek: [1, 2, 3, 4, 5],
              startTime: "08:00",
              endTime: "17:00",
            }}
            allDaySlot={false}
            dayCellContent={(arg) => (
              <Flex align="center" justify="center" height="100%">
                {arg.dayNumberText}
              </Flex>
            )}
            eventContent={(eventInfo) => (
              <Flex
                align="center"
                justify="center"
                borderRadius="md"
                height="100%"
                p={1}
                fontSize={isSmallScreen ? "1em" : "1.5em"}
                lineHeight="2em"
              >
                <Text>Ocupado</Text>
              </Flex>
            )}
            selectAllow={(selectInfo) => {
              return true;
            }}
          />
        </Box>
      )}
      {selectedEvent && (
        <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
          <ModalOverlay />
          <ModalContent top="20%">
            <ModalHeader>Crear Evento</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <EventForm
                start={selectedEvent.start}
                onCreateEvent={handleCreateEvent}
                onClose={handleCloseModal}
              />
            </ModalBody>
          </ModalContent>
        </Modal>
      )}
      {isConfirmationOpen && (
        <Modal isOpen={isConfirmationOpen} onClose={handleCloseConfirmation}>
          <ModalOverlay />
          <ModalContent top="20%">
            <ModalHeader>Confirmación</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Text>
                Tu cita se ha programado. Checa tu correo electrónico para más
                información.
              </Text>
              <Text mb={2}>
                Si tienes una cuenta de Gmail, también recibirás una invitación
                al evento.
              </Text>
              <Button width="100%" mb={2} onClick={handleCloseConfirmation}>
                Aceptar
              </Button>
            </ModalBody>
          </ModalContent>
        </Modal>
      )}
    </Box>
  );
};

export default CalendarPage;

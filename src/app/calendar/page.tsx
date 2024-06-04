"use client";
import React, { useEffect, useState } from "react";
import { Box, Flex, Heading, useToast, Spinner, Text } from "@chakra-ui/react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import axios from "axios";
import esLocale from "@fullcalendar/core/locales/es";
import EventForm from "../_components/EventForm/EventForm";
import "./fullcalendar.css";

interface Event {
  summary: string;
  start: {
    dateTime?: string;
    date?: string;
  };
  end: {
    dateTime?: string;
    date?: string;
  };
  backgroundColor?: string;
  textColor?: string;
}

const CalendarPage = () => {
  const [isFetching, setIsFetching] = useState(false);
  const [events, setEvents] = useState<
    {
      title: string;
      start: string;
      end: string;
      backgroundColor?: string;
      textColor?: string;
    }[]
  >([]);
  const [selectedEvent, setSelectedEvent] = useState<{
    start: string;
    end: string;
  }>({ start: "", end: "" });
  const toast = useToast();

  useEffect(() => {
    const fetchEvents = async () => {
      setIsFetching(true); // Start fetching
      try {
        const response = await axios.get("/api/calendar-events");
        const events = response.data.map((event: Event) => ({
          title: "Ocupado", // Set title to "Ocupado"
          start: event.start.dateTime || event.start.date,
          end: event.end.dateTime || event.end.date,
          backgroundColor: "#FC7A1E", // Custom background color
          textColor: "#FFFFFF", // Custom text color
        }));
        setEvents(events);
      } catch (error) {
        console.error("Error fetching calendar events:", error);
      } finally {
        setIsFetching(false); // Stop fetching
      }
    };

    fetchEvents();
  }, []);

  const handleCreateEvent = async (newEvent: {
    summary: string;
    start: string;
    end: string;
  }) => {
    try {
      const response = await axios.post("/api/calendar-events", newEvent);
      setEvents([...events, response.data]);
      toast({
        title: "Event created.",
        description: "The event has been added to the calendar.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    } catch (error) {
      console.error("Error creating event:", error);
      toast({
        title: "Error",
        description: "There was an error creating the event.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  const handleDateSelect = (selectInfo: any) => {
    setSelectedEvent({
      start: selectInfo.startStr,
      end: selectInfo.endStr,
    });
  };

  return (
    <Box
      position="relative"
      minHeight="calc(100vh - 96px)"
      overflow="hidden"
      px={4}
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      className="fade-in"
    >
      <Heading as="h1" mb={4} color="7D3C3C" fontFamily="roca" fontSize="4.5em">
        Selecciona un horario a tu conveniencia
      </Heading>
      {isFetching ? (
        <Flex
          width="60%"
          height="56vh"
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
          width="60%"
          height="56vh"
          bg="#48A9A6"
          boxShadow="lg"
          borderRadius="md"
          p={4}
          overflow="hidden"
        >
          <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            initialView="timeGridWeek"
            events={events}
            selectable={true}
            select={handleDateSelect}
            height="100%"
            locale={esLocale}
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay",
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
            dayCellContent={(arg) => (
              <Flex align="center" justify="center" height="100%">
                {arg.dayNumberText}
              </Flex>
            )}
            eventContent={(eventInfo) => (
              <Flex
                align="center"
                justify="center"
                bg={eventInfo.event.backgroundColor}
                color={eventInfo.event.textColor}
                borderRadius="md"
                height="100%"
                p={1}
                className="fade-in"
                fontSize="10px"
                lineHeight="10px"
              >
                <Text>Ocupado</Text>
              </Flex>
            )}
          />
        </Box>
      )}
      {selectedEvent.start && selectedEvent.end && (
        <EventForm
          start={selectedEvent.start}
          end={selectedEvent.end}
          onCreateEvent={handleCreateEvent}
          onClose={() => setSelectedEvent({ start: "", end: "" })}
        />
      )}
    </Box>
  );
};

export default CalendarPage;

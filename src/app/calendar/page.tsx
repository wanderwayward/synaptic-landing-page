"use client";
import React, { useEffect, useState } from "react";
import { Box, Flex, Heading } from "@chakra-ui/react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import axios from "axios";
import esLocale from "@fullcalendar/core/locales/es";
import "./fullcalendar.css"; // Import the custom CSS file

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
  const [events, setEvents] = useState<
    {
      title: string;
      start: string;
      end: string;
      backgroundColor?: string;
      textColor?: string;
    }[]
  >([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get("/api/calendar-events");
        const events = response.data.map((event: Event) => ({
          title: event.summary,
          start: event.start.dateTime || event.start.date,
          end: event.end.dateTime || event.end.date,
          backgroundColor: "#FC7A1E", // Custom background color
          textColor: "#FFFFFF", // Custom text color
        }));
        setEvents(events);
      } catch (error) {
        console.error("Error fetching calendar events:", error);
      }
    };

    fetchEvents();
  }, []);

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
      <Heading
        as="h1"
        mb={4}
        color="7D3C3C "
        fontFamily="roca"
        fontSize="4.5em"
        className="fade-in"
      >
        Selecciona un horario a tu conveniencia
      </Heading>
      <Box
        width="60%"
        height="70vh"
        bg="#48A9A6 "
        boxShadow="lg"
        borderRadius="md"
        p={4}
        overflow="hidden"
        className="fade-in"
      >
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin]}
          initialView="timeGridWeek"
          events={events}
          height="100%" // Ensures the calendar fits within the box
          locale={esLocale} // Set the locale to Spanish
          headerToolbar={{
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay",
          }}
          slotMinTime="07:00:00"
          slotMaxTime="24:00:00"
          slotLabelFormat={{
            hour: "2-digit",
            minute: "2-digit",
            meridiem: "short",
          }}
          slotDuration="01:00:00" // Ensures each slot is one hour long
          slotLabelInterval="01:00" // Ensures each label is one hour apart
          eventTimeFormat={{
            hour: "2-digit",
            minute: "2-digit",
            meridiem: "short",
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
              p={2}
              className="fade-in"
            >
              <span>{eventInfo.event.title}</span>
            </Flex>
          )}
        />
      </Box>
    </Box>
  );
};

export default CalendarPage;

// src/app/calendar/page.tsx
"use client";
import React, { useEffect, useState } from "react";
import { Box, Flex, Heading } from "@chakra-ui/react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import axios from "axios";
import esLocale from "@fullcalendar/core/locales/es"; // Import Spanish locale
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
      pt="48px"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      className="fade-in" // Apply fade-in animation
    >
      <Heading
        as="h1"
        mb={4}
        color="white"
        fontFamily="roca"
        fontSize="xxx-large"
        className="fade-in text-border" // Apply fade-in animation
      >
        Selecciona un horario a tu conveniencia
      </Heading>
      <Box
        width="60%"
        height="70vh"
        bg="#009DD4"
        boxShadow="lg"
        borderRadius="md"
        p={4}
        overflow="hidden"
        className="fade-in" // Apply fade-in animation
      >
        <FullCalendar
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
          events={events}
          height="100%" // Ensures the calendar fits within the box
          locale={esLocale} // Set the locale to Spanish
          headerToolbar={{
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth,dayGridWeek,dayGridDay",
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
              className="fade-in" // Apply fade-in animation
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

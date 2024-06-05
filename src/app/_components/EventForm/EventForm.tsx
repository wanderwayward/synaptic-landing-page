import { Flex, Box, Button, Input } from "@chakra-ui/react";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface EventFormProps {
  start: string;
  end: string;
  onCreateEvent: (newEvent: {
    summary: string;
    start: string;
    end: string;
  }) => Promise<void>;
  onClose: () => void;
}

const EventForm: React.FC<EventFormProps> = ({
  start,
  end,
  onCreateEvent,
  onClose,
}) => {
  const [summary, setSummary] = useState("");
  const [startDate, setStartDate] = useState(new Date(start));
  const [endDate, setEndDate] = useState(new Date(end));

  const handleSubmit = async () => {
    await onCreateEvent({
      summary,
      start: startDate.toISOString(),
      end: endDate.toISOString(),
    });
    onClose();
  };

  const isWeekday = (date: Date) => {
    const day = date.getDay();
    return day !== 0 && day !== 6; // 0 = Sunday, 6 = Saturday
  };

  const filterTime = (time: Date) => {
    const hour = time.getHours();
    return hour >= 7 && hour < 21; // Only allow 7 AM to 9 PM
  };

  return (
    <Flex direction="column" gap={4}>
      <Input
        placeholder="Enter event summary"
        value={summary}
        onChange={(e) => setSummary(e.target.value)}
      />
      <DatePicker
        selected={startDate}
        onChange={(date: Date) => setStartDate(date)}
        showTimeSelect
        filterDate={isWeekday}
        filterTime={filterTime}
        dateFormat="MMMM d, yyyy h:mm aa"
      />
      <DatePicker
        selected={endDate}
        onChange={(date: Date) => setEndDate(date)}
        showTimeSelect
        filterDate={isWeekday}
        filterTime={filterTime}
        dateFormat="MMMM d, yyyy h:mm aa"
      />
      <Button onClick={handleSubmit}>Create Event</Button>
      <Button onClick={onClose}>Cancel</Button>
    </Flex>
  );
};

export default EventForm;

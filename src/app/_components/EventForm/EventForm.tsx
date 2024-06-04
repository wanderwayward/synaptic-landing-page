import { Flex, Box, Button, Input } from "@chakra-ui/react";
import React, { useState } from "react";

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

  const handleSubmit = async () => {
    await onCreateEvent({ summary, start, end });
    onClose();
  };

  return (
    <Box
      position="fixed"
      top="50%"
      left="50%"
      transform="translate(-50%, -50%)"
      zIndex="1000"
      bg="white"
      p={4}
      boxShadow="lg"
      borderRadius="md"
    >
      <Flex direction="column" gap={4}>
        <Input
          placeholder="Enter event summary"
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
        />
        <Button onClick={handleSubmit}>Create Event</Button>
        <Button onClick={onClose}>Cancel</Button>
      </Flex>
    </Box>
  );
};

export default EventForm;

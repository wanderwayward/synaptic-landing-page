// app/_components/CalendarPageLayout.tsx
import { ReactNode } from "react";
import { Box } from "@chakra-ui/react";

interface CalendarPageLayoutProps {
  children: ReactNode;
}

const CalendarLayout = ({ children }: CalendarPageLayoutProps) => {
  return (
    <Box p={4} bg="gray.100" height="100vh">
      {children}
    </Box>
  );
};

export default CalendarLayout;

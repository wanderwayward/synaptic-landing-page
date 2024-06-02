import { Button, ButtonProps } from "@chakra-ui/react";
import { FC } from "react";

interface CustomButtonProps extends ButtonProps {}

const CustomButton: FC<CustomButtonProps> = ({ children, ...props }) => {
  return <Button {...props}>{children}</Button>;
};

export default CustomButton;

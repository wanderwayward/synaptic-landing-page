"use client";
import { ReactNode, useEffect, useRef } from "react";
import { createPortal } from "react-dom";

interface PortalProps {
  children: ReactNode;
}

const Portal: React.FC<PortalProps> = ({ children }) => {
  const portalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    portalRef.current = document.createElement("div");
    document.body.appendChild(portalRef.current);

    return () => {
      if (portalRef.current) {
        document.body.removeChild(portalRef.current);
      }
    };
  }, []);

  if (!portalRef.current) return null;

  return createPortal(children, portalRef.current);
};

export default Portal;

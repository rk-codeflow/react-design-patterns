import { useState, type ReactElement } from "react";

type ToggleProps = {
  children: (props: { isOpen: boolean; toggle: () => void }) => ReactElement;
};

const ToggleWithChildren = ({ children }: ToggleProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen((prev) => !prev);
  };

  return <>{children({ isOpen, toggle })}</>;
};

export default ToggleWithChildren;

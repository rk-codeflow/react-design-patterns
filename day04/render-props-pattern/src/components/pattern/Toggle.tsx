import { useState, type ReactElement } from "react";

type ToggleProps = {
  render: (props: { isOpen: boolean; toggle: () => void }) => ReactElement;
};

const Toggle = ({ render }: ToggleProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen((prev) => !prev);
  };

  return <div>{render({ isOpen, toggle })}</div>;
};

export default Toggle;

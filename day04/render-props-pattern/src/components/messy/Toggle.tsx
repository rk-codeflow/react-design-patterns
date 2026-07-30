import { useState } from "react";

const Toggle = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleContent = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div>
      <h2>Messy way toggle</h2>
      <button onClick={toggleContent} aria-expanded={isOpen}>
        {isOpen ? "Hide" : "Show me"} the content
      </button>
      {isOpen && <p>I am the content</p>}
    </div>
  );
};

export default Toggle;

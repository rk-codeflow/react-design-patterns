import { useState } from "react";

const Toggle = () => {
  const [show, setShow] = useState(false);

  const toggleContent = () => {
    setShow((prev) => !prev);
  };

  return (
    <div>
      <h2>Messy way toggle</h2>
      <button onClick={toggleContent} aria-expanded={show}>
        {show ? "Hide" : "Show me"} the content
      </button>
      {show && <p>I am the content</p>}
    </div>
  );
};

export default Toggle;

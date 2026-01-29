import { useRef } from "react";

const Uncontrolled = () => {
  const fnameRef = useRef<HTMLInputElement>(null);
  const lnameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const hobbyRef = useRef<HTMLInputElement>(null);
  const contactRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const firstName = fnameRef.current?.value;
    const lastName = lnameRef.current?.value;
    const email = emailRef.current?.value;
    const hobby = hobbyRef.current?.value;
    const contact = contactRef.current?.value;

    if (!firstName) {
      fnameRef.current?.focus();
      return;
    }

    if (!lastName) {
      lnameRef.current?.focus();
      return;
    }

    if (!email?.includes("@")) {
      emailRef.current?.focus();
      return;
    }
    if (!hobby) {
      hobbyRef.current?.focus();
      return;
    }
    if (!contact) {
      contactRef.current?.focus();
      return;
    }

    console.log("Form data", firstName, lastName, email, hobby, contact);
  };

  return (
    <form className="controlled" onSubmit={handleSubmit}>
      <h2>Uncontrolled approach</h2>
      <input type="text" ref={fnameRef} placeholder="Enter first name" />
      <input type="text" ref={lnameRef} placeholder="Enter last name" />
      <input type="text" ref={emailRef} placeholder="Enter your email" />
      <input type="text" ref={hobbyRef} placeholder="Enter your hobby" />
      <input type="number" ref={contactRef} placeholder="Enter your contact" />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Uncontrolled;

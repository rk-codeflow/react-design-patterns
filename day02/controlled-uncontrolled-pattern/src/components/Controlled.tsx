import { useRef, useState } from "react";

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  hobby: string;
  contact: string;
};

const Controlled = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    hobby: "",
    contact: "",
  });

  const fnameRef = useRef<HTMLInputElement>(null);
  const lnameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const hobbyRef = useRef<HTMLInputElement>(null);
  const contactRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.firstName) {
      fnameRef.current?.focus();
      return;
    }

    if (!formData.lastName) {
      lnameRef.current?.focus();
      return;
    }

    if (!formData.email.includes("@")) {
      emailRef.current?.focus();
      return;
    }

    if (!formData.hobby) {
      hobbyRef.current?.focus();
      return;
    }
    if (!formData.contact) {
      contactRef.current?.focus();
      return;
    }

    console.log(formData);
  };

  return (
    <form className="controlled" onSubmit={handleSubmit}>
      <h2>Controlled Approach</h2>
      <input
        type="text"
        name="firstName"
        ref={fnameRef}
        value={formData.firstName}
        onChange={handleChange}
        placeholder="Enter first name"
      />
      <input
        type="text"
        name="lastName"
        ref={lnameRef}
        value={formData.lastName}
        onChange={handleChange}
        placeholder="Enter last name"
      />
      <input
        type="text"
        name="email"
        ref={emailRef}
        value={formData.email}
        onChange={handleChange}
        placeholder="Enter your email"
      />
      <input
        type="text"
        name="hobby"
        ref={hobbyRef}
        value={formData.hobby}
        onChange={handleChange}
        placeholder="Enter your hobby"
      />
      <input
        type="number"
        name="contact"
        ref={contactRef}
        value={formData.contact}
        onChange={handleChange}
        placeholder="Enter your contact"
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Controlled;

import type { FormEvent } from "react";

const UncontrolledNoRef = () => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
  };

  return (
    <form className="controlled" onSubmit={handleSubmit}>
      <h2>Uncontrolled no ref approach</h2>
      <input type="text" name="firstName" placeholder="Enter first name" />
      <input type="text" name="lastName" placeholder="Enter last name" />
      <input type="text" name="email" placeholder="Enter your email" />
      <input type="text" name="hobby" placeholder="Enter your hobby" />
      <input type="number" name="contact" placeholder="Enter your contact" />
      <button type="submit">Submit</button>
    </form>
  );
};

export default UncontrolledNoRef;

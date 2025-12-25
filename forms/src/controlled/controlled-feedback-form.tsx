import { useRef, useState } from "react";

export const ControlledFeedbackForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const nameRef = useRef<HTMLInputElement | null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);
  const messageRef = useRef<HTMLTextAreaElement | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { name, email, message } = form;

    if (!name) {
      nameRef.current?.focus();
      return;
    }

    if (!email) {
      emailRef.current?.focus();
      return;
    }

    if (!message) {
      messageRef.current?.focus();
      return;
    }

    console.log("Form Submitted:", {
      name,
      email,
      message,
    });
  };

  return (
    <form className="flex flex-col" onSubmit={handleSubmit}>
      <input
        className="border rounded-2xl p-2 my-3"
        name="name"
        type="text"
        value={form.name}
        ref={nameRef}
        onChange={handleChange}
        placeholder="Name"
      />
      <input
        className="border rounded-2xl p-2 my-3"
        type="text"
        name="email"
        ref={emailRef}
        value={form.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <textarea
        className="border rounded-2xl p-2 my-3"
        value={form.message}
        name="message"
        ref={messageRef}
        onChange={handleChange}
        placeholder="Your message"
      />

      <button className="bg-purple-500 text-white p-1 rounded" type="submit">
        Send Feedback
      </button>
    </form>
  );
};

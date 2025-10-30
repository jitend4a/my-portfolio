import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .sendForm(
        "service_5v2j5nm",     // ✅ Service ID
        "template_m6ttmmn",    // ✅ Template ID
        form.current,
        "v_R3335ZkgyH3Y7JR"    // ✅ Public Key (yahi tumhara hai)
      )
      .then(
        () => {
          setStatus("✅ Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.error(error);
          setStatus("❌ Failed to send message. Try again!");
        }
      );
  };

  return (
    <div
      style={{
        backgroundColor: "#0f172a",
        color: "#f8fafc",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "50px 20px",
        textAlign: "center",
      }}
    >
      <h1
        style={{
          fontSize: "2.5rem",
          color: "#38bdf8",
          fontWeight: "bold",
          marginBottom: "10px",
        }}
      >
        Contact Me 📬
      </h1>

      <form
        ref={form}
        onSubmit={sendEmail}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          width: "100%",
          maxWidth: "400px",
        }}
      >
        <input
          type="text"
          name="from_name"
          placeholder="Your Name"
          required
          style={{
            padding: "10px",
            borderRadius: "8px",
            border: "none",
          }}
        />
        <input
          type="email"
          name="from_email"
          placeholder="Your Email"
          required
          style={{
            padding: "10px",
            borderRadius: "8px",
            border: "none",
          }}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          required
          style={{
            padding: "10px",
            borderRadius: "8px",
            border: "none",
          }}
        />
        <button
          type="submit"
          style={{
            backgroundColor: "#38bdf8",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            padding: "10px",
            cursor: "pointer",
            fontWeight: "bold",
            fontSize: "1.1rem",
          }}
        >
          Send Message
        </button>
      </form>

      <p style={{ marginTop: "20px", color: "#94a3b8" }}>{status}</p>

      <p
        style={{
          marginTop: "60px",
          color: "#64748b",
          fontSize: "0.9rem",
        }}
      >
        © {new Date().getFullYear()} Jitendra Kumar | Made with ❤️ using React
      </p>
    </div>
  );
}

export default Contact;

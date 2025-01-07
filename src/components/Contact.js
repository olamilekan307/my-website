import React from "react";

const Contact = () => {
  // The email details
  const emailAddress = "shittuabubakry1@gmail.com"; // Your email address
  const subject = "Inquiry from Your Website";
  const body = "Hi, I'd like to get in touch regarding how i have been inspired as a front-end developer...";
  const cc = ""; // Optional
  const bcc = ""; // Optional

  // Construct the mailto link with additional parameters
  const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}&cc=${encodeURIComponent(cc)}&bcc=${encodeURIComponent(bcc)}`;

  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>
      <p>If you'd like to work together or have any questions, feel free to reach out!</p>
      <a href={mailtoLink}>Email me</a>
    </section>
  );
};

export default Contact;

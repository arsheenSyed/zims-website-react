// import React, { useRef } from "react";
// import emailjs from "@emailjs/browser";
// import "./contact.css";
// import { FaPhone, FaEmail } from "react-icons/fa";

// const Contact = () => {
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm(
//         "service_orovt6q",
//         "template_3j5y7bs",
//         form.current,
//         "3il3ZTg1qCJCt8WnV"
//       )
//       .then(
//         (result) => {
//           console.log(result.text);
//           console.log("message sent");
//         },
//         (error) => {
//           console.log(error.text);
//         }
//       );
//   };

//   return (
//     <section className="contact">
//       <form ref={form} onSubmit={sendEmail}>
//         <label>Name</label>
//         <input className="form-control" type="text" name="user_name" />
//         <label>Email</label>
//         <input className="form-control" type="email" name="user_email" />
//         <label>Message</label>
//         <textarea className="form-control" name="message" />
//         <input className="btn btn-primary" type="submit" value="Send" />
//       </form>
//     </section>
//   );
// };

// export default Contact;

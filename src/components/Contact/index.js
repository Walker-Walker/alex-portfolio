import React, { useState } from "react";
import axios from "axios";
import { validateEmail } from "../../utils/helpers";
require('dotenv').config()
// import  render  from "@testing-library/react";
//I need to use usestate hooks for this cant use props
export default function Contact() {
  const [errorMessage, setErrorMessage] = useState("");

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const { name, email, message } = formState;

  function handleChange(e) {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      console.log(isValid);
      //is valid conditional statement
      if (!isValid) {
        setErrorMessage("Your email is invalid");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage("");
      }
    }

    // console.log('errorMessage', errorMessage);
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  }
  // console.log(formState);

  // completed handleSubmit(e) function via mailtrap documentation  https://blog.mailtrap.io/react-contact-form/#Using_Expressjs_Nodemailer
 
  function handleSubmit(e) {
    e.preventDefault();
    axios({
      method: "POST",
      url: "http://localhost:3001/send", //look up port# //
      data: this.state,
    }).then((response) => {
      if (response.data.status === "success") {
        alert("Message Sent!");
        this.resetForm();
      } else if (response.data.status === "fail") {
        alert("Message failed to send.");
      }
    });
    // console.log(formState);
  }

  function resetForm() {
    this.setState({ name: "", email: "", message: "" });
  }

  // function render() {
    return (
      <section>
        <h1 data-testid="testContact">Contact me</h1>
        <form
          id="contact-form"
          onSubmit={this.handleSubmit.bind(this)} //using props here , looks like I need to use usestate hook
          method="POST"
        >
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              className="form-control"
              defaultValue={name}
              onBlur={handleChange}
              name="name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email address:</label>
            <input
              type="email"
              className="form-control"
              defaultValue={email}
              name="email"
              onBlur={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              name="message"
              className="form-control"
              defaultValue={message}
              onBlur={handleChange}
              row="5"
            />
          </div>
          {errorMessage && (
            <div>
              <p className="error-text">{errorMessage}</p>
            </div>
          )}
          <button data-testid="testButton" type="submit">
            Submit
          </button>
        </form>
      </section>
    );
  }
// }

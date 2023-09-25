import React, { useState } from "react";

const ContactScreen = () => {
  const [formValues, setFormValues] = useState({
    person: "",
    email: "",
    comment: "",
  });

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const sendMessage = (event) => {
    event.preventDefault();
    Email.send({
      Host: "smtp.elasticemail.com",
      Username: "lucaschcobarferreyra@gmail.com",
      Password: "BCB1933977393C8B3360A50698B1D118FEB9",
      To: "lucaschcobarferreyra@gmail.com",
      From: formValues.email,
      Subject: `De: ${formValues.person}`,
      Body: formValues.comment,
    }).then(() => alert("Mensaje enviado"));
  };

  return (
    <div className="container vh-100">
      <div className="row mt-5">
        <div className="col-12 col-md-6 offset-md-3 col-lg-4 offset-lg-4 bg-light p-3 rounded">
          <div>
            <h2 class="mb-3 text-center">Dejanos tu comentario.</h2>
          </div>
          <form onSubmit={sendMessage}>
            <div className="mb-3 d-grid">
              <label>Nombre y apellido</label>
              <input
                type="text"
                className="form-control"
                required
                name="person"
                value={formValues.person}
                onChange={handleChange}
              />
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                required
                name="email"
                value={formValues.email}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3 d-grid">
              <label>Déjanos tu comentario</label>
              <textarea
                type="textarea"
                className="form-control"
                rows={4}
                required
                name="comment"
                value={formValues.comment}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3 d-grid">
              <button className="btn btn-success">Enviar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactScreen;

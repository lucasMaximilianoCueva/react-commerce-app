import React, { useState } from "react";
import "./Checkout.scss";

function Checkout({ orderCreated }) {
  const [name, setName] = useState("");
  const [surName, setSurName] = useState("");
  const [email, setEmail] = useState("");
  const [emailConfirmation, setEmailConfirmation] = useState("");
  const [phone, setPhone] = useState("");

  function isValid() {
    return (
      name !== "" &&
      surName !== "" &&
      phone !== "" &&
      email !== "" &&
      email === emailConfirmation
    );
  }

  function onClickConfirm() {
    orderCreated({
      name: name,
      surName: surName,
      email: email,
      phone: phone,
    });
    console.log("order created");
  }

  return (
    <div className="container">
      <form id="contact" noValidate>
        <h3>Terminar Compra</h3>
        <input
          value={name}
          placeholder="Nombre"
          type="text"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          value={surName}
          placeholder="Apellido"
          type="text"
          onChange={(e) => setSurName(e.target.value)}
        />
        <input
          value={phone}
          placeholder="Teléfono"
          type="tel"
          onChange={(e) => setPhone(e.target.value)}
        />
        <input
          value={email}
          placeholder="Email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          value={emailConfirmation}
          placeholder="Confirme su Email"
          type="email"
          onChange={(e) => setEmailConfirmation(e.target.value)}
        />
      </form>
      <div className="button">
        <button disabled={!isValid()} onClick={onClickConfirm}>
          Check Out
        </button>
      </div>
    </div>
  );
}

export default Checkout;

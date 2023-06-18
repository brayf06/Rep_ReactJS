import { useState } from "react";
import "./OrderForm.css"

export default function CheckoutForm({ onConfirm }) {
  const [userData, setUserData] = useState({
    nombre: "",
    telefono: "",
    mail: "",
  });

  function onInputChange(evt) {
    const prop = evt.target.name;
    const value = evt.target.value;
    
    const newData = { ...userData };
    newData[prop] = value;
    setUserData(newData);
    
  }

  function onSubmit(evt) {
    evt.preventDefault();
    console.log(userData);
    onConfirm(userData);
  }


  return (
    <div id="form-main">
        <div id="form-div">
        <form className="form" id="form1" onSubmit={onSubmit}>
      <h1>Ingresa tus datos para completar tu reserva✈️</h1>
      <div>
        <label className="name">Nombre</label>
        <input className="validate[required,custom[onlyLetter],length[0,100]] feedback-input"
          value={userData.nombre}
          name="nombre"
          type="text"
          onChange={onInputChange}
          
        />
      </div>
      <div>
        <label className="name">Teléfono</label>
        <input className="validate[required,custom[onlyNumber],length[0,100]] feedback-input"
          value={userData.phone}
          name="telefono"
          type="number"
          onChange={onInputChange}
        />
      </div>
      <div>
        <label className="email">Email</label>
        <input className="validate[required,custom[email]] feedback-input"
          value={userData.email}
          name="mail"
          type="text"
          onChange={onInputChange}

        />
      </div>
      <div className="submit">
      <input id="button" type="submit" value="Finalizar Reserva"></input>
      <div className="ease"></div>
      </div>
    </form>
    </div>
 </div> 
  );
}
//
import React, { useState, useContext, useEffect } from "react";
import GooglePayButton from "@google-pay/button-react";
import { Context } from "../store/appContext";
import { FaTrash } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';



const CarritoCompras = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();
  const [userName, setUsername] = useState("");

  useEffect(() => {
    setUsername(localStorage.getItem('username'));
}, [store.carrito]);


  console.log(store.carrito)

  const misterClick = () => {
    const menuSelected = store.cadaMenu.filter((item, index) =>
      store.carrito.map(Number).includes(index)
    );
    const totalPrice = menuSelected.reduce((acc, item) => acc + item.price, 0);
  
    // Llamada a la función de Flux que guardará la información en la base de datos
    actions.guardarInformacion(menuSelected.map(item => item.title).join(', '), totalPrice, userName);
  
//Con esto llamamos a la función que nos permite borrar todos los menús de adentro del Flux
actions.clearCart()

    // Redirección a la ruta "/route-to-pay-12345"
    navigate('/route-to-pay-12345');
  };


  const menuSelected = store.cadaMenu.filter((item, index) =>
    store.carrito.map(Number).includes(index)
  );
  const total = menuSelected.reduce((acc, item) => acc + item.price, 0);
  const shouldShowPayButton = menuSelected.length > 0; 

  return (
    <div className="card d-flex justify-content-end row mx-4 col-4 mt-5 mb-5">
      <h2 className="text-center mt-3 mb-3">Carrito de compras</h2>
      <div className="mx-3 mb-3">
        {menuSelected.map((item) => (
          <div className="d-flex justify-content-between">
          <div key={item.id}>
          • {item.title}: 
            ${item.price}
          </div>
          <div className="mx-4">
          <FaTrash onClick={() => actions.eliminarDelCarrito(item.index)}/></div>
          </div>
        ))}
        <h5 className="fst-italic fw-normal d-flex justify-content-end mx-5 mb-2 mt-2">Total: $ {total}</h5>
      </div>

<div className="d-flex justify-content-center">

{shouldShowPayButton && (
        <div className="d-flex justify-content-center">
          <button type="button" className="btn btn-outline-warning mt-3 mb-3" onClick={misterClick}>
            Pay TEST
          </button>
        </div>
      )}

</div>
      {/* Este código es el responsable de integrar el botón de Google Pay en nuestra app */}
      <GooglePayButton
        className="d-flex justify-content-center mb-3"
        environment="TEST"
        buttonSizeMode="fill"
        paymentRequest={{
          apiVersion: 2,
          apiVersionMinor: 0,
          allowedPaymentMethods: [
            {
              type: "CARD",
              parameters: {
                allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
                allowedCardNetworks: ["MASTERCARD", "VISA"],
              },
              tokenizationSpecification: {
                type: "PAYMENT_GATEWAY",
                parameters: {
                  gateway: "example",
                  gatewayMerchantId: "exampleGatewayMerchantId",
                },
              },
            },
          ],
          merchantInfo: {
            merchantId: "1764848944884",
            merchantName: "Demo Only (you will not be charged)",
          },
          transactionInfo: {
            totalPriceStatus: "FINAL",
            totalPriceLabel: "Total",
            totalPrice: total.toFixed(2),
            currencyCode: "USD",
            countryCode: "US",
          },
        }}
        onLoadPaymentData={(paymentData) => {
          misterClick();
        }}
      />
      {/* Aquí finaliza el código de integración del botón de Google Pay */}
    </div>
  );
};

export default CarritoCompras;

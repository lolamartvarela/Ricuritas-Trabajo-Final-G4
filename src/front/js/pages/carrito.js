//
import React, {useState, useContext} from "react";
import GooglePayButton from "@google-pay/button-react";
import {Context} from "../store/appContext";

const CarritoCompras = () => {
  const {store, actions} = useContext(Context);

  const menuSelected = store.cadaMenu.filter((item, index) => store.carrito.map(Number).includes(index));
  const total = menuSelected.reduce((acc, item) => acc + item.price, 0);

  return (
    <div>
    <h2>Carrito de compras</h2>
    <ul>
      {menuSelected.map(item => (
        <li key={item.id}>
          <span>{item.title}</span>
          <span>{item.price}</span>
          <button onClick={() => actions.eliminarDelCarrito(item.index)}>Borrar</button>
        </li>
      ))}
    </ul>

    <p>Total: {total}</p>

{/* Este código es el responsable de integrar el botón de Google Pay en nuestra app */}
            <GooglePayButton
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
            addNewPurchase(paymentData);
        }}
      />
            {/* Aquí finaliza el código de integración del botón de Google Pay */}
            </div>
    );
};

export default CarritoCompras;

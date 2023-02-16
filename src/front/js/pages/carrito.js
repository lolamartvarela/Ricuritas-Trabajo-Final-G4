//
import React, { useState, useContext } from "react";
import GooglePayButton from "@google-pay/button-react";
import { Context } from "../store/appContext";

const CarritoCompras = () => {
  const { store, actions } = useContext(Context);

  const menuSelected = store.cadaMenu.filter((item, index) =>
    store.carrito.map(Number).includes(index)
  );
  const total = menuSelected.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="d-flex justify-content-end row col-4 mx-4 mt-5 mb-5">
      <h2 className="mx-3 mb-2">Carrito de compras</h2>
      <ul className="mb-3">
        {menuSelected.map((item) => (
          <li key={item.id}>
            <span>{item.title}</span>
            <span> $ {item.price} </span>
            <button onClick={() => actions.eliminarDelCarrito(item.index)}> 
              <i className="fas fa-trash"></i>
            </button>
          </li>
        ))}
      </ul>

      <p className="mx-3 fst-italic fw-normal">Total: $ {total}</p>

      {/* Este código es el responsable de integrar el botón de Google Pay en nuestra app */}
      <GooglePayButton className="mx-4"
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

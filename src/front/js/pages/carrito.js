//
import React, { useState, useContext } from "react";
import GooglePayButton from "@google-pay/button-react";
import { Context } from "../store/appContext";
import { FaTrash } from "react-icons/fa";

const CarritoCompras = () => {
  const { store, actions } = useContext(Context);

  const menuSelected = store.cadaMenu.filter((item, index) =>
    store.carrito.map(Number).includes(index)
  );
  const total = menuSelected.reduce((acc, item) => acc + item.price, 0);

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
          addNewPurchase(paymentData);
        }}
      />
      {/* Aquí finaliza el código de integración del botón de Google Pay */}
    </div>
  );
};

export default CarritoCompras;

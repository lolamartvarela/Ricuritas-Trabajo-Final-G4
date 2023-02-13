//
import React, {useState} from "react";
import GooglePayButton from "@google-pay/button-react";
import axios from 'axios';


const CarritoCompras = () => {


    const addNewPurchase = async (paymentData) => {
        const pagoRealizado = paymentData ? 'si' : 'no';
        
        try {
          const response = await axios.post('https://3001-lolamartvar-ricuritastr-yk0h84oabi1.ws-us86.gitpod.io/api/compras', {
            monto: total.toFixed(2), // asumiendo que estás utilizando la variable `total`
            fecha: new Date(),
            pago: pagoRealizado
          });
      
          return response.data;
        } catch (error) {
          console.error(error);
        }
      };



    const [carrito, setCarrito] = useState([
        {
            menú: "Polenta con espinaca y portobellos",
            tipo: "Vegetariano",
            día: "lunes",
            precio: 490
        }, {
            menú: "Estofado",
            tipo: "Común",
            día: "martes",
            precio: 670
        }, {
            menú: "Ensalada",
            tipo: "Vegetariano",
            día: "miércoles",
            precio: 270
        },
    ]);

    const total = carrito.reduce((acc, item) => acc + item.precio, 0);

    return (
        <div>
            <h1>Carrito de compras</h1>
            <ul> {
                carrito.map((item, index) => (
                    <li key={index}>
                        {
                        item.menú
                    }
                        -{
                        item.tipo
                    }
                        -{
                        item.día
                    }
                        - ${
                        item.precio
                    }</li>
                ))
            }
                <li>
                    <strong>Total: ${total}</strong>
                </li>
            </ul>

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

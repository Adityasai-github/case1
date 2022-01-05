 import React from 'react'
 import GooglePayButton from '@google-pay/button-react';
 import { Link } from 'react-router-dom';

 function Google() {
    return (
          <div className="payment"> <h1>Your payments are initiated here</h1>
         <hr />
    
         <GooglePayButton
           environment="TEST"
           paymentRequest={{
             apiVersion: 2,
             apiVersionMinor: 0,
             allowedPaymentMethods: [
              {
                type: 'CARD',
                parameters: {
                   allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
                   allowedCardNetworks: ['MASTERCARD', 'VISA'],
                 },
                 tokenizationSpecification: {
                   type: 'PAYMENT_GATEWAY',
                   parameters: {
                    gateway: 'example',
                    gatewayMerchantId: 'exampleGatewayMerchantId',
                  },
                },
               },
             ],
             merchantInfo: {
               merchantId: '12345678901234567890',
               merchantName: 'Farmer',
               
             },
             transactionInfo: {
              totalPriceStatus: 'FINAL',
              totalPriceLabel: 'Total',
               totalPrice: '1',
               currencyCode: 'INR',
               countryCode: 'IN',
             },
             shippingAddressRequired: true,
             callbackIntents: ['SHIPPING_ADDRESS', 'PAYMENT_AUTHORIZATION'],
           }}
           onLoadPaymentData={paymentRequest => {
             console.log('Success', paymentRequest);
          }}
           onPaymentAuthorized={paymentData => {
               console.log('Payment Authorised Success', paymentData)
               return { transactionState: 'SUCCESS'}
           }
          }
          onPaymentDataChanged={paymentData => {
            console.log('On Payment Data Changed', paymentData)
            
               return { }
               
             }
           }
           
           
           existingPaymentMethodRequired='false'
           buttonColor='black'
          buttonType='Buy'
         />
      
        
        </div>
    
    
         
     
          
    );
 }

export default Google;

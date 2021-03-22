import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton=({price})=>{
    const priceForStripe=price*100
const publishableKey="pk_test_51IXjqMSDLxuLEqMGfWcmUwS3EboNrJE5f210LRjCO2BKwSNZWTqDX0bRGoRaXJZ0qpkduRLlRUe2c9ihLudUkadN00JngBzH24"

const onToken=token=>{
    alert('Payment Succesful!');
}
return(
    <StripeCheckout label="Pay Now"
        name="CRWN Clothing Ltd."
        billingAddress
        shippingAddress
        image="https://svgshare.com/i/CUz.svg"
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey}
    />
)}
export default StripeCheckoutButton
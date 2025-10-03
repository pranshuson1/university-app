const Razorpay = require('razorpay');

const razorpay = new Razorpay({
  key_id:process.env.RAZORPAY_KEY_ID,
  key_secret:process.env.RAZORPAY_KEY_SECRET
})

async function createOrder(amount,currency="INR"){
  return razorpay.orders.create({
    amount : Math.round(amount*100),
    currency,
    payment_capture:1
  })
}

module.exports= {razorpay,createOrder}
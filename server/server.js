// This is your test secret API key.
require("dotenv").config();

const stripe = require("stripe")(process.env.REACT_STRIPE_KEY);
const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(path.resolve(__dirname, "../client/build")));

app.use(express.json());

const YOUR_DOMAIN = process.env.CLIENT_URL;
// const YOUR_DOMAIN = "http://localhost:3000/checkout";

app.post("/create-checkout-session", async (req, res) => {
  const line_items = req.body.cartItems.map((item) => {
    return {
      price_data: {
        currency: "usd",
        product_data: {
          name: item.productName,
          images: [item.productImage1],
          metadata: {
            id: item.id,
          },
        },
        unit_amount: item.productPrice * 100,
      },
      quantity: item.quantity,
    };
  });

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    shipping_address_collection: {
      allowed_countries: ["US", "CA"],
    },
    line_items: line_items,
    mode: "payment",
    // success_url: `${YOUR_DOMAIN}/checkout-success?session_id={CHECKOUT_SESSION_ID}`,
    success_url: `${YOUR_DOMAIN}/checkout-success`,
    cancel_url: `${YOUR_DOMAIN}/checkout`,
  });

  res.json({ id: session.id });
});

app.listen(5000, () => console.log("Running on port 5000"));

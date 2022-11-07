// This is your test secret API key.
require("dotenv").config();

const stripe = require("stripe")(process.env.REACT_STRIPE_KEY);
const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(path.resolve(__dirname, "../client/build")));

const indexFile = app.use(
  express.static(path.resolve(__dirname, "../client/build/index.html"))
);

app.use(express.json());

// const YOUR_DOMAIN = process.env.CLIENT_URL;
// const YOUR_DOMAIN = "https://www.hericojewelry.com/";
const YOUR_DOMAIN = "https://www.hericojewelry.com/checkout";

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
    success_url: `${YOUR_DOMAIN}/`,
    cancel_url: `${YOUR_DOMAIN}/`,
  });

  res.json({ id: session.id });
});

const port = process.env.PORT || 5000;

app.get("/*", function (req, res) {
  res.sendFile(indexFile, function (err) {
    if (err) {
      res.status(500).send(err);
    }
  });
});

app.listen(port, () => console.log(`Running on  ${port}`));

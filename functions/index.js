const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")("sk_test_51JDuL2SHnPsK0oOOvsKOuBGCIq0ursJ9YtxBAP4zMo851h4ej7NzBlpxzju8mYFS0yEAUGVjPegp9r4us5e7mpii00Uqhn7uBP"); 

// API

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("API okay!"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request recieved for this amount >>> $", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "usd",
  });

//   // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listen command
exports.api = functions.https.onRequest(app);

// Example endpoint
// http://localhost:5001/amz-36905/us-central1/api
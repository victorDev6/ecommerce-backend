const router = require('express').Router();
// const stripe = require('stripe')(process.env.STRIPE_KEY);
const Stripe = require('stripe');
const stripe = Stripe('sk_test_51KENyaDDdaQt8K4c19hqccTYpv8lHLsY2cCcRGTtCTICJx8H0gR5OZxVA5ZIZqn6U1jio9CObu25nbtyUWbEQcjs00eKOOoTF8');

router.post('/payment', (req, res) => {
    // res.status(200).json(stripe);

    stripe.charges.create({
        source: req.body.tokenId,
        amount: req.body.amount,
        currency: 'usd',
    }, (stripeErr, stripeRes) => {
        if (stripeErr) {
            res.status(500).json(stripeErr);
        } else {
            res.status(200).json(stripeRes);
        }
    });
});

module.exports = router;
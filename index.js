const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3000;

function getWelcomeMessage() {
  return 'Welcome to our service';
}

app.get('/welcome', (req, res) => {
  res.send(getWelcomeMessage());
});

function getGreetingMessage(username) {
  return 'Hello, ' + username + '!';
}
app.get('/greet', (req, res) => {
  let username = req.query.username;
  res.send(getGreetingMessage(username));
});

function checkPassword(password) {
  console.log(password.length);
  if (password.length > 15) {
    return 'Password is strong';
  } else {
    return 'Password is weak';
  }
}

app.get('/check-password', (req, res) => {
  let password = req.query.password;
  res.send(checkPassword(password));
});

function getSum(num1, num2) {
  let sum = num1 + num2;
  return sum.toString();
}

app.get('/sum', (req, res) => {
  let num1 = parseFloat(req.query.num1);
  let num2 = parseFloat(req.query.num2);
  res.send(getSum(num1, num2));
});

function getSubscriptionStatus(username, subscribed) {
  if (subscribed === 'true') {
    return username + ' is subscribed';
  } else {
    return username + ' is not subscribed';
  }
}

app.get('/subscription-status', (req, res) => {
  let username = req.query.username;
  let subscribed = req.query.subscribed;
  res.send(getSubscriptionStatus(username, subscribed));
});

function getDiscountedPrice(price, discount) {
  let discountedPrice = price - (price * discount) / 100;
  return discountedPrice.toString();
}
app.get('/discounted-price', (req, res) => {
  let price = parseFloat(req.query.price);
  let discount = parseFloat(req.query.discount);
  res.send(getDiscountedPrice(price, discount));
});

function getGreetingMessage(age, gender, name) {
  return (
    'Hello, ' + name + '! You are a ' + age.toString() + ' year old ' + gender
  );
}

app.get('/personalised-greeting', (req, res) => {
  let age = parseFloat(req.query.age);
  let gender = req.query.gender;
  let name = req.query.name;
  res.send(getGreetingMessage(age, gender, name));
});

function getfinalPrice(price, discount, tax) {
  let discountedPrice = price - price * (discount / 100);
  let finalPrice = discountedPrice + discountedPrice * (tax / 100);
  return finalPrice.toString();
}

app.get('/final-price', (req, res) => {
  let price = parseFloat(req.query.price);
  let discount = parseFloat(req.query.discount);
  let tax = parseFloat(req.query.tax);
  res.send(getfinalPrice(price, discount, tax));
});

function geTotalExerciseTime(running, cycling, swimming) {
  let totalTime = running + cycling + swimming;
  return totalTime.toString();
}

app.get('/total-exercise-time', (req, res) => {
  let running = parseFloat(req.query.running);
  let cycling = parseFloat(req.query.cycling);
  let swimming = parseFloat(req.query.swimming);

  res.send(geTotalExerciseTime(running, cycling, swimming));
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

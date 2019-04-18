const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

const ticketSchema = new mongoose.Schema({
  problem: String,
});


// create a model for tickets
const Ticket = mongoose.model('Ticket', ticketSchema);

router.post('/', async (req, res) => {
  const ticket = new Ticket({
    problem: req.body.addedProblem
  });
  try {
    await ticket.save();
    return res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

router.get('/', async (req, res) => {
  try {
    let tickets = await Ticket.find();
    res.send(tickets);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});


router.delete('/:id', async (req, res) => {
  try {
    await Ticket.deleteOne({
      _id: req.params.id
    });
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

module.exports = {
  model: Ticket,
  routes: router,
}

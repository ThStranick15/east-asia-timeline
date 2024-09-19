const router = require('express').Router();
const {Event} = require('../models')

//GET all events /api/events
router.get('/events', async (req,res) => {
    try {
        const events = await Event.find();
        res.json(events)
    } catch (error) {
        console.log(error)
    }
})

//GET Event by Name /api/event/:name
router.get('/event/:name', async (req,res) => {
    const eventName = req.params.name
    try {
        const event = await Event.findOne({name: eventName});
        res.json(event)
    } catch (error) {
        console.log(error)
    }
})

module.exports = router;
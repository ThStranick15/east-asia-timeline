const {model, Schema} = require('mongoose')

const EventSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    date:{
        type: Number,
        required: true
    },
    img:{
        type: String
    },
    text:{
        type:String,
        required: true
    }
})

const Event = model('Event', EventSchema)

module.exports = Event
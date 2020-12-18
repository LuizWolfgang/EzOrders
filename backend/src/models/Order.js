const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    table:{
        type:String,
        required: true,
    },
    description:{
        type:String,
        required: true,
    },
    status:{
        type:String,
        enum: ['PENDING', 'PREPARING', 'DONE'],
        default: 'PENDING', // esse default e para sempre deixar o pedido no estado de pendente, sem precisa ter que informar toda vez que um pedido for criado
    },
});

module.exports = mongoose.model('Order', OrderSchema);
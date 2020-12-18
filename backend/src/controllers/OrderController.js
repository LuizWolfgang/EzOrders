const Order = require('../models/Order')


class OrderController {
    async index(req, res){
        //LISTAR pedidos

        const orders = await Order.find();
        res.json(orders);
    }


    async store(req, res){
        //CRIAR pedidos

        const { table, description} = req.body; //pegar do corpo da requisiçao

        if(!table || !description){//validaçao
            return res.sendStatus(400);
        }

        const order = await Order.create({//criando os campos table e description
            table, description,
        });
        req.io.emit('newOrder', order);
        res.json(order);
    }


     async update(req, res){
        //ALTERAR pedidos

        const { id } = req.params;
        const { status } = req.body;

        if(!status){
        return res.sendStatus(400);
        }

        const order = await Order.findByIdAndUpdate(
            {_id: id }, //esse ultimo id é o que veio dos params, o mongo vai igualar ele ao id do banco, se for igual vai fazer a alterçao
            { status },
            {new: true}// retorna o status atualizado toda vez que fizer a alteração dele
        );
        req.io.emit('statusChange', order);
        res.json(order);
    }
}

module.exports = new OrderController();
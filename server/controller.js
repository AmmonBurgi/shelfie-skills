module.exports={
    getAll: (req, res) =>{
        const db = req.app.get('db')
        db.get_all()
        .then(inv =>{
            // console.log(inv)
            res.status(200).send(inv)
        }).catch(err => res.status(500).send(err))
    },
    createPro: (req, res) =>{
        const db = req.app.get('db')
        // console.log(req.body)
        const {name, price, image} = req.body
        // console.log([name, price, image])
        db.create_product([name, price, image])
        .then(inv =>{
            res.status(200).send(inv)
        }).catch(err => res.status(500).send(err))
    },
    editPro: (req, res) =>{
        const db = req.app.get('db')
        const {id} = req.params
        console.log(req.body)
        const {name, price, image} = req.body.body
        console.log(name)
        db.edit_inv([name, price, image, id])
        .then(inv =>{
            res.status(200).send(inv)
        }).catch(err => res.status(500).send(err))
    },
    deletePro: (req, res) =>{
        const db = req.app.get('db')
        const {id} = req.params
        db.delete_inv(id)
        .then(inv =>{
            res.status(200).send(inv)
        }).catch(err => res.status(500).send(err))
    }
}
module.exports = {
    create: ( req,res ) => {
        const dbInstance = req.app.get('db')
        const {name,description,price,imageurl} = req.body

        dbInstance.create_product().then( ([name,description,price,imageur])=> {
            res.status(200).send()
        }).catch( ()=>res.status(200).send())
    },

    getOne: (req,res) => {
        const dbInstance = req.app.get('db')

        dbInstance.read_product([req.params.id])
        .then( (product) => res.status(200).send(product) )
        .catch( () => res.status(500).send() );
    },

    getAll: (req,res) => {
        const dbInstance = req.app.get('db')

        dbInstance.read_products()
        .then( (products) => res.status(200).send(products) )
        .catch( () => res.status(500).send() );
        
    },

    update: ( req, res ) => {
        const dbInstance = req.app.get('db');
    
        dbInstance.update_product([req.params.id,req.query.description])
          .then( () => res.status(200).send() )
          .catch( () => res.status(500).send() );
    },
    
    delete: ( req, res ) => {
        const dbInstance = req.app.get('db');

        dbInstance.delete_product(req.params.id)
            .then( () => res.status(200).send() )
            .catch( () => res.status(500).send() );
    }
}
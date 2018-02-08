module.exports = {
    create: ( req,res ) => {
        const dbInstance = req.app.get('db')
        const {name,description,price,imageurl} = req.body

        dbInstance.create_product([name,description,price,imageurl]).then( ()=> {
            res.status(200).send()
        }).catch( (error)=>{
            res.status(500).send()
            console.log(error)}
           
        )
    },

    getOne: (req,res) => {
        const dbInstance = req.app.get('db')

        dbInstance.read_product(req.params.id)
        .then( (product) => res.status(200).send(product) )
        .catch( (error) => {res.status(500).send() 
        console.log(error);
        });
    },

    getAll: (req,res) => {
        const dbInstance = req.app.get('db')

        dbInstance.read_products()
        .then( (products) => res.status(200).send(products) )
        .catch( () => res.status(500).send() );
        
    },

    update: ( req, res ) => {
        const dbInstance = req.app.get('db');
    
        dbInstance.update_product([req.params.id,req.query.desc])
          .then( () => res.status(200).send() )
          .catch( (error) => {res.status(500).send() 
            console.log(error);}
        );
    },
    
    delete: ( req, res ) => {
        const dbInstance = req.app.get('db');

        dbInstance.delete_product(req.params.id)
            .then( () => res.status(200).send() )
            .catch( () => res.status(500).send() );
    }
}
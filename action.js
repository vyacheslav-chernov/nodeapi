//********************** Custom action class */

class Action{
    default_run( req, res ){
        res.status(200).send( {} )
    }    
    run( req, res ){
        // getting clone object by protect original value
        let data = (typeof req.jsdata ==='object') ? Object.assign({}, req.jsdata) : req.jsdata ;
        res.setHeader('Content-Type', 'application/json');
        res.status(200).send( JSON.stringify( data ) );
    }
    getActions(){
        return [ 
            { method: 'get', route: '/',      action: this.default_run },
            { method: 'get', route: '/:data', action: this.run }
        ];
        
    }
}

module.exports = Action;
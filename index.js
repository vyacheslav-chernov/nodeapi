var ApiServer = require('./apiserver');

class mainApiAction{
    run( req, res ){
        res.status(200).send( {} )
    }
}

class mainDataApiAction{
    run( req, res ){
        // getting clone object by protect original value
        let data = (typeof req.jsdata ==='object') ? Object.assign({}, req.jsdata) : req.jsdata ;
        res.setHeader('Content-Type', 'application/json');
        res.status(200).send( JSON.stringify( data ) );
    }
}

let api = new ApiServer( 3000 ).
    setAction( 'get', '/', new mainApiAction()).
    setAction( 'get', '/:data', new mainDataApiAction()).
    listen();

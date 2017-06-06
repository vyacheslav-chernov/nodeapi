//********************** Custom action class */

export default class Action{

    run( req, res ){

        let data = Object.assign({}, req.jsdata); //original must be save for other subscribers
        data.out = '1.0.0';

        res.setHeader('Content-Type', 'application/json');
        res.status(200).send( JSON.stringify( data ) );
    }
    getActions(){
        return [
            { method: 'get', route: '/:data', action: this.run }
        ];
    }
}

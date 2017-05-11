
var express = require('express');
var bodyParser = require('body-parser');

class ApiServer{
    constructor ( ) {
        this._app = express();
        
        this._app.use(bodyParser.urlencoded({ extended: false })) // parse application/x-www-form-urlencoded
        this._app.use(bodyParser.json())  // parse application/json      

        this._app.use(express.static('public'));
     }
    setAction( _method, _route, _action){
        this._app.use( _route, (req, res, next)=>{
            req.jsdata = { incoming: req.params.data };
            try{
                 req.jsdata = Object.assign( req.jsdata, JSON.parse(req.params.data) );
            }catch(err){}
            next();
        })
        this._app[_method]( _route, _action );
        return this;
    }
    setActions( _arrActions ){
        if ( typeof _arrActions == "object" )
            _arrActions.map((item)=> this.setAction( item.method, item.route, item.action ));
        return this;
    }
    listen( _port ){
        this._port = _port;
       //------ after all routes --------------------//
        this._app.get   ('*', (req, res) =>  res.send({}) );
        this._app.post  ('*', (req, res) =>  res.send({}) );
        this._app.put   ('*', (req, res) =>  res.send({}) );
        this._app.delete('*', (req, res) =>  res.send({}) );
        this._app.listen( this._port, ()=> console.log('API started at port', this._port));
    }
}

module.exports = ApiServer;
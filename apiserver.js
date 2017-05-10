
var express = require('express');
var bodyParser = require('body-parser');

class ApiServer{
    constructor ( _port ) {
        this._port = _port;
        this._app = express();
        // parse application/x-www-form-urlencoded
        this._app.use(bodyParser.urlencoded({ extended: false }))
        // parse application/json
        this._app.use(bodyParser.json())        
        // parse data
     }
    setAction( _method, _route, _action){
        this._app.use( _route, (req, res, next)=>{
            req.jsdata = {};
            try{
                 req.jsdata = JSON.parse(req.params.data);
            }catch(err){}
            next();
        })
        this._app[_method]( _route, _action.run);
        return this;
    }
    listen(){
        //------ after all routes --------------------//
        this._app.get   ('*', (req, res) =>  res.send({}) );
        this._app.post  ('*', (req, res) =>  res.send({}) );
        this._app.put   ('*', (req, res) =>  res.send({}) );
        this._app.delete('*', (req, res) =>  res.send({}) );
        this._app.listen( this._port, ()=> console.log('API started at port', this._port));
    }
}

module.exports = ApiServer;
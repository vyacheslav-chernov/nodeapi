//*********************************************************************************//
var ApiServer = require('./apiserver');
var Action    = require('./action');

let action = new Action();

let api = new ApiServer( ).
    setActions( action.getActions() ).
    listen( 3030 );

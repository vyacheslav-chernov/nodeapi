//*********************************************************************************//
import ApiServer from "./apiserver";
import Action from "./actions/action";

let action = new Action();

let api = new ApiServer( ).
    setActions( action.getActions() ).
    listen( 3030 );

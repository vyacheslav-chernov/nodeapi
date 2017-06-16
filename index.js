//*********************************************************************************//
import apiserver from "./src/lib/apiserver";
import publicRoutes from "./public_routes"
import privateRoutes from "./private_routes"

let store = {
  version: "0.0.1"
}


let api = new apiserver( )
  .setActions( publicRoutes(store) )
  .setActions( privateRoutes(store) )
  .listen( 3030 );

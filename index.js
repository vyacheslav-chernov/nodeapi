//*********************************************************************************//
import apiserver from "./src/lib/apiserver";
import publicRoutes from "./public_routes"
import privateRoutes from "./private_routes"

let api = new apiserver( )
  .setActions( publicRoutes )
  .setActions( privateRoutes )
  .listen( 3030 );

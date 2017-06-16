//********************** Custom action class */

export default (store)=>  [
            {
              route: '/:data',
              action: fn1( store )
            }
        ];


let fn1 = ( store ) => (req, res) => res.json( {
  ...req.jsdata,
  result: store.version
});

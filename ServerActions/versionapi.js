//********************** Custom action class */

export default (store)=>  [
            {
              method: 'get',
              route: '/:data',
              action: (req, res) => res.json( {
                ...req.jsdata,
                out: store.version
              })
            }
        ];

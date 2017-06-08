//********************** Custom action class */

export default  [
            {
              method: 'get',
              route: '/:data',
              action: (req, res) => res.json( {
                ...req.jsdata,
                out: '1.0.0'
              })
            }
        ];

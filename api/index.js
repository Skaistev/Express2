import { Router } from "express";
import { Operations } from '../pages/operations.js';

const apiRouter = Router();

apiRouter.get ('/api', (req, res)=> {
    res.send (`<h1>sveiki, irasykit veiksmus, kuriuos norite atlikti fomatu: skaicius/opeartorius/skaicius</h1>`)
})



apiRouter.get ('/api/:first/:operator/:second', (req, res)=> {
    const operate  = new Operations(req.params)
    res.send (operate.render())
})

export { apiRouter }


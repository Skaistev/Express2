import { Router } from "express";
import { Operations } from '../pages/operations.js';

const apiRouter = Router();

apiRouter.get ('/api', (req, res)=> {
    res.send ("sveiki")
})


apiRouter.get ('/api/+', (req, res)=> {
    const operate  = new Operations()
    res.send (operate.operate())
})

export { apiRouter }


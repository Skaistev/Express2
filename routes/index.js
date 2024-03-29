import { Router } from "express";

import { PageHome } from '../pages/PageHome.js';
import { Page404 } from '../pages/Page404.js';
import { PageAbout} from '../pages/PageAbout.js'
import { PageServicesList} from '../pages/PageServicesList.js';
import { PageServiceInner}  from '../pages/PageServiceInner.js'
import { PageInnerText } from "../pages/PageInnerText.js";
import { Operations } from "../pages/operations.js";
import { PageCalc } from "../pages/pageCalc.js";


const router = Router ();

router.get('/', (req, res) => {
    const page = new PageHome(req.time);
    res.send(page.render());
});


router.get('/about', (req, res) => {
    const page = new PageAbout(req.time);
    res.send(page.render());
});

router.get('/services', (req, res) => {
    const page = new PageServicesList(req.time);
    res.send(page.render());
});

router.get('/calc', (req, res) => {
    const page = new PageCalc();
    res.send(page.render());
});

router.get('/services/:serviceId', (req, res) => {
    const page = new PageServiceInner(req.params,req.time);
    res.send(page.render());
});

router.get('/services/:serviceId/:Id', (req, res) => {
        const page = new PageInnerText(req.params);
        res.send(page.render());
    });

    router.get('/services/:serviceId/:Id', (req, res) => {
        const page = new Operations(req.params);
        res.send(page.render());
    });
    

router.use((req, res, next) => {
    const page = new Page404();
    res.status(404).send(page.render());
});


export { router };
console.clear();

import express from 'express';
import { helpMe } from './middlewares/helpMe.js';
import { router } from './routes/index.js';
import { apiRouter } from './api/index.js';



const app = express();
const port = 4811;

app.use(express.static('static'));

app.use(helpMe);
app.use(apiRouter);
app.use(router);

// app.get('/', (req, res) => {
//     const page = new PageHome();
//     res.send(page.render());
// });

// app.get('/about', (req, res) => {
//     const page = new PageAbout();
//     res.send(page.render());
// // });

// app.get('/services', (req, res) => {
//     const page = new PageServicesList();
//     res.send(page.render());
// });

// app.get('/services/:serviceId', (req, res) => {
//     const page = new PageServiceInner(req.params);
//     res.send(page.render());
// });

// app.use((req, res, next) => {
//     const page = new Page404();
//     res.status(404).send(page.render());
// });

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.listen(port, () => {
    console.log(`URL: http://localhost:${port}`);
});
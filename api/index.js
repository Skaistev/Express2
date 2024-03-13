import { Router } from "express";
import { Operations } from '../pages/operations.js';

const apiRouter = Router();

apiRouter.get ('/api/count', (req, res)=> {
    res.send (`<h1>sveiki, irasykit veiksmus, kuriuos norite atlikti fomatu: skaicius/opeartorius/skaicius</h1>`)
})

apiRouter.get ('/api/count/:first', (req, res)=> {
    res.send (`<h1>norint skaiciuoti reikia irasyti sekancius parametrus: operatorius, skaicius</h1>`)
})

apiRouter.get ('/api/count/:first/:operator', (req, res)=> {
      res.send (`<h1>truksta dar vieno skaiciaus </h1>`)
})

apiRouter.get ('/api/count/:first/:operator/:second', (req, res)=> {
    const operate  = new Operations(req.params)
    res.send (operate.render())
})


// reikia priimti varda ir pavarde ir grazinti inicialus 

apiRouter.get ('/api/abbr', (req, res)=> {

    res.send (`<h3>Iveskite varda ir pavarde</h3>`)
    })

apiRouter.get ('/api/abbr/:vardas', (req, res)=> {

   res.send (`<h1>Iveskite pavarde</h1>`)
   })

apiRouter.get ('/api/abbr/:vardas/:pavarde', (req, res)=> {
 const a = req.params.vardas;
 const b = req.params.pavarde;

 const j = parseFloat(a);
 const g = parseFloat(b);

 if (!isNaN(j)||!isNaN(g)){
    return res.send ('ivestas ne zodis')
 }

 const v = (a.toUpperCase().split(''))[0]+'.';
 const p = (b.toUpperCase().split(''))[0]+'.';

 

res.send (`<h1>${v} ${p}</h1>`)
})


// kreipiantsi i konkretu url, grazinamas laikas: hh:mm:ss

apiRouter.get ('/api/time', (req, res)=> {

    const time = new Date();
    const val = time.getHours(); 
    const min = time.getMinutes(); 
    const sec = time.getSeconds(); 


    res.send (`<h1>${val}val ${min}min ${sec}sec</h1>`)
    })

    
//  kreipiantsi i konkretu url, grazinamas laikas: hh:mm:ss, bet skaiciai yra zodziai;apgalvoti visas galimas gramatikos situacijas;

apiRouter.get ('/api/time-as-text', (req, res)=> {

    const time = new Date();
    const val = time.getHours(); 
    const min = time.getMinutes(); 
    const sec = time.getSeconds(); 

    const vienetai = [
        '',"Viena","Dvi", "Trys","Keturios","Penkios",'Šešios','Septynios','Astuonios','Devynios','Desimt'
    ]
    const desimtys = [
         '', "vienuolika",'dvylika','trylika','keturiolika','penkiolika','sesiolika','septyniolika','astuoniolika','devyniolika'
    ]
    const simtai = [
        '','dvidešimt','trisdešimt','keturiasdešimt','penkiasdėšimt'
    ]





    res.send (`<h1></h1>`)
    })


export { apiRouter }




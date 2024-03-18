import { Router } from "express";
import { Operations } from '../pages/operations.js';
import { formatTime } from "../lib/formatTime.js";
import { timeValueTitle } from "../lib/formatTimeAsText.js";
import { capitalize } from "../lib/capitalize.js";

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

    res.status(404).send (`<h3>Iveskite varda ir pavarde</h3>`)
    })

apiRouter.get ('/api/abbr/:vardas', (req, res)=> {

   res.send (`<h1>Iveskite pavarde</h1>`)
   })

apiRouter.get ('/api/abbr/:vardas/:pavarde', (req, res)=> {
 const a = req.params.vardas.trim();
 const b = req.params.pavarde.trim();
 const j = parseFloat(a);
 const g = parseFloat(b);

 
 
 if (!isNaN(j)||!isNaN(g)){
    return res.status(400).send ('ivestas ne zodis')
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


    res.send (`<h1>${formatTime(val)} val ${formatTime(min)} min ${formatTime(sec)} sec</h1>`)
    })

    
//  kreipiantsi i konkretu url, grazinamas laikas: hh:mm:ss, bet skaiciai yra zodziai;apgalvoti visas galimas gramatikos situacijas;

apiRouter.get ('/api/time-as-text', (req, res)=> {

    const time = new Date();
    const val = time.getHours(); 
    const min = time.getMinutes(); 
    const sec = time.getSeconds(); 

    const valString = val.toString();
    const minString = min.toString();
    const secString = sec.toString();

    const vienetai = [
        '',"viena","dvi", "trys","keturios","penkios",'šešios','septynios','astuonios','devynios','desimt'
    ]
    const desimtys = [
         '', "vienuolika",'dvylika','trylika','keturiolika','penkiolika','sesiolika','septyniolika','astuoniolika','devyniolika'
    ]
    const simtai = [
        '','dvidešimt','trisdešimt','keturiasdešimt','penkiasdešimt'
    ]
    

    let valandos = '';
    if(val<1){valandos='Nulis'}
    if(val<11&&val>0){valandos=vienetai[val]}
    if(val>10&&val<20){valandos=desimtys[val-10]}
    if(val>19){valandos=simtai[valString[0]-1] +' '+ vienetai[valString[1]]}

    let minutes = '';
    
    if(min<11){minutes=vienetai[min]}
    if(min>10&&min<20){minutes=desimtys[min-10]}
    if(min>19){minutes=simtai[minString[0]-1] +' '+ vienetai[minString[1]]}

    let sekundes = '';
 
    if(sec<11){sekundes=vienetai[sec]}
    if(sec>10&&sec<20){sekundes=desimtys[sec-10]}
    if(sec>19){sekundes=simtai[secString[0]-1] +' '+ vienetai[secString[1]]}


    
    
   console.log(sec);
   res.send (`<h1>${capitalize(valandos)} ${timeValueTitle(val,'h')} ${minutes} ${timeValueTitle(min,'m')} ${sekundes} ${timeValueTitle(sec,'s')}</h1>`)
})





export { apiRouter }




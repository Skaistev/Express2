
let requestCount = 0;


function helpMe (req, res, next){

    req.time = new Date();

    





    console.log(req.time)
   
    requestCount++
 
    console.log(requestCount, req.url);
    next();
}

export { helpMe }
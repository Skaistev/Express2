
let requestCount = 0;


function helpMe (req, res, next){

    requestCount++
 
    console.log(requestCount, req.url);
    next();
}

export { helpMe }
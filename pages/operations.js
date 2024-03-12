import { PageTemplate } from "../lib/PageTemplate.js";

class Operations extends PageTemplate {
    constructor (params) {
        this.params = params;
        console.log(params)

    }

   main (){

    `<h1>${this.params.id}</h1>`
    }
    
}



export { Operations }
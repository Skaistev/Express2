import { PageTemplate } from "../lib/PageTemplate.js";

class Operations extends PageTemplate {

   constructor (params) {

        super();
        this.params = params;
        this.a = parseFloat(params.first);
        this.op = params.operator;
        this.b = parseFloat(params.second);
console.log(typeof this.op);
    }

   main (){

    if (isNaN(this.a)||isNaN(this.b)){
        return `<h1 class="display-5 fw-bold">ivestas ne skaicius</h1>`
    }

    if (this.op !== '+'&& this.op !== '-'&& this.op !== '*'&&this.op !== '/'){
        return `<h1 class="display-5 fw-bold">neteisingas operatorius</h1>`
    }
    let count = 0;

    if (this.op === '+') { count = this.a + this.b} 
    if (this.op === '-') {count = this.a - this.b}
    if (this.op === '*') {count = this.a * this.b}
    if (this.op === '/') {count = this.a / this.b} 

    

    return `<main>
                <section class="container py-5">
                    <h1 class="display-5 fw-bold">SKAICIUOJAM</h1>
                    <p class="col-md-8 fs-4">${this.a}${this.op}${this.b}=${count}
        </main>
    `
    }}
    




export { Operations }
import { servicesData } from "../data/servicesData.js";
import { servicesInnerData } from "../data/servicesInnerData.js";
import { PageTemplate } from "../lib/PageTemplate.js";

class PageServiceInner extends PageTemplate {
    constructor(params,time) {
        super(time);
        this.pageTitle = 'Service';
        this.page = 'services';
        this.params = params;
    
    }

    main() {

   

        let serviceObj = null;

        for (const service of servicesData) {
            if (service.id === this.params.serviceId) {
                serviceObj = service;
                break;
            }
        }
    

        if (serviceObj === null) {
            return `
                <main>
                    <section class="container py-5">
                        <h1 class="display-5 fw-bold">Service not found</h1>
                        <a href="/services" class="btn btn-primary btn-lg">Go to services list</a>
                    </section>
                </main>`;
        }

      
    let innerHTML = '';
  
    for (const inner of servicesInnerData){

        if (this.params.serviceId === inner.serviceId){
        innerHTML += `<div class="col-md-6">
        <div class="h-100 p-5 text-bg-dark rounded-3">
        <h2>${inner.title}</h2>
        <p>Swap the background-color utility and add a \`.text -* \` color utility to mix up the jumbotron look. Then, mix and match with additional component themes and more.</p>
        <button class="btn btn-outline-light" type="button">
        <a href="${inner.href}" class="btn btn-primary my-2">${inner.title}</a>
        </button>
        </div>
    </div>`
    
    }
}
       return `
            <main>
                <section class="container py-5">
                    <h1 class="display-5 fw-bold">${serviceObj.title} page</h1>
                    <p class="col-md-8 fs-4">Using a series of utilities, you can create this jumbotron, just like the one in previous versions of Bootstrap. Check out the examples below for how you can remix and restyle it to your liking.</p>
                    <button class="btn btn-primary btn-lg" type="button">Example button</button>
                </section>
                <section class="container">
                    <div class="row align-items-md-stretch">
                        ${innerHTML}
                    </div>
                </section>
            </main>`;
    }
}

export { PageServiceInner };


import { servicesInnerData } from "../data/servicesInnerData.js";
import { PageTemplate } from "../lib/PageTemplate.js";

class PageInnerText extends PageTemplate {
    constructor(params) {
        super();
        this.pageTitle = 'Service option';
        this.page = 'services';
        this.params = params;
    }

    main() {
        let serviceObj = null;

        for (const service of servicesInnerData) {
            let serviceObj = null;

            for(const service1 of service){

            if (service1.id === this.params.serviceId) {
                serviceObj = service1;
                break;
            }}
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

        return `
            <main>
                <section class="container py-5">
                    <h1 class="display-5 fw-bold">${serviceObj.title} page</h1>
                    <p class="col-md-8 fs-4">Using a series of utilities, you can create this jumbotron, just like the one in previous versions of Bootstrap. Check out the examples below for how you can remix and restyle it to your liking.</p>
                    <button class="btn btn-primary btn-lg" type="button">Example button</button>
                </section>
            </main>`;
    }
}

export { PageInnerText };
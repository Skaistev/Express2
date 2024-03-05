import { header } from "../components/header.js";

function aboutWeather() {
    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Apie Ora</title>
        </head>
        <body>
            ${header()}
            <main>
                <h1>Peržiemojai žiemą, peržiemosi ir pavasarį.</h1>
                <button>Geresnei nuotaikai!</button>
            </main>
        </body>
        </html>`;
}

export { aboutWeather }
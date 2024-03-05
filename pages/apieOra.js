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
                <a style="text-decoration: none; padding: 5px; border: 1px solid black" href="https://www.youtube.com/watch?v=HGj_9qCa2G8">Nespausk:)</a>
            </main>
        </body>
        </html>`;
}

export { aboutWeather }
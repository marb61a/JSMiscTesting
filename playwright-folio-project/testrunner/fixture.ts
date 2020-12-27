import { folio } from "@playwright/test";
import { devices } from "playwright";

const fixtures = folio.extend();

// Extending code will go here
fixtures.browserOptions.override(async ({}, run) => {
    await run({
        headless: false,
        slowMo: 2500,
        // Will open the page with the browser devtools panel open
        devtools: true
    });

});

// Setting screen resolution
// Tests may fail if using a combination of mobile devices and 
// dev tools panel being set to true
fixtures.contextOptions.override(async ({contextOptions}, run) => {
    await run({
        ...contextOptions,
        ...devices["iPhone 11 Pro Max"]
    });

});

const folios = fixtures.build();
export const it = folios.it;

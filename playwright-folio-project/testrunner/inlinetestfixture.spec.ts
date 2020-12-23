import { folio } from "@playwright/test";

const fixtures = folio.extend();

// Extending code will go here

const {it} = fixtures.build();

it("Runs a basic test of the neowin site", async({context}) => {
    var page = await context.newPage();
    await page.goto("https://www.neowin.net");
});

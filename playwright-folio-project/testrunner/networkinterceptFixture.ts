import { folio as base } from '@playwright/test';
import { BrowserContext } from "playwright";

const fixtures = base.extend<{browserExtendContext: BrowserContext}>();

fixtures.browserOptions.override(async ({}, run) => {
    await run({
        headless: false,
        slowMo: 2500,
        devtools: true
    });

});

fixtures.browserExtendContext.init(async({context}, runTest) => {
    await context.route("**\/*.{png,jpg,jpeg,svg}", route => {
        route.fulfill({
            status: 404,
            contentType: "image",
            body: "Not Found!"
        });
    });

    runTest(context);
});

const folios = fixtures.build();
export const it = folios.it;

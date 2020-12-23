import { it, describe, expect } from "@playwright/test";

it("First test for simple demo", () => {
    console.log("hello test")
});

it("First test for navigating to a site demo", async({context}) => {
    var page = await context.newPage();
    await page.goto("http://www.neowin.net");
});

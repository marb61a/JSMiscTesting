import {it} from "./networkinterceptFixture";

it("Intercept network to not load image files", async({browserExtendContext}) => {
    const page = await browserExtendContext.newPage();
    await page.goto("http://todomvc.com");
    
});

import { Given } from "cucumber";

Given("A web broswer is at the Google home page", () => {
    browser.url('/');
});

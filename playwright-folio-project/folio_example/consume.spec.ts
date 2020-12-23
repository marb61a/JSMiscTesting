import { it, expect} from "./fixture";

it("Getting the browser path", async({chrome, firefox}) => {
    console.log(`${chrome} ... ${firefox}`);
    expect(`${chrome}`).toBe('C:\\program files\\google\\chrome\\chrome.exe');
});

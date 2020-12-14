import assert from "assert";

export default title => {
    assert(
        browser.getTitle() === title,
        `Title, ${browser.getTitle()} not equal to ${title}`
    );

}
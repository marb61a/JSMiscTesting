// Search for a keyword
export default (keyword, inputField, submitButton) => {
    inputField.waitForDisplayed(5000);
    inputField.click();
    inputField.setValue(keyword);
    submitButton.waitForDisplayed(5000);
    submitButton.click();
}

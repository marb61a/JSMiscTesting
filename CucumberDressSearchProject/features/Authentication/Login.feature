Feature: Login

    As a user, I want to be able to login to my account to view account details

    Scenario Outline: Attempting to login with valid credentials; <email>
        Given the browser is at the "Login" page
        When the user tries to use the "valid" credentials
        Then the title of the page should be "My account - My Store"
    
    Scenario Outline: Attempting to login with invalid credentials; <email>
        Given the browser is at the "Login" page
        When the user tries to use "invalid" credentials, "<email>" to login
        Then the title of the page should be "Login - My Store"
        And an authentication error message should say "<error>"

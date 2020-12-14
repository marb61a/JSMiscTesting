Feature: Dress Search

    As a user, I want to be able to search for dresses by type so I can purchase

    Background: 
    Given The browser is at the home page

    Scenario: Search for a type that does not exist
        When The user searches for "floral"
        Then a no results error message is shown
        And no products are listed
    
    Scenario: Search for a type that exists
        When The user searches for "printed"
        Then products are listed
        And search results show products related to "printed"

Feature: Google Searching

    Scenario: Search from the search bar produces correct links
        Given A web broswer is at the Google home page
        When The user enteres "cucumber" into the search bar
        Then links related to "cucumber" are shown on the results page

Feature: Login
    Scenario: Successful Login
        When I log in with "COPSUSER1" and "RedFish1"
        Then I should be logged in

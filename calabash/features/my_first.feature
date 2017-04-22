Feature: Login feature
AS
    User
I want
    To play spaceinvaders


  Scenario:  I can log into my app
    When I press view with id "btn_play"
    Then I should not see "btn_play"

  Scenario: I have LIVES
    When I press view with id "btn_play"
    Then I should see text containing "lives"

  Scenario: I have POINTS
    When I press view with id "btn_play"
    Then I should see text containing "lives"
Feature: Login feature
AS
    User
I want
    To play spaceinvaders


  Scenario:  I can log into my app
    When I wait for the "btn_play" screen to appear
    And I press view with id "btn_play"
    Then I should not see "btn_play"

  Scenario: I have LIVES
    When I wait for the "btn_play" screen to appear
    And I press view with id "btn_play"
    Then I should see text containing "lives"

  Scenario: I have POINTS
    When I wait for the "btn_play" screen to appear
    And I press view with id "btn_play"
    Then I should see text containing "lives"
#USER STORY
#As a REGULAR USER I want to
#shoot with my spaceship
#in order to defeat the enemies

Feature:
	Shoot with my spaceship

As a
	Regular user

I want
	 I want to shoot with my ship in order to defeat the enemies and gain points

    @Priority1
    Scenario: The ship must release a shoot when the user taps on it
    Given The match has been correctly initialized
    When Clicks on the ship
    Then The ship will launch a misil

    @Priority2
    Scenario Outline: The misil should destroy an enemy
    Given The match has been correctly initialized
    When Clicks on the ship
    And Misil reaches the enemy number <EnemyNumber>
    Then Enemy <EnemyNumber> will be defeated

    Examples:
    |EnemyNumber|
    |0          |
    |5          |
    |10         |

  @Priority3
  Scenario Outline: The user should win points when defeating an enemy
    Given The match has been correctly initialized
    When Clicks on the ship
    And The user has <Score> points
    And The user has <Lives> lives
    And Misil reaches an enemy
    Then The score of the user will be <NewScore>
    And The lives of the user will be <NewLives>

    Examples:
      |Score |Lives|NewScore|NewLives|
      |0     |2    |100	    |2       |
      |200   |2    |300	    |3       |
      |400   |2    |500     |4       |
      |900   |2    |1000    |7       |


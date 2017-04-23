$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/featureDisparar.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#USER STORY"
    },
    {
      "line": 2,
      "value": "#As a REGULAR USER I want to"
    },
    {
      "line": 3,
      "value": "#shoot with my spaceship"
    },
    {
      "line": 4,
      "value": "#in order to defeat the enemies"
    }
  ],
  "line": 6,
  "name": "",
  "description": "Shoot with my spaceship\n\nAs a\nRegular user\n\nI want\nI want to shoot with my ship in order to defeat the enemies and gain points",
  "id": "",
  "keyword": "Feature"
});
formatter.before({
  "duration": 3071789,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "The ship must release a shoot when the user taps on it",
  "description": "",
  "id": ";the-ship-must-release-a-shoot-when-the-user-taps-on-it",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 15,
      "name": "@Priority1"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "The match has been correctly initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "Clicks on the ship",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "The ship will launch a misil",
  "keyword": "Then "
});
formatter.match({
  "location": "CucumberStepDefs.the_match_has_been_correctly_initialized()"
});
formatter.result({
  "duration": 83786417,
  "status": "passed"
});
formatter.match({
  "location": "CucumberStepDefs.clicks_on_the_ship()"
});
formatter.result({
  "duration": 55049,
  "status": "passed"
});
formatter.match({
  "location": "CucumberStepDefs.the_ship_will_launch_a_misil()"
});
formatter.result({
  "duration": 28014,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 22,
  "name": "The misil should destroy an enemy",
  "description": "",
  "id": ";the-misil-should-destroy-an-enemy",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 21,
      "name": "@Priority2"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "The match has been correctly initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "Clicks on the ship",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "Misil reaches the enemy number \u003cEnemyNumber\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Enemy \u003cEnemyNumber\u003e will be defeated",
  "keyword": "Then "
});
formatter.examples({
  "line": 28,
  "name": "",
  "description": "",
  "id": ";the-misil-should-destroy-an-enemy;",
  "rows": [
    {
      "cells": [
        "EnemyNumber"
      ],
      "line": 29,
      "id": ";the-misil-should-destroy-an-enemy;;1"
    },
    {
      "cells": [
        "0"
      ],
      "line": 30,
      "id": ";the-misil-should-destroy-an-enemy;;2"
    },
    {
      "cells": [
        "5"
      ],
      "line": 31,
      "id": ";the-misil-should-destroy-an-enemy;;3"
    },
    {
      "cells": [
        "10"
      ],
      "line": 32,
      "id": ";the-misil-should-destroy-an-enemy;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 51274,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "The misil should destroy an enemy",
  "description": "",
  "id": ";the-misil-should-destroy-an-enemy;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 21,
      "name": "@Priority2"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "The match has been correctly initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "Clicks on the ship",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "Misil reaches the enemy number 0",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Enemy 0 will be defeated",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CucumberStepDefs.the_match_has_been_correctly_initialized()"
});
formatter.result({
  "duration": 21855,
  "status": "passed"
});
formatter.match({
  "location": "CucumberStepDefs.clicks_on_the_ship()"
});
formatter.result({
  "duration": 29971,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 31
    }
  ],
  "location": "CucumberStepDefs.misil_reaches_the_enemy_number(String)"
});
formatter.result({
  "duration": 2479677,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 6
    }
  ],
  "location": "CucumberStepDefs.enemy_will_be_defeated(String)"
});
formatter.result({
  "duration": 120332,
  "status": "passed"
});
formatter.before({
  "duration": 40283,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "The misil should destroy an enemy",
  "description": "",
  "id": ";the-misil-should-destroy-an-enemy;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 21,
      "name": "@Priority2"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "The match has been correctly initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "Clicks on the ship",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "Misil reaches the enemy number 5",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Enemy 5 will be defeated",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CucumberStepDefs.the_match_has_been_correctly_initialized()"
});
formatter.result({
  "duration": 20962,
  "status": "passed"
});
formatter.match({
  "location": "CucumberStepDefs.clicks_on_the_ship()"
});
formatter.result({
  "duration": 65099,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 31
    }
  ],
  "location": "CucumberStepDefs.misil_reaches_the_enemy_number(String)"
});
formatter.result({
  "duration": 152165,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 6
    }
  ],
  "location": "CucumberStepDefs.enemy_will_be_defeated(String)"
});
formatter.result({
  "duration": 282209,
  "status": "passed"
});
formatter.before({
  "duration": 57577,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "The misil should destroy an enemy",
  "description": "",
  "id": ";the-misil-should-destroy-an-enemy;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 21,
      "name": "@Priority2"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "The match has been correctly initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "Clicks on the ship",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "Misil reaches the enemy number 10",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Enemy 10 will be defeated",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CucumberStepDefs.the_match_has_been_correctly_initialized()"
});
formatter.result({
  "duration": 29017,
  "status": "passed"
});
formatter.match({
  "location": "CucumberStepDefs.clicks_on_the_ship()"
});
formatter.result({
  "duration": 49994,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 31
    }
  ],
  "location": "CucumberStepDefs.misil_reaches_the_enemy_number(String)"
});
formatter.result({
  "duration": 151692,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 6
    }
  ],
  "location": "CucumberStepDefs.enemy_will_be_defeated(String)"
});
formatter.result({
  "duration": 73014,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 35,
  "name": "The user should win points when defeating an enemy",
  "description": "",
  "id": ";the-user-should-win-points-when-defeating-an-enemy",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 34,
      "name": "@Priority3"
    }
  ]
});
formatter.step({
  "line": 36,
  "name": "The match has been correctly initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 37,
  "name": "Clicks on the ship",
  "keyword": "When "
});
formatter.step({
  "line": 38,
  "name": "The user has \u003cScore\u003e points",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "The user has \u003cLives\u003e lives",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "Misil reaches an enemy",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "The score of the user will be \u003cNewScore\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 42,
  "name": "The lives of the user will be \u003cNewLives\u003e",
  "keyword": "And "
});
formatter.examples({
  "line": 44,
  "name": "",
  "description": "",
  "id": ";the-user-should-win-points-when-defeating-an-enemy;",
  "rows": [
    {
      "cells": [
        "Score",
        "Lives",
        "NewScore",
        "NewLives"
      ],
      "line": 45,
      "id": ";the-user-should-win-points-when-defeating-an-enemy;;1"
    },
    {
      "cells": [
        "0",
        "2",
        "100",
        "2"
      ],
      "line": 46,
      "id": ";the-user-should-win-points-when-defeating-an-enemy;;2"
    },
    {
      "cells": [
        "200",
        "2",
        "300",
        "3"
      ],
      "line": 47,
      "id": ";the-user-should-win-points-when-defeating-an-enemy;;3"
    },
    {
      "cells": [
        "400",
        "2",
        "500",
        "4"
      ],
      "line": 48,
      "id": ";the-user-should-win-points-when-defeating-an-enemy;;4"
    },
    {
      "cells": [
        "900",
        "2",
        "1000",
        "7"
      ],
      "line": 49,
      "id": ";the-user-should-win-points-when-defeating-an-enemy;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 71798,
  "status": "passed"
});
formatter.scenario({
  "line": 46,
  "name": "The user should win points when defeating an enemy",
  "description": "",
  "id": ";the-user-should-win-points-when-defeating-an-enemy;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 34,
      "name": "@Priority3"
    }
  ]
});
formatter.step({
  "line": 36,
  "name": "The match has been correctly initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 37,
  "name": "Clicks on the ship",
  "keyword": "When "
});
formatter.step({
  "line": 38,
  "name": "The user has 0 points",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "The user has 2 lives",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "Misil reaches an enemy",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "The score of the user will be 100",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 42,
  "name": "The lives of the user will be 2",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.match({
  "location": "CucumberStepDefs.the_match_has_been_correctly_initialized()"
});
formatter.result({
  "duration": 35833,
  "status": "passed"
});
formatter.match({
  "location": "CucumberStepDefs.clicks_on_the_ship()"
});
formatter.result({
  "duration": 23729,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 13
    }
  ],
  "location": "CucumberStepDefs.the_user_has_points(String)"
});
formatter.result({
  "duration": 66022,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 13
    }
  ],
  "location": "CucumberStepDefs.the_user_has_lives(String)"
});
formatter.result({
  "duration": 57240,
  "status": "passed"
});
formatter.match({
  "location": "CucumberStepDefs.misil_reaches_an_enemy()"
});
formatter.result({
  "duration": 27687,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 30
    }
  ],
  "location": "CucumberStepDefs.the_score_of_the_user_will_be(String)"
});
formatter.result({
  "duration": 81185,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 30
    }
  ],
  "location": "CucumberStepDefs.the_lives_of_the_user_will_be(String)"
});
formatter.result({
  "duration": 75041,
  "status": "passed"
});
formatter.before({
  "duration": 55290,
  "status": "passed"
});
formatter.scenario({
  "line": 47,
  "name": "The user should win points when defeating an enemy",
  "description": "",
  "id": ";the-user-should-win-points-when-defeating-an-enemy;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 34,
      "name": "@Priority3"
    }
  ]
});
formatter.step({
  "line": 36,
  "name": "The match has been correctly initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 37,
  "name": "Clicks on the ship",
  "keyword": "When "
});
formatter.step({
  "line": 38,
  "name": "The user has 200 points",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "The user has 2 lives",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "Misil reaches an enemy",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "The score of the user will be 300",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 42,
  "name": "The lives of the user will be 3",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.match({
  "location": "CucumberStepDefs.the_match_has_been_correctly_initialized()"
});
formatter.result({
  "duration": 23175,
  "status": "passed"
});
formatter.match({
  "location": "CucumberStepDefs.clicks_on_the_ship()"
});
formatter.result({
  "duration": 25071,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 13
    }
  ],
  "location": "CucumberStepDefs.the_user_has_points(String)"
});
formatter.result({
  "duration": 74618,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 13
    }
  ],
  "location": "CucumberStepDefs.the_user_has_lives(String)"
});
formatter.result({
  "duration": 54394,
  "status": "passed"
});
formatter.match({
  "location": "CucumberStepDefs.misil_reaches_an_enemy()"
});
formatter.result({
  "duration": 31800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "300",
      "offset": 30
    }
  ],
  "location": "CucumberStepDefs.the_score_of_the_user_will_be(String)"
});
formatter.result({
  "duration": 75983,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 30
    }
  ],
  "location": "CucumberStepDefs.the_lives_of_the_user_will_be(String)"
});
formatter.result({
  "duration": 318687,
  "status": "passed"
});
formatter.before({
  "duration": 131730,
  "status": "passed"
});
formatter.scenario({
  "line": 48,
  "name": "The user should win points when defeating an enemy",
  "description": "",
  "id": ";the-user-should-win-points-when-defeating-an-enemy;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 34,
      "name": "@Priority3"
    }
  ]
});
formatter.step({
  "line": 36,
  "name": "The match has been correctly initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 37,
  "name": "Clicks on the ship",
  "keyword": "When "
});
formatter.step({
  "line": 38,
  "name": "The user has 400 points",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "The user has 2 lives",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "Misil reaches an enemy",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "The score of the user will be 500",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 42,
  "name": "The lives of the user will be 4",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.match({
  "location": "CucumberStepDefs.the_match_has_been_correctly_initialized()"
});
formatter.result({
  "duration": 24807,
  "status": "passed"
});
formatter.match({
  "location": "CucumberStepDefs.clicks_on_the_ship()"
});
formatter.result({
  "duration": 28081,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 13
    }
  ],
  "location": "CucumberStepDefs.the_user_has_points(String)"
});
formatter.result({
  "duration": 163473,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 13
    }
  ],
  "location": "CucumberStepDefs.the_user_has_lives(String)"
});
formatter.result({
  "duration": 170383,
  "status": "passed"
});
formatter.match({
  "location": "CucumberStepDefs.misil_reaches_an_enemy()"
});
formatter.result({
  "duration": 101675,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "500",
      "offset": 30
    }
  ],
  "location": "CucumberStepDefs.the_score_of_the_user_will_be(String)"
});
formatter.result({
  "duration": 65683,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 30
    }
  ],
  "location": "CucumberStepDefs.the_lives_of_the_user_will_be(String)"
});
formatter.result({
  "duration": 92169,
  "status": "passed"
});
formatter.before({
  "duration": 34749,
  "status": "passed"
});
formatter.scenario({
  "line": 49,
  "name": "The user should win points when defeating an enemy",
  "description": "",
  "id": ";the-user-should-win-points-when-defeating-an-enemy;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 34,
      "name": "@Priority3"
    }
  ]
});
formatter.step({
  "line": 36,
  "name": "The match has been correctly initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 37,
  "name": "Clicks on the ship",
  "keyword": "When "
});
formatter.step({
  "line": 38,
  "name": "The user has 900 points",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "The user has 2 lives",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "Misil reaches an enemy",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "The score of the user will be 1000",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 42,
  "name": "The lives of the user will be 7",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.match({
  "location": "CucumberStepDefs.the_match_has_been_correctly_initialized()"
});
formatter.result({
  "duration": 24825,
  "status": "passed"
});
formatter.match({
  "location": "CucumberStepDefs.clicks_on_the_ship()"
});
formatter.result({
  "duration": 38771,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "900",
      "offset": 13
    }
  ],
  "location": "CucumberStepDefs.the_user_has_points(String)"
});
formatter.result({
  "duration": 121184,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 13
    }
  ],
  "location": "CucumberStepDefs.the_user_has_lives(String)"
});
formatter.result({
  "duration": 81989,
  "status": "passed"
});
formatter.match({
  "location": "CucumberStepDefs.misil_reaches_an_enemy()"
});
formatter.result({
  "duration": 37416,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1000",
      "offset": 30
    }
  ],
  "location": "CucumberStepDefs.the_score_of_the_user_will_be(String)"
});
formatter.result({
  "duration": 417844,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "7",
      "offset": 30
    }
  ],
  "location": "CucumberStepDefs.the_lives_of_the_user_will_be(String)"
});
formatter.result({
  "duration": 293262,
  "status": "passed"
});
});
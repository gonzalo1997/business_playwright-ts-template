Feature: LinkedIn Login

  Scenario: User logs in successfully
    Given the user opens the LinkedIn login page
    When they enter valid email and password
    Then they should be redirected to the LinkedIn feed
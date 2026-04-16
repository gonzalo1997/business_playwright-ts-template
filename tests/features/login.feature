Feature: LinkedIn Login

  Scenario: User logs in successfully
    Given the user opens the SauceDemo login page
    When they enter valid email and password
    Then they should be redirected to the SauceDemo feed
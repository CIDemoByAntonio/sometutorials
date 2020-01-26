@login
Feature: Facebook Login
  As a facebook user, I want to enter username and pwd as a parameter

  Scenario Outline: validate fb login Scenario1
    Given the user is on facebook login page
    When he enters "<user>" as a user name
    And he enters "<pwd>" as password
    Then check username is present in textbox

    Examples: 
      | user                | pwd       |
      | aseraus@hotmail.com | salsa9228 |

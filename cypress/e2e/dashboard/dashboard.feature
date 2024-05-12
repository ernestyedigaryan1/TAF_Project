@login
Feature: Dashboard functionality

  Background: Fill the dashboard
#    skipped due to login hook
#    Given I am on the login page
#    When I enter valid credentials and click sign in
    When I add a new dashboard
    Then I fill dashboard popup inputs with name "Name" and "Description" and save

  Scenario: User can add a new dashboard
    Then the dashboard should be added successfully

  Scenario: User can delete a newly added dashboard
    And I delete the dashboard
    Then the dashboard should be deleted successfully

  Scenario: User can edit a newly added dashboard
    And I edit the dashboard
    Then the dashboard should be edited successfully
Feature: Cucumber Mathematics

  @regression @smoke @cucumber
  Scenario: Let's eat cucumbers!
    Given I have 5 cucumbers
    When I eat 4 cucumbers
    Then I should have 1 cucumber

  @regression @smoke @carrot
  Scenario: Let's eat some carrots!
    Given I have 10 carrots
    When I eat 5 carrots
    Then I should have 5 carrots

  @regression @carrot @edge-case
  Scenario: Attempting to eat more carrots than available
    Given I have 10 carrots
    When I try to eat 12 carrots
    Then I should get an error "Not enough carrots available. You have 10 but tried to eat 12"
    And I should still have 10 carrots

  @regression @smoke @salad
  Scenario: Let's make a salad!
    Given I have 8 cucumbers
    And I have 5 carrots
    When I make a salad with 3 cucumbers and 2 carrots
    Then I should have 5 cucumbers
    And I should have 3 carrots
    And I should have 1 salad

  @regression @salad
  Scenario: Making multiple salads
    Given I have 10 cucumbers
    And I have 8 carrots
    When I make a salad with 2 cucumbers and 2 carrots
    And I make a salad with 3 cucumbers and 1 carrot
    Then I should have 5 cucumbers
    And I should have 5 carrots
    And I should have 2 salads

  @regression @salad @edge-case
  Scenario: Making a salad with insufficient carrots
    Given I have 10 cucumbers
    And I have 1 carrot
    When I try to make a salad with 3 cucumbers and 5 carrots
    Then I should get salad error "Not enough ingredients to make a salad"
    And I should still have 10 cucumbers
    And I should still have 1 carrot
    And I should have 0 salads

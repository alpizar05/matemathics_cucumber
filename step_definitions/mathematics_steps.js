const { Given, When, Then, Before } = require('@cucumber/cucumber');
const { expect } = require('chai');
const Vegetable = require('../page_objects/vegetable');
const Salad = require('../page_objects/salad');

// World object to store state between steps
let world = {};

// Reset world state before each scenario
Before(function () {
  world = {
    cucumber: new Vegetable('cucumber'),
    carrot: new Vegetable('carrot'),
    salad: new Salad()
  };
});

// Step definitions for cucumbers vegetables
Given('I have {int} cucumber(s)', function (count) {
  world.cucumber.setCount(count);
});

When('I eat {int} cucumber(s)', function (count) {
  world.cucumber.eat(count);
});

Then('I should have {int} cucumber(s)', function (expectedCount) {
  expect(world.cucumber.getCount()).to.equal(expectedCount);
});

Then('I should still have {int} cucumber(s)', function (expectedCount) {
  expect(world.cucumber.getCount()).to.equal(expectedCount);
});

// Step definitions for carrots vegetables
Given('I have {int} carrot(s)', function (count) {
  world.carrot.setCount(count);
});

When('I eat {int} carrot(s)', function (count) {
  world.carrot.eat(count);
});

When('I try to eat {int} carrot(s)', function (count) {
  world.carrot.tryToEat(count);
});

Then('I should have {int} carrot(s)', function (expectedCount) {
  expect(world.carrot.getCount()).to.equal(expectedCount);
});

Then('I should get an error {string}', function (expectedError) {
  expect(world.carrot.getLastError()).to.equal(expectedError);
});

Then('I should still have {int} carrot(s)', function (expectedCount) {
  expect(world.carrot.getCount()).to.equal(expectedCount);
});

// Step definitions for salad making
When('I make a salad with {int} cucumber(s) and {int} carrot(s)', function (cucumberCount, carrotCount) {
  world.salad.make(world.cucumber, world.carrot, cucumberCount, carrotCount);
});

When('I try to make a salad with {int} cucumbers and {int} carrot(s)', function (cucumbers, carrots) {
  world.salad.tryMake(world.cucumber, world.carrot, cucumbers, carrots);
});

Then('I should have {int} salad(s)', function (expectedCount) {
  expect(world.salad.getCount()).to.equal(expectedCount);
});

Then('I should get salad error {string}', function (expectedError) {
  expect(world.salad.getLastError()).to.equal(expectedError);
});

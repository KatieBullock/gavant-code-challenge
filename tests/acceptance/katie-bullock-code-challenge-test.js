import { module, test } from "qunit";
import { click, visit, currentURL } from "@ember/test-helpers";
import { setupApplicationTest } from "ember-qunit";

module("Acceptance | katie bullock code challenge", function (hooks) {
  setupApplicationTest(hooks);

  test("visiting /customers", async function (assert) {
    await visit("/customers");

    assert.equal(currentURL(), "/customers");
    assert.dom("nav").exists();
    assert.dom("h5").hasTextContaining("Results");
    assert.dom(".form-control option").hasText("Sort by name");

    await click("tbody tr");

    assert.equal(currentURL(), "/customers/3");
  });

  test("viewing the details of a customer", async function (assert) {
    await visit("/");
    assert.dom(".customers-table").exists;

    await click(".lt-row");
    assert.equal(currentURL(), "/customers/3");
  });

  test("visting the customer information page", async function (assert) {
    await visit("/customers/3");
    assert.dom("h5").containsText("Customer Information");
    assert.dom("form").exists;

    await click(".btn");
    assert.equal(currentURL(), "/customers");
  });

  test("visiting /dashboard", async function (assert) {
    await visit("/dashboard");

    assert.equal(currentURL(), "/dashboard");
    assert.dom("nav").exists();

    await click("a");

    assert.equal(currentURL(), "/customers");
  });

  test("navigating using the nav-bar", async function (assert) {
    await visit("/customers");

    assert.dom("nav").exists();
    assert.dom("nav a.navbar-brand").hasText("📈 GavantCRM");
    assert.dom("nav a.customers-link").hasText("Customers");
    assert.dom("nav a.dashboard-link").hasText("Dashboard");

    await click("nav a.customers-link");
    assert.equal(currentURL(), "/customers");

    await click("nav a.dashboard-link");
    assert.equal(currentURL(), "/dashboard");
  });
});

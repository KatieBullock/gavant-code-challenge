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
});

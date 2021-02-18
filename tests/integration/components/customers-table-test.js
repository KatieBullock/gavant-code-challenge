import { module, test } from "qunit";
import { setupRenderingTest } from "ember-qunit";
import { render } from "@ember/test-helpers";
import hbs from "htmlbars-inline-precompile";

module("Integration | Component | customers-table", function (hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    this.set("model", []);
  });

  test("it renders all customers by default", async function (assert) {
    await render(hbs`<CustomersTable @model={{this.model}} />`);

    assert.dom(".table").containsText("First Name");
    assert.dom(".table .head").exists();
    assert.dom(".table").containsText("Frodo");
  });
});

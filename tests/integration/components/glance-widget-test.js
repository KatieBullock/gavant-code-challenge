import { module, test } from "qunit";
import { setupRenderingTest } from "ember-qunit";
import { render } from "@ember/test-helpers";
import hbs from "htmlbars-inline-precompile";

module("Integration | Component | glance-widget", function (hooks) {
  setupRenderingTest(hooks);

  test("it renders a widget", async function (assert) {
    await render(hbs`<GlanceWidget />`);

    assert.dom("h5").containsText("At a Glance");
    assert.dom("p.text-muted").containsText("Customers in pipeline");
  });
});

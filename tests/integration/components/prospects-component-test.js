import { module, test } from "qunit";
import { setupRenderingTest } from "ember-qunit";
import { render } from "@ember/test-helpers";
import hbs from "htmlbars-inline-precompile";

module("Integration | Component | prospects-component", function (hooks) {
  setupRenderingTest(hooks);

  test("it renders a widget", async function (assert) {
    await render(hbs`<ProspectsWidget />`);

    assert.dom("h5").containsText("Top Prospects");
  });
});

import Route from "@ember/routing/route";
import { inject as service } from "@ember/service";

export default Route.extend({
  store: service(),

  model(params) {
    //This is returning the customer with the matching id
    return this.store.findRecord("customer", params.customer_id);
  },
});

import Route from "@ember/routing/route";
import { inject as service } from "@ember/service";

export default Route.extend({
  store: service(),

  model() {
    //GET customers, This is returning the customers from the API
    return this.store.findAll("customer", { reload: true });
  },
});
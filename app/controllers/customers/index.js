import Controller from "@ember/controller";
import { computed } from "@ember/object";
import { sort } from "@ember/object/computed";

export default Controller.extend({
  //This receives the results from routes/customers/index.js as []
  sortProperty: "sortedFullName",

  customersSortProps: computed("sortProperty", function () {
    return [this.sortProperty];
  }),

  sortedCustomers: sort("model", "customersSortProps"),

  actions: {
    filterByCompany(param) {
      if (param !== "") {
        return this.store.query("customer", { company: param });
      } else {
        return this.store.findAll("customer");
      }
    },
  },
});

import Controller from "@ember/controller";
import { computed } from "@ember/object";
import { sort } from "@ember/object/computed";

export default Controller.extend({
  //This receives the results from routes/customers/index.js as []
  sortProperty: "sortedFullName",

  customersSortProps: computed("sortProperty", function () {
    return [this.sortProperty];
  }),

  // Unable to figure out how to sort by descending for the budget
  sortedCustomers: sort("model", "customersSortProps"),

  //Filter is attached to the list-filter component in the customers/index.hbs template. If the value of the user's input is equal to the company parameter, then it will return the results containing that company from the api. I failed to figure out how to link it to the results of the event handler
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

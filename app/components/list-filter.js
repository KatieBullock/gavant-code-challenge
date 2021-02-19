import Component from "@ember/component";

export default Component.extend({
  classNames: ["list-filter"],
  value: "",

  init() {
    this._super(...arguments);
    this.filter("").then((results) => this.set("results", results));
  },

  actions: {
    handleFilterEntry() {
      // This value is bound to the value in the input. This is supposed to get the results of the filter action, which is based on what the user types into the search box
      let filterInputValue = this.value;
      let filterAction = this.filter;
      filterAction(filterInputValue).then((filterResults) =>
        this.set("results", filterResults)
      );
    },
  },
});

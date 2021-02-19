import Model from "ember-data/model";
import attr from "ember-data/attr";

export default Model.extend({
  firstName: attr("string"),
  lastName: attr("string"),
  emailAddress: attr("string"),
  phoneNumber: attr("string"),
  company: attr("string"),
  project: attr("string"),
  // Changed attr to number so the budget would sort correctly
  budget: attr("number"),

  //This is for the table to correctly sort by last name and then first name
  get sortedFullName() {
    return `${this.lastName}, ${this.firstName} `;
  },
});

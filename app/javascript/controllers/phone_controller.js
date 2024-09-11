import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["input"];

  connect() {
    this.inputTarget.addEventListener("input", this.format.bind(this));
    console.log('test');
  }

  format(event) {
    let value = event.target.value.replace(/\D/g, ''); // Remove non-digit characters
    let x = value.match(/(\d{0,3})(\d{0,3})(\d{0,4})/); // Capture groups for formatting
    
    if (x) {
      // Construct formatted phone number in the xxx-xxx-xxxx format
      let formattedValue = x[1] 
        + (x[2] ? '-' + x[2] : '') 
        + (x[3] ? '-' + x[3] : '');
      event.target.value = formattedValue; // Apply formatted value
    }
  }
}

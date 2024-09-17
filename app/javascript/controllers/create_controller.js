import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="create"
export default class extends Controller {
  connect() {
    console.log("Create controller connected");
  }

  // Show modal when Create Users button is clicked
  show_modal(e) {
    console.log("When Create Users button is clicked");
    e.preventDefault();
    const modal = document.getElementById('createModal');
    if (modal) {
      modal.style.display = 'block';
    }
  }

  // Confirm create when Submit button is clicked
  async confirm_create(e) {
    console.log("When Submit button is clicked");
    e.preventDefault();

    const form = document.getElementById('reg-form');
    if (form) {
      // Use FormData to serialize form data
      const formData = new FormData(form);

      try {
        // Send an AJAX request to the server
        const response = await fetch(form.action, {
          method: form.method,
          body: formData,
          headers: {
            'Accept': 'application/json'
          }
        });

        if (response.ok) {
          const result = await response.json();
          console.log(result);
          if (result.redirect_url) {
            // Redirect to the list page
            window.location.href = result.redirect_url;
          } else {
            this.close_modal();
          }
        } else {
          const errors = await response.json();
          this.display_errors(errors);
        }
      } catch (error) {
        console.error("Error during form submission:", error);
      }
    } else {
      console.log("Form not found");
    }
  }

  // Hide modal when "Cencel" button is clicked
  close_modal() {
    const modal = document.getElementById('createModal');
    if (modal) {
      modal.style.display = 'none';
    }
  }

  // Display form validation errors
  display_errors(errors) {
    // Clear previous errors
    document.querySelectorAll('.error-message').forEach(el => el.innerHTML = '');

    // Iterate over errors and display them under the corresponding fields
    for (const [field, messages] of Object.entries(errors)) {
      const errorElement = document.getElementById(`error_${field}`);
      if (errorElement) {
        errorElement.innerHTML = messages.join('<br/>');
      }
    }
  }
}

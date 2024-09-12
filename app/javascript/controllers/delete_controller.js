import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="delete"
export default class extends Controller {
  connect() {
    console.log("test")
  }

  //Show modal when click delete button 
  show_modal(e) {
    console.log("click delete button")
    e.preventDefault();
    console.log(e.target);
    const modal = document.getElementById('deleteConfirmationModal');
    modal.style.display = 'block';
  }

  //ConfirmDelete when click  Yes,Delete button
  confirm_delete(e) {
    console.log("click Yes, Delete button");
    e.preventDefault();
    const deleteForm = document.getElementById('delete-form');
    if (deleteForm) {
      deleteForm.submit(); // Trigger form submission
    }
  }

  //Hide modal when click cencel button
  close_modal(e){
    console.log("click button cancel")
    e.preventDefault();
    console.log(e.target)
    const modal = document.getElementById('deleteConfirmationModal');
    modal.style.display = 'none';
  }
}






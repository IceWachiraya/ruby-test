document.addEventListener('turbo:load', () => {
  const modal = document.getElementById('deleteConfirmationModal');
  const confirmDeleteButton = document.getElementById('confirmDelete');
  const cancelDeleteButton = document.getElementById('cancelDelete');
  const closeButton = modal.querySelector('.close');
  let deleteForm = null;

  //Show modal when click delete button 
  document.querySelectorAll('.delete-button').forEach(button => {
    button.addEventListener('click', (event) => {
      event.preventDefault(); 
      deleteForm = button.closest('form');
      modal.style.display = 'block';
    });
  });

 //ConfirmDelete when click  Yes,Delete button
  confirmDeleteButton.addEventListener('click', () => {
    if (deleteForm) {
      deleteForm.submit(); // ส่งฟอร์มเมื่อยืนยัน
    }
  });

    //Hide modal when click cencel button
  function hideModal() {
    modal.style.display = 'none';
  }

  cancelDeleteButton.addEventListener('click', hideModal);
  closeButton.addEventListener('click', hideModal);
});

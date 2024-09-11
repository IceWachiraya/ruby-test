document.addEventListener('turbo:load', () => {
  const modal = document.getElementById('deleteConfirmationModal');
  const confirmDeleteButton = document.getElementById('confirmDelete');
  const cancelDeleteButton = document.getElementById('cancelDelete');
  const closeButton = modal.querySelector('.close');
  let deleteForm = null;

  // แสดงโมดัลเมื่อคลิกที่ปุ่มลบ
  document.querySelectorAll('.delete-button').forEach(button => {
    button.addEventListener('click', (event) => {
      event.preventDefault(); // ป้องกันการส่งฟอร์มทันที
      deleteForm = button.closest('form');
      modal.style.display = 'block';
    });
  });

  // ยืนยันการลบ
  confirmDeleteButton.addEventListener('click', () => {
    if (deleteForm) {
      deleteForm.submit(); // ส่งฟอร์มเมื่อยืนยัน
    }
  });

  // ยกเลิกการลบหรือปิดโมดัล
  function hideModal() {
    modal.style.display = 'none';
  }

  cancelDeleteButton.addEventListener('click', hideModal);
  closeButton.addEventListener('click', hideModal);

  // คลิกนอกโมดัลเพื่อปิดโมดัล
  window.addEventListener('click', (event) => {
    if (event.target === modal) {
      hideModal();
    }
  });
});

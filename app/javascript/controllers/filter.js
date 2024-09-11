document.addEventListener('turbo:load', () => {
    const selectElement = document.getElementById('subject-select');
    if (selectElement) {
      selectElement.addEventListener('change', () => {
        document.getElementById('filter-form').submit();
      });
    }
  });
document.addEventListener('turbo:load', function () {
    var phoneInput = document.getElementById('phone');
    if (phoneInput) {
      phoneInput.addEventListener('input', function (e) {
        var x = e.target.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
        e.target.value = x[1] + (x[2] ? '-' + x[2] : '') + (x[3] ? '-' + x[3] : '');
      });
    }
  });
  
  




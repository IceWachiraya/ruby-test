document.addEventListener("turbo:load", function() { 
    const phoneInput = document.getElementById("phone");

    if (phoneInput) {
      phoneInput.addEventListener("input", function(e) {
        let value = phoneInput.value.replace(/\D/g, ""); 
        if (value.length > 3 && value.length <= 6) {
          value = `${value.slice(0, 3)}-${value.slice(3)}`;
        } else if (value.length > 6) {
          value = `${value.slice(0, 3)}-${value.slice(3, 6)}-${value.slice(6, 10)}`;
        }
        phoneInput.value = value;
      });
    }
});

document.addEventListener("turbo:load", () => { 
    const phoneInput = document.getElementById("phone");

    phoneInput?.addEventListener("input", () => {
        let value = phoneInput.value.replace(/\D/g, "");
        phoneInput.value = value.length > 6 
            ? `${value.slice(0, 3)}-${value.slice(3, 6)}-${value.slice(6, 10)}`
            : value.length > 3 
            ? `${value.slice(0, 3)}-${value.slice(3)}`
            : value;
    });
});

let totalPrice = parseFloat(document.getElementById("total-price").innerText);


const buttons = document.getElementsByClassName("buttons");

for (const button of buttons) {
    button.addEventListener('click', function handler(event) {

        if (totalPrice => 2200) {
            event.target.classList.add('bg-[#1DD100]');
            event.target.setAttribute("disabled", true);

        } else {
            if (totalPrice <= 2200) {
                alert('you sit is not allow');
            }
        }
    })
}
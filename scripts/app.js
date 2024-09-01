let seatCount = 0;
// get all seat elements
const allSeats = document.querySelectorAll('.seat');

for (let seat of allSeats) {
    seat.addEventListener('click', function (event) {
        seatCount++;
        if (seatCount > 4) {
            alert("You can't buy more than 4 seats.");
            return;
        }
        setElementInnerTextById('seat-count', seatCount);
        seat.classList.add('bg-change');
        seat.classList.remove('bg-[#F7F8F8]');
        seat.setAttribute('disabled', true);

        const leftSeats = getElementValueById('seat-left');
        const updatedLeftSeat = leftSeats - 1;
        setElementInnerTextById('seat-left', updatedLeftSeat);

        const seatInfoContainer = document.querySelector('#seat-info-container');
        const li = document.createElement('li');
        li.innerHTML = `
            <div class="*:text-[#03071299] grid grid-cols-3 mb-4">
                <p>${event.target.innerText}</p>
                <p class="pl-5">Economy</p>
                <p class="text-end">550</p>
            </div>
        `
        seatInfoContainer.appendChild(li);

        // set total price
        const updatedTotalPrice = 550 * seatCount;
        setElementInnerTextById('total-price', updatedTotalPrice);
    })
}

// seat count initialization
let seatCount = 0;
// get all seat elements
const allSeats = document.querySelectorAll('.seat');

// function to handle seat click
function handleSeatClick() {
    seatCount++;
    setElementInnerTextById('seat-count', seatCount);

    if (seatCount >= 4) {
        for (let seat of allSeats) {
            seat.removeEventListener('click', handleSeatClick);
            // seat.setAttribute('disabled', true);
        }
    }
}
// Add click event listeners to all seats
for (let seat of allSeats) {
    seat.addEventListener('click', handleSeatClick);
}

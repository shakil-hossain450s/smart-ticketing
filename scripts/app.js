let seatCount = 0;

const allSeats = document.querySelectorAll('.seat');
for(let seat of allSeats){
    seat.addEventListener('click', function(e){
        // const seatCountElement = document.getElementById('seat-count');
        seatCount++;
        setElementInnerTextById('seat-count', seatCount);
        if(seatCount === 4){
            alert('you can not select more than 4 seats');
            return;
        }
    })
}
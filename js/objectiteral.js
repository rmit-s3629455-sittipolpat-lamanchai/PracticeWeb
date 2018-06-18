function Hotel(name, rooms, booked){
    this.name = name;
    this.rooms = rooms;
    this.booked = booked;
    this.checkAvailability = function () {
        return this.rooms - this.booked;
    }
}

let fakeHotel = new Hotel('Fake Hotel', 300, 200);
let loveHotel = new Hotel('Love Hotel', 200, 20);

console.log(fakeHotel.name);
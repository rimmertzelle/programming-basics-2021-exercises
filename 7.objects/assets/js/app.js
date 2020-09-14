//1. all about me
const me = {
  car: {
    brand: "volvo",
    model: "v70",
    wheels: 4,
  },
  familyfriend: ["rimmert", "rozemarijn", "jasper", "nanneke", "streepje"],
  printFriendNames: function () {
    console.log(
      `Mijn favoriete vervoersmiddel is de ${this.car.brand} en die heeft ${this.car.wheels} wielen`
    );
  },
  printTransportation: function () {
    this.familyfriend.forEach((element) => {
      console.log(element);
    });
  },
};

me.printFriendNames();
me.printTransportation();

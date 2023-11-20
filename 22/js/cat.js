var cat1 = {
   name: "Vaska",
   age: 3,
   isSleeping: false,
   consistsOf: {
      murchalo: 25,
      tail: 35
   },
   pet: function() {
      this.isSleeping = true;
      this.consistsOf.murchalo = 55;
   }
};
function Cat(name) {
   this.name = name;
   this.age = 3;
   this.isSleeping = false;
   this.consistsOf = {
      murchalo: 25,
      tail: 35
   }
};

Cat.prototype.pet = function() {
      this.isSleeping = true;
      this.consistsOf.murchalo = 55;
      console.log(this.name, " ", this.consistsOf.murchalo);
};
function Cat(catName) {
    this.catName = catName,
    this.voice = function() {
        console.log("Mew");
    }
}

var barsik = new Cat("Barsik");
var vaska = new Cat("Vaska");
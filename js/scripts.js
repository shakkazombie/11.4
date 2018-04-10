function Phone(brand, price, color, money) {
    this.brand = brand;
    this.price = price;
    this.color = color;
    this.money = money;
}
Phone.prototype.printInfo = function() {
    document.write("The phone brand is " + this.brand + ", color is " + this.color + "and the price is " + this.price + "" + this.money + "</br>");
};

var iPhone6s = new Phone("Apple", 2250, "silver ", "$");
var Samsung = new Phone("Samsung Galaxy S6", 3300, "black ", "$");
var OnePlus = new Phone("OnePlus ONE", 5000, "magenta ", "$");
var Huawei = new Phone("Huwaei P20", 4030, 'brown', "$");

iPhone6s.printInfo();
Samsung.printInfo();
OnePlus.printInfo();
Huawei.printInfo();
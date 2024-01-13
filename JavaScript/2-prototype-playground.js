function Foo(name, rank) {
  this.name = name;
  this.rank = rank;
}

Foo.prototype.sayHello = function () {
  console.log("hi! ", this.name + ":" + this.rank);
};

Foo.sayGoodbye = function () {
  console.log("I wish you all the best! Bye");
};

Foo.createCyberKiller = function (name) {
  return new Foo(name, "cyberKiller");
};

const bar = new Foo("Egor", "leader");

const petyaKiller = Foo.createCyberKiller("Petya");
const vasyaKiller = Foo.createCyberKiller("Vasya");

console.log(bar);
console.log(petyaKiller);
console.log(vasyaKiller);

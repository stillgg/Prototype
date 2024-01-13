class Foo {
  constructor(name, rank) {
    this.name = name;
    this.rank = rank;
  }

  sayHello() {
    console.log("hi! ", this.name + ":" + this.rank);
  }

  static sayGoodbye() {
    console.log("I wish you all the best! Bye");
  }

  static createCyberKiller(name) {
    return new Foo(name, "cyberKiller");
  }
}

const bar = new Foo("Egor", "leader");

const petyaKiller = Foo.createCyberKiller("Petya");
const vasyaKiller = Foo.createCyberKiller("Vasya");

console.log(bar);
console.log(petyaKiller);
console.log(vasyaKiller);

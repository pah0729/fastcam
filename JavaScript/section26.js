class Animal {
  constructor(type, name, sound) {
    this.type = type;
    this.name = name;
    this.sound = sound;
  }
  say() {
    console.log(this.sound);
  }
}

console.log(Animal.prototype.say);

class animal extends Animal {
  constructor(type, name, sound) {
    super(type, name, sound);
  }
}

const dog = new animal("개", "멍멍이", "멍멍");
const cat = new animal("고양이", "야옹이", "야옹");
const kitty = new animal("새끼 고양이", "", "꺄옹");

dog.say();
cat.say();
kitty.say();
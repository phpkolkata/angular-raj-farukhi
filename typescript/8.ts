class Greet {
  name: string; // property

  constructor(name: string) {
    this.name = name;
  }

  hi() {
    console.log("hi ", this.name);
  }
}

let obj: Greet = new Greet("raj");
//   obj.name = "raj";
obj.hi();

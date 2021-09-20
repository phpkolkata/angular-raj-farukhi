class Greet {
  name: string; // property

  hi() {
    console.log("hi ", this.name);
  }
}

let obj: Greet = new Greet();
obj.name = "raj";
obj.hi();

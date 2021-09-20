// public, private, protected

class Greet {
  constructor(private name: string) {}

  hi() {
    console.log("hi ", this.name);
  }
}

let obj: Greet = new Greet("raj");
obj.hi();

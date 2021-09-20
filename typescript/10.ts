class Greet {
  constructor(private _name: string) {}

  hi() {
    console.log("hi", this.name);
  }

  set name(nm) {
    this._name = nm;
  }

  get name() {
    return this._name;
  }
}

let greet = new Greet("suman");
greet.name("raj");
greet.hi();

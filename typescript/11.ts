// export default class Greet {
export class Greet {
  constructor(private name: string) {}

  hi() {
    console.log("hi ", this.name);
  }
}

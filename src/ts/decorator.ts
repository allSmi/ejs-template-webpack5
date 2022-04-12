// function classDecorator<T extends {new(...args:any[]):{}}>(constructor:T) {
//   return class extends constructor {
//       newProperty = "new property";
//       hello = "override";
//   }
// }

function classDecoratorFacory() {
  return function <T extends {new(...args:any[]):{}}> (constructor:T) {
    return class extends constructor {
        newProperty = "new property";
        hello = "override";
    }
  }
}

let Greeter = classDecoratorFacory()(
  class Greeter{
    property = "property";
    hello: string;
    constructor(m: string) {
        this.hello = m;
    }
  }
)

export default Greeter

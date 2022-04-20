// function classDecorator<T extends {new(...args:any[]):{}}>(constructor:T) {
//   return class extends constructor {
//       newProperty = "new property";
//       hello = "override";
//   }
// }

function classDecoratorFacory() {
  return function <
    T extends { new (...args: unknown[]): Record<string, unknown> }
  >(constructor: T) {
    return class extends constructor {
      newProperty = 'new property'
      hello = 'override'
    }
  }
}

const Greeter = classDecoratorFacory()(
  class Greeter {
    property = 'property'
    hello: string
    constructor(m: string) {
      this.hello = m
    }
  }
)

export default Greeter

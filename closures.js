/*
 * Closures (Clausura | Contrato)
 *   Capacidad para mantener referencias
 *   al ambito de una funcion, aun cuando
 *   esta funcion ya no "existe".
 *
 *  - Lexical Scope
 *  - Scope Chain
 */

/*!
 *  Factory Function
 *     - Data Privacy
 *     - Encapsulation
 *
 *  @return new Mouse
 */
function mouse(human) {
  let fullName = human.name;
  let age = human.age;

  function setName(name) {
    fullName = name;
  }

  function sayHello() {
    console.log(`hello, ${human.name}, age: ${human.age}`);
  }

  return { sayHello, setName };
}

let human = { name: "Mario", age: 34 };
const person = mouse(human);

mario.sayHello();
jorge.sayHello();

/*!
 * Stack
 * ---------------------------
 * global() : mouse, mario, jorge, human
 */

/*!
 * Heap
 * ---------------------------
 *  0xmario 0xmouse 0xjorge
 *  0xsayHello 0xhuman
 *
 * ref:
 * 0xmario -> 0xsayHello,0xhuman
 * 0xjorge -> 0xsayHello,0xhuman
 */

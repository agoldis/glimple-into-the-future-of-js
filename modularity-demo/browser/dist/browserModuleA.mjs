import moduleA1 from "./browserModuleA-1.mjs";
import moduleA2 from "./browserModuleA-2.mjs";

export default function A() {
  console.log("> Loaded module A");
  moduleA1();
  moduleA2();
}

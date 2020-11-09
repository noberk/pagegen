# Naming

## PascalCase (type, enum, namespace, interface, class, module)

```ts
type Hobby = string
type WebConnection = { ethernet: unknown }

enum DragComponentItemType {
  Input = 'input',
  Button = 'button',
  Any = 'any',
  Emoji = 'emoji',
  Box = 'containerBox',
}
enum PrimaryColors{
    R，
    G，
    B
}
namespace ExternalComponents {
   const TableLayout: InherentComponentProps = {
    style: {width: 200,height: 200}
  }
   const BoxLayout = {
    style: {width: 200,height: 200}
   }
}
export interface IDispose{  // 加I为interface缩写  用于区分 💡 type = Dispose  💡 interface = IDispose
    dispose():void
}
interface Dispose{

}

module City{} // module
class Bank {} // class
abstract class Element {}   // abstract class


```

## camelCase (function, property, local variable, field)

```ts
function tellMeYourName() {}
function show() {}

{
  name: 'Andrew'
  age: 17
  bodyFat: '18%'
}
Array.aggregate = <T>(pre: T, next: T) => T
let education = 'bachelor degree'
const cities = ['changdu', 'beijing']
const myName = 'Andrew'
```

## FullName old fasion

```ts
const DO_NOT_COPY_THIS = ''
```

# Single Quote

```ts
const nums = ['1', '2']
// the benifit of use single quote that is your don't need to press shift.
```

# Type Declaration

## Specific parameter & return type

```ts
function add(a, b) {
  return a + b
  // bad
}

function add(a: number, b: number): number {
  return a + b
  // good
}
```

## Return const type

```ts
function getNameList() {
  return ['Andrew', 'Mary']
}
function getNameList(): readonly string[] {
  return ['Andrew', 'Mary']
}
```

## Access Modifier

类的字段和方法需要加明确的修饰符

```ts
class Bank {
  //类名称需要大写
  private bankInfo //🔑类成员需要标记修饰符
  constructor(public readonly address: string) {
    //🔑类成员需要标记修饰符
  }
  protected getFinancialReport() {} //🔑类成员需要标记修饰符
  public withdraw() {} //🔑类成员需要标记修饰符
}

abstract class Element {
  //抽象类大写
  public abstract getLocation()
}
```

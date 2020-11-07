# 命名

## PascalCase (类型，枚举，命名空间, 接口)

```ts
type Hobby = string
type WebConnection = { ethernet: unknown }
🐷
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
interface IDispose{
    dispose():void
}

```

## camelCase (函数，属性，局部变量)

```ts
function tellMeYourName() {}
function show()

const DO_NOT_DELETE_THIS_
```


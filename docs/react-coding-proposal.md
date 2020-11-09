# pagegen

# 单元测试

Jest
https://jestjs.io/docs/en/tutorial-react

# State Mangagement

Redux
Context
Recoil

# React Code

## 1、为 React 组件定义合理的 TS 类型描述

```tsx

type ElementSlotProps<T = {}> = {
  data: T
  draggable: boolean
}
export const ElementSlot: FC<ElementSlotProps> = ({ children }) => return <>hello</>
```

## 2、组件名称是大写 html 元素是小写用于区分

```tsx
<Button></Button>
<button></button>
```

## 3、单一原则 降低耦合 提高复用

```tsx
function Button({ children }) {
  //bad
  return (
    <div>
      <button>{children}</button>
    </div>
  )
}

function Button({ children }) {
  //good
  return <button>{children}</button>
}
```

## 4、合理的编写注释

```ts
const timer: Date | number = 0 // 时间器 用于记录当前的时间
```

## 5、使用 React Hook 抽离业务逻辑

https://reactjs.org/docs/hooks-intro.html

## 6、减少不必要的 git 提交，使用合理的注释

```tsx {
function Page(){ return <>Home Page</>}  // 页面级
function ListItem(){ return <ul><li>菜单</li></ul>} //组件级

export default Page  //页面级 用默认导出
export ListItem  // 组件及用 直接导出
}
```

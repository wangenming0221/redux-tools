### react-redux
### 安装redux和react-redux -> yarn add redux react-redux --save
### action本质是一个js对象，对象内部必须要有一个type属性来表示要执行的动作,
### reducer本质就是一个函数,用来响应发送过来的actions，经过处理把state发送给store
### 注意:在Reducer函数中，需要return返回值 这样store才能接收到数据 函数会收到两个参数，第一个是初始化state 第二个是action
### component(store.dispatch) -发送一个action-> Reducer --> Store
### Store是把action和reducer联系在一起的对象
### Store职责: 1.维持应用state 2.提供getState()方法获取state 3.提供dispatch()方法发送action 4.通过subscript()注册监听 5.通过通过subscript()返回值来注监听





### React目前提供的Hook
### hook    用途
### useState    设置和改变state，代替原来的state和setState
### useEffect   代替原来的生命周期，componentDidMount，componentDidUpdate 和 componentWillUnmount 的合并版
### useLayoutEffect 与 useEffect 作用相同，但它会同步调用 effect
### useMemo 控制组件更新条件，可根据状态变化控制方法执行,优化传值
### useCallback useMemo优化传值，usecallback优化传的方法，是否更新
### useRef  跟以前的ref，一样，只是更简洁了
### useContext  上下文爷孙及更深组件传值
### useReducer  代替原来redux里的reducer,配合useContext一起使用
### useDebugValue   在 React 开发者工具中显示自定义 hook 的标签，调试使用。
### useImperativeHandle 可以让你在使用 ref 时自定义暴露给父组件的实例值。
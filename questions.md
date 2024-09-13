1. What is the difference between Component and PureComponent? give an example where it might break my app.

In React, Component and PureComponent are two ways to create reusable UI components.

Differences:
Component: Re-renders every time its parent re-renders or its state/props change.
PureComponent: Optimized to prevent unnecessary re-renders by doing a shallow comparison of props and state. If they haven't changed, it won't re-render.

Where it might break my app:
PureComponent might cause problems if you pass objects or arrays as props and expect the component to re-render when their content changes. This is because PureComponent only does a shallow comparison, meaning it checks if the reference to the object/array is the same, not the content inside it.


2. Context + ShouldComponentUpdate might be dangerous. Can think of why is
   that?

ShouldComponentUpdate can't detect changes inside the Context, and ShouldComponentUpdate won't prevent re-renders when the context updates.
This can impact the performance of your application.


3. Describe 3 ways to pass information from a component to its PARENT.
   1) Callback function - The child component can communicate with its parent by using callback functions. The parent passes a function as a prop to the child, and the child component calls that function with the necessary data as arguments.
   2) Context API - We can create the context and wrap parent component, and manipulate with context value from the child component, at that time parent component allowed to read updated values which are triggered by his child
   3) Global State management (Redux/Effector/MobX) - creating separate state, they are available from every where, and after doing some manipulation inside the children, we can get the corresponding data from parent


4. Give 2 ways to prevent components from re-rendering.
   1) React.memo() (for function components) - higher-order component to wrap functional components. It helps optimize performance by memoizing the component and preventing re-rendering if the component's props haven't changed.
   2) React.PureComponent (for class components) - automatically implements a shallow comparison of props and state in the shouldComponentUpdate method. It prevents re-renders if the props and state haven't changed


5. What is a fragment and why do we need it? Give an example where it might
   break my app.

It gives us the possibility to group multiple elements without adding an extra DOM node. It's represented by the <React.Fragment> or shorthand syntax <>, also you can't use shorthand syntax in the map because you need to pass the key to that.

When we don't want to add extra dom node just for wrapping the child components, so we can use Fragment, but if we write such component without fragment, it will throw an error

```
const MyComponent = () => (
   <div>div1</div>
   <div>div2</div>
);
```

Fragments might break your app when using libraries or techniques that require a single root element for DOM manipulation.


6. Give 3 examples of the HOC pattern.
   1) Authentication Functionality: HOC that checks if a user is authenticated and redirects them if not.
   2) Tracking/Catching: HOCs for tracking user clicks and handling errors to send them to a logging server.
   3) Sharing Data from the Server: HOC that fetches data from the server and provides it to the wrapped components.


7. what's the difference in handling exceptions in promises, callbacks and
   async...await.


Promises - Promises use the `catch()` method to handle error cases, Multiple promises can be chained using .then() and the errors can be caught using a single .catch() at the end of the chain.
Callbacks - Callbacks are a traditional way of handling asynchronous operations in JavaScript. But for avoiding callback hell we should not use this variant
Async/await - Async/await is a more modern and syntactically convenient way to handle asynchronous operations, it's syntactic sugar for Promises, here we should use the `try` and `catch`  to handle errors

8. How many arguments does setState take and why is it async.

The setState method takes two arguments: an object that represents the updated state and an optional callback function that will be executed after the state is updated.
When you call setState, React doesn't immediately update the state object. Instead, it schedules the update and performs it asynchronously during the next rendering phase. This allows React to optimize the rendering process by batching multiple state updates into a single update.

9. List the steps needed to migrate a Class to Function Component.

Remove the class definition and replace it with function declaration, remove lifecycle methods, use useEffect, change state to hook approach with useState, remove `this` keyword, remove all bindings from class, and replace class methods to regular functions, after test the component.

10. List a few ways styles can be used with components.

Inline styles, modular styles, global styles, styled-components


11. How to render an HTML string coming from the server.
   
We can do it by using `dangerouslySetInnerHTML`, by this way we are giving access to react to render it as html
also, we can render an empty element and add some ref to that after the server response we can use `innerHTML` on that ref 
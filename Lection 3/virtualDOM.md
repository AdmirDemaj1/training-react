# What is Virual DOM??

# Purpose of the Virtual DOM

1. Efficiency: The virtual DOM is a performance optimization technique. Directly manipulating the real DOM can be slow, especially for large or frequently changing UIs. By working with the virtual DOM first, React can efficiently calculate the minimal changes needed in the real DOM.
2. Declarative Programming: The virtual DOM aligns with React's declarative approach. You describe the desired UI state, and React handles the updates. This makes your code more readable and maintainable.
3. Batch Updates: React can group multiple virtual DOM updates into a single batch, further improving performance by minimizing DOM manipulations.


## vdom

{
.p {
    value: hi there
}
.section {
    children : { .header { children {.p {text: ky ehste nje header } .value { counter: 2}}}}
}
}


{
.p {
    value: hi there
}
.section {
    children : { .header { children {.p {text: ky ehste nje header } .value { counter: 3}}}}
}
}

-- ONLY COUNTER WAS CHANGED

## Real DOM
{
.p {
    value: hi there
}
.section {
    children : { .header { children {.p {text: ky ehste nje header } .value { counter: 3}}}}
}
}


- In React , the virtual DOM (VDOM) is a lightweight, represantation of the real dom. The VDOM is a tree-like structure that reflects the UI. Its a lightweight copy of your React component hierarchy.

# How the VDOM Works:

1. `State Change`: When a components state or prop change, React creates a new Virtual DOM tree reflecting the updated UI.
2. `Diffing`: React emplos a diffing algorithm to compare the prev virtual dom tree with the new virtual dom created by the state change. This determines the minimal set of changes required in the real DOM.
3. `Reconciliation`: React updates the real DOM based on the differences idntified during diffing. It only modifies necessary parts, minimizing expensive DOM operations like pure Javascript does. 

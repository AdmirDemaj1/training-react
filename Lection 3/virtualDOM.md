# What is Virual DOM??


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

1. State Change: When a components state or prop change, React creates a new Virtual DOM tree reflecting the updated UI.
2. Diffing: React emplos a diffing algorithm to compare the prev virtual dom tree with the new virtual dom created by the state change. This determines the minimal set of changes required in the real DOM.
3. Reconciliation: React updates the real DOM based on the differences idntified during diffing. It only modifies necessary parts, minimizing expensive DOM operations like pure Javascript does. 
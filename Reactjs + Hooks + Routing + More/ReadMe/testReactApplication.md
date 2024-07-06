Approaches to test Reactjs Applications:

1) Manual Testing: 
    - Easy to make mistakes.
    - Time consuming.

2) Automated Testing

3) Jest vs React Testing Library
    - Jest is a "Test Runner" that finds the tests, runs the tests, determines whether the tests passed or failed and reports back in a human readable manner. (Focuses more on the logic for example "functions")
    - RTL is a js testing utility that uses virtual DOM for testing React componets (Focuses more on elements or UI)

4) Types of Tests:
    - Unit Test(Tests individual building blocks "class, component, function", these are isolated and independent of the otehr units)
    - Integration Test(Focuses on a combination of units and ensures they work together)
    - E2E Test(Testing entire app flow and ensuring it works as designed from start to end)

5) When testing React Components you have to follow these steps:
    3A
    - Arrange
    The render method renders a React element into the DOM.

    - Act
    The fireEvent method allows you to fire events to simulate user actions.

    - Assert
    
    
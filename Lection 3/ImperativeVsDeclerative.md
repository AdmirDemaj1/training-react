# Imperative Programming:

`Focus on How`: Imperative programming focuses on describing how to achieve a particular result step by step.
`Direct Control`: In imperative programming, you explicitly specify the sequence of actions or commands that the computer must perform to achieve the desired outcome.
`State Mutation`: It often involves explicitly changing the state of variables and objects throughout the program's execution.

Example:

```JavaScript
// Imperative Approach (Vanilla JavaScript)
const numbers = [1, 2, 3, 4, 5, 6];
const filteredNumbers = [];
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    filteredNumbers.push(numbers[i] * 2);
  }
}
console.log(filteredNumbers); // Output: [4, 8, 12]
```

```JavaScript
// Imperative Approach (Vanilla JavaScript) DOM Manipulation
document.querySelector("button").addEventListener("click", () => {});
```

# Declarative Programming:

`Focus on What`: Declarative programming focuses on what needs to be achieved rather than how to achieve it.
`Higher Level Abstractions`: Instead of specifying the exact sequence of steps, declarative programming uses higher-level abstractions and patterns to describe the desired outcome.
`Avoids State Mutation`: Declarative programming tends to avoid explicit state mutation and instead emphasizes immutability and functional programming principles.

Example:

```JavaScript
// Declarative Approach (ReactJS)
import React from 'react';

const numbers = [1, 2, 3, 4, 5, 6];

const App = () => {
  const filteredNumbers = numbers.filter(num => num % 2 === 0).map(num => num * 2);
  return (
    <div>
      {filteredNumbers.map((num, index) => (
        <p key={index}>{num}</p>
      ))}
    </div>
  );
};

export default App;

```

```JavaScript
import React from 'react';

const ButtonComponent = () => {
  // Define event handler function
  const handleClick = () => {
    // Actions to perform when button is clicked
    console.log('Button clicked!');
  };

  return (
    // Attach event handler to button using onClick attribute
    <button onClick={handleClick}>Click me</button>
  );
};

export default ButtonComponent;

```

# Comparison: 🆚

`Readability and Maintainability`: Declarative code often tends to be more readable and maintainable since it focuses on describing the intention of the code rather than the implementation details.

`Abstraction Level`: Declarative programming abstracts away the low-level implementation details, making it easier to reason about the code and reducing the chances of introducing bugs.

`Flexibility and Composition`: Declarative programming promotes composability and code reuse since you're working with higher-level abstractions that can be combined in various ways to achieve different outcomes.

`Performance`: Imperative code might sometimes be more performant in certain scenarios where low-level optimizations are necessary, but modern JavaScript engines are highly optimized for both imperative and declarative code styles

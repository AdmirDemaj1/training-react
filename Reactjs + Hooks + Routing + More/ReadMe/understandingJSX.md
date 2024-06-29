# WHAT IS JSX ❓

JSX (JavaScript XML) is a syntax extension for JavaScript that allows you to write HTML-like structures within your React code.
It's a popular way to define the user interface (UI) components in React applications.

Here are some key characteristics of JSX:

Looks like HTML: JSX uses familiar HTML tags and attributes to represent UI elements. This makes it easier for developers familiar with HTML to learn and understand React.
Embed JavaScript Expressions: You can embed JavaScript expressions within curly braces {} inside JSX. This allows you to dynamically generate content based on data or logic in your React components.
Not Actual HTML: Despite its HTML-like appearance, JSX is not actual HTML. It's a syntactic sugar that gets transformed into regular JavaScript function calls during the compilation process (usually before the browser runs the code).

```JavaScript
function HelloMessage(props) {
  return (
    <h1>Hello, {props.name}!</h1> // Embed JavaScript expression with curly braces
  );
}

const element = <HelloMessage name="Foo" />;
```

# JSX VS HTML

Breakdown of the key differences between JSX and HTML:

- Nature:

JSX: JavaScript syntax extension. It's not a standalone language; it relies on JavaScript.
HTML: Hypertext Markup Language. It's a standard language for structuring web pages.

- Structure:

JSX: Uses familiar HTML-like tags but allows embedding JavaScript expressions within curly braces {}. This enables dynamic content generation based on data or logic.
HTML: Focuses on defining the structure and content of a web page. It doesn't have built-in logic or dynamic behavior.

- Functionality:

JSX: Primarily used for defining the UI (user interface) of React components. It can handle interactivity through event handlers defined in JavaScript.
HTML: Used to build the basic structure and content of web pages. Interactivity is often added using JavaScript or frameworks like React.

- Processing:

JSX: Gets transformed into regular JavaScript function calls during the compilation process (usually before reaching the browser).
HTML: Interpreted directly by the web browser to render the page structure.

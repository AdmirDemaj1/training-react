# Rules of custom hooks:

1. Only call custom hooks at the top level of your component
 - Do not call them inside loops, conditions, or nested functions

2. Only call Hooks from React Functions/ Components.


# Benefits of custom hooks:

1. Reusable logic
  - If multiple components need the same logic (e.g., fetching data, form handling, authentication), a custom hook can encapsulate this logic to avoid duplication.

2. Seperation Of Concerns
  - Custom hooks help seperate business logic from the UI. This makes the components cleaner and focuses on what the UI should look like, leaving the custom hook to handle the logic

# When not to use custom hooks:
  - Simple Logic 
  - One-off Use
# Link for custom hooks: https://dev.to/rasaf_ibrahim/a-guide-to-react-custom-hooks-2b4h

# When SHould we use useEffect
1. Fetching data from an API
2. Directly manipulating the DOM
3. Storing data in local or session storage
4. Retrieving data from local or session storage
5. Setting up timmers

# When shouldnt useEffect be used
1. Synchronous Logic: Is better to handle this logic directly within the component rendering process.
2. Complex Logic: IF we have complex logic it is better to handle it inside a custom hook.

# How useEffect Affects Performance

1. UseEffect runs after every rerender by default, but you can optimise it by specifying dependencies.

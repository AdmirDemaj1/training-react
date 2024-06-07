But why do I need to use the rest operator to destructure the objects in my application , I can just use optional chaining operator and I get the value that I want ????

There is a big reason about that:

- You may not always need to use destructuring with the optional chaining operator, but sometimes it can make your code more concise and readable.

- While the optional chaining operator can help you safely access nested properties without causing errors, it can also result in long and repetitive code, especially when you need to access multiple nested properties.

- On the other hand, destructuring can help you extract specific properties from an object in a more concise and readable way. This can make your code easier to understand and modify, especially when working with complex objects.

- For example, suppose you have a complex object with nested objects, and you want to extract some properties from the nested object while keeping the remaining properties intact. Here's an example:

```JavaScript

const user = {
  id: 123,
  name: 'John Doe',
  contact: {
    email: 'johndoe@example.com',
    phone: '123-456-7890',
    address: {
      street: '123 Main St',
      city: 'Anytown',
      state: 'CA',
      zip: '12345'
    }
  }
};

// extract email and phone from contact, and keep the rest of the address
const { contact: { email, phone, address: { street, city, state, ...restAddress } } } = user;

console.log(email); // 'johndoe@example.com'
console.log(phone); // '123-456-7890'
console.log(street); // '123 Main St'
console.log(city); // 'Anytown'
console.log(state); // 'CA'
console.log(restAddress); // { zip: '12345' }

```

### Spread Operator

- Allows an iterable such as an array or a string to be expanded in places where zero or more arguments or elements are expected.

It can be used for 5 reasons:

1.  Spread an array into separate elements:

    ```JavaScript
    const nums = [1, 2, 3];
    console.log(...nums); // 1 2 3
    ```

2.  Combine multiple arrays into one array:

    ```JavaScript
     const arr1 = [1, 2];
     const arr2 = [3, 4];
     const arr3 = [5, 6];
     const combined = [...arr1, ...arr2, ...arr3];
     console.log(combined); // [1, 2, 3, 4, 5, 6]
    ```

3.  Copy an array:

    ```JavaScript
    const original = [1, 2, 3];
    const copy = [...original];
    console.log(copy); // [1, 2, 3]
    ```

4.  Convert an iterable into an array:

    ```JavaScript
     const str = 'hello';
     const arr = [...str];
     console.log(arr); // ['h', 'e', 'l', 'l', 'o']
    ```

5.  Pass arguments to a function as an array:
    ```JavaScript
    function sum(a, b, c) {
      return a + b + c;
    }
    const nums = [1, 2, 3];
    console.log(sum(...nums)); // 6
    ```

⚠️❗ The spread operator can also be used with objects, but it is important to note that it creates a shallow copy of the object rather than a deep copy. This means that nested objects and arrays will still be references to the original objects and arrays, not new copies. ⚠️❗

To deep clone an object, you can use a combination of the spread operator and recursion or a third-party library like Lodash.
Here's an example of using recursion to deep clone an object:

```JavaScript

function deepClone(obj) {
  if (typeof obj !== 'object' || obj === null) {
    return obj;
  }

  const clone = Array.isArray(obj) ? [] : {};

  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      clone[key] = deepClone(obj[key]);
    }
  }

  return clone;
}

const original = {
  name: 'John',
  age: 30,
  address: {
    city: 'New York',
    state: 'NY'
  },
  hobbies: ['reading', 'traveling']
};

const cloned = deepClone(original);

console.log(cloned); // { name: 'John', age: 30, address: { city: 'New York', state: 'NY' }, hobbies: [ 'reading', 'traveling' ] }
console.log(cloned === original); // false
console.log(cloned.address === original.address); // false
console.log(cloned.hobbies === original.hobbies); // false


```

⚠️⚠️⚠️
If you are considering how expensive your application is becoming you have to keep in mind that deep cloning an object can be computationally expensive, so it should be used when necessary.

Deep cloning an object is expensive in terms of memory and performance because it requires creating new copies of all the nested objects and arrays. This means that for a large and complex object, deep cloning can be a time-consuming and memory-intensive process.

There are three ways to do deep cloning an object in a memory-efficient way:

1. Use a third-party library like `Lodash`.

2. Use Object pooling, `Object pooling` is a technique where you reuse objects instead of creating new ones. Instead of creating a new object every time you need to deep clone an object, you can use an object pool to recycle previously created objects.

3. Use a custom cloning function: If you need more control over the cloning process, you can write your own custom cloning function. You can use techniques such as memoization and recursion to optimize the cloning process and reduce memory usage.

Here is an example how you can use object pooling to deep clone an object in a memory-efficient way while also avoiding unnecessary cloning of primitive values:

```JavaScript
// Create an object pool for reusing cloned objects
const objectPool = new Map();

function deepClone(object) {
  // Check if the object is already in the pool
  if (objectPool.has(object)) {
    // If it is, return the cloned object from the pool
    return objectPool.get(object);
  }

  let clonedObject;

  // Check the type of the object
  if (Array.isArray(object)) {
    // If it's an array, clone each item recursively
    clonedObject = [];
    for (let i = 0; i < object.length; i++) {
      clonedObject.push(deepClone(object[i]));
    }
  } else if (typeof object === 'object' && object !== null) {
    // If it's an object, clone each property recursively
    clonedObject = {};
    Object.keys(object).forEach(key => {
      // Check if the property is a primitive value
      if (typeof object[key] !== 'object' || object[key] === null) {
        // If it is, simply copy the value instead of cloning it
        clonedObject[key] = object[key];
      } else {
        // If it's an object or array, clone it recursively
        clonedObject[key] = deepClone(object[key]);
      }
    });
  } else {
    // If it's a primitive value, simply copy it
    clonedObject = object;
  }

  // Add the cloned object to the pool for reuse
  objectPool.set(object, clonedObject);

  return clonedObject;
}

//When we want to deep clone an object, we first check if the object is already in the pool. If it is, we simply return the cloned object from the pool instead of creating a new one. This helps reduce memory usage by reusing previously created objects.

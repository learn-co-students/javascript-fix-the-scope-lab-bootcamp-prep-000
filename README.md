-# JavaScript Fix the Scope Lab

## Objectives

- Explore scope in JavaScript
- Exercise bug-finding skills related to scope issues

## Instructions

In this lab, you'll need to debug some issues related to function scope in
JavaScript: variables might not be what we expect, certain variables might be
unavailable, and in general, havoc might be set loose in the current code.

As usual, start by running the specs and reading the results. Then fix some
things, run the tests and repeat.

### `myAnimal` and `yourAnimal`

The first two functions, `myAnimal` and `yourAnimal`, both return a variable
`animal`, but the tests for the two expect different values. The tests are
designed so that:

- you cannot hard code `return 'cat'`
- `yourAnimal` _must_ return a variable named `animal`.
- `yourAnimal` should not reassign the existing `animal` declared on the first
  line (in the _global scope_).

After the initial tests are run for `myAnimal` and `yourAnimal`, `myAnimal` is
tested again to ensure that the original globally scoped `animal` variable is
not altered.

**Hint:** Remember that variables declared inside a function are within the
function's scope.

### `add2`

The third function in `index.js`, `add2()` takes in a number and returns that
number plus two. Well, at least, that is what it _should_ do. What is wrong?

### `funkyFunction` and `theFunk`

The final task of this lab is to figure out what code is needed at the end. The
provided code does not need to change, but something else needs to be added.

### A Hint About `()`

Remember the purpose of using `()` is to call functions in JavaScript. It
essentially tells our code to *execute* the function. A function called without
a `()` (i.e. `functionName` instead of `functionName()`), will return the
function definition but NOT run it. You'll see the return value as `[Function:
functionName]`.

To get our code to execute that function, we instead call `functionName()`,
which executes the code within that function.

As an example, the third test here at first returns: `Error: Expected [Function:
funkyFunction] to equal 'FUNKY!'`

We can make the function execute by saying this: `var theFunk = funkyFunction()`
But this returns ANOTHER FUNCTION definition! If you recall from the previous
lesson, a closure is when a function is returned by another function, allowing
the returned (inner) function to have access to variables declared inside the
scope of the original (outer) function.

```js
// An example closure
function outer() {
  var example = "Greetings "
  return function inner(name) {
    return example + name
  }
}

// greeting is assigned the definition of the inner function
var greeting = outer()

// we can then call greeting and pass in a string
greeting('Proffesor Falken')

// when called, greeting will combine the provided string with the 'example' variable defined in the outer function
// => "Greetings Proffesor Falken"
```

Notice in the above code, `outer()` is calle once, and its return value is
assigned to the `greeting` variable. The return value _is_ the `inner` function
definition. We never explicitly call `inner()` because its definition gets
assigned to `greeting`. Instead, we call `greeting()`!

## Resources

- [MDN: Scope](https://developer.mozilla.org/en-US/docs/Glossary/Scope)

<p class='util--hide'>View <a href='https://learn.co/lessons/javascript-fix-the-scope-lab'>Fix The Scope Lab</a> on Learn.co and start learning to code for free.</p>

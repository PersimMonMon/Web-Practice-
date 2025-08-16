Beginning of Web Notes

Lesson 5: 
1. Variables
2. Re-assgin variables 
3. Cart Quantity practice
4. Shortcuts for re-assigning variables
5. Naming conventions
6. 3 types of variable creation: const, let, var 
Note: use const by default, do not use var 

Lesson 6: 
1. Boolean values (true, false)
2. If-statements      (if (condition) {} else {};)
3. Comparison Operators (===, !==, <=, >=) and Logical Operators (&&, ||, !)
4. Alogirthms (created Rock Paper Scissors)
5. Truthy and Falsy values
6. Shortscuts for if-statements (ternary, guard, default)

Lesson 7:
  1. Functions = lets us reuse code
  2. Return = get a value out of a function 
  3. Parameters = put values into a function
  4. Improved the code for Rock, Paper, Scissors 

    Notes: 
    Functions - lets us reuse code, easier to update code in future, can contain a return 

      Rules of functions and parameters: 
        1. Can't use special words (ex: function)
        2. Can't start with a number
        3. Can't use special characters except: $_

        Use camelCase!

      Scope can help prevent naming conflits. 

Lesson 8:
  1. Objects - group related values together
  2. Added a score to Rock Paper Scissors 
  3. Built-in objects (JSON,localStorage)
  4. More details (null, auto-boxing, references)
  5. Shortcuts (destructuring, shorthand property, shorthand method)

    Notes: 
    Object - groups multiple values together 
  
    Makes our code more organized into one object 
    Use multiple values together 
    Can be used to display all values at once 
    Objects themselves are also values 
    Functions can also be saved in objects (aka Method)

    Dot Notation - to access property of objects (use by default)

    Bracket Notation - let us use properties that don't work with dot notation

    JSON (JavaScript Object Notation)
      -a syntax
      -similar to Javascript object, but has less features
      -difference from JS object: must use double quotes for propery and values, and does not support functions 
      -JSON is more universal, use JSON when we send data between computers 
      -use when we store data 
      -Converts JS Object into JSON 

    Variables are temporary. If we refresh or close the page, all previous data of our variables get deleted. Therefore, we should use JSON to save our data.


    FALSY VALUES: false, 0, ' ', NaN, undefined, null

    NULL VS UNDEFINED:
      null = intentionally want something to be empty 

    AUTO-BOXING: JS wraps string into special object first. For example, console.log('hello.length). Here 'hello' is auto boxed for the length method. Auto-boxing can be applied to numbers and booleans, but not null and undefined.  

    Objects are REFERENCES. 
    For example, 
    const object1 = {
      message: 'hello'
    }; 
    const object2 = object1;  //object2 has same reference as object1 (point to same object in computer's memory)

    object1.message = 'Good job!';   // will change the const object into message: 'Good job!' even though it was a const 

    If we create a new object with same property and values as object1, it will result in falsy because you're comparing references not what's inside. Ex:
    const object3 = {message: 'Good Job!'} -> console.log(object3 === object1) results in false. 

Lesson 9:
  1. Document Object Model(DOM)
  2. document.querySelector(...)
  3. .innerHTML, .innerText, .value
  4. 3 mini projects using the DOM
  5. onkeydown="..."
  6. More details about strings + window object 


    -DOM combines JS and HTML together 
    method = function saved inside object
    -document.querySelector() lets us get any element from the page and put it inside JS  (parameter is a string)
    -Every HTML element has a property .innerHTML
    -Whenever we get a value from the DOM, the value will be a string .
    
    Every event listener gets an event object 
    -onclick and onkeydown are event listeners 
    -clicks and keydowns are events 

Lesson 10: 
  1. Reviewed CSS, and added CSS to projects
  2. .classList (used to add and remove classes, example is adding & removing Subscribed button)
  3. Finished Rock Paper Scissors
  4. Organize JavaScript and CSS code into separate files 

    -classList is an object (has properties and methods we can use like .add() which adds a class to an element)
    -How to change button when user clicks:
      one solution:
        1. add a class onto the button with classList + its add method which adds a class 
        2. this class will have different styles

Lesson 11: 
  1. Arrays = list of values
  2. Loops (while loop, for loop)
  3. Accumulator Pattern
  4. Created a Todo List project
  5. Arrays are references, destructuring
  6. More features of loops: break, continuem loops inside a function

    ARRAYS (acts similar to a list in python)
      -another type of value 
      -represents a list of values 
      -a special type of object 
      -are references

    ARRAY METHODS
      - .push(200)      adds 200 to end of array
      - .splice(x, y)   2 inputs: removed index (x), # of values to remove (y)
      - .includes       checks if array contains a value (can't use on objects)
      - .reverse()      to reverse an array (Note: also reverses original array)

    LOOPS (while loops and for loops)
      -creates a scope 
      -contains loop variable, loop condition, increment step 
      - for loop format: for (loop variable, loop condition, alter variable(ex:i++)) {}
      -break in a loop lets us exit loop early
      -continue in a loop skips 1 iteration

    While vs For Loop
      -Standard loop -> for (use when you know loop count)
      -Non-standard loop -> while (use when unknown loop count)

    3 step process when creating website 
      1. Save the data (ex: save data into array)
      2. Generate the HTML
      3. Make it interactive

    -by default, align-items (property in grid) alters stretch
  
  Lesson 12:

    Notes:
      Reiew: 
        -Types of values: numbers, strings, booleans
        -Functions are also values 
        -can use functions within objects (aka method)
        -create anonymous functions (functions w/o name)
        -function passed to a function (function passed is called a callback)
      
      JS feature: setTimeout(), allows us run function in future
        -takes 2 parameters: function in future and how long to wait before running this function (in ms, 1000ms = 1 second)
        -an asynchronous code = won't line for line to finish before going to next line 
          -benefit: doesn't block our other code from running 
      
      JS feature: setInterval()
        -similar parameters to setTimeout(): function and time in ms
        -keeps running every interval you set time to 
        -returns a number, we can use this to stop the interval (so set let intervalId = setInterval(), then use the return of setInterval to input into clearInterval(parameter) to stop interval)
      
      Synchronous code = will wait for line to finish before going to next line (default)

      -can use .forEach() method of array to loop an arrray
        -if you add a function inside with parameter inside .forEach() it will save value of each item in array and run it 
        -preferred method to loop through an array, easiar to read than a for loop
        -use return instead of continue to skip one iteration
        -not possible to break inside a .forEach(), so use for loop instead

      ARROW FUNCTIION
        -works same as regular functions
        -has shortcuts regulat functions don't have 
          -if it has one parameter, it does not need () 
            -example: const oneParam = param => {}
          -if code is one line, you can remove {} and return statements 
            -example: const oneLine = () => 2 + 3;
        -can do name(){} inside an object (shortcut to make arrow function in objects) instead of doing name: () => {}

      -every HTML element has a method called .addEventListener() which lets us rune code when we interact with element (similar to onclick)
        -parameter of addEventListener() 
          -1. event (the word after on is the event so for onclick the event would be click )
          -2. param number two is a function we want to run 
      
      -addEventListerner() ADVANTAGES over attributes (use this over onclick)
        1. multiple event listeners for an event (can have multiple click events happen at same time)
        2. we can remove an event listener 
          -done by using .removeEventListener() -> parameters event and function 


      

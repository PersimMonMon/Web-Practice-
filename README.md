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
  1. Functions = let us reuse code
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

    
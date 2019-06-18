# Learning Goals
- Learn new ES6 syntax
  - Less code SOMETIMES == cleaner code 
- How to work with objects and arrays NON-destructively
  - Immutability and Pure Functions


- The idea for this lecture is to give you some new Javascript tools to help when you get to React
  - but you can 100% start using the syntax && strategies here in your JS projects TODAY
  - in case you see new syntax reading StackOverflow / blogs / etc you'll have a reference

- Some of this is just new syntax to make our lives easier as developers
  - type less === cleaner code (sometimes) && less RSI
  - that doesn't mean you should try to make everything a one-liner; still has to be readable to YOU and other devs looking at your code

- Some deals with IMMUTATBILITY which is important for working with state in React/Redux (don't mutate the object!)
  - because React relies on Pure Functions (what is?)
  - checks for changes to state object in order to cause app to rerender
  - talk about strategies for working with 
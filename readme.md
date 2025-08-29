1)What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
- getElementById gives the first element of the given id
- getElementsByClassName gives all the elements of the defined classname
- querySelector targets the first match of the given tag name, class, ID, or attributes.
- querySelectorAll returns the nodelist of all elements that match the selector

2)How do you create and insert a new element into the DOM?
-The createElement() method allows us to insert a new element into the DOM.

3)What is Event Bubbling and how does it work?
-Event Bubbling means when an event happens on a child element, it first runs there and then travels through its parents up to the root of document

4)What is Event Delegation in JavaScript? Why is it useful?
-Event delegation is a technique where a single event listener is attached to a parent element to manage events triggered by its child elements. It si useful because it works for dynamically added child
elements.

5)What is the difference between preventDefault() and stopPropagation() methods?
-preventDefault() --- stops the browser’s default action (like stopping a link from opening or a form from submitting).
-stopPropagation() --- stops the event from bubbling up to parent elements.

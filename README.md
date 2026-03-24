# odin_library

**The first JS Project in The Odin Project's FullStack JavaScript Path**

## Project Goal
Practice JavaScript's prototype concept by creating a digital library that makes a new book object upon each data entry by the user.

## How does it work?
1. An array is defined to store the book objects.
2. A book counter variable is defined for later use.
3. The book object is defined with all necessary data.
4. A function to create and push each book into the array is created.
5. An event listener calls a function upon submission to extract the user's data using a FormData Object that is converted into a traditional JS object, then used as arguments for the function to create the book and push it.
6. A function is created to generate a table row for each new book added to the array, with the necessary data and buttons for data manipulation. Each row is built based on the counter previously created.
7. Both the delete button and change read status have their own functions that modify data not only from the table, but also from the array.
8. An event execution function is created to keep the table buttons' event listeners active for any change by the user.
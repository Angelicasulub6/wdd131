// Select elements from the DOM
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

// Listen for button clicks
button.addEventListener('click', function() {

    // Check if the input is not empty
    if (input.value.trim() !== '') {

        // Create a list item
        const li = document.createElement('li');

        // Add the chapter to the list item
        li.textContent = input.value;

        // Create a delete button
        const deleteButton = document.createElement('button');

        // Add the X symbol
        deleteButton.textContent = '❌';

        // Listen for delete button clicks
        deleteButton.addEventListener('click', function() {
            list.removeChild(li);
            input.focus();
        });

        // Add the delete button to the list item
        li.append(deleteButton);

        // Add the list item to the list
        list.append(li);

        // Clear the input field
        input.value = '';
    }

    // Return focus to the input field
    input.focus();
});
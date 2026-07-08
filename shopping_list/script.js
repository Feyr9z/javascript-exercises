const btn = document.getElementById('add-button');
const itemList = document.querySelector('ul');
const input = document.querySelector('input');
const body = document.querySelector('body');

btn.addEventListener('click', () => {
    event.preventDefault();

    const para = document.createElement('li');
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'delete';

    errorMessage = document.createElement('p');
    errorMessage.textContent = 'please add something';

    const value = input.value.trim();
    if (!value) return body.appendChild(errorMessage);

    para.append(value, deleteButton);
    itemList.appendChild(para);

    deleteButton.addEventListener('click', () => {
        itemList.removeChild(para);
    });

    input.value = '';
    input.focus();
});

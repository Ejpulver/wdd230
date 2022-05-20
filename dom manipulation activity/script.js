const input = document.getElementById('favchap');
const button = document.querySelector('button');
const list = document.querySelector('.list');

button.addEventListener('click', () => {
    const myItem = input.value;
    input.value = '';

    const listItem = document.createElement("li");
    const list_button = document.createElement("button");
    const list_text = document.createElement('span');

    if (input = '') {
        
    }
    listItem.append(list_text);
    list_text.append(myItem);
    listItem.append(list_button);
    list_button.textContent = '❌';
    list.append(listItem);

    list_button.addEventListener('click', () => {
        list.remove(listItem);
    })

    input.focus();
}); 



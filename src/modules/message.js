const messageBoxContainer = document.getElementById('message-box');
const messageBox = document.createElement('div');
const success = () => {
  messageBox.classList.add('messagebox');
  messageBox.innerText = 'Succesfully added Score!';
  messageBoxContainer.append(messageBox);
};
const hide = () => {
  messageBox.style.display = 'none';
};
export { success, hide };
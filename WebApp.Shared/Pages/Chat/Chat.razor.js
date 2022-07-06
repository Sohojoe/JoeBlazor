

export function showPrompt(message) {
    return prompt(message, 'Type anything here');
  }


export function addIdToClassInstance(className, idString) {
    var instance = document.getElementsByClassName(className)[0]; 
    instance.setAttribute("id", idString);
}
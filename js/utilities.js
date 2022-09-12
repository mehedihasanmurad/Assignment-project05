function getInputFieldById(inputId){
    const inputManagerField = document.getElementById(inputId);
    const inputManagerFieldString = inputManagerField.value;
    const inputManager = parseFloat(inputManagerFieldString);
    return inputManager;
};

function getElementValueById(elementId){
    const inputCoachField = document.getElementById(elementId);
    const inputCoachFieldString = inputCoachField.value;
    const inputCoach = parseFloat(inputCoachFieldString);
    return inputCoach;
};
const validateName = (name) => name.length > 3;

const validateNumber = (number) => number.length > 6;

const validatePerson = (person) => {
    return validateName(person.name) && validateNumber(person.number)
};

export { validatePerson };

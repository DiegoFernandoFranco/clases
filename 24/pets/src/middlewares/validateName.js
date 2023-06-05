
const validateName = (req, res, next) => {

    const {pet: petName} = req.params;
    const nameRegex = /^[A-Za-z\s]+$/;

    if (!nameRegex.test(petName)) {

    }
}

export default validateName;

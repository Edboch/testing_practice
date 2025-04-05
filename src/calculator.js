export const calculator = {
    add : (num1,num2) => {
        if (!checkValid(num1,num2)) {
            throw new Error("Both numbers must be numbers");
        }
        return num1+num2;
    },

    subtract : (num1,num2) => {
        if (!checkValid(num1,num2)) {
            throw new Error("Both numbers must be numbers");
        }
        return num1-num2;
    },

    times : (num1,num2) => {
        if (!checkValid(num1,num2)){
            throw new Error("Both numbers must be numbers");
        }
        return num1*num2;
    },

    divide : (num1,num2) => {
        if (!checkValid(num1,num2)) {
            throw new Error("Both numbers must be numbers");
        }
        if (num2 === 0) {
            throw new Error("Cannot divide by 0")
        }
        return num1/num2;
    }
}

const checkValid = (a,b) => {
    return (typeof a == 'number' && typeof b == 'number')
}
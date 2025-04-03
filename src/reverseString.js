export const reverseString = (string) => {
    let stringArray = string.split("");
    stringArray.reverse();
    return stringArray.join("");
}
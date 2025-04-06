export function caesarCipher(string,key) {
    const shift = (charCode,base) => {
        let offset = (charCode - base + key) % 26;
        base += (offset + 26) % 26;
        return String.fromCharCode(base);
    }
    let result = '';
    for (let i = 0; i < string.length; i++) {
        let charCode = string.charCodeAt(i);
        if (charCode <= 90 && charCode >= 65) {
            result += shift(charCode, 65);
        } else if (charCode <= 122 && charCode >= 97) {
            result += shift(charCode, 97);
        } else {
            result += string.charAt(i);
        }
    }
    return result;
}

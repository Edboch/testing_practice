export function capitalize(string) {
    let firstLetter = string.charAt(0);
    let remaining = string.slice(1);
    return firstLetter.toUpperCase().concat('',remaining);
}
export function analyzeArray(arr) {
    const length = arr.length;
    const average = (arr.reduce((total,curr) => total+curr,0) / length);
    const max = Math.max(...arr);
    const min = Math.min(...arr);
    return {average,max,min,length};
}
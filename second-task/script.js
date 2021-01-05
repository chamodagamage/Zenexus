
const TheLongestWord =   sentence => {
    const str = sentence.replace(/[^a-zA-Z ]/g, "").split(" ");
    let length = 0;
    let longestword = null;
    str.forEach(str => {
        if (length < str.length) {
            length = str.length;
            longestword = str;
        }
    });
    return longestword;
}
console.log(TheLongestWord("fun&!! Time"));
console.log(TheLongestWord("I love dogs"));

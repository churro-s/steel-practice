'use strict';

function textBlocker(lines) {
    var ret = [], index, word, char;
    if (!lines || !lines.length) {
        return ret;
    }
    for (var i = 0; i < lines.length; i++) {
        index = 0;
        word = lines[i];
        for (var j = 0; j < word.length; j++) {
            char = word[j];
            (ret[index]) && (ret[index] += char) || (ret[index] = "" + char);
            index++;
        }
    }
    return ret;
}

console.log(textBlocker(["AAA", "BBB", "CCC"])); //--> ["ABC", "ABC", "ABC"]
console.log(textBlocker(["AAAAAAAAAAAAA"])); //--> ["A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A"]
console.log(textBlocker(["A", "A", "A", "A", "A"])); //--> ["AAAAA"]

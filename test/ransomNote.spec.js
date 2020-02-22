let ransomNote = require('../ransomNote.js')

describe("ransomNote.makeHistogram", () => {
    let magazine = ["h", "e", "r", "e", "a", "r", "e", "s", "o", "m",
    "e", "n", "i", "c", "e", "c", "l", "o", "t", "h", "e", "s", "t"]
    let output = ransomNote.makeHistogram(magazine)
    test("it returns a hash", () =>{
        expect(output).toEqual({h: 2, e: 6, r: 2, a: 1, s: 2, o: 2, m: 1, n: 1, i: 1, c: 2, l: 1, t: 2})
    })
})
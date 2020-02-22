let ransomNote = require('../ransomNote.js')
let magazine = "Aut Inveniam Viam Aut Faciam"

describe("ransomNote.clean", () => {
    test("given a string, it strips all whitespaces from it, downcases it, and saves all its letters to an array", () => {
        expect(ransomNote.clean(magazine)).toEqual(["a", "u", "t", "i", "n", "v", "e", "n", "i", "a", "m", "v", "i", "a", "m", "a", "u", "t", "f", "a", "c", "i", "a", "m"])
    })
})

describe("ransomNote.makeHistogram", () => {
    
    test("it returns a hash with keys equalling the letters from its input and values equalling their number of repeats", () =>{
        let input = ["a", "u", "t", "i", "n", "v", "e", "n", "i", "a", "m", "v", "i", "a", "m", "a", "u", "t", "f", "a", "c", "i", "a", "m"]
        let output = ransomNote.makeHistogram(input)
        expect(output).toEqual({a: 6, u: 2, t: 2, i: 4, n: 2, v: 2, e: 1, m: 3, f: 1, c: 1})
    })
})

describe("ransomNote.canMakeNote", () => {
    
    test("it returns false if the note cannot be made due to missing letters", () => {
        let note = "Ad Astra Per Aspera"
        let output = ransomNote.canMakeNote(magazine, note)
        expect(output).toEqual(false)
    })

    test("it returns false if the note cannot be made due to insufficient number of repeated letters", () => {
        let note = "cuneate"
        let output = ransomNote.canMakeNote(magazine, note)
        expect(output).toEqual(false)
    })

    test("it returns true if the note can be made", () => {
        let note = "acuminate"
        let output = ransomNote.canMakeNote(magazine, note)
        expect(output).toEqual(true)
    })
})
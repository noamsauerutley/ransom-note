let clean = (input) => {
    return input.replace(/\s/g,'').toLowerCase().split("")
}

let makeHistogram = (input) => {
    let histogram = {}

    for(let letter of input){
        letter in histogram ? histogram[letter] += 1 : histogram[letter] = 1
    }  
    return histogram
}

let canMakeNote = (magazine, note) => {
    let boolean = false

    let cleanedMagazine = clean(magazine)
    let cleanedNote = clean(note)

    if (cleanedMagazine.length >= cleanedNote.length){
        let magazineHistogram = makeHistogram(magazine)
        let noteHistogram = makeHistogram(cleanedNote)
        for(let letter in noteHistogram){
            if (magazineHistogram[letter] && magazineHistogram[letter] >= noteHistogram[letter]){
                boolean = true
            }else{
                boolean = false 
                break
            }
        }
    }
    return boolean
}

module.exports = {
    clean,
    makeHistogram,
    canMakeNote
}
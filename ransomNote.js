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

let canMakeNote = (source, note) => {
    let boolean = false

    let cleanedSource = clean(source)
    let cleanedNote = clean(note)

    if (cleanedSource.length >= cleanedNote.length){
        let sourceHistogram = makeHistogram(source)
        let noteHistogram = makeHistogram(cleanedNote)
        for(let letter in noteHistogram){
            if (sourceHistogram[letter] && sourceHistogram[letter] >= noteHistogram[letter]){
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
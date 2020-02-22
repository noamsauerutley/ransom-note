let makeHistogram = (magazine) => {
    let histogram = {}
    for(let letter of magazine){
        letter in histogram ? histogram[letter] += 1 : histogram[letter] = 1
    }  
    return histogram
}

let canMakeNote = (magazine, note) => {
    let boolean = false
    if (magazine.length >= note.length){
        let magazineHistogram = makeHistogram(magazine)
        let noteHistogram = makeHistogram(note)
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
    makeHistogram,
    canMakeNote
}
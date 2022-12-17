export const getInitial = (word) => {
    let space = false
    // Miramos si hay una o mas palabras
    for (let i = 0; i < word.length; i++) {
        if (word[i] === ' ') {
            space = true
        }
    }

    let wordArray = []
    let initials = []

    // Si hay varias palabras, las separamos en wordArray y recogemos la inicial de cada una en initials
    if (space) {
        let split = ''
        for (let i = 0; i < word.length; i++) {
            if (word[i] == ' ') {
                wordArray.push(split)
                split = ''
            } else if (word[i] == word[word.length - 1]) {
                split += word[i];
                wordArray.push(split)
            } else if (word[i] != ' ') {
                split += word[i];
            }
        }
    }

    wordArray.forEach(element => {
        initials.push(element[0])
    })

    if (wordArray.length > 0) {
        return initials
    } else {
        return word[0]
    }
}
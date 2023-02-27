// 2. uzdevums

// Requiring fs module in which
// readFile function is defined.
const fs = require('fs')
 
fs.readFile('teksts.txt', (err, data) => {
    if (err) { 
        throw err;
    }
 
    // suns Suns SUNS sUnS

    // novienādojam visu uz maziem burtiem, lai nav jādomā par to, kā arī izņemam liekos simoblus kā punktu un komatu
    const allTexts = data.toString().toLowerCase().replaceAll('.', '').replaceAll(',', '').replaceAll('\n', '')
    // saliekam visus vārdus masīvā
    const allWordsArray = allTexts.split(' ')
    // izfiltrējam ārā visus vārdus, kas ir īsāki pa 4 burtiem
    const largerWords = allWordsArray.filter((word) => {
        return word.length > 3
    })

    // izveidojam objektu, kur uzskaitīsim cik vārdi bieži pieminēri
    const wordObject = {}

    largerWords.forEach((word) => {
        // ja objektā vārds vēl ne reizi nav bijis, tad piešķiram nulli, jo citādāk undefined + 1 ir NaN
        if(wordObject[word] === undefined) {
            wordObject[word] = 0
        }

        // skaitam klāt
        wordObject[word] = wordObject[word] + 1
    });

    // pārvēršam visu par masīvu lai var sasortēt
    const allWordCountArray = Object.entries(wordObject)

    // sasortējam pēc biežuma augošā secībā
   const sortedAllWordCountArray = allWordCountArray.sort((a, b) => { 
        return  b[1]- a[1]
    })

    // izlogojam top 5 vārdus
    for(let i = 0; i < 5; i++) {
        console.log(
        `Top ${i + 1} vārds ir "${sortedAllWordCountArray[i][0]}", kurš atkārtojas ${sortedAllWordCountArray[i][1]} reizes!`    
        );
    }
})

const axios = require('axios')

// paņemam datus kur country ir Latvia
axios.get("http://universities.hipolabs.com/search?country=Latvia").then(({data}) => {
    // visas LV universitātes
    console.log(data)


    // sortējam alfabēta secībā pēc name
    // piemērs: https://www.w3schools.com/js/js_array_sort.asp
    // Sorting Object Arrays
    const sortedUniversities = data.sort((first, second) => {
        let firstToLower = first.name.toLowerCase();
        let secondToLower = second.name.toLowerCase();

        // If the firstToLower smaller than secondToLower, 
        // firstToLower is sorted before secondToLower in the end array.
        if (firstToLower < secondToLower) {
            return -1;
        }


        // If the firstToLower greater than secondToLower, 
        // firstToLower is sorted after secondToLower in the end array.
        if (firstToLower > secondToLower) {
            return 1;
        }

        // If the firstToLower is the same as secondToLower, 
        // nothing is moved and remains the same
        return 0;
    })

    
    // logojam ārā visas universitātes alfabēta secībā
    console.log(sortedUniversities)

    // ejam cauri visām universitātēm un loggojam ārā katru nosaukumu
    sortedUniversities.forEach((university) => {
        console.log(university.name)
    });
});
let demofn = function stringindex(sentence: string, index: number){
    const charatindex = sentence.split(''); 
    return charatindex[index];    
}

console.log(demofn('Welcome to Typescript', 6));


let splitStrings = function splitwords(sentence: string){
    const charatindex = sentence.split(' '); 
    return charatindex;    
}

let splittedStrings: string[] = splitStrings('Welcome to Typescript');

splittedStrings.forEach(element => {
        console.log(element)
});



var demofn = function stringindex(sentence, index) {
    var charatindex = sentence.split('');
    return charatindex[index];
};
console.log(demofn('Welcome to Typescript', 6));
var splitStrings = function splitwords(sentence) {
    var charatindex = sentence.split(' ');
    return charatindex;
};
var splittedStrings = splitStrings('Welcome to Typescript');
splittedStrings.forEach(function (element) {
    console.log(element);
});

'use strict';
// es feature: block-scoped "let" declaration
const sentences = [
    { subject: 'Javascript', verb: 'is', object: 'great' },
    { subject: 'Dave', verb: 'the', object: 'best' },
];
// es6 feature; object destructuring
function say({ subject, verb, object}) {
    // es 6 feature: template strings
    console.log(`${subject} {verb} {object}`);
}
// es6 feature: for..of
for(let s of sentences) {
    say(s);
}

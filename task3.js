// Task 3: Asynchronous File Handling
// Create a Node.js script that reads a text file named "data.txt" and counts the number of words in it. The script should print the total word count to the console.

const fs = require('fs');
const filename = 'sample.txt';
let wordCount = 0

function totalWords(filename) {
    fs.readFile(filename, 'utf8', (err, file) => {
        if (err) {
            console.error('Error reading the file:', err);
            return;
        }
        const words = file.split(" ");

        for (const word of words) {
            if (word.length > 0) {
                wordCount++;
            }
        }
        console.log('Total words present = ', wordCount);
    });
}

totalWords(filename);



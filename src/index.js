const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let codedString = expr;
    let tenSymbolsText = '';
    let twoSymbolsText = '';
    let decodedText = '';
    let morseWord = '';
    let morseSymbol = '';
    let morseText = '';

    for (i = 0; i < codedString.length / 10;) {
        tenSymbolsText = codedString.substring(codedString.length - 10);
        codedString = codedString.slice(0, -10);

        if (tenSymbolsText === '**********') {
            decodedText = ' ' + decodedText;
        }

        else {
            for (n = 0; n < 5 ; n++) {
                twoSymbolsText = tenSymbolsText.substring(tenSymbolsText.length - 2);
                tenSymbolsText = tenSymbolsText.slice(0, -2);

                morseSymbol = '';

                if (twoSymbolsText === '10') {
                    morseSymbol = '.';
                    morseWord = morseSymbol + morseWord;
                }
                if (twoSymbolsText === '11') {
                    morseSymbol = '-';
                    morseWord = morseSymbol + morseWord;
                }
            }
            decodedText = MORSE_TABLE[morseWord] + decodedText;
            morseWord = '';
        }
    }
    return decodedText;
}

module.exports = {
    decode
}
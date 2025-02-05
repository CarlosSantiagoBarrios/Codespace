var quotes = [
    {
        "text": "Genius is one percent inspiration and ninety-nine percent perspiration.",
        "author": "Thomas Edison"
    },
    {
        "text": "You can observe a lot just by watching.",
        "author": "Yogi Berra"
    },
    {
        "text": "A house divided against itself cannot stand.",
        "author": "Abraham Lincoln"
    },
    {
        "text": "Difficulties increase the nearer we get to the goal.",
        "author": "Johann Wolfgang von Goethe"
    },
    {
        "text": "Fate is in your hands and no one else's",
        "author": "Byron Pulsifer"
    },
    {
        "text": "Be the chief but never the lord.",
        "author": "Lao Tzu"
    }
];

// Function to get a random quote
function getRandomQuote() {
    var randomIndex = Math.floor(Math.random() * quotes.length);
    var quote = quotes[randomIndex];
    return [
        quote.text,
        "\n",
        "-" + quote.author
    ];
}

// Set up text to print, each item in array is a new line
var aText = getRandomQuote();
var iSpeed = 100; // time delay of print out
var iIndex = 0; // start printing array at this position
var iArrLength = aText[0].length; // the length of the text array
var iScrollAt = 20; // start scrolling up at this many lines

var iTextPos = 0; // initialise text position
var sContents = ''; // initialise contents variable
var iRow; // initialise current row

function typewriter() {
    sContents = ' ';
    iRow = Math.max(0, iIndex - iScrollAt);
    var destination = document.getElementById("typedtext");

    while (iRow < iIndex) {
        sContents += aText[iRow++] + '<br />';
    }
    destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";

    if (iTextPos++ == iArrLength) {
        iTextPos = 0;
        iIndex++;

        if (iIndex != aText.length) {
            iArrLength = aText[iIndex].length;
            setTimeout(typewriter, 500);
        } else {
            
            // When the typing is finished...
            destination.style.borderRadius = "10px"; // Set the border-radius 
            destination.innerHTML = sContents + aText[iIndex - 1].substring(0, iTextPos); // No underscore at the end
        }
    } else {
        setTimeout(typewriter, iSpeed);
    }
}

typewriter();
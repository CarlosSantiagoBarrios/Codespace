// Quotes array
var quotes = [
    {
        "text": "If one does not know to which port is sailing, no wind is favorable.",
        "author": "Seneca"
      },
      {
        "text": "Our greatest glory is not in never failing but rising everytime we fall.",
        "author": "Anonymous"
      },
      {
        "text": "Being right is highly overrated. Even a stopped clock is right twice a day.",
        "author": "Anonymous"
      },
      {
        "text": "To be upset over what you don't have is to waste what you do have.",
        "author": "Ken S. Keyes"
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
      }
    } else {
      setTimeout(typewriter, iSpeed);
    }
  }
  
  typewriter();
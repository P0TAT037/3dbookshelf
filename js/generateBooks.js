var bookHtml = "";
bookHtml += "<img class='bookImg' src='/res/THE EVENDER.jpg' id='b1' onclick=turn('../res/sample.pdf')>\n <div class='book' id='../res/sample.pdf'></div>\n\n";
bookHtml += "<img class='bookImg' src='/res/THE EVENDER.jpg' id='b2' onclick=turn('../res/SWE.pdf')>\n <div class='book' id='../res/SWE.pdf'></div>\n\n";
document.getElementById('lib').innerHTML= bookHtml;


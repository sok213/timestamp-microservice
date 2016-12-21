var http = require('http'),
	fs = require('fs'),
	url = require('url'),
	port = process.env.PORT || 8080;

function onRequest(request, response) {
	//Declare necessary timestamp variables.
	var parsed = url.parse(request.url).href.split('/').join(''),
	testObj = { name: 'tom', age: 21};

	//Create a new JavaScript Date object based on timestamp,
	a = new Date(parseInt(parsed * 1000)),
	months = [
		'January','February','March','April','May','June',
		'July','August','September','October','November','December'
	],
	year = a.getFullYear(),
	month = months[a.getMonth()],
	date = a.getDate(),
	fullDate = month+' '+date+', '+year;
	dateObject = { unix: parseInt(parsed), natural: fullDate };

	//Checks to see if the url fit the format for natural unix time.
	if(isNaN(parseInt(parsed)) && dateObject && 
		parsed !== '' && parsed !== 'favicon.ico') 
	{
		var naturalUnix = convertNaturalUnix(parsed);
	}

	//Sets the response type.
	response.writeHead(200, {'Content-Type': 'text/plain'});

	//Checks type of url format to set the dateObject for response.
	if(naturalUnix !== undefined) {
		var unix = new Date(naturalUnix).getTime() / 1000;
		if(isNaN(unix)) {
			dateObject = { unix: null, natural: null };
		} else {
			dateObject = {
				unix: new Date(naturalUnix).getTime() / 1000,
				natural: naturalUnix
			};
		}
		response.write(JSON.stringify(dateObject));
	} else if(!isNaN(parseInt(parsed)) && dateObject) {
		response.write(JSON.stringify(dateObject));
	} else {
		dateObject = { unix: null, natural: null };
		response.write(JSON.stringify(dateObject));
	}

	//End the response.
	response.end();
}

//Function that converts natural unix time for the response object.
function convertNaturalUnix(unix) {
	var unixArr = unix.replace(/[%]/g, ' '),
		unixArr = unixArr.replace(/[,]/g, '').split(' ');
		if(unixArr.length == 3) {
		var month = unixArr[0].split('')[0].toUpperCase() + unixArr[0].substring(1, unixArr[0].length),
		day = unixArr[1].substring(unixArr[1].length-2, unixArr[1].length),
		year = unixArr[2].substring(unixArr[2].length-4),
		formattedUnix = month + ' ' + day + ', ' + year;
		return formattedUnix;
	}
}

//Create the http server.
http.createServer(onRequest).listen(port);
console.log('Server is now running on port: ' + port);
$(document).ready(function () {
	var uniqueEmails = ["bob@gmail.com", "jim@gmail.com", "ted@gmail.com", "donny@msn.com", "larry@yahoo.com", 
						"steve@msn.com", "jimmy@gmail.com", "tomothy@gmail.com", "andy@yahoo.com", "nick@msn.com",
						"fred@gmail.com", "donny@msn.com", "joey@yahoo.com", "lemuex@msn.com"];

	var cleanDups = function (input) {
		var found = {};
		for(var i = 0; i < input.length; i++)
		{
			var addy = input[i];
			if(found[addy] != undefined)
			{
				input.splice(i, 1); // remove one item
				i = i - 1; // we have to shift our index backwards so we don't skip the next item
			}
			else
			{
				found[addy] = true;
			}
		}
		return input;
	}

	function getRandomInt(min, max) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min)) + min;
	}

	function generateEmailList(size, inputList)
	{
		var result = [];
		for(var i = 0; i < size; i++)
		{
			var emailIndex = getRandomInt(0, inputList.length);
			result.push(inputList[emailIndex]);
		}
		return result;
	}

	var run = function (i) {
		var emails = generateEmailList(i, uniqueEmails);
		var result = cleanDups(emails).join(", ")
		$("#results").html(result);
	}

	$("#smallList").click(function () {
		run(1000);
	});

	$("#medList").click(function () {
		run(10000);
	});

	$("#bigList").click(function () {
		run(100000);
	});
});




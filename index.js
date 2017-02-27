$(document).ready(function () {
	var uniqueEmails = ["bob@gmail.com", "jim@gmail.com", "ted@gmail.com", "donny@msn.com", "larry@yahoo.com", 
						"steve@msn.com", "jimmy@gmail.com", "tomothy@gmail.com", "andy@yahoo.com", "nick@msn.com",
						"fred@gmail.com", "donny@msn.com", "joey@yahoo.com", "lemuex@msn.com"];

	var cleanDups = function (input) {
		var found = {};
		var result = [];
		for(var i = 0; i < input.length; i++)
		{
			var addy = input[i];
			if(found[addy] == undefined)
			{
				found[addy] = true;
				result.push(input[i]);
			}
		}
		return result;
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




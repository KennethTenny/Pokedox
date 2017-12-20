var json = '';
var json = (function() {
        var json = null;
        $.ajax({
            'async': false,
            'global': false,
            'url': "pokedox.json",
            'dataType': "json",
            'success': function (data) {
                json = data;
            }
        });
        return json;
    })();


// TASK 1



var arr=[];

for (i = 0; i < 10; i++) 
{ 
	var highest=-1;
	var highest_id=-1;

    for (j = 0; j < json.pokemon.length; j++) 
	{ 
		var flag=0;

		for (k = 0; k < arr.length; k++) 
			{
				if(json.pokemon[j].id == arr[k])
					flag=1;

			}	

			if(flag==1)
				continue;
			else
			{
				//console.log("I was here"+ highest + " " + json.pokemon[j].spawn_chance);
				if(highest < json.pokemon[j].spawn_chance)
				{
					highest=json.pokemon[j].spawn_chance;
					highest_id=json.pokemon[j].id;
				}
			}		
    
	}

	arr.push(highest_id);
}

console.log(arr);


    var table = document.getElementById("t1");
    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    var cell7 = row.insertCell(6);
    var cell8 = row.insertCell(7);
    var cell9 = row.insertCell(8);
    var cell10 = row.insertCell(9);
    var cell11 = row.insertCell(10);
    var cell12 = row.insertCell(11);
    var cell13 = row.insertCell(12);
    var cell14 = row.insertCell(13);

    cell1.innerHTML = "<b>ID</b>";
	cell2.innerHTML = "<b>Pokemon's name</b>";
	cell3.innerHTML = "<b>Image</b>";
	cell4.innerHTML = "<b>Type</b>";
	cell5.innerHTML = "<b>Height</b>";
	cell6.innerHTML = "<b>Weight</b>";
	cell7.innerHTML = "<b>Candy</b>";
	cell8.innerHTML = "<b>Candy_count</b>";
	cell9.innerHTML = "<b>Egg</b>";
	cell10.innerHTML = "<b>spawn_chance</b>";
	cell11.innerHTML = "<b>avg_spawns</b>";
	cell12.innerHTML = "<b>spawn_time</b>";
	cell13.innerHTML = "<b>multipliers</b>";
	cell14.innerHTML = "<b>weaknesses</b>";



	for (i = 0; i < 10; i++) 
	{
		var row = table.insertRow(i+1);
    	var cell1 = row.insertCell(0);
    	var cell2 = row.insertCell(1);
    	var cell3 = row.insertCell(2);
    	var cell4 = row.insertCell(3);
    	var cell5 = row.insertCell(4);
    	var cell6 = row.insertCell(5);
    	var cell7 = row.insertCell(6);
    	var cell8 = row.insertCell(7);
    	var cell9 = row.insertCell(8);
    	var cell10 = row.insertCell(9);
    	var cell11 = row.insertCell(10);
    	var cell12 = row.insertCell(11);
    	var cell13 = row.insertCell(12);
    	var cell14 = row.insertCell(13);
    	cell1.innerHTML = arr[i];
		cell2.innerHTML = json.pokemon[arr[i]].name;		 
		cell3.innerHTML="<img id='img"+ i+ "'>";
		
		document.getElementById("img"+i).src=json.pokemon[arr[i]].img;
		
		cell4.innerHTML = json.pokemon[arr[i]].type;
		cell5.innerHTML = json.pokemon[arr[i]].height;
		cell6.innerHTML = json.pokemon[arr[i]].weight;	
		cell7.innerHTML = json.pokemon[arr[i]].candy;
		cell8.innerHTML = json.pokemon[arr[i]].candy_count;
		cell9.innerHTML = json.pokemon[arr[i]].egg;
		cell10.innerHTML = json.pokemon[arr[i]].spawn_chance;
		cell11.innerHTML = json.pokemon[arr[i]].avg_spawns;
		cell12.innerHTML = json.pokemon[arr[i]].spawn_time;
		cell13.innerHTML = json.pokemon[arr[i]].multipliers;
		cell14.innerHTML = json.pokemon[arr[i]].weaknesses;
	}

	




// TASK 2



var evolutions=[];

for (i = 0; i < 10; i++) 
{
	var evolution="";


	if(json.pokemon[arr[i]].hasOwnProperty('prev_evolution'))
	{
		for (j = 0; j < json.pokemon[arr[i]].prev_evolution.length ; j++) 
		{
			var index=Number(json.pokemon[arr[i]].prev_evolution[j].num);
			//console.log(arr[i]+ " "+ index + " " + json.pokemon[arr[i]].prev_evolution[j].name)
			evolution += json.pokemon[index-1].name + "(" + json.pokemon[index-1].height + "," + json.pokemon[index-1].weight + "," + json.pokemon[index-1].spawn_time + ") -->";
		}
		
	}

	evolution += json.pokemon[arr[i]].name + "(" + json.pokemon[arr[i]].height + "," + json.pokemon[arr[i]].weight + "," + json.pokemon[arr[i]].spawn_time + ") -->";

	if(json.pokemon[arr[i]].hasOwnProperty('next_evolution'))
	{
		for (j = 0; j < json.pokemon[arr[i]].next_evolution.length ; j++) 
		{
			var index=Number(json.pokemon[arr[i]].next_evolution[j].num);
			evolution += json.pokemon[index-1].name + "(" + json.pokemon[index-1].height + "," + json.pokemon[index-1].weight + "," + json.pokemon[index-1].spawn_time + ") -->";
		}
	}

	evolutions.push(evolution.slice(0,evolution.length-4));

}


var table = document.getElementById("t2");
    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    cell1.innerHTML = "<b>Pokemon Evolutions</b>";
	

	for (i = 0; i < 10; i++) 
	{
		var row = table.insertRow(i+1);
    	var cell1 = row.insertCell(0);    	
    	cell1.innerHTML = evolutions[i];
	}





// TASK 3.1





var weaknesses=[];

for (i = 0; i < 10; i++) 
{

	var weaknesses_length=json.pokemon[arr[i]].weaknesses.length;

	if(weaknesses_length>3)
		weaknesses_length=3;

	console.log(json.pokemon[arr[i]].name + ":");

	var weakness=[];

	for(j = 0; j < weaknesses_length; j++)
	{
		//console.log(json.pokemon[arr[i]].weaknesses[i]);
		weakness.push(json.pokemon[arr[i]].weaknesses[j]);
	} 

	weaknesses.push(weakness);
}

//console.log(weaknesses);


var table = document.getElementById("t3");
    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = "<b>Pokemon</b>";
	cell2.innerHTML = "<b>Top 3 Weaknesses</b>";

	for (i = 0; i < 10; i++) 
	{
		var row = table.insertRow(i+1);
    	var cell1 = row.insertCell(0);
    	var cell2 = row.insertCell(1);
		cell1.innerHTML = json.pokemon[arr[i]].name;
		cell2.innerHTML = weaknesses[i];
	}



// TASK 3.2

var countObj={};

for (i = 0; i < weaknesses.length; i++) 
{

	for (j = 0; j < weaknesses[i].length; j++) 
	{
		if(!countObj.hasOwnProperty(weaknesses[i][j]))
		{
			countObj[weaknesses[i][j]]=0;
			var count=0;

			for(k=0; k< json.pokemon.length; k++)
			{
				for(l=0; l< json.pokemon[k].weaknesses.length; l++)
				{
					if(json.pokemon[k].weaknesses[l] === weaknesses[i][j])
					{
						count++;
						break;
					}
				}
			}

			countObj[weaknesses[i][j]]=count;

		}
	}
}

console.log(countObj);	

var table = document.getElementById("t4");
    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = "<b>Weakness</b>";
	cell2.innerHTML = "<b>Number of Pokemons those have that particular weakness:</b>";

	var i=1;
	for (var property in countObj)
	{
		var row = table.insertRow(i++);
    	var cell1 = row.insertCell(0);
    	var cell2 = row.insertCell(1);
		cell1.innerHTML = property;
		cell2.innerHTML = countObj[property];
	}
var table = new Array(9);
var winHuman = false;
var winBot = false;

function randomBot()
{
	var id = Math.floor(Math.random() * 9);
	table[id] ? randomBot(): move(id, 'bot');
}

function masterBot()
{
	var id;
	if(table[0])
	{
		
	}
	if(table[1])
	{
		
	}
	if(table[2])
	{
		
	}
	if(table[3])
	{
		
	}
	if(table[4])
	{
		
	}
	if(table[5])
	{
		
	}
	if(table[6])
	{
		
	}
	if(table[7])
	{
		
	}
	if(table[8])
	{
		
	}
}

function checkVictory()
{
	if((table[0]=='bot' && table[1]=='bot'&& table[2]=='bot')||
	   (table[3]=='bot' && table[4]=='bot'&& table[5]=='bot')||
	   (table[6]=='bot' && table[7]=='bot'&& table[8]=='bot')||
	   (table[0]=='bot' && table[4]=='bot'&& table[8]=='bot')||
	   (table[2]=='bot' && table[4]=='bot'&& table[6]=='bot')||
	   (table[0]=='bot' && table[3]=='bot'&& table[6]=='bot')||
	   (table[1]=='bot' && table[4]=='bot'&& table[7]=='bot')||
	   (table[2]=='bot' && table[5]=='bot'&& table[8]=='bot'))
	{
		winBot = true;
		alert('YOU LOSE!');
		return true;
	}
	
	if((table[0]=='human' && table[1]=='human'&& table[2]=='human')||
	   (table[3]=='human' && table[4]=='human'&& table[5]=='human')||
	   (table[6]=='human' && table[7]=='human'&& table[8]=='human')||
	   (table[0]=='human' && table[4]=='human'&& table[8]=='human')||
	   (table[2]=='human' && table[4]=='human'&& table[6]=='human')||
	   (table[0]=='human' && table[3]=='human'&& table[6]=='human')||
	   (table[1]=='human' && table[4]=='human'&& table[7]=='human')||
	   (table[2]=='human' && table[5]=='human'&& table[8]=='human'))
	{
		winHuman = true;
		alert('YOU WIN!');
		return true;
	}
	if (table[0] && table[1] && table[2] && table[3] && table[4] && table[5] && table[6] && table[7] && table[8] && !winBot && !winHuman)
	{
		alert('DRAW!');
		return true;
	}
}

function move(id, role)
{
	if(table[id])
	{
		return false;
	}
	table[id] = role;
	document.getElementById(id).className = 'cell' + ' ' + role;
	!checkVictory() ? (role == 'human') ? randomBot(): null : reset(); //use masterBot, not randomBot!
}

function reset()
{	
	alert('GAME OVER!');
	winBot = false;
	winHuman = false;
	
	location.reload();
}
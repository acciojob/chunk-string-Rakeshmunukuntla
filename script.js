function stringChop(str, size)
	{
  // your code here.
		let arr=[];
		if(str==null)
		{
			retrun arr;
		}
		
		let ch="";
		let count=0;
		for (let index = 0; index < str.length; index++) 
		{
			ch+=str[index];
			count++;
			if(count==size)
			{
				count=0;
				arr.push(ch);
				ch="";
				
			}
		}
		arr.push(ch);
		return arr;
}


// Do not change the code below
// const str = prompt("Enter String.");
// const size = prompt("Enter Chunk Size.");
// alert(stringChop(str, size));

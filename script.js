
fetch("https://api.github.com/users/YuliaEY")
.then(res => res.json())
.then(json => {
	let h1 = document.createElement('h1');
	document.body.appendChild(h1);
	h1.innerHTML = json.name;

	let div =document.createElement('div');
	document.body.appendChild(div);
	div.innerHTML = json.bio;
	
	let img = document.createElement('img');
	document.body.appendChild(img);
	img.src = json.avatar_url;

	let link =document.createElement('a');
	document.body.appendChild(link);
	link.href = json.html_url;
	link.innerHTML="my profile"
})

.catch(err => {
 
   console.error(err);
   alert("Failed to find User");
})


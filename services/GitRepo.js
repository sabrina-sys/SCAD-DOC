async function getRepos(){
   const USER = 'codigofacilito';
   const displayRepos = document.getElementById('repogit');
   const url = `https://api.github.com/users/${USER}/repos`
   const response = await fetch(url)
   const result = await response.json()
    let html='';
    result.map((i)=> {
         html+= `<li onclick="copy('${i.clone_url}')">${i.name} <br/> <span>${i.description}</span> </li> `
    })
    displayRepos.innerHTML=html;
}

function copy(text){
    var copyhelper = document.createElement("input");
    copyhelper.className = 'copyhelper'
    document.body.appendChild(copyhelper);
    copyhelper.value = `git clone ${text}`;
    copyhelper.select();
    document.execCommand("copy");
    document.body.removeChild(copyhelper);
}
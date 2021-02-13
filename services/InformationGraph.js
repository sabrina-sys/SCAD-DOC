async function getTramite(){
    const displayRepos = document.getElementById('activos');
    const url = `http://bugzilla.ensenada.gob.mx:5000/ficha/tramite/simple/list/read`
    const response = await fetch(url)
    const result = await response.json()
    const activos = result.filter(item => item.active === true);
    console.log(activos.length);
 }
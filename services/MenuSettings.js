const menuSettings = [
  {
    key: "0",
    title: "Documentos",
    icon: "bug-outline",
    href: "sectionDoc",
    child: [
        {
            key: "0.1",
            title: "Empezando",
            article: "example.md",
        },
        {
            key: "0.2",
            title: "Segunda",
            article: "example2.md",
        }
      ],
  },
  {
    key: "1",
    title: "IA",
    icon: "planet",
    href: "sectionIA",
    child: [],
  },
  {
    key: "2",
    title: "Backend",
    icon: "heart-sharp",
    href: "sectionBackend",
    child: [],
  },
  {
    key: "3",
    title: "Frontend",
    icon: "paw",
    href: "sectionFrontend",
    child: [],
  },
];


function render(key) {
   let contenedor = document.getElementById("contenedor");
   let html ='';
    if(menuSettings[key].child.length !== 0){
       menuSettings[key].child.map((item)=>{
        html += `<zero-md id="${item.title}" class = "zero" src="./articles/${item.article}"></zero-md>`;
       })
       contenedor.innerHTML = html;
    }else{
       contenedor.innerHTML = `<div class="center"> <img class="notfound"src="./assets/img/noresult.png" alt="" >`
    }
}

const buildMenu = () => {
  let html = `<ul>`;
  menuSettings.map((item) => {
    html += `<li onclick="render(${item.key})"><ion-icon name="${item.icon}"></ion-icon> <a data-toggle="collapse" 
            href="#${item.href}" role="button" aria-expanded="false" 
            aria-controls="collapseExample">${item.title} </a></li>`;
    if (item.child.length > 0) {
      html += `<ul id="${item.href}" class="collapse sublist">`;
      item.child.map((child) => {
        html += `<li><a href="#${child.title}" class="sublist">${child.title} </a></li>`;
      });
      html += `</ul>`;
    }
  });
  html += `</ul>`;
  return html;
};

const sideNav = document.getElementById("menunav");
sideNav.innerHTML = buildMenu();

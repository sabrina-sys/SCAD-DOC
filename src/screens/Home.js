import "../assets/css/body.css";
//import IMGteam from "../assets/img/team.png"
import Repositorio from '../components/Repositorio'
import imgdev from "../assets/img/teamdev.png"
const Home = () => {
  const repos = [{
    id:1,
    icon: "logo-react",
    title: "React",
    description: "Repositorio disponible para la aplicacion movil en react",
    link:"https://github.com/enrique123-hub/appMovil"
    },{
    id:2,
    icon: "document-text",
    title: "SCAD-DOC",
    description: "Almacenar toda la documentación correspondiente al proyecto SCAD",
    link:"https://github.com/sabrina-sys/SCAD-DOC"
    }
  ]
  return ( 
    <div className="views row ">
    <div className="block col-md-9">
      <img id="imgportada" src={imgdev} alt=""/>
      <h2 id="Scad-1">SCAD-ONE</h2>
      <p>Scad-1 es un proyecto integral que abarca todo un sistema tecnologico, incluyendo la integracion de vision artificial, con el fin de proporcionar recursos tecnologios a favor de servicios y establecimientos que son de importancia en nuestra sociedad.</p>
      
      <h3 id="QPR">Que problema resolvemos?</h3>
      <p>Lo servicios convencionales, como el transporte publico urbano o las tiendas de conveniencia se ven actualmente arrebasado por las situaciones actuales y la competencia, esto hace que el servicio que ellos ofrecen ya no sea competente ante las circunstancias actuales. Nuestro proyecto busca disminuir esa escase de recursos ofreciendoles la mejor tecnologia posible a un precio muy accesible y a formas de pago que no impacten directamente su economia.</p>
      
      <h3 id="NO">Nuestro Objetivo</h3>
      <p>Establecerse en el mercado estatal sustentado un modelo de negocios que se basa en el uso de un dispositivo que integra vision artificial.
      </p>
      
      <h2 id="Herramienta">Herramientas</h2>
      <div className="grid-container py-3 tools">
        <a href="https://trello.com/scadteam2" target="_blank" className="py-2">@ Trello</a>
        <a href="https://meet.google.com/" target="_blank" className="py-2">@ Meet</a>
        <a href="https://reactnative.dev/" target="_blank" className="py-2">@ React Native</a>
        <a href="https://www.mongodb.com/" target="_blank" className="py-2">@ Mongo DB</a>
        <a href="https://pjreddie.com/darknet/yolo/" target="_blank" className="py-2">@ Yolo</a>
        <a href=" https://learngitbranching.js.org/" target="_blank" className="py-2">@ Learn Git</a>
       <a href="http://git-school.github.io/visualizing-git/" target="_blank" className="py-2"> @ Visualize Git</a>
       <a href="https://www.diegocmartin.com/tutorial-git/" target="_blank" className="py-2">@ Manual de Git</a>
      </div>
      
      <h2 id="Repositorio">Repositorios</h2>
        {repos.map(item => (
          <Repositorio key={item.id} settings={item}/>
        ))}
    </div>
    <div className="indice col-md-3">
        <ul>
          <li>
          <a href="#Scad-1">SCAD-ONE</a>
          <ul className="subindice">
            <li><a href="#QPR">Que problema resolvemos?</a></li>
            <li><a href="#NO">Nuestro objetivo</a></li>
          </ul>
          </li>
          
          <li>
           <a href="#Herramienta">Herramientas</a>
           <ul className="subindice">
            <li><a href="#Herramienta">Trello</a></li>
            <li><a href="#Herramienta">Meet</a></li>
            <li><a href="#Herramienta">React Native</a></li>
            <li><a href="#Herramienta">Mongo DB</a></li>
            <li><a href="#Herramienta">Yolo</a></li>
            <li><a href="#Herramienta">Lean Git</a></li>
          </ul>
          </li>
          <li>
          <a href="#Repositorio">Repositorio</a>
          <ul className="subindice">
            <li><a href="#Repositorio">React</a></li>
            <li><a href="#Repositorio">SCAD-Doc</a></li>
          </ul>
          </li>
        </ul>
    </div>
    </div>
  );
};
export default Home;

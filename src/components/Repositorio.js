import '../assets/css/components.css';

const Repositorio = (props) => {
  
    return <div className="repo">
        <div className="repo-icon">
        <ion-icon name={props.settings.icon} className="icon"></ion-icon>
        </div>
        <div className="repo-description">
        <h4>{props.settings.title}</h4>
        <span>{props.settings.description}</span>
        </div>
        <div className="repo-copy">
        <a href={props.settings.link} target="_blank">Ir</a>
        </div>
        
    </div>;

};
export default Repositorio;

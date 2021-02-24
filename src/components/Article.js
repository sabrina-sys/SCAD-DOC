import "../assets/css/body.css";
import ReactMd from 'react-md-file';
import {useState,useEffect} from 'react';

const Article = () => {
    const [text, setText] = useState("# e");


  return (
    <div className="container-article px-5">
      <ReactMd markdown={text} />
    </div>
  );
};

export default Article;

import { useLocation } from 'react-router-dom';

export default function PokeType (){
    const location = useLocation();
    const { name, url } = location.state || {};
 return(
    <div>
      <h1>Type: {name}</h1>
      <p>URL: {url}</p>
    </div>
 )
};
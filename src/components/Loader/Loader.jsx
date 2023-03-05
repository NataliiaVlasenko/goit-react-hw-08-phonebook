//import Loader from 'react-loader-spinner';
//import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
//import s from './LoaderComponent.module.css';
//import {Overlay} from './Loader.styled';
import { ThreeDots } from  'react-loader-spinner'
function Loader() {
  return (
    

<ThreeDots 
height="80" 
width="80" 
radius="9"
color="#4fa94d" 
ariaLabel="three-dots-loading"
wrapperStyle={{}}
wrapperClassName=""
visible={true}
 />
    
  );
}

export default Loader;
import './background.css';
import { useSelector } from 'react-redux';
import desktopLightImage from '../../assets/bg-desktop-light.jpg';
import desktopDarkImage from "../../assets/bg-mobile-dark.jpg";

function Background() {
  const theme = useSelector(state => state.theme);

  
  return (
    <div className='background' style={{backgroundImage: `url(${theme ? desktopDarkImage : desktopLightImage})`}}></div>
  )
}

export default Background
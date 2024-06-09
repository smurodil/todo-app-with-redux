import './header.css'
import { useDispatch, useSelector } from 'react-redux'
import { setTheme } from '../../redux/darkModeSlice'
import { useEffect } from 'react'
import moonIcon from '../../assets/icon-moon.svg'
import sunIcon from '../../assets/icon-sun.svg'

function Header() {
  const dispatch = useDispatch();
  const isDarkMode = useSelector((state) => state.theme)

  function handleToggleTheme(){
    dispatch(setTheme(!isDarkMode));
  }

  useEffect(() => {
    if(isDarkMode){
      document.documentElement.classList.add("dark-mode");
      document.documentElement.classList.remove("light-mode");
    }else{
      document.documentElement.classList.add("light-mode");
      document.documentElement.classList.remove("dark-mode");
    }
  }, [isDarkMode])

  return (
    <div className='header'>
      <h2>Todo</h2>
      <div onClick={() => handleToggleTheme()}>
        {isDarkMode ? (
          <img src={sunIcon} alt="" />
        ) : (
          <img src={moonIcon} alt="" />
        )}
      </div>
    </div>
  )
}

export default Header
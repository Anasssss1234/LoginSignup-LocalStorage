import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import { ThemeContext } from './Themes/ThemeChanger';
function Home() {

  const navigate = useNavigate();
  const userName = JSON.parse(localStorage.getItem('user'));

  const handleaAccount = () => {
    navigate('/setting')
  }
  const {theme}=useContext(ThemeContext)

  return (
    <div className='background' 
    style={{background:theme=='light'? "#ffff":'#1B1212'}}>
      <div className="container head" 
      style={{background:theme=='light'?'white':'transparent',
       border:theme=='light'?'none':'1px solid #ffff',
       color:theme=='light'?'black':'#ffff'}}>
        <div className="heading">
          <h2>Home Page</h2>
          <ManageAccountsIcon onClick={handleaAccount} className='manage' />
        </div>
        <h3>welcome - {userName.name}</h3>
        <h3>Email - {userName.email}</h3>
        <h3>Password - {userName.password}</h3>
      </div>


    </div>
  )
}

export default Home

import { useState } from 'react'
import { API } from '../utils/axios'

export const Login = () => {
  const [userInfo, setUserInfo] = useState({
    email: '',
    password: ''
  });
  const [res, setRes] = useState('');

  const login = async () => {
    const { data } = await API.post('login', userInfo);

    if(data.message) {
      setRes(data.message);
    } else {
      setRes('logged in')
      localStorage.setItem("token", data.token)
    }
  }

  return (
    <div>
      <h1>Login</h1>

      <input placeholder='email' value={userInfo.email} onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })} />
      <input placeholder='pass' value={userInfo.password} onChange={(e) => setUserInfo({ ...userInfo, password: e.target.value })} />

      <button onClick={login} >Login</button>

      <div>{res}</div>
    </div>
  )
}
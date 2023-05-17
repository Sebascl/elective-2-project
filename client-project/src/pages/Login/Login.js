import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import { useState } from 'react';
import Axios from 'axios';
export const Login = () => {
  const [data, setData] = useState({email: '', password: ''})

  console.log(data);

  
  const handleSubmit = async(e) => {
    e.preventDefault()

    try {
      const response = await Axios.post("http://localhost:3200/api/v1/auth/login", data);
      console.log(response);
    } catch (error) {
      console.error("Error al obtener datos:", error);
    }
  };
  return (
    <form

    onSubmit={handleSubmit}
      name="normal_login"
      className="login-form"
    >
        <input 
          value={data.email}
         placeholder="Email" onChange={(e) => setData({...data, email: e.target.value})} />
        <input
          type="password"
          placeholder="Password"
          value={data.password}
          onChange={(e) => setData({...data, password: e.target.value})}
        />
        
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
    </form>
  );
};
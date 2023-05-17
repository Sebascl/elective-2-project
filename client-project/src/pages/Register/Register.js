import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import { useState } from "react";
import Axios from "axios";
export const Register = () => {
  const [data, setData] = useState({ firstname:"", lastname:"", email: "", password: "", departamento:"", municipio:"" });

  const departamentos = useState([{ nombre: "Caldas" }]);
  const municipios = useState([{nombre: "Manizales"}])
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await Axios.post(
        "http://localhost:3200/api/v1/auth/register",
        data
      );
      console.log(response);
    } catch (error) {
      console.error("Error al obtener datos:", error);
    }
  };
  return (
    <form onSubmit={handleSubmit} name="normal_login" className="login-form">
      <input
        value={data.firstname}
        placeholder="Firstname"
        onChange={(e) => setData({ ...data, firstname: e.target.value })}
      />
      <input
        value={data.lastname}
        placeholder="Lastname"
        onChange={(e) => setData({ ...data, lastname: e.target.value })}
      />
      <input
        value={data.email}
        placeholder="Email"
        onChange={(e) => setData({ ...data, email: e.target.value })}
      />
      <input
        type="password"
        placeholder="Password"
        value={data.password}
        onChange={(e) => setData({ ...data, password: e.target.value })}
      />

      <select>
        {departamentos.map((departamentomunicipios) => (
          <option>{departamentomunicipios.departamento}</option>
        ))}
      </select>

      <select>
        {municipios.map((departamentomunicipios) => (
          <option>{departamentomunicipios.municipio}</option>
        ))}
      </select>

      <Button type="primary" htmlType="submit" className="register-form-button">
        Register
      </Button>
    </form>
  );
};

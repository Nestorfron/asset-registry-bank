import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../store/appContext";
import {
  Button,
  Card,
  CardBody,
  Input,
  Select,
  Option,
  Checkbox,
  Radio,
  RadioGroup,
  FormControl,
} from "@nextui-org/react";

export const FormUsers = () => {
  const { store, actions } = useContext(Context);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const success = await actions.add_users(
      userName,
      password,
      email,
      role,
      isAdmin
    );
    if (success) {
      navigate("/masterDashboard");
    } else {
      console.log("Error al crear usuario");
    }
  };

  return (
    <div className="flex-col w-full m-auto">
      <Card className="mx-auto max-w-full w-[340px]">
        <CardBody className="overflow-hidden">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <Input
              isRequired
              label="Nombre de usuario"
              placeholder="Enter your username"
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            <Input
              isRequired
              label="Contraseña"
              placeholder="Enter your password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Input
              isRequired
              label="Correo electrónico"
              placeholder="Enter your email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <div className="flex gap-2 justify-end">
              <Button fullWidth color="primary">
                Formulario Crear
              </Button>
            </div>
          </form>
        </CardBody>
      </Card>
    </div>
  );
};

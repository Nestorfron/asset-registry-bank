import { useNavigate } from "react-router-dom";
import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import {
  Tabs,
  Tab,
  Input,
  Link,
  Button,
  Card,
  CardBody,
} from "@nextui-org/react";
import { useTheme } from "next-themes";
import "../../styles/output.css";
import img from "../../img/drapp_logo.png";

export const Home = () => {
  const { store, actions } = useContext(Context);
  const { theme, setTheme } = useTheme();
  const [selected, setSelected] = React.useState("login");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    console.log(userName);
    console.log(password);
    const success = await actions.login(userName, password);
    if (success) {
      navigate("/masterDashboard");
    } else {
      setError("Nombre de usuario o contraseña incorrectos");
    }
  };

  return (
    <div className="flex-col w-full m-auto">
      <Card className="mx-auto max-w-full w-[340px]">
        <CardBody className="overflow-hidden">
          <div className="img-container m-auto pb-5">
            {" "}
            <img src={img} alt="DR-App" height={200} width={200} />
          </div>
          <Tabs
            fullWidth
            size="md"
            aria-label="Tabs form"
            selectedKey={selected}
            onSelectionChange={setSelected}
          >
            <Tab key="login" title="Login">
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <Input
                  isRequired
                  label="Email"
                  placeholder="Enter your email"
                  type="email"
                />
                <Input
                  isRequired
                  label="Password"
                  placeholder="Enter your password"
                  type="password"
                />
                <p className="text-center text-small">
                  Need to create an account?{" "}
                  <Link size="sm" onPress={() => setSelected("sign-up")}>
                    Sign up
                  </Link>
                </p>
                <div className="flex gap-2 justify-end">
                  <Button fullWidth color="primary">
                    Login
                  </Button>
                </div>
              </form>
            </Tab>
            <Tab key="sign-up" title="Sign up">
              <form className="flex flex-col gap-4 h-[300px]">
                <Input
                  isRequired
                  label="Name"
                  placeholder="Enter your name"
                  type="password"
                />
                <Input
                  isRequired
                  label="Email"
                  placeholder="Enter your email"
                  type="email"
                />
                <Input
                  isRequired
                  label="Password"
                  placeholder="Enter your password"
                  type="password"
                />
                <p className="text-center text-small">
                  Already have an account?{" "}
                  <Link size="sm" onPress={() => setSelected("login")}>
                    Login
                  </Link>
                </p>
                <div className="flex gap-2 justify-end">
                  <Button fullWidth color="primary">
                    Sign up
                  </Button>
                </div>
              </form>
            </Tab>
          </Tabs>
        </CardBody>
      </Card>
      <div>
        <div className="text-center mt-5">
          <Button
            color="primary"
            variant="light"
            onClick={() => setTheme("light")}
          >
            Light Mode
          </Button>
          <Button
            color="primary"
            variant="shadow"
            onClick={() => setTheme("dark")}
          >
            Dark Mode
          </Button>
        </div>
      </div>
    </div>
  );
};

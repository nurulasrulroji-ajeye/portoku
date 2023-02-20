import React from "react";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { setCookie } from "nookies";
import { getUserByEmail } from "../../data/UserData";
import InputFiled from "../../components/Atoms/InputFiled";
import Button from "../../components/Atoms/Button";
import AuthLayout from "../../components/Templates/AuthLayout";
import Image from "next/image";
import { login } from "../../assets";

const LoginPage = () => {
  const [rememberMe, setRememberMe] = useState<boolean>(false);
  const [input, setInput] = useState<{
    email: string;
    password: string;
  }>({
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const router = useRouter();

  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    if (hasLoaded) {
      router.reload();
    } else {
      setHasLoaded(true);
    }
  }, [router]);
  useEffect(() => {
    if (window.localStorage.data !== undefined) {
      const data = localStorage.getItem("data");
      const datas = JSON.parse(data);
      console.log("hasill", datas);
      setInput({ email: datas.email, password: datas.password });
    }
  }, []);

  async function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const user = getUserByEmail(input.email);
    if (!user) {
      setErrorMessage("Email Tidak Terdaftar!");
      return;
    }
    if (user.password !== input.password) {
      setErrorMessage("Password Salah");
      return;
    }
    if (!user && user.password !== input.password) {
      setErrorMessage("Email dan Password Salah");
      return;
    }
    setCookie(null, "token", user.email, {
      maxAge: 30 * 24 * 60 * 60,
      path: "/auth/login",
    });

    const dataLogin = {
      email: input.email,
      password: input.password,
    };
    // console.log("masuuukkk");
    rememberMe ? localStorage.setItem("data", JSON.stringify(dataLogin)) : null;
    router.push("/");
  }

  // Masuk Dengan
  // email: "cti@example.id",
  // password: "12345678";

  return (
    <AuthLayout>
      <div className="p-4 bg-white/30 backdrop-blur-lg rounded-lg flex flex-col justify-center items-center">
        <div className="w-[300px] h-[300px] justify-center items-center relative">
          <Image src={login} alt="login" layout="fill" objectFit="cover" />
        </div>
        <form onSubmit={handleLogin} className="w-full">
          <h1>Login</h1>
          <div>
            <label htmlFor="email">Email:</label>
            <InputFiled
              isPlaceholder="Email"
              types="text"
              values={input.email}
              onchange={(e) => setInput({ ...input, email: e.target.value })}
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <InputFiled
              isPlaceholder="Password"
              eyesActive={showPassword}
              values={input.password}
              onchange={(e) => setInput({ ...input, password: e.target.value })}
              types={showPassword ? "text" : "password"}
              onHide={() => setShowPassword(!showPassword)}
              useEyes
            />
          </div>
          <div className="flex">
            <input
              id="remember"
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            <label className="cursor-pointer" htmlFor="remember">
              Ingatkan Saya
            </label>
          </div>
          {errorMessage && <div>{errorMessage}</div>}
          <Button type="submit" title="Log In" />
        </form>
      </div>
    </AuthLayout>
  );
};

export default LoginPage;

import React from "react";
import { signIn } from "next-auth/react";

import { useRouter } from "next/router";


function signin() {
  const [authState, setAuthState] = React.useState({
    email: "",
    password: "",
  });

  const router = useRouter();

  const handleAuth = () => {
    signIn("credentials", {
      email: authState.email,
      password: authState.password,
      redirect: false,
    }).then((res) => {
      if (res.error) {
        console.log(res.error);
      } else {
        console.log(res);
        setTimeout(() => {
          router.push("/");
        }, 2000);
      }
      setAuthState({ email: "", password: "" });
    });
  };

  return (
    <>
      <input
        type="text"
        placeholder="Email"
        value={authState.email}
        onChange={(e) => setAuthState({ ...authState, email: e.target.value })}
      />
      <input
        type="password"
        placeholder="Password"
        value={authState.password}
        onChange={(e) =>
          setAuthState({ ...authState, password: e.target.value })
        }
      />
      <button type="submit" onClick={handleAuth}>
        Sign in
      </button>
    </>
  );
}

export default signin;
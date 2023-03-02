import { NextPage } from "next";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { FormEventHandler, useState } from "react";

const SignIn: NextPage = (props): JSX.Element => {
  const [userInfo, setUserInfo] = useState({ email: "", password: "" });
  const router = useRouter();
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (status === "authenticated") {
    router.push("/");
  }

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const res = await signIn("credentials", {
      email: userInfo.email,
      password: userInfo.password,
      redirect: false,
    });
    if (res?.ok) {
      router.push("/app");
    }
  };

  return (
    <div className="min-w-screen grid h-full min-h-screen grid-cols-3">
      <div></div>
      <div>
        <form onSubmit={handleSubmit}>
          <div className="m-10 flex flex-col gap-2 rounded-lg border bg-slate-100 p-10 shadow">
            <h1>Login</h1>

            <label className="label">
              <span className="label-text">E-Mail</span>
            </label>
            <input
              value={userInfo.email}
              onChange={({ target }) =>
                setUserInfo({ ...userInfo, email: target.value })
              }
              type="text"
              placeholder="john@email.com"
              className="input-borderd input w-full shadow"
            />

            <label className="label">
              <span className="label-text">Passwort</span>
            </label>

            <input
              value={userInfo.password}
              onChange={({ target }) =>
                setUserInfo({ ...userInfo, password: target.value })
              }
              type="password"
              placeholder="********"
              className="input-borderd input w-full shadow"
            />
            <input type="submit" value="Login" className="btn" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;

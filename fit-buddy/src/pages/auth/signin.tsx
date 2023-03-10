import { NextPage } from "next";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { FormEventHandler, useState } from "react";
("use client");

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
    <>
      {!session && (
        <div className="flex h-screen place-content-center">
          <div className="flex flex-col">
            <div className="h-1/4"></div>
            <div className="min-h-1/3 rounded-lg border bg-gray-200 p-10 shadow-xl">
              <h1 className="mb-2 text-2xl font-bold">Login</h1>
              <form onSubmit={handleSubmit}>
                <div className="flex flex-col gap-2">
                  <div className="flex flex-col">
                    <label>
                      <span className="text-gray-600">E-Mail</span>
                    </label>
                    <input
                      value={userInfo.email}
                      onChange={({ target }) =>
                        setUserInfo({ ...userInfo, email: target.value })
                      }
                      type="text"
                      className="rounded border-none shadow outline-none"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label>
                      <span>Passwort</span>
                    </label>
                    <input
                      type="password"
                      value={userInfo.password}
                      onChange={({ target }) =>
                        setUserInfo({ ...userInfo, password: target.value })
                      }
                      className="rounded border-none shadow outline-none"
                    />
                    {/* <label className="label">
                    <a href="#" className="link-hover label-text-alt link">
                      Forgot password?
                    </a>
                  </label> */}
                  </div>
                  <div className="flex justify-end">
                    <button
                      type="submit"
                      className="rounded-lg bg-cyan-500 py-2 px-4 shadow hover:bg-cyan-600"
                    >
                      Login
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SignIn;

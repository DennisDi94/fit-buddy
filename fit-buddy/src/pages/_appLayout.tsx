import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { ReactNode, useState } from "react";
import "~/styles/globals.css";

const AppLayout = ({ children }: { children: ReactNode }) => {
  const { data: session, status } = useSession();
  const [open, setOpen] = useState(false);
  const router = useRouter();

  if (status === "loading") {
    return <div> loading</div>;
  }

  return (
    <>
      <div className="flex flex-col">
        {session && (
          <div className="navbar bg-gray-600 text-white shadow">
            <div className="flex-none">
              <button
                className="btn-ghost btn-square btn"
                onClick={() => setOpen((open) => !open)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block h-5 w-5 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </button>
            </div>
            <div className="flex-1">
              <a className="btn-ghost btn text-xl normal-case">daisyUI</a>
            </div>
            <div className="flex-none">
              <button className="btn-ghost btn-square btn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block h-5 w-5 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        )}
        <div className="flex">
          {session && (
            <>
              <div
                className={
                  open
                    ? "drawer-side border bg-gray-200 shadow "
                    : "drawer-side hidden border bg-gray-200 shadow "
                }
              >
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu flex min-h-screen w-60 flex-col gap-2 border p-4 text-base-content shadow">
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="/dashboard"> Dashboard</Link>
                  </li>
                </ul>
              </div>
            </>
          )}
          <div className="min-w-screen h-screen min-h-screen w-screen">
            {children}
          </div>
        </div>
        <footer className="footer bg-neutral p-10 text-neutral-content">
          <div>
            <span className="footer-title">Services</span>
            <a className="link-hover link">Branding</a>
            <a className="link-hover link">Design</a>
            <a className="link-hover link">Marketing</a>
            <a className="link-hover link">Advertisement</a>
          </div>
          <div>
            <span className="footer-title">Company</span>
            <a className="link-hover link">About us</a>
            <a className="link-hover link">Contact</a>
            <a className="link-hover link">Jobs</a>
            <a className="link-hover link">Press kit</a>
          </div>
          <div>
            <span className="footer-title">Legal</span>
            <a className="link-hover link">Terms of use</a>
            <a className="link-hover link">Privacy policy</a>
            <a className="link-hover link">Cookie policy</a>
          </div>
        </footer>
      </div>
    </>
  );
};

export default AppLayout;

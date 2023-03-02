import { useSession } from "next-auth/react";
import { ReactNode } from "react";
import "~/styles/globals.css";

const AppLayout = ({ children }: { children: ReactNode }) => {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <div> loading</div>;
  }
  return (
    <>
      <div className="flex">
        {session && (
          <div className="drawer-side border bg-slate-200 shadow">
            <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
            <ul className="menu min-h-screen w-60 p-4 text-base-content">
              <li>
                <a>Sidebar Item 1</a>
              </li>
              <li>
                <a>Sidebar Item 2</a>
              </li>
            </ul>
          </div>
        )}
        <>{children}</>
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
    </>
  );
};

export default AppLayout;

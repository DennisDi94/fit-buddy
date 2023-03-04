import { useSession } from "next-auth/react";
import { ReactNode, useState } from "react";
import NavBar from "~/components/NavBar";
import SideBar from "~/components/SideBar/SideBar";
import "~/styles/globals.css";

const AppLayout = ({ children }: { children: ReactNode }) => {
  const { data: session } = useSession();
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="flex flex-col">
        <NavBar setOpen={setOpen} />
        <div className="flex">
          <SideBar open={open} />
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

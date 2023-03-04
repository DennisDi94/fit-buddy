import { useSession } from "next-auth/react";
import Link from "next/link";

function SideBar({ open }: { open: Boolean }) {
  const { data: session } = useSession();

  if (!session) {
    return <></>;
  }

  return (
    <>
      <div
        className={`drawer-side z-40 h-full w-64 bg-gray-200 duration-500 ease-in-out ${
          open ? "-translate-x-full" : "translate-x-0"
        }`}
      >
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu flex min-h-screen w-60 flex-col gap-2 p-4 text-base-content">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/dashboard"> Dashboard</Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default SideBar;

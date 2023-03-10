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
        className={`z-40 h-full w-64 bg-gray-200 duration-500 ease-in-out ${
          open ? "-translate-x-full" : "translate-x-0"
        }`}
      >
        <ul className="text-base-content flex min-h-screen w-60 flex-col gap-4 p-10">
          <li className="w-full rounded p-2 hover:bg-gray-300">
            <Link href="/">Home</Link>
          </li>
          <li className="w-full rounded p-2 hover:bg-gray-300">
            <Link href="/exercises">Übungen</Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default SideBar;

import { useSession } from "next-auth/react";
import { Dispatch, SetStateAction } from "react";
import ProfileMenu from "../ProfileMenu";

function NavBar({ setOpen }: { setOpen: Dispatch<SetStateAction<boolean>> }) {
  const { data: session } = useSession();

  if (!session) {
    return <></>;
  }

  return (
    <div className="flex justify-between bg-gray-600 p-2 text-white shadow">
      <div className="m-1">
        <button
          className="rounded px-2 pt-1 pb-2 hover:bg-gray-800"
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
      <h1 className="m-1 p-1.5 text-lg font-bold">fitBuddy</h1>
      <div className="m-1">
        <div className="">
          <ProfileMenu />
        </div>
      </div>
    </div>
  );
}

export default NavBar;

import { useSession } from "next-auth/react";
import { Dispatch, SetStateAction } from "react";
import ProfileMenu from "../ProfileMenu";

function NavBar({ setOpen }: { setOpen: Dispatch<SetStateAction<boolean>> }) {
  const { data: session } = useSession();
  if (!session) {
    return <></>;
  }

  return (
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
        <ProfileMenu />
      </div>
    </div>
  );
}

export default NavBar;

import { IncomingMessage, ServerResponse } from "http";
import { type NextPage } from "next";

import { signIn, signOut, useSession } from "next-auth/react";
import { getServerAuthSession } from "~/server/auth";
import { api } from "~/utils/api";

const Home: NextPage = () => {
  const { data: session } = useSession();
  const { data: secretMessage } = api.example.getSecretMessage.useQuery(
    undefined, // no input
    { enabled: session?.user !== undefined }
  );

  return (
    <>
      <div className="flex flex-col items-center justify-center gap-4">
        <p className="text-center text-2xl ">
          {session && <span>Logged in as {session.user?.name}</span>}
          {secretMessage && <span> - {secretMessage}</span>}
        </p>
        <button
          className="rounded-full px-10 py-3 font-semibold  no-underline transition hover:bg-white/20"
          onClick={session ? () => void signOut() : () => void signIn()}
        >
          {session ? "Sign out" : "Sign in"}
        </button>
      </div>
    </>
  );
};

export async function getServerSideProps(context: {
  req: IncomingMessage & {
    cookies: Partial<{
      [key: string]: string;
    }>;
  };
  res: ServerResponse<IncomingMessage>;
}) {
  const session = await getServerAuthSession(context);
  return {
    props: {
      session,
    },
  };
}
export default Home;

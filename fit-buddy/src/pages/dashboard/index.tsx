import { IncomingMessage, ServerResponse } from "http";
import { Session } from "next-auth";
import { useRouter } from "next/router";
import { getServerAuthSession } from "~/server/auth";

const Dashboard = (props: { session: Session }) => {
  const router = useRouter();
  return (
    <>
      <div>Dashboard</div>
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
export default Dashboard;

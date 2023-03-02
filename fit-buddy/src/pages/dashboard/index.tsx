import { Session } from "next-auth";
import { useRouter } from "next/router";

const Dashboard = (props: { session: Session }) => {
  const router = useRouter();
  return (
    <>
      <div>Dashboard</div>
    </>
  );
};

export default Dashboard;

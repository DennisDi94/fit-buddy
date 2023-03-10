import { IncomingMessage, ServerResponse } from "http";
import { Session } from "next-auth";
import { useSession } from "next-auth/react";
import { useState } from "react";
import Modal from "~/components/Modal";
import { getServerAuthSession } from "~/server/auth";
import { api } from "~/utils/api";

const Dashboard = (props: { session: Session }) => {
  const { data: session } = useSession();
  const { data: exercises } = api.exercise.getAll.useQuery(undefined, {
    enabled: session?.user !== undefined,
  });
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="grid grid-cols-5">
        <div className="col-span-1"></div>
        <div className="col-span-3 my-10 flex flex-col rounded-lg border shadow">
          <div className="m-1 grid grid-cols-1 divide-y">
            <div className="flex justify-between">
              <h1 className="m-1 p-1 text-xl font-bold">Übungen</h1>
              <div className="m-1">
                <Modal
                  button={
                    <div className="rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                      Übung erstellen
                    </div>
                  }
                  title="title"
                >
                  <div className="">asd</div>
                </Modal>
              </div>
            </div>

            {exercises?.map((exercise) => {
              return (
                <div className="m-1 p-1">
                  <div className="text-gray-600">{exercise.name}</div>
                  <div className="">{exercise.description}</div>
                </div>
              );
            })}
          </div>
        </div>
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
export default Dashboard;

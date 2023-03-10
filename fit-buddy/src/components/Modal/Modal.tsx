import { Dialog, Transition } from "@headlessui/react";
import { Fragment, ReactNode, useState } from "react";

const Modal = ({
  children,
  title,
  button,
}: {
  children: ReactNode;
  title: ReactNode;
  button: ReactNode;
}) => {
  let [isOpen, setIsOpen] = useState(true);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <button type="button" onClick={openModal}>
        {button}
      </button>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-lg transform overflow-hidden rounded-lg bg-white  text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="p-6 text-lg font-medium leading-6 text-gray-900"
                  >
                    {title}
                  </Dialog.Title>
                  <div className="flex flex-col justify-between p-6">
                    {children}
                  </div>
                  <div className="flex justify-end gap-4 bg-gray-200 p-6">
                    <button
                      onClick={() => setIsOpen(false)}
                      className="rounded-lg border bg-white px-2 py-1 shadow hover:bg-gray-100"
                    >
                      Abbrechen
                    </button>
                    <button>Absenden</button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default Modal;

import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
const Add = ({ isOpen, close }) => {
  return (
    <Dialog
      open={isOpen}
      as="div"
      className="relative z-10 focus:outline-none"
      onClose={close}
    >
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4">
          <DialogPanel
            transition
            className="w-full max-w-md rounded-xl p-6 backdrop-blur-2xl duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0"
          >
            <div>
              <div class="flex items-center justify-center">
                <div>
                  <div className="text-center bg-gray-600">
                    <p className="p-2 text-2xl text-white">Đăng nhập</p>
                  </div>
                  <div class="bg-white p-8 rounded shadow-lg">
                    <div className="py-5 flex">
                      <p className="px-3">Tài khoản</p>
                      <input
                        className="border-solid border-1"
                        onChange={(e) => setUsername(e.target.value)}
                      ></input>
                    </div>
                    <div className="flex">
                      <p className="px-3">Mật khẩu</p>
                      <input
                        type="password"
                        className="border-solid border-1"
                        onChange={(e) => setPassword(e.target.value)}
                      ></input>
                    </div>
                    <div className="items-center justify-center text-center pt-7 gap-2">
                      <button className="bg-gray-600 p-2.5 text-white hover:bg-gray-300">
                        Đăng nhập
                      </button>
                      <button className="bg-gray-600 p-2.5 text-white hover:bg-gray-300" onClick={close}> 
                        Bỏ qua
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};

export default Add;

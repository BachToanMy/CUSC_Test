import { useState } from "react";
import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
const Add = ({ isOpen, close }) => {
  const [isMS, setMS] = useState(null);
  const [isTen, setTen] = useState(null);
  const [isGT, setGT] = useState(null);
  const [isDc, setDc] = useState(null);
  const [isDt, setDt] = useState(null);
  const [isEmail, setEmail] = useState(null);
  const handleUpdate = () => {
    if (
      (isMS.length > 6 && isMS.length < 8) &&
      (isTen.length >= 10 && isTen < 250) &&
      isDt === 10
    ) {
    } else {
      alert("Du lieu khong dung dinh dang");
    }
  };
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
                    <p className="p-2 text-2xl text-white">
                      Thêm mới/ cập nhật sinh viên
                    </p>
                  </div>
                  <div class="bg-white p-8 rounded shadow-lg">
                    <div className="flex flex-row">
                      <p className="px-3 basis-64 text-right">
                        Mã số sinh viên
                      </p>
                      <input
                        className="border-solid border-1"
                        value={isMS}
                        onChange={(e) => setMS(e.target.value)}
                      ></input>
                    </div>
                    <div className="flex flex-row text-right">
                      <p className="px-3 basis-64">Họ và tên</p>
                      <input
                        value={isTen}
                        className="border-solid border-1"
                        onChange={(e) => setTen(e.target.value)}
                      ></input>
                    </div>
                    <div className=" flex flex-row text-right">
                      <p className="px-3 basis-64">Giới tính</p>
                      <input
                        className="border-solid border-1"
                        onChange={(e) => setGT(e.target.value)}
                      ></input>
                    </div>
                    <div className=" flex flex-row text-right">
                      <p className="px-3 basis-64">Địa chỉ</p>
                      <input
                        value={isDc}
                        className="border-solid border-1"
                        onChange={(e) => setDc(e.target.value)}
                      ></input>
                    </div>
                    <div className=" flex flex-row text-right">
                      <p className="px-3 basis-64">Điện thoại</p>
                      <input
                        value={isDt}
                        className="border-solid border-1"
                        onChange={(e) => setDt(e.target.value)}
                      ></input>
                    </div>
                    <div className=" flex flex-row text-right">
                      <p className="px-3 basis-64">Email</p>
                      <input
                        className="border-solid border-1"
                        onChange={(e) => setEmail(e.target.value)}
                      ></input>
                    </div>
                    <div className="items-center justify-center text-right pt-7 ">
                      <button
                        onClick={handleUpdate}
                        className="bg-gray-600 px-2.5 p-2 mr-2 text-white hover:bg-gray-300"
                      >
                        Cập nhật
                      </button>
                      <button
                        className="bg-gray-600 p-2 text-white hover:bg-gray-300"
                        onClick={close}
                      >
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

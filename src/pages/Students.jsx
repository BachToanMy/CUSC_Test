import { useState } from "react";
import Add from "./Add";
import { students } from "./data";
function Students() {
  const [isOpen, setIsOpen] = useState(false);
  const openLoginForm = () => {
    setIsOpen(true);
  };
  function close() {
    setIsOpen(false);
  }
  return (
    <>
      <div class="flex justify-center pt-5">
        <div>
          <div class="bg-white p-5 rounded shadow-lg">
            <div className="flex flex-row">
              <p className="px-3 basis-64">Mã sinh viên</p>
              <input className="border-solid border-1"></input>
            </div>
            <div className="flex flex-row">
              <p className="px-3 basis-64">Họ và tên</p>
              <input type="password" className="border-solid border-1"></input>
            </div>
            <div className="flex flex-row">
              <p className="px-3 basis-64">Email</p>
              <input type="password" className="border-solid border-1"></input>
            </div>
            <div className="items-center justify-center text-right pt-5">
              <button className="bg-gray-600 px-5 text-white hover:bg-gray-300 font-semibold">
                Tìm
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="text-right mr-10" onClick={openLoginForm}>
        <button className="bg-gray-700 p-1 px-5 text-white font-semibold">
          Thêm mới
        </button>
      </div>
      <div>
        <div className="max-w flex flex-col mt-5">
          <div className="grid grid-cols-[2fr_1fr_1fr] md:grid-cols-[1fr_1fr_2fr_1fr_1fr_1fr_2fr_1fr_1fr_1fr_1fr] items-center py-1 px-2 border border-gray-200 bg-gray-100 text-sm ">
            <b className="text-xs text-center">STT</b>
            <b className="text-xs text-center">MSSV</b>
            <b className="hidden md:inline-block text-center text-xs">
              Họ và tên
            </b>
            <b className="text-xs text-center">Giới tính</b>
            <b className="text-xs text-center">Địa chỉ</b>
            <b className="text-xs text-center">Điện thoại</b>
            <b className="text-xs text-center">Email</b>
            <b className="hidden md:inline-block text-xs text-center">
              Tình trạng
            </b>
            <b className="text-center text-xs ">Sửa</b>
            <b className="text-center text-xs">Xóa</b>
            <b className="text-center text-xs">Cập nhật tình trạng</b>
          </div>
          {students?.map((std) => (
            <div
              key={std?.mssv}
              className="grid grid-cols-[2fr_1fr_1fr] md:grid-cols-[1fr_1fr_2fr_1fr_1fr_1fr_2fr_1fr_1fr_1fr_1fr] items-center px-2 py-2 border border-gray-200 bg-gray-100 text-sm"
            >
              <p className="text-xs text-center">{std?.stt}</p>
              <p className="text-xs text-center">{std?.mssv}</p>
              <p className="hidden md:inline-block text-center text-xs">
                {std?.ten}
              </p>
              <p className="text-xs text-center">{std?.gt}</p>
              <p className="text-xs text-center">{std?.dc}</p>
              <p className="text-xs text-center">{std?.dt}</p>
              <p className="text-xs text-center">{std?.email}</p>
              <p className="hidden md:inline-block text-xs text-center">
                {std?.tt}
              </p>
              <p className="text-center text-xs underline hover:text-red-500 text-blue-500 ">
                Sửa
              </p>
              <p className="text-center text-xs underline  hover:text-red-500 text-blue-500 ">
                Xóa
              </p>
              <p className="text-center text-xs underline  hover:text-red-500 text-blue-500">
                Cập nhật
              </p>
            </div>
          ))}
        </div>
      </div>
      {<Add isOpen={isOpen} close={close} />}
    </>
  );
}

export default Students;

import React, { useState } from "react";

export default function CustomForm() {
  const [rangeValue, setRangeValue] = useState(50);
  const [selectedFile, setSelectedFile] = useState(null);
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };
  return (
    <form action="" className="md:w-[70%] mx-auto my-10 flex flex-col ">
      <div className="flex gap-5 flex flex-col md:flex-row mx-auto ">
        <select class="appearance-none row-start-1 col-start-1 bg-slate-50 dark:bg-slate-100 text-black border-gray border-1 border-solid w-[220px] max-h-12">
          <option value="">Выберите тип системы</option>
          <option>Lorem, ipsum dolor.</option>
          <option>Lorem, ipsum dolor.</option>
          <option>Lorem, ipsum dolor.</option>
        </select>
        <input type="email" className="w-full md:w-[220px] max-h-12" placeholder="Email" />
        <input type="text" className="w-full md:w-[220px] max-h-12" placeholder="Name" />
      </div>
      <div className="flex flex-col md:flex-row items-center gap-5 my-10">
        <span className="flex flex-col text-start w-[70%]">
          <label
            htmlFor="range"
            className="flex flex-row justify-between items-center"
          >
            <span>Lorem, ipsum dolor.</span>
            <p className="ml-4">{rangeValue}%</p>
          </label>
          <input
            type="range"
            id="range"
            className="appearance-none w-full h-2 bg-gray-300 rounded-full outline-none "
            value={rangeValue}
            onChange={(event) => setRangeValue(event.target.value)}
          />
        </span>
        <div className="relative w-[30%]">
          <input
            type="file"
            onChange={handleFileChange}
            className="opacity-0 z-50 absolute top-0 left-0 w-full h-full"
          />
          <div className="w-full p-[12px] bg-white border-0 rounded-[3px] text-black">
       Прикрепить файл
          </div>
          {selectedFile ? (
            <p className="text-center">Selected File: {selectedFile.name}</p>
          ) : (
            <p className="text-center"></p>
          )}
        </div>
      </div>
    </form>
  );
}

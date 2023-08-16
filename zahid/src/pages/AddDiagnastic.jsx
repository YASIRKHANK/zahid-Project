import React from "react";

const AddDental = () => {
  return (
    <div className="px-4 ">
      <h1 className="flex justify-center pr-24">ADD DEWARMING</h1>
      <h1>Add Details</h1>
      <form className="">
        <div className="w-full flex justify-between">

          <div className="w-1/2">

            <div className="flex flex-col">
              <label className="px-4 mt-2">Date</label>
              <input
                type="date"
                className="px-3 w-[380px] h-[48px] border shadow-lg rounded-md mt-2"
              ></input>
            </div>

            <div className="flex flex-col">
              <label className="px-4 mt-2">Next Due Date</label>
              <input
                type="date"
                className="px-3 w-[380px] h-[48px] border shadow-lg rounded-md mt-2"
              ></input>
            </div>

            <div className="flex flex-col">
              <label className="px-4 mt-2">Administered By</label>
              <input
                type="text"
                className="px-3 w-[380px] h-[48px] border shadow-lg rounded-md mt-2"
                placeholder="Select Denstisti...."
              ></input>
            </div>

            <div className="flex flex-col ">
              <label className="px-4 mt-2">Attachments</label>
              <input
                type="file"
                className="px-3 w-[380px] h-[48px] border shadow-lg rounded-md mt-2 py-2"
              ></input>
            </div>

            <div className="pt-6">
              <button
                type="submit"
                className="w-[382px] h-[51.1px] bg-[#000032] text-white rounded-full"
              >
                Save
              </button>
            </div>

          </div>

          <div className="w-1/2">
           

            <div className="flex flex-col ">
              <label className="px-4 mt-2">Type</label>
              <select className="px-3 w-[380px] h-[48px] border shadow-lg rounded-md mt-2">
                <option>Select ...</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </select>
            </div>

            
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddDental;

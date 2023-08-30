import React, { useState } from "react";
import Popover from '@mui/material/Popover';


const AddDental = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div className="px-4">
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
              />
            </div>
            <div className="flex flex-col">
              <label className="px-4 mt-2">Next Due Date</label>
              <input
                type="date"
                className="px-3 w-[380px] h-[48px] border shadow-lg rounded-md mt-2"
              />
            </div>
            <div className="flex flex-col">
              <label className="px-4 mt-2">Administered By</label>
              <input
                type="text"
                className="px-3 w-[380px] h-[48px] border shadow-lg rounded-md mt-2"
                placeholder="Select Dentist..."
              />
            </div>
            <div className="flex flex-col ">
              <label className="px-4 mt-2">Attachments</label>
              <input
                type="file"
                className="px-3 w-[380px] h-[48px] border shadow-lg rounded-md mt-2 py-2"
              />
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
              <button
                onClick={handleClick}
                className="px-3 w-[380px] h-[48px] border shadow-lg rounded-md mt-2"
              >
                Open Popover
              </button>
              <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
              >
                
              </Popover>
            </div>
            {/* Rest of the form inputs */}
            <p>yasir</p>
            <p>masoor</p>

          </div>
        </div>
      </form>
    </div>
  );
};

export default AddDental;
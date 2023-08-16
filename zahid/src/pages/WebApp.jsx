

import React from "react";
import img1 from "../images/Horse Stable.png";
import img2 from "../images/Contacts.png";
import img3 from "../images/Schedule.png";
import img4 from "../images/comb.png";
import img from "../images/khan.png";
import pic from "../images/umar.png";
import pic1 from "../images/snow.png";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import  {yasir, asad,junaid } from "../config/Data";

const Harry = () => {
  return (

    <div className='flex'>
    <div className='w-1/4 bg-[#F4F4F4] min-h-screen'>

<div className=' p-5 font-semibold pt-8'>
<div className='flex py-3'><img src={img1} alt=' Horses'/> <h1 className='pl-3 pt-2'>Horses</h1></div>
<div className='flex py-3'><img src={img2} alt=' Horses'/> <h1 className='pl-3 pt-2'>Contacts</h1></div>
<div className='flex py-3'><img src={img3} alt=' Horses'/> <h1 className='pl-3 pt-2'>Schedule</h1></div>
<div className='flex py-3'><img src={img4} alt=' Horses'/> <h1 className='pl-3 pt-2'>Reports</h1></div>
</div>
</div>

<div>
<div className='pt-6 pl-36 space-x-28 font-quicksand  '>

<Tabs>
<TabList  className='flex gap-x-5'>
 <Tab>
 <button className=' border rounded-xl w-44 px-10 py-1 hover:bg-[#000032] hover:text-white '>Activiy</button>
 </Tab>
 <Tab>
<button className=' border rounded-xl w-44 px-10 py-1 hover:bg-[#000032] hover:text-white '>Reminders</button>

 </Tab>
 <Tab>
<button className=' border rounded-xl w-44 px-10 py-1 hover:bg-[#000032] hover:text-white '>Details</button> 

 </Tab>
</TabList >

          <div>
            <p className="px-60 pt-20 font-bold">Harry</p>
             <hr className="border-t-2 border-gray-300 mt-2" />
         </div>


         <div className="pt-4">
          <div>
            <span className="p-11">
               <b>Owner:</b> Avalynn Bruce
            </span>

              <span className="">
              <b>MicroChips:</b> life Chip
              </span>
           </div>

           <div>
            <span className="p-11 ">
              <b>BillPayer:</b> Nickola churuch
         </span>
           <span className="info">
            <b>Black:</b> Stallion
              </span>
         </div>
</div>

<TabPanel>
<div className="mt-10">
  {
    yasir.map((items) => (
      <div className="flex flex-col items-center text-center">
        <p>{items.date}</p>
        <div className="flex items-center">
          <img src={items.img} className="mr-4 border-2 border-[#000000] rounded-full w-20 h-20" />
          <div>
            <p className="text-lg font-bold">{items.heading}</p>
            <p>{items.description}</p>
          </div>
        </div>
      </div>
    ))
  }
   <hr className="border-t-2 border-gray-300 mt-2" />
</div>



<div className="mt-10">
  {
    asad.map((items) => (
      <div className="flex flex-col items-center text-center">
        <p className="mr-5 mb-5">{items.date}</p>
        <div className="flex">
          <img src={items.img} className=" border-2 border-[#000000] rounded-full w-20 h-20" />
          <div className="mr-20 ">
            <p className="text-lg font-bold">{items.heading}</p>
            <p >{items.description}</p>
          </div>
        </div>
      </div>
    ))
  }
   <hr className="border-t-2 border-gray-300 mt-2" />
</div>


<div className="mt-10">
  {
    junaid.map((items) => (
      <div className="flex flex-col items-center text-center">
        <p className="mr-5 mb-5">{items.date}</p>
        <div className="flex">
          <img src={items.img} className=" border-2 border-[#000000] rounded-full w-20 h-20" />
          <div className="mr-20 ">
            <p className="text-lg font-bold">{items.heading}</p>
            <p >{items.description}</p>
          </div>
        </div>
      </div>
    ))
  }
   <hr className="border-t-2 border-gray-300 mt-2" />
</div>
</TabPanel>

<TabPanel>
<div className="mt-10">
  {
    yasir.map((items) => (
      <div className="flex flex-col items-center text-center">
        <p>{items.date}</p>
        <div className="flex items-center">
          <img src={items.img} className="mr-4 border-2 border-[#000000] rounded-full w-20 h-20" />
          <div>
            <p className="text-lg font-bold">{items.heading}</p>
            <p>{items.description}</p>
          </div>
        </div>
      </div>
    ))
  }
   <hr className="border-t-2 border-gray-300 mt-2" />
</div>



<div className="mt-10">
  {
    asad.map((items) => (
      <div className="flex flex-col items-center text-center">
        <p className="mr-5 mb-5">{items.date}</p>
        <div className="flex">
          <img src={items.img} className=" border-2 border-[#000000] rounded-full w-20 h-20" />
          <div className="mr-20 ">
            <p className="text-lg font-bold">{items.heading}</p>
            <p >{items.description}</p>
          </div>
        </div>
      </div>
    ))
  }
   <hr className="border-t-2 border-gray-300 mt-2" />
</div>


<div className="mt-10">
  {
    junaid.map((items) => (
      <div className="flex flex-col items-center text-center">
        <p className="mr-5 mb-5">{items.date}</p>
        <div className="flex">
          <img src={items.img} className=" border-2 border-[#000000] rounded-full w-20 h-20" />
          <div className="mr-20 ">
            <p className="text-lg font-bold">{items.heading}</p>
            <p >{items.description}</p>
          </div>
        </div>
      </div>
    ))
  }
   <hr className="border-t-2 border-gray-300 mt-2" />
</div>
</TabPanel>
<TabPanel>
<div className="mt-10">
  {
    yasir.map((items) => (
      <div className="flex flex-col items-center text-center">
        <p>{items.date}</p>
        <div className="flex items-center">
          <img src={items.img} className="mr-4 border-2 border-[#000000] rounded-full w-20 h-20" />
          <div>
            <p className="text-lg font-bold">{items.heading}</p>
            <p>{items.description}</p>
          </div>
        </div>
      </div>
    ))
  }
   <hr className="border-t-2 border-gray-300 mt-2" />
</div>



<div className="mt-10">
  {
    asad.map((items) => (
      <div className="flex flex-col items-center text-center">
        <p className="mr-5 mb-5">{items.date}</p>
        <div className="flex">
          <img src={items.img} className=" border-2 border-[#000000] rounded-full w-20 h-20" />
          <div className="mr-20 ">
            <p className="text-lg font-bold">{items.heading}</p>
            <p >{items.description}</p>
          </div>
        </div>
      </div>
    ))
  }
   <hr className="border-t-2 border-gray-300 mt-2" />
</div>


<div className="mt-10">
  {
    junaid.map((items) => (
      <div className="flex flex-col items-center text-center">
        <p className="mr-5 mb-5">{items.date}</p>
        <div className="flex">
          <img src={items.img} className=" border-2 border-[#000000] rounded-full w-20 h-20" />
          <div className="mr-20 ">
            <p className="text-lg font-bold">{items.heading}</p>
            <p >{items.description}</p>
          </div>
        </div>
      </div>
    ))
  }
   <hr className="border-t-2 border-gray-300 mt-2" />
</div>
</TabPanel>
</Tabs>



</div>


</div>
</div>

























































 
    // </div>
    // <div className="flex">
    //   <div className="w-1/4 bg-[#F4F4F4] min-h-screen">
    //     <div className="p-5 font-semibold pt-8">
    //       <div className="flex py-3">
    //         <img src={img1} alt="Horses" />
    //         <h1 className="pl-3 pt-2">Horses</h1>
    //       </div>
    //       <div className="flex py-3">
    //         <img src={img2} alt="Contacts" />
    //         <h1 className="pl-3 pt-2">Contacts</h1>
    //       </div>
    //       <div className="flex py-3">
    //         <img src={img3} alt="Schedule" />
    //         <h1 className="pl-3 pt-2">Schedule</h1>
    //       </div>
    //       <div className="flex py-3">
    //         <img src={img4} alt="Reports" />
    //         <h1 className="pl-3 pt-2">Reports</h1>
    //       </div>
    //     </div>
    //   </div>

    //   <div>
    //      <div className="pt-6 pl-36 space-x-28 font-quicksand">
    //        <Tabs>
    //        <TabList className="flex gap-x-5">
    //       <Tab>
    //         <button className="border rounded-xl w-44 px-10 py-1 hover:bg-[#000032] hover:text-white">
    //                Activity
    //              </button>
    //            </Tab>
    //            <Tab>
    //              <button className="border rounded-xl w-44 px-10 py-1 hover:bg-[#000032] hover:text-white">
    //                Reminders
    //              </button>
    //            </Tab>
    //            <Tab>
    //              <button className="border rounded-xl w-44 px-10 py-1 hover:bg-[#000032] hover:text-white">
    //               Details
    //            </button>
    //            </Tab>
    //          </TabList>
    //       </Tabs>

        //   

    //      <div className="pt-4">
    // //         <div>
    // //           <span className="p-11">
    // //             <b>Owner:</b> Avalynn Bruce
    // //           </span>

    // //           <span className="">
    // //             <b>MicroChips:</b> life Chip
    // //           </span>
    // //         </div>

    // //         <div>
    // //           <span className="p-11 ">
    // //             <b>BillPayer:</b> Nickola churuch
    // //           </span>
    // //           <span className="info">
    // //             <b>Black:</b> Stallion
    // //           </span>
    // //         </div>

    // //         <div className="px-24 pt-5">
    // //           <p>Monday,26, June, 2023</p>
    // //         </div>

    // //         <div className="flex items-center mt-5">
    // //           <img src={pic1} className="border rounded-full w-20 h-20 ml-4" />
    // //           <div>
    // //             <p className="mb-2">
    // //               <b>Metyl Alcohal Oxideazoal</b>
    // //             </p>
    // //             <p>Deworming - $200</p>
    // //           </div>
    // //         </div>
    // //         <hr className="border-t-2 border-gray-300 mt-5"  />

    // //         <div className="px-24 pt-5">
    // //           <p>Wednesday,26, June, 2023</p>
    // //         </div>

    // //         <div className="flex items-center">
    // //           <img src={pic} className="border rounded-full w-20 h-20 ml-4" />
    // //           <div>
    // //             <p className="mb-2">
    // //               <b>BodyClip</b>
    // //             </p>
    // //             <p>server-Record - $120</p>
    // //           </div>
    // //         </div>
    // //         <hr className="border-t-2 border-gray-300 mt-5" />

    // //         <div className="flex items-center mt-10">
    // //           <img src={img} className="border rounded-full w-20 h-20 ml-4" />
    // //           <div  >
    // //             <p className="mb-2">
    // //               <b>Coggnies Renewal</b>
    // //             </p>
    // //             <p>Coggniess</p>
    // //           </div>
    // //         </div>
    // //         <hr className="border-t-2 border-gray-300 " />

    // //       </div>
    // //     </div>
    // //   </div>
    // // </div>

  );
};

export default Harry;

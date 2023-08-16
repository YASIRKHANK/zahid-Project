
//     import React from 'react';
//     import img1 from "../images/Horse Stable.png";
//     import img2 from "../images/Contacts.png";
//     import img3 from "../images/Schedule.png";
//     import img4 from "../images/comb.png";
//     import img5 from '../images/harray.png';
//     import  {aziz,ilyas,saif } from "../config/Data";

    
//     const Daignastic = () => {
//       return (
//         <div className='flex'>
        //   <div className='w-1/4 bg-[#F4F4F4] min-h-screen'>
    
        //     <div className='p-5 font-semibold pt-8'>
        //       <div className='flex py-3'><img src={img1} alt='Horses'/> <h1 className='pl-3 pt-2'>Horses</h1></div>
        //       <div className='flex py-3'><img src={img2} alt='Contacts'/> <h1 className='pl-3 pt-2'>Contacts</h1></div>
        //       <div className='flex py-3'><img src={img3} alt='Schedule'/> <h1 className='pl-3 pt-2'>Schedule</h1></div>
        //       <div className='flex py-3'><img src={img4} alt='Reports'/> <h1 className='pl-3 pt-2'>Reports</h1></div>
        //     </div>
        //   </div>
    
        //   <div>
        //     <p className='px-80 py-5 font-extrabold'>ADD DIAGNOSTIC</p>
        //     <div className='font-extrabold px-11'>
        //       <p>Select Horses</p>
        //       <img src={img5} />
        //       <hr className="border-t-2 border-gray-300 mt-2 w-96" />
        //       <div className="flex gap-x-52 items-center">
        //         <div>
        //           <p>Select Horses</p>
        //         </div>
        //         <div className="flex  gap-x-2">
        //         <p>Select All</p>
        //           <input type="radio" />
        //         </div>
        //       </div>
        //       <input type="text" className="border border-gray-300 px-2 py-1 rounded-full mt-2" placeholder="Search" />
        //     </div>

// <div className="mt-10">
//   {
//     aziz.map((items) => (
//       <div className="flex flex-col px-10 text-center">
//         <div className="flex">
//           <img src={items.img} className=" border-2 border-[#000000] rounded-full w-20 h-20" />
//           <div>
//             <p className="text-lg font-bold">{items.heading}</p>
//             <p><span className='font-extrabold'>Owner:</span> {items.description}</p>
//           </div>
//         </div>
//       </div>
//     ))
    
//   }

//  <hr className="border-t-2 border-gray-300 mt-2 w-96 " />
// </div>

// <div className="mt-10">
//   {
//     ilyas.map((items) => (
//       <div className="flex flex-col px-10 text-center">
//         <div className="flex">
//           <img src={items.img} className=" border-2 border-[#000000] rounded-full w-20 h-20" />
//           <div>
//             <p className="text-lg font-bold">{items.heading}</p>
//             <p><span className='font-extrabold'>Owner:</span> {items.description}</p>
//           </div>
//         </div>
//       </div>
//     ))
//   }
//  <hr className="border-t-2 border-gray-300 mt-2 w-96 " />
// </div>


// <div className="mt-10">
//   {
//     saif.map((items) => (
//       <div className="flex flex-col px-10 text-center">
//         <div className="flex">
//           <img src={items.img} className=" border-2 border-[#000000] rounded-full w-20 h-20" />
//           <div>
//             <p className="text-lg font-bold">{items.heading}</p>
//             <p><span className='font-extrabold'>Owner:</span> {items.description}</p>
//           </div>
//         </div>
//       </div>
//     ))
//   }
//  <hr className="border-t-2 border-gray-300 mt-2 w-96 " />
// </div>
//           </div> 
//         </div>
//       );
//     }
    
//     export default Daignastic;
    


import React from 'react';
import img1 from "../images/Horse Stable.png";
import img2 from "../images/Contacts.png";
import img3 from "../images/Schedule.png";
import img4 from "../images/comb.png";
import img5 from '../images/harray.png';
import { aziz, ilyas, saif } from "../config/Data";

const Daignastic = () => {
  return (
    <div className='flex'>
      <div className='w-1/4 bg-[#F4F4F4] min-h-screen'>

        <div className='p-5 font-semibold pt-8'>
          <div className='flex py-3'><img src={img1} alt='Horses'/> <h1 className='pl-3 pt-2'>Horses</h1></div>
          <div className='flex py-3'><img src={img2} alt='Contacts'/> <h1 className='pl-3 pt-2'>Contacts</h1></div>
          <div className='flex py-3'><img src={img3} alt='Schedule'/> <h1 className='pl-3 pt-2'>Schedule</h1></div>
          <div className='flex py-3'><img src={img4} alt='Reports'/> <h1 className='pl-3 pt-2'>Reports</h1></div>
        </div>
      </div>

      <div>
        <p className='px-80 py-5 font-extrabold'>ADD DIAGNOSTIC</p>
        <div className='font-extrabold px-11'>
          <p>Select Horses</p>
          <img src={img5} />
          <hr className="border-t-2 border-gray-300 mt-2 w-96" />
          <div className="flex gap-x-52 items-center">
            <div>
              <p>Select Horses</p>
            </div>
            <div className="flex  gap-x-2">
              <p>Select All</p>
              <input type="radio" />
            </div>
          </div>
          <input type="text" className="border border-gray-300 px-2 py-1 rounded-full mt-2" placeholder="Search" />
        </div>

        <div className="mt-10">
          {aziz.map((items, index) => (
            <div key={index} className="flex flex-col px-10 text-center relative">
              <div className="flex">
                <img src={items.img} className=" border-2 border-[#000000] rounded-full w-20 h-20" />
                <div>
                  <p className="text-lg font-bold">{items.heading}</p>
                  <div className="flex items-center gap-x-11">
                    <p><span className='font-extrabold'>Owner:</span> {items.description}</p>
                    <input type="radio" className="mr-2" />
                  </div>
                </div>
              </div>
              <hr className="border-t-2 border-gray-300 mt-2 w-96 " />
            </div>
          ))}
        </div>

        <div className="mt-10">
          {ilyas.map((items, index) => (
            <div key={index} className="flex flex-col px-10 text-center relative">
              <div className="flex">
                <img src={items.img} className=" border-2 border-[#000000] rounded-full w-20 h-20" />
                <div>
                  <p className="text-lg font-bold">{items.heading}</p>
                  <div className="flex items-center gap-x-11">   
                    <p><span className='font-extrabold'>Owner:</span> {items.description}</p>
                    <input type="radio" className="mr-2" />
                  </div>
                </div>
              </div>
              <hr className="border-t-2 border-gray-300 mt-2 w-96 " />
            </div>
          ))}
        </div>

        <div className="mt-10">
          {saif.map((items, index) => (
            <div key={index} className="flex flex-col px-10 text-center relative">
              <div className="flex">
                <img src={items.img} className=" border-2 border-[#000000] rounded-full w-20 h-20" />
                <div>
                  <p className="text-lg font-bold">{items.heading}</p>
                  <div className="flex items-center gap-x-11">
                    <p><span className='font-extrabold'>Owner:</span> {items.description}</p>
                    <input type="radio" className="mr-2 " />
                  </div>
                </div>
              </div>
              <hr className="border-t-2 border-gray-300 mt-2 w-96 " />
            </div>
          ))}
        </div>
        <div className='mt-3 p-10 '>
      <button  type="submit" className="bg-[#000032] text-white px-4 py-2 rounded-full hover:bg-blue-600 w-72">Next</button>

        </div>
        
      </div>
    </div>
  );
}

export default Daignastic;

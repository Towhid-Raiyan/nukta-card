import { FaRegClock } from "react-icons/fa";
import { IoPeopleSharp } from "react-icons/io5";
import { HiOutlineComputerDesktop } from "react-icons/hi2";

const Home = () => {
    return (
        <div className='flex justify-center md:mt-20'>
        <div className='md:flex gap-[5px]'>
          {/* 1st card */}
          <div className='w-[234px] mt-[19px]'>
            <h2 className='text-base font-medium text-center mb-[37px]'><span className='text-[#c0c0c0]'>When course has</span> <br /> <span className='text-[#7f7f7f]'>Discount</span></h2>
            <div className="block rounded-lg shadow-xl dark:bg-slate-400  m-[10px] hover:scale-105">
              <img
                alt="Home"
                src='https://i.ibb.co/28XP3wW/Rectangle-1.png'
                className="h-[157px] w-full rounded-t-md object-cover"
              />
              <div className=" py-[10px] px-[10px]">
                <div>
                  <p className="text-base font-medium">This is a one line title</p>
                </div>
                <div className="text-xs pt-[6px] pb-[10px] font-normal text-[#353535]">
                  Two line paragraph Lorem ipsum dolor sit amet, consectetur
                </div>
                <div className=" flex justify-between pb-[10px] items-center">
                  <p className='text-xs font-medium'><del>$1050</del></p>
                  <p className='text-[#1A9C9C] text-xs font-medium'>$750</p>
                  <p className='bg-[#95E3E3] py-[2px] px-[5px] rounded-2xl text-[10px] font-normal'>You save $250</p>
                </div>
                <hr></hr>
                <div className="text-[10px] flex pt-[10px] font-medium text-[#878787]">
                  <div className='flex items-center'>
                    <FaRegClock />
                    <p className='px-[6px]'>10 hrs</p>
                  </div>
                  <div className='mx-[11px] flex items-center'>
                    <IoPeopleSharp />
                    <p className='px-[6px]'>308</p>
                  </div>
                  <div className='flex items-center'>
                    <p><HiOutlineComputerDesktop /></p>
                    <p className='px-[6px]'>17</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* 2nd card */}
          <div className='w-[234px] mt-[19px]'>
            <h2 className='text-base font-medium text-center mb-[37px]'><span className='text-[#c0c0c0]'>When course has</span> <br /> <span className='text-[#7f7f7f]'>No Discount</span></h2>
            <div className="block rounded-lg shadow-xl dark:bg-slate-400  m-[10px] hover:scale-105">
              <img
                alt="Home"
                src='https://i.ibb.co/Z1cxqqW/Rectangle-1-1.png'
                className="h-[157px] w-full rounded-t-md object-cover"
              />
              <div className=" py-[10px] px-[10px]">
                <div>
                  <p className="text-base font-medium">This is a one line title</p>
                </div>

                <div className="text-xs pt-[6px] pb-[10px] font-normal text-[#353535]">
                  Two line paragraph Lorem ipsum dolor sit amet, consectetur
                </div>
                <div className="text-xs flex justify-between pb-[10px] font-medium">
                  <p className='text-[#1A9C9C]'>$750</p>
                </div>
                <hr></hr>
                <div className="text-[10px] flex pt-[10px] font-medium text-[#878787]">
                  <div className='flex items-center'>
                    <FaRegClock />
                    <p className='px-[6px]'>10 hrs</p>
                  </div>
                  <div className='mx-[11px] flex items-center'>
                    <IoPeopleSharp />
                    <p className='px-[6px]'>308</p>
                  </div>
                  <div className='flex items-center'>
                    <p><HiOutlineComputerDesktop /></p>
                    <p className='px-[6px]'>17</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* 3rd card */}
          <div className='w-[234px] mt-[19px]'>
            <h2 className='text-base font-medium text-center mb-[37px]'><span className='text-[#c0c0c0]'>When course is</span> <br /> <span className='text-[#7f7f7f]'>FREE</span></h2>
            <div className="block rounded-lg shadow-xl dark:bg-slate-400  m-[10px] hover:scale-105">
              <img
                alt="Home"
                src='https://i.ibb.co/xGsqc3k/Rectangle-1-2.png'
                className="h-[157px] w-full rounded-t-md object-cover"
              />
              <div className=" py-[10px] px-[10px]">
                <div>
                  <p className="text-base font-medium">This is a one line title</p>
                </div>
                <div className="text-xs pt-[6px] pb-[10px] font-normal text-[#353535]">
                  Two line paragraph Lorem ipsum dolor sit amet, consectetur
                </div>
                <div className="text-xs flex justify-between pb-[10px] font-medium">
                  <p className='text-[#1A9C9C]'>FREE</p>
                </div>
                <hr></hr>
                <div className="text-[10px] flex pt-[10px] font-medium text-[#878787]">
                  <div className='flex items-center'>
                    <FaRegClock />
                    <p className='px-[6px]'>10 hrs</p>
                  </div>
                  <div className='mx-[11px] flex items-center'>
                    <IoPeopleSharp />
                    <p className='px-[6px]'>308</p>
                  </div>
                  <div className='flex items-center'>
                    <p><HiOutlineComputerDesktop /></p>
                    <p className='px-[6px]'>17</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Home;
import doctor from './assets/girl.png'
import './App.css'
import { CiClock2 } from "react-icons/ci";
import { LiaPrayingHandsSolid } from "react-icons/lia";
import { TbBellRinging } from "react-icons/tb";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdOutlineScreenSearchDesktop } from "react-icons/md";
import { ImUserMinus } from "react-icons/im";
import u from './assets/u.png'
import img from './assets/surgery.png'
import img2 from './assets/uniform.png'
import img3 from './assets/chair.png'
import { LiaTeethOpenSolid } from "react-icons/lia";
import { GrUserPolice } from "react-icons/gr";

function App() {
  return (
    <section className='h-screen w-screen'>
      <div className='relative h-screen'>

        <img
          src={doctor}
          alt='doctor'
          className='w-full h-full object-cover'
        />
        <div className='bg-black absolute top-0 opacity-40 h-full w-full'>

        </div>

        <div className='absolute top-0 left-0 flex items-center justify-between px-10 h-20 w-full font-bold '>
          <div className='text-xl text-white'>healthcare.</div>

          <div className='flex gap-10 text-white '>
            <div>Home</div>
            <div>About us</div>
            <div>Services</div>
            <div>News</div>
            <div>Contact</div>
          </div>

        </div>

        <div className='absolute inset-0 flex flex-col items-center justify-center text-center px-10'>
          <h1 className='text-5xl text-white font-bold '>
            Medicine made with care
          </h1>

          <p className='mt-6 max-w-3xl text-white'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ante leo, finibus quis est ut, tempor tincidunt ipsum. Nam consequat semper sollicitudin. Aliquam nec dapibus massa. Pellen tesque in luctus ex. Praesent luctus erat sit amet tortor aliquam bibendum. Nulla ut molestie augue, scelerisque consectetur quam.
          </p>
          <button className='mt-8 px-6 py-3 bg-yellow-500 text-white font-semibold rounded-lg hover:bg-yellow-600 transition'>
            Read More
          </button>
        </div>
        <div className='text-2xl  gap-9 text-black h-2/4 px-10 absolute inset-y-0 top-140 w-full flex  justify-center '>
          <div className='h-2/3 bg-blue-200 w-1/2 font-semibold px-5  flex flex-col items-center justify-center gap-3 '>
            <div className="flex items-center gap-2">
              <CiClock2 />
              <h3>Working Hours</h3>
            </div>
            <p className='text-xl font-light py-3 px-2' > Monday – Friday :
              8.00 – 19.00</p>
            <p className='text-xl font-light  px-2'>
              Saturday : 9.30 – 17.00</p>
            <p className='text-xl font-light px-2'>
              Sunday : 9.30 – 15.00</p>

          </div>
          <div className='h-2/3 bg-blue-200 w-1/2 font-semibold px-5  flex flex-col items-center justify-center gap-3 '>
            <div className="flex items-center gap-2">
              <TbBellRinging />

              <h2 className='font-bold text-2xl flex justify-center '>Appointments</h2>
            </div>
            <p className='text-xl font-light py-2'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ante leo, finibus quis est ut, tempor tincidunt ipsum. Nam cons equat semper sollicitudin.</p>
          </div>
          <div className='h-2/3 bg-blue-200 w-1/2 font-semibold px-5 flex flex-col items-center justify-center gap-3'>

            <div className='flex items-center gap-2'>
              <FaPhoneVolume />
              <h2 className='font-bold text-2xl'>
                Emergency Cases
              </h2>
            </div>

            <p className='text-xl font-light'>
              +567867389394
            </p>

          </div>
        </div>
      </div>
      <div className="h-170 w-full bg-gray-800 flex items-center justify-between px-10">


        <div className="w-1/2 flex justify-start flex-col gap-10 ">
          <h3 className="text-5xl font-bold  text-white">
            A great medical team to help your needs
          </h3>
          <p className='text-xl text-white font-extralight ' >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ante leo, finibus quis est ut, tempor tincidunt ipsum. Nam consequat semper sollicitudin. Aliquam nec dapibus massa. Pellen tesque in luctus ex. Praesent luctus erat sit amet tortor aliquam bibendum. Nulla ut molestie augue, scelerisque consectetur quam. Dolor sit amet, consectetur adipiscing elit. Cura bitur ante leo, finibus quis est ut, tempor tincidunt ipsum. Nam consequat semper sollicitudin. Aliquam nec dapibus massa. Pellentesque in luctus ex</p>
          <button className=' py-3 bg-yellow-500 text-white font-semibold rounded-lg hover:bg-yellow-600 transition w-1/3'>
            Read More
          </button>

        </div>

        <div className="flex justify-end items-start p-10">
          <img
            src={u}
            alt="u"
            className="w-80 h-auto object-contain"
          />

        </div>

      </div>
      <div className='h-120  relative w-full bg-blue-900  flex flex-col mt-10'>
        <div className='bg-black absolute  opacity-40 h-full w-full'></div>
        <h2 className='text-3xl text-white font-bold pt-10 px-10 items-center justify-center flex py-10'>
          Our Medical Departments
        </h2>
        <div className="flex gap-10  ">
          <div className="bg-gray-200 h-80 w-1/4">
            <div className=" flex-col items-center">
              <img
                src={img}
                alt="image"
                className="w-80 h-54 object-contain"
              />

              <div className="text-center pt-2">
                <p className="text-2xl font-semibold">
                  Plastic Surgery
                </p>
                <p className="text-sm text-gray-600 pt-3">
                  Dr. James Smith
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-200 h-80 w-1/4 ">
            <div className="flex flex-col items-center">
              <img
                src={img2}
                alt="image"
                className="w-80 h-54 object-contain"
              />

              <div className="text-center pt-2">
                <p className="text-2xl font-semibold">
                  gynecology
                </p>
                <p className="text-sm text-gray-600 pt-3">
                  Dr. Emily Johnson
                </p>
              </div>
            </div>
          </div>
          <div className="bg-gray-200 h-80 w-1/4 ">
            <div className="flex flex-col items-center">
              <img src={img3} alt="image" className="w-80 h-54 object-contain"
              />

              <div className="text-center pt-2">
                <p className="text-2xl font-semibold">
                  dentistry
                </p>
                <p className="text-sm text-gray-600 pt-3">
                  Dr. Maria Williams
                </p>
              </div>

            </div>
          </div>
          <div className='  py-10 bg-gray-200 flex col text-xl   w-50'>
            <p className=' text-center justify-center '> Nam consequat semper sollicitudin. Aliquam nec dapibus massa. Pellen tesque in luctus ex. Praesent luctus erat sit amet tortor aliquam bibendum.</p>
          </div>
        </div>
      </div>

      <div className='w-full h-240 bg-white-800 '>
        <h1 className='text-4xl hover:text-red-900 px-30 py-10'>Our Featured Services</h1>
        <div className='flex gap-10 px-10 py-5">
        '>
        <div className='bg-gray-200 h-90 w-1/3 flex items-center justify-center  hover:bg-blue-500 transition duration-300'>
            <div className='flex flex-col items-center'>

             
              <div className='flex items-center gap-3 mb-5 '>
              <MdOutlineScreenSearchDesktop size={50} />
                <p className='text-xl text-red-900 hover:text-green-900 font-semibold'>
            Screen Exams
                </p>
              </div>

              <p className='text-sm text-gray-600  text-center '>
                Hello everyone, this is a 5-day free checkup bootcamp in which we can
                check your personal health, give medicine, as well as advice related to
                health.
              </p>

            </div>
          </div>
          <div className='bg-gray-200 h-90 w-1/3 flex items-center justify-center  hover:bg-blue-500 transition'>
            <div className='flex flex-col items-center'>

             
              <div className='flex items-center gap-3 mb-5 '>
              <LiaTeethOpenSolid size={50}/>
             
                <p className='text-xl text-red-900 hover:text-green-900 font-semibold'>
           RMI Service
                </p>
              </div>

              <p className='text-sm text-gray-600  text-center '>
                Hello everyone, this is a 5-day free checkup bootcamp in which we can
                check your personal health, give medicine, as well as advice related to
                health.
              </p>

            </div>
          </div>
          <div className='bg-gray-200 h-90 w-1/3 flex items-center justify-center  hover:bg-blue-500 transition'>
            <div className='flex flex-col items-center'>

             
              <div className='flex items-center gap-3 mb-5 '>
              <GrUserPolice  size={50}/>
                <p className='text-xl text-red-900 hover:text-green-900 font-semibold'>
                  Free Checkups
                </p>
              </div>

              <p className='text-sm text-gray-600  text-center '>
                Hello everyone, this is a 5-day free checkup bootcamp in which we can
                check your personal health, give medicine, as well as advice related to
                health.
              </p>

            </div>
          </div>
         

        </div>
        <div className='flex gap-10 px-5 py-5'>
          <div className='bg-gray-200 h-90 w-1/3 flex items-center justify-center  hover:bg-blue-500 transition'>
            <div className='flex flex-col items-center'>

             
              <div className='flex items-center gap-3 mb-5 '>
                <LiaPrayingHandsSolid size={50} />
                <p className='text-xl text-red-900 hover:text-green-900 font-semibold'>
                  Free Checkups
                </p>
              </div>

              <p className='text-sm text-gray-600  text-center '>
                Hello everyone, this is a 5-day free checkup bootcamp in which we can
                check your personal health, give medicine, as well as advice related to
                health.
              </p>

            </div>
          </div>
          <div className='bg-gray-200 h-90 w-1/3 flex items-center justify-center  hover:bg-blue-500 transition'>
            <div className='flex flex-col items-center'>

              {/* Icon and title in a row */}
              <div className='flex items-center gap-3 mb-5 '>
                <LiaPrayingHandsSolid size={50} />
                <p className='text-xl text-red-900 hover:text-green-900 font-semibold'>
                  Free Checkups
                </p>
              </div>

              <p className='text-sm text-gray-600  text-center '>
                Hello everyone, this is a 5-day free checkup bootcamp in which we can
                check your personal health, give medicine, as well as advice related to
                health.
              </p>

            </div>
          </div>
          <div className='bg-gray-200 h-90 w-1/3 flex items-center justify-center  hover:bg-blue-500 transition'>
            <div className='flex flex-col items-center'>

            
              <div className='flex items-center gap-3 mb-5 '>
                <LiaPrayingHandsSolid size={50} />
                <p className='text-xl text-red-900 hover:text-green-900 font-semibold'>
                  Free Checkups
                </p>
              </div>

              <p className='text-sm text-gray-600  text-center '>
                Hello everyone, this is a 5-day free checkup bootcamp in which we can
                check your personal health, give medicine, as well as advice related to
                health.
              </p>

            </div>
          </div>

        </div>

      </div>
<div className='h-120 w-full bg-blue-800'>
  <h1 className='text-3xl text-white font-bold pt-10 px-10 items-center justify-center flex py-4'>Need a personal health plan?</h1>
  <p className='text-xl text-red-100 text-center '>Duis massa massa, mollis vel ullamcorper quis, finibus et urna. Aliquam ac eleifend metus. Ut sollicitudin risus ex</p>
</div>

    </section >
  )
}

export default App
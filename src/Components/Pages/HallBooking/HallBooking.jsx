import Navbar from '../../Navbar/Navbar'
import { Slash } from "lucide-react"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import Header from '../Header/Header';
import { Button } from '../../ui/button';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchHallInfo } from '../../Redux/Slice/apiSlice';
import { FiPlus } from "react-icons/fi";
import { GiBackwardTime } from "react-icons/gi";



const HallBooking = () => {
  const dispatch = useDispatch();
  const { hallData, errorMessage } = useSelector((state) => state.api);

  useEffect(() => {
    dispatch(fetchHallInfo());
  }, [dispatch]);


  return (
    <div className='grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]'>
      <Navbar />
      <div className='flex flex-col'>

        <Header />

        <div className='flex flex-col flex-1 gap-4 p-4 lg:gap-6 lg:p-6'>
          <div className='flex items-center'>
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/">Dashboard</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator>
                  <Slash />
                </BreadcrumbSeparator>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/hall-booking">Hall Booking</BreadcrumbLink>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>

          <div className='flex-1 flex-col flex gap-4 p-4 bg-slate-100 shadow-2xl border rounded-md undefined'>

            <div>
              <h1 className='text-xl font-bold text-[#1C189A] mx-6'>Hall Booking</h1>
            </div>
            {errorMessage && (
              <p className="text-red-500 text-center">{errorMessage}</p>
            )}

            <div className='flex items-center justify-center min-h-[70vh]'>
              {Array.isArray(hallData) && hallData.length > 0 ? (

                <div className='grid grid-cols-1 gap-y-10 gap-x-5 md:grid-cols-2 '>
                  {hallData.map((hall) => (
                    <div className='flex flex-col items-center justify-between p-4 bg-white rounded-lg shadow-2xl max-w-[30vw]' key={hall._id}>

                      <div >
                        <div className='flex items-center justify-center h-[50px]'>

                          <h4 className='text-2xl'>{hall.roomName}</h4>

                        </div>
                      </div>

                      <div className='flex items-end justify-between w-full pt-5 mt-5 border-t-2'>
                        <div className='flex justify-start gap-5'>
                          <div className='px-3 py-2 bg-green-200'>
                            <h4 className='text-2xl'>{hall.paymentPendingBookings}</h4>
                            <p className='text-sm'>Payment Pending</p>
                          </div>

                          <div className='p-2 bg-red-100 text-[#494949]'>
                            <h4 className='text-2xl'>{hall.paymentReceivedBookings}</h4>
                            <p className='text-sm'>Payment Received</p>
                          </div>
                        </div>

                        <div className="flex justify-start gap-5 ml-2">
                          <Button variant="ghost" >
                            <FiPlus />
                          </Button>
                        </div>
                        <div className="flex justify-start gap-5 ml-2 hover:text-white">
                          <Button variant="ghost">
                            <GiBackwardTime />
                          </Button>
                        </div>


                      </div>
                    </div>

                  ))}
                </div>
              ) : (
                <p>{hallData ? "No hall booking data available." : "Loading..."}</p>
              )}


            </div>
          </div>


        </div>





      </div>
    </div>


  );

};

export default HallBooking;

import Navbar from '../../Navbar/Navbar'
import { Slash } from "lucide-react"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import Header from '../../Pages/Header/Header';
import { Button } from '../../ui/button';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchHallBookingReportsData } from '../../Redux/Slice/apiSlice';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import { DatePickerDemo } from '@/Components/ui/DatePickerDemo';





const HallBookingReport = () => {
  const dispatch = useDispatch();
  const { hallReportsData, errorMessage } = useSelector((state) => state.api);

  useEffect(() => {
    dispatch(fetchHallBookingReportsData());
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
                  <BreadcrumbLink href="/home">Reports</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator>
                  <Slash />
                </BreadcrumbSeparator>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/hall-report">Hall Booking</BreadcrumbLink>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>

          <div className='flex-1 flex-col flex gap-4 p-4 bg-slate-100 shadow-2xl border rounded-md undefined'>

            <div className='flex justify-between'>
              <h1 className='text-xl font-bold text-[#1C189A] mx-6'>Hall Booking</h1>
              <DatePickerDemo />
              <Button variant="ghost">Clear</Button>
            </div>
            {errorMessage && (
              <p className="text-red-500 text-center">{errorMessage}</p>
            )}

            {Array.isArray(hallReportsData) && hallReportsData.length > 0 ? (
              <div className='relative w-full overflow-auto m-4 '>

                <Table>
                  <TableCaption className="text-[#1C189A]">A list of all Hall Bookings.</TableCaption>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Cause Title</TableHead>
                      <TableHead>Customer Name</TableHead>
                      <TableHead>Booking Party Name</TableHead>
                      <TableHead>Arbitrator Name</TableHead>
                      <TableHead>Hours</TableHead>
                      <TableHead>Total Price</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead></TableHead>
                    </TableRow>
                  </TableHeader>



                  <TableBody className="font-sans">
                    {hallReportsData.map((hall) => (
                      <TableRow key={hall._id}>
                        <TableCell >{hall.causeTitle}</TableCell>
                        <TableCell>{hall.customerName}</TableCell>
                        <TableCell>{hall.bookingPartyName}</TableCell>
                        <TableCell>{hall.arbitratorName}</TableCell>
                        <TableCell>{hall.hours}</TableCell>
                        <TableCell>{hall.totalPrice}</TableCell>
                        <TableCell>
                          {new Date(hall.bookingDate).toLocaleDateString('en-US', {
                            month: 'numeric',
                            day: 'numeric',
                            year: 'numeric',


                          })}
                        </TableCell>
                        <TableCell>{hall.status}</TableCell>
                        <TableCell className='flex flex-row space-x-5 justify-end font-normal '>
                          <Button variant="ghost" >View</Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>

                </Table>
              </div>
            ) : (
              <p>{hallReportsData ? "No hall report data available." : "Loading..."}</p>
            )}



          </div>
        </div>


      </div>





    </div>



  );

};

export default HallBookingReport;

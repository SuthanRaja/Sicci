import Navbar from '../../Navbar/Navbar'
import { Slash } from "lucide-react"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import Header from '../../Pages/Header';
import { Button } from '../../ui/button';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchIaaTransactionsData } from '../../Redux/apiSlice';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"




const IAAReport = () => {
  const dispatch = useDispatch();
  const { iaaReportsData, errorMessage } = useSelector((state) => state.api);

  useEffect(() => {
    dispatch(fetchIaaTransactionsData());
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
                  <BreadcrumbLink href="/">Reports</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator>
                  <Slash />
                </BreadcrumbSeparator>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/hall-booking">IAA</BreadcrumbLink>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>

          <div className='flex-1 flex-col flex gap-4 p-4 bg-slate-100 shadow-2xl border rounded-md undefined'>

            <div className='flex justify-between'>
              <h1 className='text-xl font-bold text-[#1C189A] mx-6'>IAA Reports</h1>
              <Button>Filter</Button>
            </div>
            {errorMessage && (
              <p className="text-red-500 text-center">{errorMessage}</p>
            )}

            {Array.isArray(iaaReportsData) && iaaReportsData.length > 0 ? (
              <div className='relative w-full overflow-auto m-4 '>

                <Table>
                  <TableCaption className="text-[#1C189A]">A list of all IAA Transactions.</TableCaption>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Batch No.</TableHead>
                      <TableHead>Customer</TableHead>
                      <TableHead>Loan Type</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Payment</TableHead>
                      <TableHead></TableHead>
                    </TableRow>
                  </TableHeader>



                  <TableBody className="font-sans">
                    {iaaReportsData.map((iaa) => (
                      <TableRow key={iaa._id}>
                        <TableCell >{iaa.batchNumber}</TableCell>
                        <TableCell>{iaa.customer?.customerName}</TableCell>
                        <TableCell>{iaa.loanType.loanTypeName}</TableCell>
                        <TableCell>
                          {new Date(iaa.date).toLocaleDateString('en-US', {
                            weekday: 'short',
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric'
                          })}
                        </TableCell>
                        <TableCell>{iaa.status}</TableCell>
                        <TableCell>{iaa.paymentStatus}</TableCell>
                        <TableCell className='flex flex-row space-x-5 justify-end font-normal '>
                          <Button variant="ghost" >View</Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>

                </Table>
              </div>
            ) : (
              <p>{iaaReportsData ? "No iaa report data available." : "Loading..."}</p>
            )}



          </div>
        </div>


      </div>





    </div>



  );

};

export default IAAReport;

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
import { fetchCustomerData } from '../../Redux/apiSlice';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"




const Customer = () => {
  const dispatch = useDispatch();
  const { customerData, errorMessage } = useSelector((state) => state.api);

  useEffect(() => {
    dispatch(fetchCustomerData());
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
                  <BreadcrumbLink href="/">Master Table</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator>
                  <Slash />
                </BreadcrumbSeparator>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/hall-booking">Customer</BreadcrumbLink>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>

          <div className='flex-1 flex-col flex gap-4 p-4 bg-slate-100 shadow-2xl border rounded-md undefined'>

            <div className='flex justify-between'>
              <h1 className='text-xl font-bold text-[#1C189A] mx-6'>Customer</h1>
              <Button variant="ghost">Add Customer</Button>
            </div>
            {errorMessage && (
              <p className="text-red-500 text-center">{errorMessage}</p>
            )}

            {Array.isArray(customerData) && customerData.length > 0 ? (
              <div className='relative w-full overflow-auto m-4 '>

                <Table>
                  <TableCaption className="text-[#1C189A]">A list of all Customers.</TableCaption>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Customer Name</TableHead>
                      <TableHead>Loan Type</TableHead>
                      <TableHead>Phone Number</TableHead>
                      <TableHead className="text-right">Action</TableHead>
                    </TableRow>
                  </TableHeader>



                  <TableBody className="font-sans">
                    {customerData.map((customer) => (
                      <TableRow key={customer._id}>
                        <TableCell >{customer.customerName}</TableCell>
                        <TableCell>{customer.loanType.length > 0 ? customer.loanType[0].loanTypeName : "No Loan Type"}</TableCell>
                        <TableCell>{customer.mobileNumber}</TableCell>
                        <TableCell className='flex flex-row space-x-5 justify-end font-normal '>
                          <Button variant="ghost">Edit</Button>
                          <Button variant="ghost" >Delete</Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>

                </Table>
              </div>
            ) : (
              <p>{customerData ? "No customer data available." : "Loading..."}</p>
            )}



          </div>
        </div>


      </div>





    </div>



  );

};

export default Customer;

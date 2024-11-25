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
import { fetchArbitratorData } from '../../Redux/Slice/apiSlice';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"




const Arbitrator = () => {
  const dispatch = useDispatch();
  const { arbitratorData, errorMessage } = useSelector((state) => state.api);

  useEffect(() => {
    dispatch(fetchArbitratorData());
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
                  <BreadcrumbLink href="/home">Master Table</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator>
                  <Slash />
                </BreadcrumbSeparator>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/arbitrator">Arbitrator</BreadcrumbLink>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>

          <div className='flex-1 flex-col flex gap-4 p-4 bg-slate-100 shadow-2xl border rounded-md undefined'>

            <div className='flex justify-between'>
              <h1 className='text-xl font-bold text-[#1C189A] mx-6'>Arbitrator </h1>
              <Button variant="ghost">Add Arbitrator</Button>
            </div>
            {errorMessage && (
              <p className="text-red-500 text-center">{errorMessage}</p>
            )}

            {Array.isArray(arbitratorData) && arbitratorData.length > 0 ? (
              <div className='relative w-full overflow-auto m-4 '>

                <Table>
                  <TableCaption className="text-[#1C189A]">A list of all Arbitrators.</TableCaption>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Arbitrator Name</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Loan Type</TableHead>
                      <TableHead className="text-right">Action</TableHead>
                    </TableRow>
                  </TableHeader>



                  <TableBody className="font-sans">
                    {arbitratorData.map((arbitrators) => (
                      <TableRow key={arbitrators._id}>
                        <TableCell >{arbitrators.arbitratorName}</TableCell>
                        <TableCell>{arbitrators.email}</TableCell>
                        <TableCell>{arbitrators.loanType.length > 0 ? arbitrators.loanType[0].loanTypeName : ""}</TableCell>
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
              <p>{arbitratorData && arbitratorData.length === 0 ? "No arbitrator data available." : "Loading..."}</p>
            )}



          </div>
        </div>


      </div>





    </div>



  );

};

export default Arbitrator;

import { useRef } from "react";
import ReactToPrint from  "react-to-print"
import * as React from 'react';
import { invoice } from "../data/invoice";

const Home = () => {
    const componentRef = useRef()

    // const handlePrint = () => {
    //     window.print()
    // }
      
    return ( 
        <>
        <div className="flex justify-center items-center flex-col gap-5 my-5">
            <h1 className="text-xl">Download your Invoice here</h1>
            <ReactToPrint trigger={() => (
                <button className="rounded-lg px-4 py-2 bg-blue-500 text-blue-100 hover:bg-blue-600 duration-300"
                 > Print/Download Invoice</button>
             )}
              content={() => componentRef.current}
             />
             <div ref={componentRef}>
                {invoice.map((ml) => {
                    return(
                        <div class="max-w-5xl mx-auto py-8 bg-white">
                        <article class="overflow-hidden">
                         <div class="bg-[white] rounded-b-md">
                          <div class="">
                           <div class="space-y-6 text-slate-700">
                            {/* <img className="w-[100px] h-[50px]" src={ml.company_logo} /> */}
                            <p class="text-xl font-extrabold tracking-tight uppercase font-body py-2">
                             {ml.company}
                            </p>
                           </div>
                          </div>
                          <div class="">
                           <div class="flex w-full">
                            <div class="grid grid-cols-4 gap-12 bg-slate-100 py-10 px-6">
                            <div class="text-sm font-light text-slate-500">
                              <p class="text-lg font-bold text-slate-800 mb-3 text-justify">Bill To</p>
                              <p className="text-base font-medium"> {ml.billing_address}</p>
                             </div>
                            <div class="text-sm font-light text-slate-500">
                              <p class="text-lg font-bold text-slate-800 mb-3">Shipped To</p>
                              <p className="text-base font-medium">{ml.shipping_address}</p>
                             </div>
                             <div class="text-sm font-light text-slate-500">
                             <p class="text-lg font-bold text-slate-800 mb-3">
                               Invoice Details
                              </p>
                              <p className="text-base font-medium">Invoice No: {ml.invoice_no}</p>
                              <p className="text-base font-medium">Invoice Date: {ml.invoice_date}</p>
                              <p className="text-base font-medium">{ml.invoice}</p>
                             </div>

                             <div class="text-sm font-light text-slate-500">
                             <p class="text-lg font-bold text-slate-800 mb-3">
                               Order Details
                              </p>
                              <p className="text-base font-medium whitespace-nowrap">Order No: {ml.order_no}</p>
                              <p className="text-base font-medium">Order Date: {ml.order_date}</p>
                              {/* <p className="text-base font-medium">GSTIN: {ml.gst_no}</p>
                              <p className="text-base font-medium">PAN NO: {ml.pan_no}</p>
                              <p className="text-base font-medium">{ml.invoice}</p> */}
                             </div>
                 
                            </div>
                           </div>
                          </div>
                      
                         <div class="">
                           <div class="flex flex-col mx-0 mt-8">
                            <table class="min-w-full divide-y divide-slate-500">
                             <thead>
                              <tr>
                              <th scope="col" class="py-3.5 pl-4 pr-3 whitespace-nowrap text-lg font-medium text-slate-700 sm:pl-6 md:pl-0">
                                Product
                               </th>
                               <th scope="col" class="py-3.5 pl-4 pr-3 whitespace-nowrap text-lg font-medium text-slate-700 sm:pl-6 md:pl-0">
                                Description
                               </th>
                               <th scope="col" class="hidden py-3.5 px-3 whitespace-nowrap text-lg font-medium text-slate-700 sm:table-cell">
                                Net Amount
                               </th>
                               <th scope="col" class="py-3.5 pl-4 pr-3 whitespace-nowrap text-lg font-medium text-slate-700 sm:pl-6 md:pl-0">
                                Discount
                               </th>
                               <th scope="col" class="hidden py-3.5 px-3 whitespace-nowrap text-lg font-medium text-slate-700 sm:table-cell">
                                Quantity
                               </th>
                               <th scope="col" class="hidden py-3.5 px-3 whitespace-nowrap text-lg font-medium text-slate-700 sm:table-cell">
                                Tax Rate
                               </th>
                               <th scope="col" class="hidden py-3.5 px-3 whitespace-nowrap text-lg font-medium text-slate-700 sm:table-cell">
                                Tax Type
                               </th>
                               <th scope="col" class="py-3.5 pl-3 pr-4 whitespace-nowrap text-lg font-medium text-slate-700 sm:pr-6 md:pr-0">
                                Tax Amount
                               </th>
                               <th scope="col" class="py-3.5 pl-3 pr-4 whitespace-nowrap text-lg font-medium text-slate-700 sm:pr-6 md:pr-0">
                                Total Amount
                               </th>
                              </tr>
                             </thead>
                             <tbody>
                              <tr class="border-b border-slate-200">
                               <td class="py-4 pl-4 pr-3 text-sm sm:pl-6 md:pl-0">
                                <div class="font-medium text-slate-700">{ml.product}</div>
                               </td>
                               <td class="hidden px-3 py-4 font-medium text-base  whitespace-pre-line text-slate-800 sm:table-cell">
                                {ml.product_desc}
                               </td>
                               <td class="hidden px-3 py-4 font-medium text-base whitespace-nowrap text-slate-800 h-[50px] sm:table-cell">
                               ₹ {ml.net_amount} 
                               </td>
                               <td class="py-4 pl-3 pr-4 font-medium text-base whitespace-nowrap text-slate-800 sm:pr-6 md:pr-0">
                               ₹ {ml.discount}
                               </td>
                               <td class="py-4 pl-3 pr-4 font-medium text-base whitespace-nowrap text-slate-800 sm:pr-6 md:pr-0">
                                {ml.quantity}
                               </td>
                               <td class="py-4 pl-3 pr-4 font-medium text-base whitespace-nowrap text-slate-800 sm:pr-6 md:pr-0">
                               ₹ {ml.tax_amount}
                               </td>
                               <td class="py-4 pl-3 pr-4 font-medium text-base whitespace-nowrap text-slate-800 sm:pr-6 md:pr-0">
                                {ml.tax_type}
                               </td>
                               <td class="py-4 pl-3 pr-4 font-medium text-base whitespace-nowrap text-slate-800 sm:pr-6 md:pr-0">
                               {ml.tax_rate}%
                               </td>
                               <td class="py-4 pl-3 pr-4 font-medium text-base whitespace-nowrap text-slate-800 sm:pr-6 md:pr-0">
                               ₹ {ml.total_amount}
                               </td>
                              </tr>
                             </tbody>
                             <tfoot>
                             </tfoot>
                            </table>
                           </div>
                          </div> 
                          <div className="flex justify-end">
                            <span>Subtotal</span>
                            <span>{ml.net_amount}</span>
                          </div>
                       {/* <div>
                            <table>
                                <tr>
                                <th scope="row" colspan="3" class="hidden pt-6 pl-6 pr-3 text-sm font-light text-slate-500 sm:table-cell md:pl-0">
                                Discount
                                </th>
                                <th scope="row" class="pt-6 pl-4 pr-3 text-sm font-light  text-slate-500 sm:hidden">
                                Discount
                                </th>
                                <td class="pt-6 pl-3 pr-4 text-sm  text-slate-500 sm:pr-6 md:pr-0">
                                {ml.discount}
                                </td>
                                </tr>
                            <tr>
                            <th scope="row" colspan="3" class="hidden pt-4 pl-6 pr-3 text-sm font-light text-right text-slate-500 sm:table-cell md:pl-0">
                            Tax
                            </th>
                            <th scope="row" class="pt-4 pl-4 pr-3 text-sm font-light text-left text-slate-500 sm:hidden">
                            Tax
                            </th>
                            <td class="pt-4 pl-3 pr-4 text-sm whitespace-nowrap text-slate-500 sm:pr-6 md:pr-0">
                            {ml.tax_amount}
                            </td>
                            </tr>

                                <tr>
                                <th scope="row" colspan="3" class="hidden pt-4 pl-6 pr-3 text-sm font-normal text-right text-slate-700 sm:table-cell md:pl-0">
                                Total
                                </th>
                                <th scope="row" class="pt-4 pl-4 pr-3 text-sm font-normal whitespace-nowrap text-slate-700 sm:hidden">
                                Total
                                </th>
                                <td class="pt-4 pl-3 pr-4 text-sm font-normal whitespace-nowrap text-slate-700 sm:pr-6 md:pr-0">
                                {ml.total_amount}
                                </td>
                                </tr>
                                </table>
                            </div>  */}

                         </div>
                        </article>
                       </div>
                    )
                })}
         </div>
        </div>
    </>
     );
}
 
export default Home;

/* <div class="container mx-auto px-4 py-4 bg-white">
<header class="flex justify-between py-4 border-b border-gray-400">
<div class="flex items-center">
    <img class="h-12 w-auto mr-4" src="https://via.placeholder.com/150" alt="Logo"/>
    <h1 class="text-lg font-bold text-gray-700">Invoice</h1>
</div>
<div class="text-right">
    <p class="text-gray-700">Invoice #: 12345</p>
    <p class="text-gray-700">Date: April 7, 2023</p>
</div>
</header>

{/* <!-- Customer Information --> */
/* <div class="my-4">
<h2 class="text-lg font-bold text-gray-700">Bill To:</h2>
<p class="text-gray-700">John Doe</p>
<p class="text-gray-700">123 Main St</p>
<p class="text-gray-700">Anytown, USA 12345</p>
</div> */

/* <!-- Invoice Table --> */
/* <table class="w-full border-collapse my-4">
<thead>
<tr class="bg-gray-200 text-gray-700">
  <th class="py-3 px-6 text-left">#</th>
  <th class="py-3 px-6 text-left">Description</th>
  <th class="py-3 px-6 text-left">Quantity</th>
  <th class="py-3 px-6 text-left">Price</th>
  <th class="py-3 px-6 text-left">Total</th>
</tr>
</thead>
<tr class="border-b border-gray-200">
  <td class="py-3 px-6 text-left">1</td>
  <td class="py-3 px-6 text-left">Item 1</td>
  <td class="py-3 px-6 text-left">2</td>
  <td class="py-3 px-6 text-left">$10.00</td>
  <td class="py-3 px-6 text-left">$20.00</td>
</tr>
<tr class="border-b border-gray-200">
  <td class="py-3 px-6 text-left">2</td>
  <td class="py-3 px-6 text-left">Item 2</td>
  <td class="py-3 px-6 text-left">1</td>
  <td class="py-3 px-6 text-left">$10.00</td>
  <td class="py-3 px-6 text-left">$10.00</td>
  </tr>
  </table>
 </div>  */
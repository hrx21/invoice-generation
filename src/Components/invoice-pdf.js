import { Document, Page, Text, StyleSheet } from '@react-pdf/renderer';
import { invoice } from "../data/invoice";

    const styles = StyleSheet.create({
        body: {
            paddingTop: 35,
            paddingBottom: 65,
            paddingHorizontal: 35,
          },
          title: {
            fontSize: 24,
            textAlign: "center",
          },
          text: {
            margin: 12,
            fontSize: 14,
            textAlign: "justify",
            fontFamily: "Times-Roman",
          },
          image: {
            width: "200px",
            height: "100px"
          },
          header: {
            fontSize: 12,
            marginBottom: 20,
            textAlign: "center",
            color: "grey",
          },
          pageNumber: {
            position: "absolute",
            fontSize: 12,
            bottom: 30,
            left: 0,
            right: 0,
            textAlign: "center",
            color: "grey",
          },
      });

  const InvoicePDF = () => {
      return (
        <>
        {invoice.map((al) => {
                     <div>
                         <div class="max-w-5xl mx-auto py-8 bg-white">
                        <article class="overflow-hidden">
                         <div class="bg-slate-100 h-full rounded-b-md">
                           <div class="space-y-6 text-slate-700 container py-6">
                           <Image style={styles.image} src={al.company_logo} />
                            {/* <img className="w-[200px] h-[100px]" src={ml?.company_logo} alt="logo" />   */}
                            {/* <p class="text-xl font-extrabold tracking-tight uppercase font-body py-2">{ml.company}</p> */}
                           </div>
                          <div class="container">
                           <div class="flex w-full">
                            <div class="grid grid-cols-3 gap-10">
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
                              <p className="text-base font-medium"> <strong>Invoice No:</strong>  {ml.invoice_no}</p>
                              <p className="text-base font-medium"> <strong>Invoice Date:</strong>  {ml.invoice_date}</p>
                              <p className="text-base font-medium">{ml.invoice}</p>
                             </div>

                             <div class="text-sm font-light text-slate-500">
                             <p class="text-lg font-bold text-slate-800 mb-3">
                               Order Details
                              </p>
                              <p className="text-base font-medium whitespace-nowrap"> <strong>Order No:</strong> {ml.order_no}</p>
                              <p className="text-base font-medium"> <strong>Order Date:</strong>  {ml.order_date}</p>  
                             </div>

                             <div class="text-sm font-light text-slate-500">
                             <p class="text-lg font-bold text-slate-800 mb-3">
                               Other Details
                              </p>
                              <p className="text-base font-medium whitespace-nowrap"> <strong>PAN No:</strong>  {ml.pan_no} </p>
                              <p className="text-base font-medium"> <strong>GST No:</strong>  {ml.gst_no}</p>
                             </div>
                            </div>
                           </div>
                          </div>
                      
                         <div class="">
                           <div class="flex flex-col mx-0 container py-6">
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
                             <tbody className="">
                              <tr class="border-b border-slate-200">
                               <td class="py-4 pl-4 pr-3 text-sm sm:pl-6 md:pl-0">
                                <div class="font-medium text-slate-700">{ml.product}</div>
                               </td>
                               <td class="hidden px-3 py-4 font-medium text-sm text-slate-800 sm:table-cell">
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

                          <div className="container">
                             <p className="font-normal text-lg">Amount In Words:</p>
                            <span className="font-semibold text-base">{ml.amount_in_words}</span>
                          </div>

                          <div className="grid grid-rows-2 place-content-end pb-4 container ">
                            <div>
                              <span className="text-base font-semibold">Subtotal: </span>
                              <span className="text-base font-medium">₹ {ml.net_amount}</span>
                            </div>
                            <div>
                            <span className="text-base font-semibold">Tax Rate: </span>
                              <span className="text-base font-medium">₹ {ml.tax_amount}</span>
                            </div>
                            <div>
                              <span className="text-base font-semibold">Total: </span>
                              <span className="text-base font-medium">₹ {ml.total_amount}</span>
                            </div>
                          </div>

                         </div>                           {/* main bg div */}
                        </article>
                       </div>
                    <Document>
                    <Page style={styles.body}>
                      <Text style={styles.header} fixed></Text>
                      <Image style={styles.image} src={al.company_logo} />
                      <Text style={styles.text}>
                        
                      </Text>
                      <Text
                        style={styles.pageNumber}
                        render={({ pageNumber, totalPages }) =>
                          `${pageNumber} / ${totalPages}`
                        }
                      />
                    </Page>
                  </Document>
                  </div>
            })}
        </>
      );
    };

 
export default InvoicePDF;
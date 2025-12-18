import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = { title: "My Orders" };

export default function OrdersPage() {
  const orders = [
    {
      orderNo: 300,
      name: "John",
      status: "Confirmed",
      amount: "$400",
      address: "Los Angeles",
      date: "9-Jan-2022",
      paymentStatus: "Paid",
    },
    {
      orderNo: 300,
      name: "John",
      status: "Confirmed",
      amount: "$400",
      address: "Los Angeles",
      date: "9-Jan-2022",
      paymentStatus: "Paid",
    },
    {
      orderNo: 300,
      name: "John",
      status: "Confirmed",
      amount: "$400",
      address: "Los Angeles",
      date: "9-Jan-2022",
      paymentStatus: "Paid",
    },
    {
      orderNo: 300,
      name: "John",
      status: "Confirmed",
      amount: "$400",
      address: "Los Angeles",
      date: "9-Jan-2022",
      paymentStatus: "Paid",
    },
    {
      orderNo: 300,
      name: "John",
      status: "Cancelled",
      amount: "$400",
      address: "Los Angeles",
      date: "9-Jan-2022",
      paymentStatus: "Paid",
    },
    {
      orderNo: 300,
      name: "John",
      status: "Cancelled",
      amount: "$400",
      address: "Los Angeles",
      date: "9-Jan-2022",
      paymentStatus: "Paid",
    },
  ];

  return (
    <div className="min-h-screen bg-background-primary text-text-primary">
      <Navbar />
      <main className="mx-auto max-w-6xl px-4 py-10">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-[36px] leading-[44px] tracking-[-1.5px] font-semibold">
            My Orders
          </h1>
          <div className="h-9 w-40 border border-[#1C275A] px-3 flex items-center justify-between text-[14px]">
            <span className="font-bold">Last 7 Days</span>
            <span className="opacity-50">▾</span>
          </div>
        </div>

        <div className="overflow-x-auto border border-black/10">
          <table className="w-full min-w-max text-left text-[12px]">
            <thead className="bg-[#d9d5ec]">
              <tr>
                <th className="px-6 py-3 font-semibold uppercase tracking-wider">
                  Order No.
                </th>
                <th className="px-6 py-3 font-semibold uppercase tracking-wider">
                  Customer Name
                </th>
                <th className="px-6 py-3 font-semibold uppercase tracking-wider">
                  Payment Status
                </th>
                <th className="px-6 py-3 font-semibold uppercase tracking-wider">
                  Amount
                </th>
                <th className="px-6 py-3 font-semibold uppercase tracking-wider">
                  Address
                </th>
                <th className="px-6 py-3 font-semibold uppercase tracking-wider">
                  Order Date
                </th>
                <th className="px-6 py-3 font-semibold uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {orders.map((o, i) => (
                <tr key={i} className="border-b border-[#d9d5ec]">
                  <td className="px-6 py-4 text-[14px] text-[#25213b]">
                    {o.orderNo}
                  </td>
                  <td className="px-6 py-4 text-[14px] text-[#25213b]">
                    {o.name}
                  </td>
                  <td className="px-6 py-4">{o.paymentStatus}</td>
                  <td className="px-6 py-4">{o.amount}</td>
                  <td className="px-6 py-4">{o.address}</td>
                  <td className="px-6 py-4">{o.date}</td>
                  <td className="px-6 py-4">{o.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
      <Footer />
    </div>
  );
}

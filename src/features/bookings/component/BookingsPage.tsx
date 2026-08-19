"use client";

import { useState } from "react";
import { DashboardShell } from "@/components/sheard/DashboardShell";
import { Calendar, ChevronDown, Clock, Coins, Eye, Filter, Plus, Search, TicketCheck, Users, X } from "lucide-react";

interface Booking {
  id: string;
  guest: string;
  email: string;
  park: string;
  property: string;
  dates: string;
  amount: string;
  status: "Confirmed" | "Pending" | "Cancelled";
  avatar: string;
}

const mockBookings: Booking[] = [
  {
    id: "OBS-1024",
    guest: "Clara Oswald",
    email: "clara@tardis.org",
    park: "Århus Lakeside Retreat",
    property: "Lakeside Cabin 4",
    dates: "20 Aug - 27 Aug 2026",
    amount: "£840",
    status: "Confirmed",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=80&h=80&q=80",
  },
  {
    id: "OBS-1023",
    guest: "John Smith",
    email: "smith@hastings.co.uk",
    park: "Nordic Fjord Expedition",
    property: "Fjord View Lodge 2",
    dates: "22 Aug - 29 Aug 2026",
    amount: "£1,250",
    status: "Pending",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&h=80&q=80",
  },
  {
    id: "OBS-1022",
    guest: "Sarah Jane",
    email: "sarah.jane@met.gov",
    park: "Sicilian Citrus Grove Getaway",
    property: "Citrus Villa 12",
    dates: "18 Aug - 25 Aug 2026",
    amount: "£980",
    status: "Confirmed",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=80&h=80&q=80",
  },
  {
    id: "OBS-1021",
    guest: "Rose Tyler",
    email: "rose@badwolf.co.uk",
    park: "Århus Lakeside Retreat",
    property: "Lakeside Cabin 1",
    dates: "15 Aug - 22 Aug 2026",
    amount: "£720",
    status: "Cancelled",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=80&h=80&q=80",
  },
  {
    id: "OBS-1020",
    guest: "Rory Williams",
    email: "rory@leadworth.nhs.uk",
    park: "Nordic Fjord Expedition",
    property: "Alpine Hut 3",
    dates: "10 Aug - 17 Aug 2026",
    amount: "£610",
    status: "Confirmed",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=80&h=80&q=80",
  },
];

export function BookingsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [parkFilter, setParkFilter] = useState("All");
  const [selectedBooking, setSelectedBooking] = useState<Booking | null>(null);

  const filteredBookings = mockBookings.filter((booking) => {
    const matchesSearch =
      booking.guest.toLowerCase().includes(searchTerm.toLowerCase()) ||
      booking.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      booking.property.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "All" || booking.status === statusFilter;
    const matchesPark = parkFilter === "All" || booking.park === parkFilter;
    return matchesSearch && matchesStatus && matchesPark;
  });

  return (
    <DashboardShell
      active="Bookings"
      title="Bookings"
      subtitle="Manage your luxury bookings and check-in status."
    >
      <main className="grid gap-6 p-5 md:p-8">
        {/* Stats Row */}
        <section className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          <div className="relative overflow-hidden rounded-xl border border-slate-200 bg-white p-6 shadow-[0_1px_2px_rgba(0,0,0,0.05)]">
            <span className="absolute -right-8 -top-8 size-24 rounded-full bg-gradient-to-br from-[#3b338c]/10 to-violet-200/10" />
            <span className="grid size-12 place-items-center rounded-full bg-slate-100 text-[#3b338c]">
              <TicketCheck size={20} />
            </span>
            <h2 className="mt-3 text-sm font-semibold text-slate-500 uppercase tracking-wider">Total Bookings</h2>
            <strong className="mt-2 block text-3xl font-bold text-slate-850">1,284</strong>
            <p className="mt-2 text-xs text-green-600 font-medium">+8.4% from last month</p>
          </div>

          <div className="relative overflow-hidden rounded-xl border border-slate-200 bg-white p-6 shadow-[0_1px_2px_rgba(0,0,0,0.05)]">
            <span className="absolute -right-8 -top-8 size-24 rounded-full bg-gradient-to-br from-amber-500/10 to-orange-200/10" />
            <span className="grid size-12 place-items-center rounded-full bg-slate-100 text-amber-600">
              <Clock size={20} />
            </span>
            <h2 className="mt-3 text-sm font-semibold text-slate-500 uppercase tracking-wider">Pending</h2>
            <strong className="mt-2 block text-3xl font-bold text-slate-850">12</strong>
            <p className="mt-2 text-xs text-amber-600 font-medium">Requires approval</p>
          </div>

          <div className="relative overflow-hidden rounded-xl border border-slate-200 bg-white p-6 shadow-[0_1px_2px_rgba(0,0,0,0.05)]">
            <span className="absolute -right-8 -top-8 size-24 rounded-full bg-gradient-to-br from-green-500/10 to-emerald-200/10" />
            <span className="grid size-12 place-items-center rounded-full bg-slate-100 text-green-600">
              <Coins size={20} />
            </span>
            <h2 className="mt-3 text-sm font-semibold text-slate-500 uppercase tracking-wider">Total Revenue</h2>
            <strong className="mt-2 block text-3xl font-bold text-slate-850">£142,580</strong>
            <p className="mt-2 text-xs text-green-600 font-medium">+14.2% increase</p>
          </div>

          <div className="relative overflow-hidden rounded-xl border border-slate-200 bg-white p-6 shadow-[0_1px_2px_rgba(0,0,0,0.05)]">
            <span className="absolute -right-8 -top-8 size-24 rounded-full bg-gradient-to-br from-sky-500/10 to-indigo-200/10" />
            <span className="grid size-12 place-items-center rounded-full bg-slate-100 text-sky-600">
              <Users size={20} />
            </span>
            <h2 className="mt-3 text-sm font-semibold text-slate-500 uppercase tracking-wider">Active Guests</h2>
            <strong className="mt-2 block text-3xl font-bold text-slate-850">342</strong>
            <p className="mt-2 text-xs text-slate-500">Currently checked-in</p>
          </div>
        </section>

        {/* Filter Controls */}
        <section className="bg-white border border-slate-200 rounded-xl p-5 shadow-[0_1px_2px_rgba(0,0,0,0.05)] flex flex-col gap-4 lg:flex-row lg:items-center justify-between">
          <div className="flex flex-1 flex-col gap-3 sm:flex-row">
            <div className="relative flex-1">
              <Search className="absolute left-3.5 top-3.5 size-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search guest name, booking ID..."
                className="w-full h-11 pl-10 pr-4 border border-slate-200 rounded-lg outline-none text-slate-700 bg-slate-50 focus:bg-white focus:border-[#3b338c] transition-colors"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div className="relative">
              <select
                className="w-full sm:w-44 h-11 px-4 pr-10 border border-slate-200 rounded-lg outline-none bg-slate-50 appearance-none text-slate-650 cursor-pointer"
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
              >
                <option value="All">All Statuses</option>
                <option value="Confirmed">Confirmed</option>
                <option value="Pending">Pending</option>
                <option value="Cancelled">Cancelled</option>
              </select>
              <ChevronDown className="absolute right-3.5 top-3.5 size-4 pointer-events-none text-slate-400" />
            </div>

            <div className="relative">
              <select
                className="w-full sm:w-56 h-11 px-4 pr-10 border border-slate-200 rounded-lg outline-none bg-slate-50 appearance-none text-slate-650 cursor-pointer"
                value={parkFilter}
                onChange={(e) => setParkFilter(e.target.value)}
              >
                <option value="All">All Holiday Parks</option>
                <option value="Århus Lakeside Retreat">Århus Lakeside Retreat</option>
                <option value="Nordic Fjord Expedition">Nordic Fjord Expedition</option>
                <option value="Sicilian Citrus Grove Getaway">Sicilian Citrus Grove Getaway</option>
              </select>
              <ChevronDown className="absolute right-3.5 top-3.5 size-4 pointer-events-none text-slate-400" />
            </div>
          </div>

          {/* <button
            type="button"
            className="h-11 px-5 bg-[#3b338c] text-white font-semibold rounded-lg flex items-center justify-center gap-2 hover:bg-[#322a78] transition-colors shadow-sm"
          >
            <Plus size={18} />
            New Booking
          </button> */}
        </section>

        {/* Bookings List */}
        <section className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-[0_1px_2px_rgba(0,0,0,0.05)]">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50 text-slate-550 text-xs font-semibold uppercase tracking-wider">
                  <th className="py-4 px-6">Booking ID</th>
                  <th className="py-4 px-6">Guest</th>
                  <th className="py-4 px-6">Property</th>
                  <th className="py-4 px-6">Dates</th>
                  <th className="py-4 px-6">Amount</th>
                  <th className="py-4 px-6">Status</th>
                  <th className="py-4 px-6 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700 text-[15px]">
                {filteredBookings.length > 0 ? (
                  filteredBookings.map((booking) => (
                    <tr key={booking.id} className="hover:bg-slate-50/50 transition-colors">
                      <td className="py-4 px-6 font-semibold text-slate-900">{booking.id}</td>
                      <td className="py-4 px-6">
                        <div className="flex items-center gap-3">
                          <img
                            src={booking.avatar}
                            alt={booking.guest}
                            className="size-9 rounded-full object-cover border border-slate-200"
                          />
                          <div>
                            <div className="font-semibold text-slate-850">{booking.guest}</div>
                            <div className="text-xs text-slate-450">{booking.email}</div>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-6">
                        <div className="font-medium text-slate-800">{booking.property}</div>
                        <div className="text-xs text-slate-450">{booking.park}</div>
                      </td>
                      <td className="py-4 px-6 text-slate-600">
                        <div className="flex items-center gap-1.5 text-sm">
                          <Calendar size={14} className="text-slate-400" />
                          {booking.dates}
                        </div>
                      </td>
                      <td className="py-4 px-6 font-semibold text-slate-900">{booking.amount}</td>
                      <td className="py-4 px-6">
                        <span
                          className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold ${booking.status === "Confirmed"
                              ? "bg-green-50 text-green-700 border border-green-200"
                              : booking.status === "Pending"
                                ? "bg-amber-50 text-amber-700 border border-amber-200"
                                : "bg-red-50 text-red-700 border border-red-200"
                            }`}
                        >
                          {booking.status}
                        </span>
                      </td>
                      <td className="py-4 px-6 text-right">
                        <button
                          type="button"
                          className="p-2 text-slate-400 hover:text-[#3b338c] hover:bg-slate-100 rounded-lg transition-all inline-flex items-center gap-1.5"
                          onClick={() => setSelectedBooking(booking)}
                        >
                          <Eye size={16} />
                          <span className="text-xs font-semibold">View</span>
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={7} className="py-12 text-center text-slate-400">
                      No bookings match your current filter settings.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </section>
      </main>

      {/* Details Modal */}
      {selectedBooking && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm transition-opacity">
          <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100 animate-in fade-in zoom-in duration-200">
            {/* Header */}
            <div className="p-6 border-b border-slate-100 flex items-center justify-between">
              <div>
                <h3 className="text-lg font-bold text-slate-900">Booking Details</h3>
                <p className="text-xs text-slate-450 mt-1">ID: {selectedBooking.id}</p>
              </div>
              <button
                type="button"
                className="p-1.5 hover:bg-slate-100 rounded-full text-slate-450 hover:text-slate-700 transition-colors"
                onClick={() => setSelectedBooking(null)}
              >
                <X size={20} />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col gap-5">
              <div className="flex items-center gap-4 bg-slate-50 p-4 rounded-xl">
                <img
                  src={selectedBooking.avatar}
                  alt={selectedBooking.guest}
                  className="size-12 rounded-full object-cover border border-slate-200"
                />
                <div>
                  <h4 className="font-bold text-slate-850">{selectedBooking.guest}</h4>
                  <p className="text-sm text-slate-500">{selectedBooking.email}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Holiday Park</span>
                  <p className="font-semibold text-slate-800 mt-1">{selectedBooking.park}</p>
                </div>
                <div>
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Property Units</span>
                  <p className="font-semibold text-slate-800 mt-1">{selectedBooking.property}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Stay Dates</span>
                  <p className="font-semibold text-slate-800 mt-1">{selectedBooking.dates}</p>
                </div>
                <div>
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Total Paid</span>
                  <p className="font-bold text-slate-900 text-lg mt-1">{selectedBooking.amount}</p>
                </div>
              </div>

              <div>
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-2">Booking Status</span>
                <span
                  className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold ${selectedBooking.status === "Confirmed"
                      ? "bg-green-50 text-green-700 border border-green-200"
                      : selectedBooking.status === "Pending"
                        ? "bg-amber-50 text-amber-700 border border-amber-200"
                        : "bg-red-50 text-red-700 border border-red-200"
                    }`}
                >
                  {selectedBooking.status}
                </span>
              </div>
            </div>

            {/* Footer */}
            <div className="p-6 border-t border-slate-100 bg-slate-50 flex justify-end gap-3">
              <button
                type="button"
                className="px-4 py-2 border border-slate-200 bg-white text-slate-700 font-semibold rounded-lg text-sm hover:bg-slate-50 transition-colors"
                onClick={() => setSelectedBooking(null)}
              >
                Close
              </button>
              {selectedBooking.status !== "Cancelled" && (
                <button
                  type="button"
                  className="px-4 py-2 bg-red-650 text-white font-semibold rounded-lg text-sm  bg-red-700 transition-colors"
                  onClick={() => {
                    alert(`Cancel request sent for ${selectedBooking.id}`);
                    setSelectedBooking(null);
                  }}
                >
                  Cancel Booking
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </DashboardShell>
  );
}

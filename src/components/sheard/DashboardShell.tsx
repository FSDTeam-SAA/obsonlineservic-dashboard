import Link from "next/link";
import { Bell, CalendarDays, CirclePercent, Grid2X2, LogOut, Search, Settings, TicketCheck } from "lucide-react";
import type { ReactNode } from "react";

const navigation = [
  ["Dashboard", "/dashboard", Grid2X2],
  ["Properties", "/dashboard/properties", CalendarDays],
  ["Bookings", "/dashboard/bookings", TicketCheck],
  ["Offers", "/dashboard/offers", CirclePercent],
  ["Settings", "/dashboard/settings", Settings],
] as const;

const logo = "https://www.figma.com/api/mcp/asset/2796a9c2-7193-433a-8347-3a44caff6711.png";
const avatar = "https://www.figma.com/api/mcp/asset/7456727a-8034-4e1a-811e-2c10a8318ad2.png";

export function DashboardShell({ active, title, subtitle, children }: Readonly<{ active: string; title: ReactNode; subtitle: string; children: ReactNode }>) {
  return <div className="min-h-screen bg-[#f8f9fc] font-sans text-slate-900"><aside className="fixed inset-y-0 left-0 z-20 hidden w-[260px] flex-col justify-between bg-white px-6 pb-6 pt-3 md:flex"><div><div className="flex h-[106px] items-center border-b border-slate-200"><img src={logo} alt="OBS Online Service" className="max-h-20 w-full object-contain object-left" /></div><nav className="mt-12 grid gap-6">{navigation.map(([name, href, Icon]) => <Link key={name} href={href} className={`flex h-12 items-center gap-2 rounded px-3 text-base transition-colors ${active === name ? "bg-[#3b338c] font-bold text-white" : "text-slate-900 hover:bg-violet-50"}`}><Icon size={21} aria-hidden="true" />{name}</Link>)}</nav></div><div className="grid gap-6"><div className="flex items-center gap-2"><img src={avatar} alt="Demo Name" className="size-11 rounded-full object-cover"/><div><strong className="block text-base">Demo Name</strong><span className="block pt-1 text-slate-600">Admin</span></div></div><button className="flex h-12 items-center justify-center gap-2 rounded-md border border-[#e53838] text-lg font-semibold text-[#e53838]"><LogOut size={21} aria-hidden="true"/>Log out</button></div></aside><div className="md:ml-[260px]"><header className="sticky top-0 z-10 flex min-h-[118px] flex-col justify-between gap-4 border-b border-slate-200 bg-white/90 px-5 py-5 backdrop-blur md:flex-row md:items-center md:px-8"><div><h1 className="text-2xl font-medium text-[#1a1a1a]">{title}</h1><p className="mt-2 text-sm text-slate-600 md:text-base">{subtitle}</p></div><div className="flex items-center gap-3"><label className="flex h-11 min-w-0 flex-1 items-center gap-2 rounded border border-[#ddd7cd] px-4 text-slate-400 md:w-[361px]"><Search size={17}/><span className="sr-only">Search</span><input className="w-full bg-transparent text-sm outline-none placeholder:text-slate-400" placeholder="Search parks, bookings..."/></label><button aria-label="Notifications" className="relative grid size-11 place-items-center rounded border border-[#3b338c] bg-white"><Bell size={18}/><i className="absolute right-2.5 top-2.5 size-1.5 rounded-full bg-red-600"/></button><div className="hidden items-center gap-3 sm:flex"><img src={avatar} alt="Elena Marsh" className="size-10 rounded-full border border-slate-200 object-cover"/><div><strong className="block text-sm font-medium">Elena Marsh</strong><span className="mt-1 inline-block rounded-full bg-[#193b24]/10 px-2 py-1 text-xs uppercase text-[#3b338c]">Administrator</span></div></div></div></header>{children}</div></div>;
}

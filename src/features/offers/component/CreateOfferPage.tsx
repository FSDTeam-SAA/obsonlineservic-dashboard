import { Bell, CalendarDays, Check, ChevronDown, CirclePercent, Grid2X2, LogOut, Search, Settings, TicketCheck } from "lucide-react";

const assets = { logo: "https://www.figma.com/api/mcp/asset/2796a9c2-7193-433a-8347-3a44caff6711.png", user: "https://www.figma.com/api/mcp/asset/d15309eb-2763-4c58-8869-b038b15b35a3.png", admin: "https://www.figma.com/api/mcp/asset/7456727a-8034-4e1a-811e-2c10a8318ad2.png" };
const navigation = [["Dashboard", Grid2X2], ["Properties", CalendarDays], ["Bookings", TicketCheck], ["Offers", CirclePercent], ["Settings", Settings]] as const;
const parks = ["Århus Lakeside Retreat", "Nordic Fjord Expedition", "Sicilian Citrus Grove Getaway"];

export function CreateOfferPage() {
  return (
    <div className="dashboard-page">
      <aside className="dashboard-sidebar">
        <div>
          <div className="dashboard-logo">
            <img src={assets.logo} alt="OBS Online Service" />
          </div>
          <nav className="dashboard-nav" aria-label="Primary navigation">
            {navigation.map(([label, Icon], index) => (
              <button key={label} className={`nav-item ${index === 3 ? "is-active" : ""}`} type="button">
                <Icon aria-hidden="true" size={21} />
                <span>{label}</span>
              </button>
            ))}
          </nav>
        </div>
        <div className="sidebar-footer">
          <div className="profile-summary">
            <img src={assets.user} alt="Demo Name" />
            <div>
              <strong>Demo Name</strong>
              <span>Admin</span>
            </div>
          </div>
          <button className="logout-button" type="button">
            <LogOut aria-hidden="true" size={21} />
            Log out
          </button>
        </div>
      </aside>
      <section className="dashboard-workspace">
        <header className="dashboard-header">
          <div>
            <h1>
              Welcome back <span aria-hidden="true">👋</span>
            </h1>
            <p>Manage your luxury holiday destinations from one beautiful workspace.</p>
          </div>
          <div className="header-actions">
            <label className="search-box">
              <Search aria-hidden="true" size={17} />
              <span className="sr-only">Search parks and bookings</span>
              <input placeholder="Search parks, bookings..." />
            </label>
            <button type="button" className="notification-button" aria-label="View notifications">
              <Bell aria-hidden="true" size={18} />
              <i />
            </button>
            <div className="header-profile">
              <img src={assets.admin} alt="Elena Marsh" />
              <div>
                <strong>Elena Marsh</strong>
                <span>Administrator</span>
              </div>
            </div>
          </div>
        </header>
        <main className="p-5 md:p-8 grid gap-6">
          <OfferSection title="Offer information">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <OfferField label="Offer Name *" placeholder="e.g. Early Summer Escape" />
              <OfferField label="Offer Code (Optional)" placeholder="SUMMER2026" />
            </div>
            <label className="grid gap-2 text-[var(--ink)] text-base font-semibold">
              <span>Offer type</span>
              <button
                type="button"
                className="h-[54px] px-4 border border-[var(--line)] rounded-lg bg-white flex items-center justify-between text-[#64748b] text-left font-normal cursor-pointer"
              >
                Percentage discount <ChevronDown aria-hidden="true" size={16} />
              </button>
            </label>
            <label className="grid gap-2 text-[var(--ink)] text-base font-semibold">
              <span>Offer Description</span>
              <textarea
                className="w-full h-[140px] py-3.5 px-4 border border-[var(--line)] rounded-lg text-[var(--ink)] text-base outline-none bg-white placeholder-[#94a3b8] resize-y font-inherit"
                placeholder="Describe the atmosphere, surroundings and experience..."
              />
            </label>
          </OfferSection>

          <OfferSection title="Discount & limits">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <OfferField label="Discount Value *" placeholder="15%" />
              <OfferField label="Minimum Booking Amount (£)" placeholder="250" />
              <OfferField label="Maximum Discount (£)" placeholder="100" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <OfferField label="Maximum Uses" placeholder="" />
              <OfferField label="Maximum Uses Per Guest" placeholder="" />
            </div>
          </OfferSection>

          <OfferSection title="Apply Offer To">
            <div className="flex gap-8 max-[760px]:grid max-[760px]:gap-3">
              <label className="flex items-center gap-2 text-base font-medium cursor-pointer">
                <input type="radio" name="scope" defaultChecked className="peer absolute opacity-0" />
                <span className="w-5 h-5 border border-brand rounded-full grid place-items-center after:content-[''] after:w-2.5 after:h-2.5 after:rounded-full peer-checked:after:bg-brand" />
                Entire Platform
              </label>
              <label className="flex items-center gap-2 text-base font-medium cursor-pointer">
                <input type="radio" name="scope" className="peer absolute opacity-0" />
                <span className="w-5 h-5 border border-brand rounded-full grid place-items-center after:content-[''] after:w-2.5 after:h-2.5 after:rounded-full peer-checked:after:bg-brand" />
                Holiday Parks
              </label>
            </div>
            <label className="grid gap-2 text-[var(--ink)] text-base font-semibold">
              <span>Search holiday parks or properties</span>
              <div className="h-[54px] px-4 border border-[var(--line)] rounded-lg flex items-center gap-2 text-[#94a3b8]">
                <Search aria-hidden="true" size={17} />
                <input
                  className="h-auto border-0 p-0 outline-none w-full placeholder-[#94a3b8]"
                  placeholder="Search holiday parks or properties"
                />
              </div>
            </label>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
              {parks.map((park, index) => (
                <label key={park} className="flex items-center gap-2 text-base font-medium cursor-pointer">
                  <input type="checkbox" defaultChecked={index === 0} className="peer absolute opacity-0" />
                  <span className="w-5 h-5 border border-brand rounded grid place-items-center text-transparent peer-checked:text-white peer-checked:bg-brand">
                    <Check aria-hidden="true" size={14} className="text-current" />
                  </span>
                  {park}
                </label>
              ))}
            </div>
          </OfferSection>

          <OfferSection title="Offer Validity">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <OfferField label="Start Date" placeholder="DD/MM/YYYY" type="date" />
              <OfferField label="End Date" placeholder="DD/MM/YYYY" type="date" />
            </div>
          </OfferSection>

          <div className="flex justify-end gap-3">
            <button
              type="button"
              className="h-11 px-6 rounded font-semibold max-[760px]:flex-1 border border-[var(--line)] bg-white text-[var(--muted)]"
            >
              Cancel
            </button>
            <button
              type="button"
              className="h-11 px-6 rounded font-semibold max-[760px]:flex-1 border border-brand bg-brand text-white"
            >
              Publish Offer
            </button>
          </div>
        </main>
      </section>
    </div>
  );
}

function OfferSection({
  title,
  children,
}: Readonly<{
  title: string;
  children: React.ReactNode;
}>) {
  return (
    <section className="p-[18px] md:p-[25px] border border-[var(--line)] rounded-lg bg-white shadow-[0_1px_1px_rgba(0,0,0,0.05)] grid gap-6">
      <h2 className="m-0 text-[var(--ink)] text-2xl leading-[1.2] font-semibold">{title}</h2>
      {children}
    </section>
  );
}

function OfferField({
  label,
  placeholder,
  type = "text",
}: Readonly<{
  label: string;
  placeholder: string;
  type?: string;
}>) {
  return (
    <label className="grid gap-2 text-[var(--ink)] text-base font-semibold">
      <span>{label}</span>
      <input
        type={type}
        className="w-full h-[54px] px-4 border border-[var(--line)] rounded-lg text-[var(--ink)] text-base outline-none bg-white placeholder-[#94a3b8]"
        placeholder={placeholder}
      />
    </label>
  );
}


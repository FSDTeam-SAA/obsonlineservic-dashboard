import { Bell, CalendarDays, Check, CirclePercent, Grid2X2, ImagePlus, LogOut, MapPin, Plus, Search, Settings, TicketCheck } from "lucide-react";

const assets = { logo: "https://www.figma.com/api/mcp/asset/023f7a35-324e-49d9-81b3-11bf906f507e.png", user: "https://www.figma.com/api/mcp/asset/120640dc-bb7b-440f-9af7-8595142bf317.png", admin: "https://www.figma.com/api/mcp/asset/a4cec890-879f-4c79-9310-8e5c39be0a05.png", map: "https://www.figma.com/api/mcp/asset/33f2396e-1cd3-465e-8a78-275167afa8e2.png" };
const navigation = [["Dashboard", Grid2X2], ["Properties", CalendarDays], ["Bookings", TicketCheck], ["Offers", CirclePercent], ["Settings", Settings]] as const;
const amenities = ["Swimming Pool", "Spa", "Restaurant", "Free Parking", "Free Wi-Fi", "Kids Playground", "Pet Friendly", "Bike Rental", "EV Charging", "Gym"];
const fields = [["Total Properties", "24"], ["Total Capacity", "180 Guests"], ["Starting Price (Per Night)", "e.g. €129"], ["Check-in Time", "15:00"], ["Check-out Time", "11:00"], ["Reception Hours", "24 Hours"]];

export function AddHolidayParkPage() {
  return (
    <div className="dashboard-page">
      <aside className="dashboard-sidebar">
        <div>
          <div className="dashboard-logo">
            <img src={assets.logo} alt="OBS Online Service" />
          </div>
          <nav className="dashboard-nav" aria-label="Primary navigation">
            {navigation.map(([label, Icon], index) => (
              <button key={label} className={`nav-item ${index === 1 ? "is-active" : ""}`} type="button">
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
            <h1>Properties</h1>
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
          <FormSection title="Basic Information">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Field label="Holiday Park Name" placeholder="Nordic Pines Retreat" />
              <Field label="Title" placeholder="Enter folder name" />
            </div>
            <Field label="Short Description" placeholder="A one-line summary shown on cards" />
            <label className="grid gap-2 text-[var(--ink)] text-base font-semibold">
              <span>Full Description</span>
              <div className="border border-[var(--line)] rounded-lg overflow-hidden">
                <div className="h-11 p-2 bg-[var(--soft)] flex items-center gap-1.5">
                  <b className="w-[30px] h-7 rounded grid place-items-center bg-white text-sm cursor-pointer select-none">B</b>
                  <i className="w-[30px] h-7 rounded grid place-items-center bg-white text-sm cursor-pointer select-none">I</i>
                  <span className="w-[30px] h-7 rounded grid place-items-center bg-white text-sm cursor-pointer select-none">≡</span>
                  <span className="w-[30px] h-7 rounded grid place-items-center bg-white text-sm cursor-pointer select-none">☷</span>
                </div>
                <textarea
                  className="w-full h-40 p-3 border-0 resize-y outline-none font-inherit placeholder-[#94a3b8]"
                  placeholder="Describe the atmosphere, surroundings and experience..."
                />
              </div>
            </label>
          </FormSection>
          <FormSection title="Amenities">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {amenities.map((amenity, index) => (
                <label key={amenity} className="flex items-center gap-2 text-[var(--ink)] text-[15px] cursor-pointer">
                  <input type="checkbox" defaultChecked={index < 3} className="peer absolute opacity-0" />
                  <span className="w-5 h-5 border border-brand rounded grid place-items-center text-transparent peer-checked:text-white peer-checked:bg-brand">
                    <Check aria-hidden="true" size={14} className="text-current" />
                  </span>
                  {amenity}
                </label>
              ))}
              <button
                className="border-0 bg-transparent text-brand flex items-center gap-1.5 font-semibold cursor-pointer"
                type="button"
              >
                <Plus aria-hidden="true" size={16} />
                New Add
              </button>
            </div>
          </FormSection>
          <FormSection title="Park Information">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {fields.map(([label, placeholder]) => (
                <Field key={label} label={label} placeholder={placeholder} />
              ))}
            </div>
          </FormSection>
          <FormSection title="Gallery">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_1fr_2fr] gap-6">
              <UploadBox title="Hero Banner" detail="hero-banner.jpg" />
              <UploadBox title="Cover Image" detail="cover-image.jpg" />
              <UploadBox title="Gallery Images" detail="Drag & drop your images here" large />
            </div>
          </FormSection>
          <FormSection title="Location">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Field label="Country" placeholder="Netherlands" />
              <Field label="City" placeholder="e.g. Utrecht" />
              <Field label="Region" placeholder="e.g. Veluwe" />
              <Field label="Postal Code" placeholder="e.g. 3811 AB" />
            </div>
            <label className="grid gap-2 text-[var(--ink)] text-base font-semibold">
              <span>Google Map Location</span>
              <div className="h-[220px] relative overflow-hidden border border-[var(--line)] rounded-lg">
                <img src={assets.map} alt="Map location preview" className="w-full h-full object-cover" />
                <div className="absolute inset-0 grid place-content-center justify-items-center text-brand text-sm font-semibold [text-shadow:0_1px_6px_#fff]">
                  <MapPin aria-hidden="true" size={20} className="mb-2" />
                  Drop a pin or search location
                </div>
              </div>
            </label>
          </FormSection>
          <div className="flex justify-end gap-3 max-[760px]:flex-wrap">
            <button
              type="button"
              className="h-11 px-6 rounded font-semibold max-[760px]:flex-1 max-[760px]:min-w-[125px] border border-[var(--line)] bg-white text-[var(--muted)]"
            >
              Cancel
            </button>
            <button
              type="button"
              className="h-11 px-6 rounded font-semibold max-[760px]:flex-1 max-[760px]:min-w-[125px] border border-brand bg-white text-brand"
            >
              Save Draft
            </button>
            <button
              type="button"
              className="h-11 px-6 rounded font-semibold max-[760px]:flex-1 max-[760px]:min-w-[125px] border border-brand bg-brand text-white"
            >
              Publish Park
            </button>
          </div>
        </main>
      </section>
    </div>
  );
}

function FormSection({ title, children }: Readonly<{ title: string; children: React.ReactNode }>) {
  return (
    <section className="p-[18px] md:p-[25px] border border-[var(--line)] rounded-lg bg-white shadow-[0_1px_1px_rgba(0,0,0,0.05)] grid gap-6">
      <h2 className="m-0 text-[var(--ink)] text-2xl leading-[1.2] font-semibold">{title}</h2>
      {children}
    </section>
  );
}

function Field({ label, placeholder }: Readonly<{ label: string; placeholder: string }>) {
  return (
    <label className="grid gap-2 text-[var(--ink)] text-base font-semibold">
      <span>{label}</span>
      <input
        className="h-[54px] px-4 border border-[var(--line)] rounded-lg text-[var(--ink)] text-base outline-none placeholder-[#94a3b8]"
        placeholder={placeholder}
      />
    </label>
  );
}

function UploadBox({ title, detail, large = false }: Readonly<{ title: string; detail: string; large?: boolean }>) {
  return (
    <label className={`grid gap-2 text-[var(--ink)] text-base font-semibold cursor-pointer ${large ? "md:col-span-2 lg:col-span-1" : ""}`}>
      <span>{title}</span>
      <div className="h-[150px] border border-dashed border-[#94a3b8] rounded-lg bg-[#fafbfc] grid place-content-center justify-items-center gap-2 text-[var(--muted)] text-center">
        <ImagePlus aria-hidden="true" size={22} />
        <strong className="text-sm font-medium">{detail}</strong>
        {large && <small className="text-xs font-normal">PNG, JPG or WEBP up to 10MB each</small>}
      </div>
      <input type="file" className="sr-only" accept="image/png,image/jpeg,image/webp" />
    </label>
  );
}


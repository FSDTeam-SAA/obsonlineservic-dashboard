import { Bell, CalendarDays, ChevronDown, CirclePercent, Globe2, Grid2X2, KeyRound, LogOut, Search, Settings, ShieldCheck, TicketCheck, UserRound } from "lucide-react";

const navigation = [["Dashboard", Grid2X2], ["Properties", CalendarDays], ["Bookings", TicketCheck], ["Offers", CirclePercent], ["Settings", Settings]] as const;
const assets = { logo: "https://www.figma.com/api/mcp/asset/2796a9c2-7193-433a-8347-3a44caff6711.png", user: "https://www.figma.com/api/mcp/asset/d15309eb-2763-4c58-8869-b038b15b35a3.png", admin: "https://www.figma.com/api/mcp/asset/7456727a-8034-4e1a-811e-2c10a8318ad2.png" };

export function SettingsPage() {
  return (
    <div className="dashboard-page">
      <aside className="dashboard-sidebar">
        <div>
          <div className="dashboard-logo">
            <img src={assets.logo} alt="OBS Online Service" />
          </div>
          <nav className="dashboard-nav" aria-label="Primary navigation">
            {navigation.map(([label, Icon], index) => (
              <button key={label} className={`nav-item ${index === 4 ? "is-active" : ""}`} type="button">
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
            <h1>Settings</h1>
            <p>Manage your account preferences and security.</p>
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
        <main className="max-w-[1040px] p-5 md:p-8 grid gap-6">
          <SettingsCard
            icon={<UserRound aria-hidden="true" size={21} />}
            title="Personal Information"
            note="Update your profile details."
            action="Edit"
          >
            <Field label="Full Name" value="Demo Name" />
            <Field label="Email Address" value="iwmsadvisors@example.com" />
            <Field label="Phone" value="(307) 555-0133" />
          </SettingsCard>
          <SettingsCard
            icon={<KeyRound aria-hidden="true" size={21} />}
            title="Change Password"
            note="Choose a strong, unique password for your account."
            action="Change"
          >
            <Field label="Current Password" value="Enter current password" />
            <Field label="New Password" value="" />
            <Field label="Confirm New Password" value="" />
          </SettingsCard>
          <SettingsCard
            icon={<Globe2 aria-hidden="true" size={21} />}
            title="Regional Preferences"
            note="Set language, currency, and time zone defaults."
          >
            <Select label="Language" value="English (United Kingdom)" />
            <Select label="Currency" value="GBP — £ British Pound" />
            <Select label="Time Zone" value="Europe/London (GMT+0)" />
          </SettingsCard>
          <section className="p-5 border border-[#c7d2fe] rounded-lg bg-[#eef2ff] flex items-start gap-3 text-brand">
            <ShieldCheck aria-hidden="true" size={22} className="flex-shrink-0" />
            <div>
              <strong className="text-[var(--ink)] block">Account security</strong>
              <p className="mt-[5px] mb-0 mx-0 text-[var(--muted)] text-sm font-normal">
                Your settings are protected and changes are securely saved.
              </p>
            </div>
          </section>
        </main>
      </section>
    </div>
  );
}

function SettingsCard({
  icon,
  title,
  note,
  action,
  children,
}: Readonly<{
  icon: React.ReactNode;
  title: string;
  note: string;
  action?: string;
  children: React.ReactNode;
}>) {
  return (
    <section className="p-[18px] md:p-[25px] border border-[var(--line)] rounded-lg bg-white shadow-[0_1px_1px_rgba(0,0,0,0.05)]">
      <div className="flex items-start md:items-center gap-3">
        <span className="w-11 h-11 rounded-full grid place-items-center bg-[var(--soft)] text-brand flex-shrink-0">
          {icon}
        </span>
        <div>
          <h2 className="m-0 text-[var(--ink)] text-xl font-medium">{title}</h2>
          <p className="mt-[5px] mb-0 mx-0 text-[var(--muted)] text-sm max-w-[180px] md:max-w-none">{note}</p>
        </div>
        {action && (
          <button
            type="button"
            className="ml-auto h-[38px] px-3 md:px-[18px] border border-brand rounded bg-white text-brand font-semibold transition-colors hover:bg-brand hover:text-white"
          >
            {action}
          </button>
        )}
      </div>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-5">{children}</div>
    </section>
  );
}

function Field({ label, value }: Readonly<{ label: string; value: string }>) {
  return (
    <label className="grid gap-2 text-[var(--ink)] text-sm font-semibold">
      <span>{label}</span>
      <input
        className="h-12 w-full px-3.5 border border-[var(--line)] rounded-md bg-white text-[#64748b] text-[15px] text-left outline-none font-normal"
        value={value}
        readOnly
        aria-label={label}
      />
    </label>
  );
}

function Select({ label, value }: Readonly<{ label: string; value: string }>) {
  return (
    <label className="grid gap-2 text-[var(--ink)] text-sm font-semibold">
      <span>{label}</span>
      <button
        type="button"
        className="h-12 w-full px-3.5 border border-[var(--line)] rounded-md bg-white text-[#64748b] text-[15px] text-left outline-none font-normal flex items-center justify-between"
      >
        {value}
        <ChevronDown aria-hidden="true" size={16} />
      </button>
    </label>
  );
}


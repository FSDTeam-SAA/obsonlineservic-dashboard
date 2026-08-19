# OBS Online Service Dashboard

A premium, modern administration dashboard for managing luxury holiday destinations, properties, bookings, and active seasonal promotions. Built on **Next.js 15 (App Router)**, **TypeScript**, and styled entirely with **Tailwind CSS**.

---

## 🚀 Tech Stack & Design System

- **Framework**: [Next.js 15+](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v3](https://tailwindcss.com/) with a curated design theme matching the website's brand:
  - Brand Main Color: `#3b338c` (Royal Violet)
  - Canvas Background: `#f8f9fc` (Soft Cool Grey)
  - Custom CSS variables for semantic ink colors (`--ink`, `--muted`, `--line`, `--soft`, `--danger`).
- **Icons**: [Lucide React](https://lucide.dev/) for consistent, clean iconography.
- **Client Router Interceptor**: Active navigation controller tracking for sidebar clicks.

---

## 📂 Project Architecture

The codebase follows a **Feature-Based Architecture**, keeping components, types, API client layers, and custom hooks self-contained inside dedicated modules.

```
src/
├── app/                        # Next.js App Router (Layouts & Pages)
│   ├── dashboard/              # Dashboard pages (overview, bookings, properties, offers, settings)
│   ├── globals.css             # Global Tailwind directives & theme variables
│   └── layout.tsx              # Root HTML & body template wrapper
├── components/                 # Shared / global presentation UI components
│   ├── sheard/                 # Common layout components (DashboardShell, SidebarNavigationController)
│   └── ui/                     # Reusable atomic UI elements (Buttons, Inputs, etc.)
└── features/                   # Self-contained domain modules
    ├── bookings/               # Bookings management & details modals
    ├── courses/                # Course scheduling and modules (if applicable)
    ├── dashboard/              # Main dashboard overview metrics and performance charts
    ├── offers/                 # Discount, voucher, and coupon campaign management
    ├── properties/             # Holiday park property, amenity, and catalog editors
    └── settings/               # Profile, localization, and security preferences
```

Each folder under `src/features/<feature_name>` is modularly structured:
- `component/`: Page-specific blocks and components.
- `api/`: API endpoints, integration clients.
- `hooks/`: Domain-specific React hooks.
- `types/`: Strongly-typed TypeScript interfaces.

---

## ✨ Features & Modules

### 📊 1. Dashboard Overview
- Summary counters showing key metrics: *Holiday Parks*, *Active Properties*, *Live Offers*, and *Total Bookings*.
- Elegant SVG performance charts showing revenue/booking analytics.
- Listing of active promotional campaigns with status indicators.

### 📅 2. Bookings Management
- **Statistics**: Display of total bookings, pending approvals, total revenue, and active check-ins.
- **Interactive Filtering**: Real-time text search (by Guest, ID, or Property) combined with status dropdowns and Holiday Park filters.
- **Modern Table/Grid**: Beautiful list layout with status color badges (*Confirmed*, *Pending*, *Cancelled*).
- **Details Modal Dialog**: Interactive popup window that lets administrators inspect full booking metadata, guest contact details, pricing details, and cancel check-ins.

### 🏡 3. Holiday Park & Property Creator
- **Metadata Config**: Form controls to name, define, and describe parks.
- **Rich Text Editor Mock**: Toolbar editor simulating layout bold, italic, and alignment commands.
- **Amenity Checkbox Grid**: Toggle components for park facilities (*Swimming Pool*, *Spa*, *Free Wi-Fi*, etc.).
- **Media Gallery Manager**: Premium upload zone allowing multi-image selector attachments.

### 🏷️ 4. Offers & Promotions Campaign Setup
- **Code Setup**: Form to enter customized campaign names and alphanumeric offer promo codes.
- **Tier Configuration**: Values for Percentage Discount, Minimum Booking Amounts, Maximum Limits, and Usage caps.
- **Scope Restriction**: Radio triggers to toggle campaigns between the *Entire Platform* or restrict to select *Holiday Parks*.
- **Timeline**: Configurable start/end date selectors.

### ⚙️ 5. Profile & Settings Panel
- Updates for Personal Information fields (Name, Email, Phone).
- Security segment to update current/new account passwords.
- Localization settings (Language selectors, Currency select, Time zone picker).

---

## 🛠️ Development & Commands

Run commands using `pnpm` (recommended) or `npm`:

### Install Dependencies
```bash
pnpm install
# or
npm install
```

### Run Local Development Server
```bash
pnpm dev
# or
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) inside your web browser.

### Build and Compile Production Bundle
```bash
pnpm build
# or
npm run build
```
Generates optimized HTML and JS outputs inside the `.next/` directory.

### Start Production Server
```bash
pnpm start
# or
npm run start
```

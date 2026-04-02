export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#F5F4F0] font-['DM_Sans',sans-serif]">
      {children}
    </div>
  );
}

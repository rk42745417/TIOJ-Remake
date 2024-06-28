export default function Card({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="border border-gray-400 rounded-lg bg-gray-800 px-5 py-7">
      {children}
    </div>
  );
}
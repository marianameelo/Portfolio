export function Card({ title, description = "", Icon }) {
  return (
    <div className="w-full sm:w-20 md:w-40 lg:w-36 rounded-xl border border-[#8B5CF6] px-3 py-6 flex items-center flex-col gap-2 text-center transition-transform duration-300 ease-out hover:-translate-y-2 hover:shadow-lg hover:shadow-[#1a0546]">
      <Icon size={20} />
      <h2 className="text-sm font-semibold text-white">{title}</h2>
      <p className="text-white text-xs font-medium">{description}</p>
    </div>
  );
}

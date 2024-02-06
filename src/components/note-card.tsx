export function NoteCard() {
  return (
    <button className="rounded-md text-left bg-slate-800 flex flex-col gap-3 p-5 overflow-hidden relative hover:ring-2 outline-none hover:ring-slate-600 focus-visible:ring-2 focus-visible:ring-lime-400">
      <span className="text-sm font-medium text-slate-300">há 4 dias</span>
      <p className="text-sm leading-6 text-slate-400">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores
        maiores suscipit delectus aut reiciendis vel dolor, praesentium rerum,
        rem dolorem similique pariatur quod nam quae aperiam doloremque magni
        fuga quo.
      </p>
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0 pointer-events-none"></div>
    </button>
  );
}

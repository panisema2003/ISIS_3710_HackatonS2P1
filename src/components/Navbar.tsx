'use client';

export default function Navbar() {
  const NavContent = ({ isReversed = false }: { isReversed?: boolean }) => (
    <nav className={`bg-gray-800 p-4 flex items-center gap-6 rounded-md mb-4 ${isReversed ? 'flex-row-reverse' : 'flex-row'}`}>
      {/* Just invert flex container*/}
      <div className="text-white font-bold text-xl">Navbar</div>
      
      <div className="flex text-gray-400 gap-4">
        <a href="#" className="text-white hover:text-gray-200">Home</a>
        <a href="#" className="hover:text-gray-200">Features</a>
        <a href="#" className="hover:text-gray-200">Pricing</a>
        <a href="#" className="hover:text-gray-200">About</a>
      </div>

      <div className="flex-grow"></div>

      <div className="flex gap-2">
        <input 
          type="text" 
          placeholder="Search" 
          className={`px-3 py-1 rounded text-sm focus:outline-none ${isReversed ? 'text-right' : 'text-left'}`} 
        />
        <button className="border border-teal-500 text-teal-500 px-4 py-1 rounded hover:bg-teal-500 hover:text-white transition text-sm">
          Search
        </button>
      </div>
    </nav>
  );

  return (
    <div className="p-8 w-full flex flex-col gap-10">
      <div>
        <p>Nota: para este caso si esta en un solo componente, solo se invierte el contenedor flex. (A diferencia del de la clase que si fueron dos).</p>
        <NavContent />
      </div>

      <div>
        <NavContent isReversed={true} />
      </div>
    </div>
  );
}
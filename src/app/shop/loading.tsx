export default function Loading() {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 animate-pulse">
      <div className="flex flex-col items-center mb-16">
        <div className="h-10 w-64 bg-neutral-200 mb-6"></div>
        <div className="h-4 w-96 bg-neutral-200"></div>
      </div>

      <div className="flex justify-between mb-12 border-b border-neutral-200 pb-8">
        <div className="flex gap-4">
          {[1, 2, 3, 4].map(i => <div key={i} className="h-8 w-20 bg-neutral-200"></div>)}
        </div>
        <div className="h-8 w-24 bg-neutral-200"></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-16">
        {[1, 2, 3, 4, 5, 6, 7, 8].map(i => (
           <div key={i} className="flex flex-col">
             <div className="aspect-[4/5] bg-neutral-200 mb-6 w-full"></div>
             <div className="flex flex-col items-center">
               <div className="h-3 w-16 bg-neutral-200 mb-4"></div>
               <div className="h-5 w-48 bg-neutral-200 mb-4"></div>
               <div className="h-4 w-16 bg-neutral-200"></div>
             </div>
           </div>
        ))}
      </div>
    </div>
  );
}

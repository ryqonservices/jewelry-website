export default function Loading() {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 animate-pulse">
      <div className="h-4 w-32 bg-neutral-200 mb-12"></div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24">
        {/* Images */}
        <div className="flex flex-col gap-6">
          <div className="relative aspect-square w-full bg-neutral-200"></div>
          <div className="flex gap-4">
            {[1, 2, 3].map(i => <div key={i} className="aspect-square w-24 bg-neutral-200"></div>)}
          </div>
        </div>

        {/* Info */}
        <div className="flex flex-col">
          <div className="h-4 w-24 bg-neutral-200 mb-4"></div>
          <div className="h-12 w-3/4 bg-neutral-200 mb-6"></div>
          
          <div className="h-8 w-32 bg-neutral-200 mb-6"></div>

          <div className="h-px w-full bg-neutral-200 mb-10"></div>

          <div className="space-y-4 mb-10">
            {[1, 2, 3, 4].map(i => <div key={i} className="h-4 w-full bg-neutral-200"></div>)}
          </div>

          <div className="mb-12">
            <div className="h-4 w-20 bg-neutral-200 mb-4"></div>
            <div className="h-12 w-32 bg-neutral-200 mb-8"></div>
            <div className="h-14 w-full bg-neutral-200"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

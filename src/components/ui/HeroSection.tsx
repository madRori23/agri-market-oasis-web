
export function HeroSection() {
  return (
    <div className="relative bg-cream-light py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-forest sm:text-6xl">
            Fresh from Farm to Your Table
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Your one-stop shop for fresh produce from local farmers. Quality vegetables and fruits,
            delivered with care.
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <a
              href="#featured"
              className="rounded-md bg-forest px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-forest-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              Browse Products
            </a>
            <a href="/about" className="text-sm font-semibold leading-6 text-gray-900">
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

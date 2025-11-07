
export const Hero = () => {
  return (
    <section className="min-h-screen w-full bg-linear-to-b from-[#FF0A0A] to-[#150C0C] via-[#150C0C] text-white mt-10 sm:mt-8 md:mt-6 lg:mt-4 py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-8 lg:px-16">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold font-inter mb-4 sm:mb-6 text-[rgba(255,255,255,0.85)] leading-[1.21]">
            Powering the Future of
          </h1>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium font-inter mb-6 sm:mb-8 text-[rgba(255,10,10,0.75)] leading-[1.21]">
            Sustainable Mobility
          </h2>
          <p className="text-xl sm:text-2xl font-medium font-inter text-[rgba(255,255,255,0.8)] mb-4 leading-[1.21]">
            We&apos;re building India&apos;s largest and most reliable EV charging network to
            accelerate the adoption of electric vehicles.
          </p>
        </div>
      </div>
    </section>
  );
}

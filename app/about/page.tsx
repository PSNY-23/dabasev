import { MemberCard } from '@/components/about/MemberCard';
import { RightArrow } from '@/components/about/RightArrow';
import { Card } from '@/components/Card';
import { Hero } from '@/components/about/Hero';
import Image from 'next/image';

const statsData = [
  { value: '500+', label: 'Charging Points' },
  { value: '100+', label: 'Cities' },
  { value: '1lac+', label: 'Users' },
  { value: '50M+', label: 'kWh Deliverd' },
];
const cardsData = [
  {
    icon: '/image/sustainability.svg',
    title: 'Sustainability',
    description:
      "We're committed to reducing carbon emissions and building a cleaner future for generations to come.",
  },
  {
    icon: '/image/innovation.svg',

    title: 'Innovation',
    description:
      'We continuously push the boundaries of technology to provide the best charging experience.',
  },
  {
    icon: '/image/customer-first.svg',
    title: 'Customer First',
    description:
      "Our users are at the heart of everything we do. We're dedicated to exceeding their expectations.",
  },
];
const memberData = [
  { name: 'Sharminder Dabas', role: 'Founder & CEO' },
  { name: 'Jyoti', role: 'Co-Founder & CFO' },
];


const AboutUs = () => {
  return (
    <>
      {/* Hero Section */}
      <Hero/>

      {/* Mission Section */}
      <section className="bg-dark-brown text-white py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-8 lg:px-16">
          <p className="text-base text-center md:text-left font-medium font-inter text-bright-red mb-3 sm:mb-4">
            Our Mission
          </p>
          <div className="flex flex-col-reverse md:flex-row justify-between items-start gap-6 mt-6">
            <div className="w-full flex-1">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-inter mb-4 sm:mb-6 text-white">
                Making Electric Mobility Accessible to Everyone
              </h2>
              <p className="text-xl font-normal font-inter text-white mb-8 sm:mb-12 max-w-4xl leading-[1.21]">
                Founded in 2020, EV Power has Grown from a single charging station to over 10,000
                charging points across the country. Our mission is to make EV charging as convenient
                as fueling a conventional vehicle.
              </p>

              {/* Stats Cards */}
              <div className="grid md:grid-cols-2 gap-4 md:gap-6 mb-8 md:mb-12">
                {statsData.map((stat, index) => (
                  <div
                    key={index}
                    className="bg-[#150C0C] border border-white/20 rounded-[34px] px-6 py-4 sm:px-12 sm:py-6 text-center"
                  >
                    <p className="text-2xl sm:text-3xl font-semibold font-inter text-red mb-2">
                      {stat.value}
                    </p>
                    <p className="text-base font-normal font-inter text-white">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Image placeholder */}
            <div className=" flex-1">
              <Image
                src="/image/about.png"
                alt="about"
                width={1216}
                height={810}
                className="object-cover w-full h-auto "
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="w-full bg-dark-green text-white py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-8 lg:px-16">
          <div className="max-w-7xl mx-auto">
            <p className="text-center text-base font-semibold font-inter text-bright-red mb-3 sm:mb-4">
              OUR VALUES
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-inter text-center mb-8 sm:mb-12 text-white">
              What Drives Us Forward
            </h2>
            <p className="text-center text-2xl font-normal font-inter text-white mb-8 sm:mb-12 max-w-4xl mx-auto leading-[1.21]">
              Our core values shape everything we do , from product development customer service.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {cardsData.map((value, index) => (
                <Card key={index} icon={value.icon} title={value.title} description={value.description} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="w-full bg-dark-brown text-white py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-8 lg:px-16">
          <div className="max-w-7xl mx-auto">
            <p className="text-center text-base font-semibold font-inter text-bright-red mb-3 sm:mb-4">
              OUR TEAM
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-inter text-center mb-8 sm:mb-12 text-[#FFFBFB]">
              Meet the Innovators
            </h2>
            <p className="text-center text-base sm:text-md md:text-2xl font-normal font-inter text-[#FFFBFB] mb-8 sm:mb-12 max-w-4xl mx-auto leading-[1.21]">
              Our diverse team of experts is united by a common goal to revolutionize the way India
              charges its electric vehicles.
            </p>
            <div className="mx-auto flex max-w-2xl gap-6 md:gap-12">
              {memberData.map((member, index) => (
                <MemberCard key={index} name={member.name} role={member.role} />
              ))}
            </div>
            <h2 className="text-xl sm:text-2xl md:text-4xl font-bold font-inter text-center mb-2 sm:mb-4 text-white mt-16 sm:mt-36">
              Join Us in Building a Sustainable Future
            </h2>
            <p className="text-center text-base sm:text-md md:text-2xl font-normal font-inter text-white mb-2 sm:mb-4 max-w-4xl mx-auto leading-[1.21]">
              We&apos;re always looking for passionate individuals who want to make a difference in the
              world of sustainable transportation.
            </p>
            <div className="w-full flex items-center justify-center ">
              <button className="px-4 md:px-6 py-2 md:py-3 bg-faded-red font-medium text-2xl text-white rounded-3xl border-2 border-white flex items-center gap-2  shadow-[3px_3px_8px_white]">
                Contact Us
                <RightArrow/>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;

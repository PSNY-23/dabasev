import Link from 'next/link';
import Image from 'next/image';
import { FacebookIcon } from '@/components/icons/FacebookIcon';
import { XIcon } from '@/components/icons/XIcon';
import { InstagramIcon } from '@/components/icons/InstagramIcon';
import { LinkedInIcon } from '@/components/icons/LinkedInIcon';

// Social media links
const socials = [
  { name: 'Facebook', href: 'https://facebook.com', icon: FacebookIcon },
  { name: 'X', href: 'https://x.com', icon: XIcon },
  { name: 'Instagram', href: 'https://instagram.com', icon: InstagramIcon },
  { name: 'LinkedIn', href: 'https://linkedin.com', icon: LinkedInIcon },
];

// Footer navigation links
const footerLinks = [
  {
    title: 'Services',
    links: [
      { label: 'Home Charging', href: '/services' },
      { label: 'Business Solutions', href: '/services' },
      { label: 'Public Charging', href: '/services' },
      { label: 'Fleet Management', href: '/services' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About us', href: '/about' },
      { label: 'Partner With Us', href: '/partner' },
      { label: 'Services', href: '/services' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms Of Services', href: '#' },
    ],
  },
];

export const Footer = () => {
  return (
    <footer className="w-full bg-black text-white py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-8 lg:px-16">
        <div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-8 sm:mb-">
            {/* Logo + Description + Socials */}
            <div className="sm:col-span-2 lg:col-span-1">
              <div>
                <Image
                  src="/image/logo.png"
                  alt="DabasEV Logo"
                  width={144}
                  height={72}
                  className="object-contain mt-4"
                  priority
                />
              </div>

              <p className="text-base font-normal font-instrument-sans text-gray-400 leading-[1.22] mt-2">
                Leading the charge in sustainable transportation with innovative EV charging
                solutions.
              </p>

              {/* Socials (mapped) */}
              <div className="flex space-x-4 mt-4">
                {socials.map(({ name, href, icon: Icon }) => (
                  <Link
                    key={name}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={name}
                  >
                    <Icon className="w-6 h-6 text-white hover:text-gray-300 transition-colors duration-200" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Dynamic Footer Sections */}
            {footerLinks.map(section => (
              <div key={section.title}>
                <h3 className="text-figma-lg font-medium font-montserrat mb-3 sm:mb-4">
                  {section.title}
                </h3>
                <ul className="space-y-2 text-figma-lg font-medium font-montserrat text-gray-400">
                  {section.links.map(link => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="hover:text-white transition-colors duration-200"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-text-gray-dark pt-6 sm:pt-8">
            <p className="text-figma-lg font-medium font-montserrat text-gray-400 text-center">
              © 2025 DabasEV. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

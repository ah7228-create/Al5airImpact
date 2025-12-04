import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function GoalPage() {
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Bar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#8ecbff] shadow-md' : 'bg-[#8ecbff]/90 backdrop-blur-sm'}`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <img 
                src="https://static.readdy.ai/image/69c1d15e1df9dab3b0ebc954da4baaac/a3f819da7a68e24c333b8753eeb0ef7f.png" 
                alt="Al5air Logo" 
                className="w-12 h-12 object-contain"
              />
              <span className="text-2xl font-bold text-[#003ca1]" style={{ fontFamily: 'Poppins, sans-serif' }}>AL5AIR</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {/* About Us Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setIsAboutDropdownOpen(!isAboutDropdownOpen)}
                  onMouseEnter={() => setIsAboutDropdownOpen(true)}
                  onMouseLeave={() => setIsAboutDropdownOpen(false)}
                  className="flex items-center space-x-1 text-white hover:text-white/80 transition-colors cursor-pointer whitespace-nowrap text-lg"
                  style={{ fontFamily: 'Carter One, cursive' }}
                >
                  <span className="font-medium">About Us</span>
                  <i className={`ri-arrow-down-s-line transition-transform ${isAboutDropdownOpen ? 'rotate-180' : ''}`}></i>
                </button>
                
                {isAboutDropdownOpen && (
                  <div
                    onMouseEnter={() => setIsAboutDropdownOpen(true)}
                    onMouseLeave={() => setIsAboutDropdownOpen(false)}
                    className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg py-2 border border-gray-100"
                  >
                    <Link to="/goal" className="block px-4 py-3 text-gray-700 hover:bg-[#89ccff]/20 hover:text-[#0076c9] transition-colors cursor-pointer">
                      <i className="ri-flag-line mr-2"></i>Our Goal
                    </Link>
                    <Link to="/team" className="block px-4 py-3 text-gray-700 hover:bg-[#89ccff]/20 hover:text-[#0076c9] transition-colors cursor-pointer">
                      <i className="ri-team-line mr-2"></i>Meet the Team
                    </Link>
                    <Link to="/contact" className="block px-4 py-3 text-gray-700 hover:bg-[#89ccff]/20 hover:text-[#0076c9] transition-colors cursor-pointer">
                      <i className="ri-mail-line mr-2"></i>Contact Info
                    </Link>
                  </div>
                )}
              </div>

              <Link to="/registration" className="text-white hover:text-white/80 transition-colors font-medium cursor-pointer whitespace-nowrap text-lg" style={{ fontFamily: 'Carter One, cursive' }}>Registration Hub</Link>
              <Link to="/events" className="text-white hover:text-white/80 transition-colors font-medium cursor-pointer whitespace-nowrap text-lg" style={{ fontFamily: 'Carter One, cursive' }}>Events</Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-white w-10 h-10 flex items-center justify-center cursor-pointer"
            >
              <i className={`${isMobileMenuOpen ? 'ri-close-line' : 'ri-menu-line'} text-2xl`}></i>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-white/20 pt-4">
              <div className="flex flex-col space-y-3">
                <div>
                  <button
                    onClick={() => setIsAboutDropdownOpen(!isAboutDropdownOpen)}
                    className="flex items-center justify-between w-full text-white hover:text-white/80 transition-colors cursor-pointer text-lg py-2"
                    style={{ fontFamily: 'Carter One, cursive' }}
                  >
                    <span>About Us</span>
                    <i className={`ri-arrow-down-s-line transition-transform ${isAboutDropdownOpen ? 'rotate-180' : ''}`}></i>
                  </button>
                  {isAboutDropdownOpen && (
                    <div className="ml-4 mt-2 space-y-2">
                      <Link to="/goal" className="block text-white/90 hover:text-white py-2 cursor-pointer">
                        <i className="ri-flag-line mr-2"></i>Our Goal
                      </Link>
                      <Link to="/team" className="block text-white/90 hover:text-white py-2 cursor-pointer">
                        <i className="ri-team-line mr-2"></i>Meet the Team
                      </Link>
                      <Link to="/contact" className="block text-white/90 hover:text-white py-2 cursor-pointer">
                        <i className="ri-mail-line mr-2"></i>Contact Info
                      </Link>
                    </div>
                  )}
                </div>
                <Link to="/registration" className="text-white hover:text-white/80 transition-colors cursor-pointer text-lg py-2" style={{ fontFamily: 'Carter One, cursive' }}>Registration Hub</Link>
                <Link to="/events" className="text-white hover:text-white/80 transition-colors cursor-pointer text-lg py-2" style={{ fontFamily: 'Carter One, cursive' }}>Events</Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Goal Section */}
      <section className="pt-32 pb-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-[#003ca1] mb-8" style={{ fontFamily: 'Source Serif Pro, serif' }}>
              Our Goal
            </h2>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              Al5air is a student-led nonprofit organization dedicated to creating meaningful change through collective action. We believe that even the smallest acts of kindness can lead to the biggest impacts, shaping a better future for those in need. Through our initiatives, we strive to empower communities, support vital causes, and inspire others to take action. By uniting passion with purpose, Al5air proves that every effort - no matter how small - can make a lasting difference.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#003ca1] text-white mx-5 mb-5 rounded-2xl">
        <div className="max-w-7xl mx-auto px-8 py-16">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {/* Brand Column */}
            <div className="md:col-span-1">
              <div className="flex items-center space-x-3 mb-4">
                <img 
                  src="https://static.readdy.ai/image/69c1d15e1df9dab3b0ebc954da4baaac/a3f819da7a68e24c333b8753eeb0ef7f.png" 
                  alt="Al5air Logo" 
                  className="w-10 h-10 object-contain"
                />
                <span className="text-2xl font-bold" style={{ fontFamily: 'Poppins, sans-serif' }}>AL5AIR</span>
              </div>
              <p className="text-[#89ccff] font-medium mb-2">Small Acts, Big Impacts</p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-3">
                <li><Link to="/#mission" className="text-white/80 hover:text-[#89ccff] transition-colors cursor-pointer">About</Link></li>
                <li><Link to="/#events" className="text-white/80 hover:text-[#89ccff] transition-colors cursor-pointer">Events</Link></li>
                <li><Link to="/team" className="text-white/80 hover:text-[#89ccff] transition-colors cursor-pointer">Team</Link></li>
                <li><Link to="/registration" className="text-white/80 hover:text-[#89ccff] transition-colors cursor-pointer">Registration</Link></li>
              </ul>
            </div>

            {/* Connect */}
            <div>
              <h3 className="text-white font-semibold mb-4">Connect</h3>
              <ul className="space-y-3">
                <li>
                  <a href="https://www.instagram.com/al5air.bhr/" target="_blank" rel="noopener noreferrer" className="flex items-center text-white/80 hover:text-[#89ccff] transition-colors cursor-pointer">
                    <i className="ri-instagram-line mr-2"></i>
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="https://www.tiktok.com/@al5air.bhr" target="_blank" rel="noopener noreferrer" className="flex items-center text-white/80 hover:text-[#89ccff] transition-colors cursor-pointer">
                    <i className="ri-tiktok-line mr-2"></i>
                    TikTok
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/20 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <p className="text-white/80 text-sm mb-4 md:mb-0">
                © 2024 Al5air. All rights reserved.
              </p>
              <a 
                href="https://readdy.ai/?origin=logo" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/80 hover:text-[#89ccff] text-sm transition-colors cursor-pointer"
              >
                Powered by Readdy
              </a>
            </div>
          </div>
        </div>

        {/* Decorative Watermark */}
        <div className="relative overflow-hidden pb-8">
          <div className="text-center text-8xl font-bold text-white/5 select-none" style={{ fontFamily: 'Poppins, sans-serif' }}>
            AL5AIR
          </div>
        </div>
      </footer>
    </div>
  );
}

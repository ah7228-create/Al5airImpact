import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function EventsPage() {
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

      {/* Past Events Section */}
      <section className="pt-32 pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <i className="ri-calendar-event-line text-[#0076c9] text-xl"></i>
              <span className="text-sm font-semibold text-[#0076c9] uppercase tracking-wider">Our Events &amp; Press</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#003ca1]" style={{ fontFamily: 'Source Serif Pro, serif' }}>
              Past Events &amp; Media
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Event Card 1 */}
            <div className="bg-[#d5ecff] rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer group">
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://static.readdy.ai/image/69c1d15e1df9dab3b0ebc954da4baaac/40667966cfedaf7c6e26f681c16bf906.jpeg"
                  alt="Goals For Good 2025"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <p className="text-base text-[#0076c9] font-medium mb-2">March 21, 2024</p>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Goals For Good 2025</h3>
                <p className="text-gray-600 mb-4 text-lg">Ramadan Charity Football event to raise funds for Palestine</p>
                <a href="https://drive.google.com/drive/folders/1jfLeBEDSV0EuTVl_1O4MutO3vonZqK-S?fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGn75LRWdGzJB704owgX1V-oZBbmn3MN5ywl-w_t1vEx2Weeqsj5C1zrfiL4y0_aem_R15zab9zAeZaP-Uarq6V8w" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-[#0076c9] hover:text-[#4a94ca] font-medium cursor-pointer text-lg">
                  <i className="ri-folder-open-line mr-2"></i>
                  View Press Drive
                  <i className="ri-arrow-right-line ml-1"></i>
                </a>
              </div>
            </div>

            {/* Event Card 2 */}
            <div className="bg-[#d5ecff] rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer group">
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://readdy.ai/api/search-image?query=community%20cleanup%20event%20with%20students%20wearing%20volunteer%20shirts%20picking%20up%20litter%20in%20park%2C%20environmental%20action%20day%2C%20professional%20photography%2C%20sunny%20outdoor%20setting&width=600&height=400&seq=event-2&orientation=landscape"
                  alt="Pass It On 2025"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <p className="text-base text-[#0076c9] font-medium mb-2">December 5, 2025</p>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Pass It On 2025</h3>
                <p className="text-gray-600 mb-4 text-lg">Charity Padel Event to raise money for Palestine</p>
                <a href="https://drive.google.com/drive/folders/1rXyb_F-dKoFEM60LZEURpMJGTDbT_Ylo?usp=drive_link" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-[#0076c9] hover:text-[#4a94ca] font-medium cursor-pointer text-lg">
                  <i className="ri-folder-open-line mr-2"></i>
                  View Press Drive
                  <i className="ri-arrow-right-line ml-1"></i>
                </a>
              </div>
            </div>
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
                <li><Link to="/events" className="text-white/80 hover:text-[#89ccff] transition-colors cursor-pointer">Events</Link></li>
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

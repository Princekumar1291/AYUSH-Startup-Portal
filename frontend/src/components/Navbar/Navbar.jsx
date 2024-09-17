import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Link, useLocation } from 'react-router-dom';
import { Leaf, Menu, X } from 'lucide-react';
import { useSelector } from 'react-redux';

const navItems = [
  { name: 'Home', to: '/' },
  { name: 'Dashboard', to: '/dashboard', protected: true }, 
  { name: 'Apply', to: '/application-form', protected: true },
  { name: 'Notifications', to: '/notifications', protected: true }, 
  { name: 'FAQ', to: '/faq' },
  { name: 'About AYUSH', to: '/about' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const  isAuthenticated  = useSelector(state => state.auth.auth); 

  const isActive = (to) => location.pathname === to;

  return (
    <header className="bg-white shadow-sm">
      <nav className="mx-auto px-4 sm:px-0 lg:px-8" aria-label="Top">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link to="/">
              <div className="flex">
                <div>
                  <img src="https://ayush.gov.in/images/logo/1.jpg" alt="" />
                </div>
                <div className="flex-shrink-0 flex items-center">
                  <Leaf className="h-8 w-8 text-green-600" />
                  <span className="ml-2 text-2xl font-bold text-green-800 pr-8">AYUSH Portal</span>
                </div>
              </div>
            </Link>
          </div>
          <div className="hidden md:flex md:items-center md:space-x-6">
            {navItems.filter(item => !item.protected || isAuthenticated).map((item) =>
              <Link
                key={item.name}
                to={item.to}
                className={`text-base font-medium ${
                  isActive(item.to)
                    ? 'text-primary'
                    : 'text-gray-500 hover:text-gray-900'
                }`}
              >
                {item.name}
              </Link>
            )}
            {isAuthenticated ? (
              <Button asChild>
                <Link to={'/logout'} className='bg-green-500 hover:bg-green-600 transition' href="/logout">Logout</Link>
              </Button>
            ) : (
              <Button asChild>
                <Link to={'/login'} className='bg-green-500 hover:bg-green-600 transition' href="/login">Login</Link>
              </Button>
            )}
          </div>
          <div className="flex md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </Button>
          </div>
        </div>
      </nav>
      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2">
            {navItems.filter(item => !item.protected || isAuthenticated).map((item) =>
              item.items ? (
                <div key={item.name} className="space-y-1">
                  <Button variant="ghost" className="w-full justify-start">
                    {item.name}
                  </Button>
                  {item.items.map((subItem) => (
                    <Link
                      key={subItem.name}
                      to={subItem.to}
                      className={`block rounded-md px-3 py-2 text-base font-medium ${
                        isActive(subItem.to)
                          ? 'bg-primary text-primary-foreground'
                          : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'
                      }`}
                    >
                      {subItem.name}
                    </Link>
                  ))}
                </div>
              ) : (
                <Link
                  key={item.name}
                  to={item.to}
                  className={`block rounded-md px-3 py-2 text-base font-medium ${
                    isActive(item.to)
                      ? 'bg-primary text-primary-foreground'
                      : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  {item.name}
                </Link>
              )
            )}
          </div>
        </div>
      )}
    </header>
  )
}

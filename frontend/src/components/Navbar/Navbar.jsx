import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Link, useLocation } from 'react-router-dom'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronDown, Menu, X } from 'lucide-react'

const navItems = [
  { name: 'Home', to: '/' },
  { name: 'Dashboard', to: '/dashboard' },
  { name: 'Apply', to: '/apply' },
  { name: 'Resources', 
    items: [
      { name: 'Document Upload', to: '/document-upload' },
      { name: 'Guidelines', to: '/guidelines' },
      { name: 'FAQs', to: '/faqs' },
    ]
  },
  { name: 'Notifications', to: '/notifications' },
  { name: 'Help Center', to: '/help-center' },
  { name: 'About AYUSH', to: '/about' },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const router = useLocation()

  const isActive = (to) => router.pathname === to

  return (
    <header className="bg-white shadow-sm">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-primary">
              AYUSH Portal
            </Link>
          </div>
          <div className="hidden md:flex md:items-center md:space-x-6">
            {navItems.map((item) => 
              item.items ? (
                <DropdownMenu key={item.name}>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="flex items-center">
                      {item.name} <ChevronDown className="ml-1 h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    {item.items.map((subItem) => (
                      <DropdownMenuItem key={subItem.name} asChild>
                        <Link
                          to={subItem.to}
                          className={`block px-4 py-2 text-sm ${isActive(subItem.to) ? 'bg-primary text-primary-foreground' : ''}`}
                        >
                          {subItem.name}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
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
              )
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
            {navItems.map((item) => 
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
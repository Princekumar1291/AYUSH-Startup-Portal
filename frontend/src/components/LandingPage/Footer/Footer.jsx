import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer className="bg-white">
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
      <div className="flex justify-center space-x-6 md:order-2">
        <Link href="#" className="text-gray-400 hover:text-gray-500">
          About
        </Link>
        <Link href="#" className="text-gray-400 hover:text-gray-500">
          Contact
        </Link>
        <Link href="#" className="text-gray-400 hover:text-gray-500">
          Privacy Policy
        </Link>
      </div>
      <div className="mt-8 md:mt-0 md:order-1">
        <p className="text-center text-base text-gray-400">
          &copy; 2023 AYUSH Startup Portal. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
  )
}
export default Footer
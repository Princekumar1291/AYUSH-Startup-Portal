import { Link } from "react-router-dom"
import { Button } from "../../ui/button"
import { ArrowRight } from "lucide-react"

const HeroSection = () => {
  return (
    <header className="py-16 sm:py-24 lg:py-32">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
        <span className="block">Nurture Your AYUSH Startup</span>
        <span className="block text-green-600">Grow with Tradition, Innovate for Tomorrow</span>
      </h1>
      <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
        Empower your AYUSH venture with our cutting-edge registration portal. Seamlessly navigate regulations, access expert support, and cultivate holistic business growth.
      </p>
      <div className="mt-10 max-w-sm mx-auto sm:flex sm:justify-center md:mt-12">
        <div className="rounded-md shadow">
          <Button className="w-full flex items-center justify-center px-8 py-3 text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 md:py-4 md:text-lg md:px-10" asChild>
            <Link to="/signup">
              Get Started
              <ArrowRight className="ml-2 -mr-1 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  </header>
  )
}
export default HeroSection
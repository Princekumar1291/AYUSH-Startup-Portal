import { useState } from "react";
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";

const CTA = () => {
  const [email, setEmail] = useState('')

  return (
    <section className="py-12 bg-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            <span className="block">Ready to start your AYUSH journey?</span>
            <span className="block text-green-200">Register your startup today.</span>
          </h2>
          <form className="mt-8 sm:flex" onSubmit={(e) => { e.preventDefault(); console.log('Form submitted with email:', email); }}>
            <Input
              type="email"
              required
              className="w-full px-5 py-3 placeholder-gray-500 focus:ring-white focus:border-white sm:max-w-xs"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
              <Button type="submit" className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-green-600 bg-white hover:bg-green-50">
                Get started
              </Button>
            </div>
          </form>
        </div>
      </section>
  )
}
export default CTA
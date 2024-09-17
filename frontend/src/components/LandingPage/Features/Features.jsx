import { Leaf, Shield, Users, Zap } from "lucide-react"
import { Card, CardContent } from "../../ui/card"

const Features = () => {

    const features = [
        { icon: Zap, title: 'Fast Registration', description: 'Streamlined process for quick startup registration' },
        { icon: Shield, title: 'Secure Platform', description: 'State-of-the-art security for your sensitive data' },
        { icon: Users, title: 'Expert Support', description: '24/7 assistance from AYUSH industry experts' },
        { icon: Leaf, title: 'Holistic Growth', description: 'Resources and tools for sustainable business development' },
      ]
  return (
    <section className="py-12 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="lg:text-center">
        <h2 className="text-base text-green-600 font-semibold tracking-wide uppercase">Features</h2>
        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          Everything you need to grow your AYUSH startup
        </p>
      </div>

      <div className="mt-10">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <Card key={index}>
              <CardContent className="pt-5">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg leading-6 font-medium text-gray-900">{feature.title}</h3>
                <p className="mt-2 text-base text-gray-500">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  </section>
  )
}
export default Features
import { useState } from 'react'
import { ChevronDown, ChevronUp, Search, MessageCircle } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function HelpCenter() {
  const [openFaq, setOpenFaq] = useState(null)

  const faqs = [
    { 
      question: "What documents are required for AYUSH startup registration?", 
      answer: "Required documents typically include business plan, financial projections, founder's ID proof, and relevant AYUSH certifications." 
    },
    { 
      question: "How long does the registration process take?", 
      answer: "The registration process usually takes 4-6 weeks, depending on the completeness of your application and document submission." 
    },
    { 
      question: "Can I track my application status?", 
      answer: "Yes, you can track your application status through the dashboard on the AYUSH Startup Registration Portal." 
    },
    { 
      question: "What support does AYUSH provide after registration?", 
      answer: "AYUSH provides mentorship, networking opportunities, and potential funding connections for registered startups." 
    },
  ]

  return (
    <div className="container mx-auto p-6">
      <Card className="w-full max-w-3xl mx-auto">
        <CardHeader>
          <CardTitle>Help Center</CardTitle>
          <CardDescription>Find answers to common questions or get in touch with our support team.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input className="pl-10" placeholder="Search for help" />
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Frequently Asked Questions</h3>
            {faqs.map((faq, index) => (
              <div key={index} className="border rounded-md">
                <button
                  className="flex justify-between items-center w-full p-4 text-left"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <span className="font-medium">{faq.question}</span>
                  {openFaq === index ? <ChevronUp /> : <ChevronDown />}
                </button>
                {openFaq === index && (
                  <div className="p-4 bg-gray-50">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="bg-primary/10 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Need more help?</h3>
            <p className="mb-4">Our support team is always ready to assist you.</p>
            <Button>
              <MessageCircle className="mr-2 h-4 w-4" />
              Contact Support
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
import React, { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Search, Mail, Phone } from 'lucide-react'

const faqs = [
  {
    question: "What is the AYUSH Startup Registration Portal?",
    answer: "The AYUSH Startup Registration Portal is a platform designed to facilitate the registration and support of startups in the fields of Ayurveda, Yoga, Unani, Siddha, and Homeopathy (AYUSH). It provides resources, guidelines, and a streamlined application process for entrepreneurs in these traditional medicine systems."
  },
  {
    question: "How do I register my AYUSH startup?",
    answer: "To register your AYUSH startup, navigate to the 'Apply' section of our portal. Fill out the required information about your startup, upload necessary documents, and submit your application. Our team will review your submission and get back to you with further instructions."
  },
  {
    question: "What documents are required for registration?",
    answer: "The required documents typically include proof of incorporation, business plan, AYUSH-related certifications, and any patents or trademarks. The exact list can be found in the 'Document Upload' section of the application process."
  },
  {
    question: "How long does the registration process take?",
    answer: "The registration process usually takes 2-4 weeks, depending on the completeness of your application and the current volume of applications. You can check the status of your application in the 'Dashboard' section of the portal."
  },
  {
    question: "What benefits do I get after registering my AYUSH startup?",
    answer: "Registered AYUSH startups can access various benefits including mentorship programs, networking opportunities, potential funding options, and regulatory support. Details of these benefits are available in the 'Resources' section of the portal."
  }
]

export default function HelpCenter() {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredFaqs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Help Center</h1>
      
      <div className="max-w-xl mx-auto mb-8">
        <div className="flex items-center border rounded-md">
          <Input
            type="text"
            placeholder="Search for help..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-grow border-none focus:ring-0"
          />
          <Button variant="ghost" className="px-3">
            <Search className="h-5 w-5" />
            <span className="sr-only">Search</span>
          </Button>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Mail className="mr-2" />
              Contact Us
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-2">For any inquiries, please email us at:</p>
            <a href="mailto:support@ayushstartup.gov.in" className="text-primary hover:underline">
              support@ayushstartup.gov.in
            </a>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Phone className="mr-2" />
              Helpline
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-2">For urgent assistance, call our helpline:</p>
            <a href="tel:+911234567890" className="text-primary hover:underline">
              +91 123 456 7890
            </a>
            <p className="text-sm text-muted-foreground mt-2">
              (Monday to Friday, 9 AM to 5 PM IST)
            </p>
          </CardContent>
        </Card>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
      <Accordion type="single" collapsible className="w-full">
        {filteredFaqs.map((faq, index) => (
          <AccordionItem value={`item-${index}`} key={index}>
            <AccordionTrigger>{faq.question}</AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      {filteredFaqs.length === 0 && (
        <p className="text-center text-muted-foreground mt-4">
          No results found. Please try a different search term or contact us for assistance.
        </p>
      )}
    </div>
  )
}
import React from 'react'
// import Link from 'next/link'
import { Link } from 'react-router-dom'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">About AYUSH Startup Registration Portal</h1>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
        <p className="text-lg mb-4">
          The AYUSH Startup Registration Portal is dedicated to fostering innovation and entrepreneurship in the field of traditional Indian medicine systems. Our mission is to provide a streamlined platform for startups to register, connect, and thrive in the AYUSH sector.
        </p>
        <p className="text-lg mb-4">
          We aim to bridge the gap between ancient wisdom and modern technology, enabling startups to bring the benefits of AYUSH systems to a global audience while ensuring quality, authenticity, and regulatory compliance.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">What is AYUSH?</h2>
        <p className="text-lg mb-4">
          AYUSH stands for Ayurveda, Yoga & Naturopathy, Unani, Siddha, and Homoeopathy. These are traditional systems of medicine that have been practiced in India for thousands of years.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {[
            { title: "Ayurveda", description: "Ancient Indian system of natural and holistic medicine" },
            { title: "Yoga", description: "Physical, mental, and spiritual practices originating in ancient India" },
            { title: "Naturopathy", description: "System of alternative medicine based on the healing power of nature" },
            { title: "Unani", description: "Traditional Persian system of medicine" },
            { title: "Siddha", description: "Ancient system of medicine originating in South India" },
            { title: "Homoeopathy", description: "Alternative medical system based on the principle of 'like cures like'" }
          ].map((system, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{system.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{system.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Why Register Your AYUSH Startup?</h2>
        <ul className="list-disc list-inside text-lg space-y-2">
          <li>Access to government schemes and funding opportunities</li>
          <li>Networking with industry experts and potential investors</li>
          <li>Regulatory guidance and compliance support</li>
          <li>Marketing and promotion through government channels</li>
          <li>Participation in national and international AYUSH events</li>
          <li>Research and development collaborations</li>
          <li>Export promotion assistance</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Startup Registration</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Easy and streamlined process to register your AYUSH startup with the government.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Resource Center</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Access to guidelines, best practices, and educational materials for AYUSH entrepreneurs.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Mentorship Program</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Connect with experienced mentors in the AYUSH sector for guidance and support.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Funding Assistance</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Information and support for accessing government grants and investor connections.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="text-center">
        <h2 className="text-2xl font-semibold mb-4">Ready to Start Your AYUSH Journey?</h2>
        <Button asChild size="lg">
          <Link href="/register">Register Your Startup</Link>
        </Button>
      </section>
    </div>
  )
}
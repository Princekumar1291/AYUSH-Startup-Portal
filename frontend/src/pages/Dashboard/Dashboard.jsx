import { useState } from 'react'
import { Bell, FileText, HelpCircle, Home, LogOut, Upload, User } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"

export default function Dashboard() {
  const [progress, setProgress] = useState(65)

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md">
        <div className="p-4">
          <h2 className="text-2xl font-bold text-primary">AYUSH Portal</h2>
        </div>
        <nav className="mt-6">
          {[
            { icon: Home, label: 'Dashboard' },
            { icon: FileText, label: 'Applications' },
            { icon: Upload, label: 'Documents' },
            { icon: Bell, label: 'Notifications' },
            { icon: HelpCircle, label: 'Help Center' },
          ].map((item, index) => (
            <a
              key={index}
              href="#"
              className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-200"
            >
              <item.icon className="w-5 h-5 mr-2" />
              {item.label}
            </a>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        {/* Header */}
        <header className="bg-white shadow-sm">
          <div className="flex items-center justify-between px-4 py-3">
            <h1 className="text-xl font-semibold">Dashboard</h1>
            <div className="flex items-center">
              <Button variant="ghost" size="icon">
                <Bell className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <User className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <LogOut className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="p-6 grid gap-6 md:grid-cols-2">
          {/* Application Status */}
          <Card>
            <CardHeader>
              <CardTitle>Application Status</CardTitle>
              <CardDescription>Track your registration progress</CardDescription>
            </CardHeader>
            <CardContent>
              <Progress value={progress} className="w-full mt-2" />
              <p className="mt-2 text-sm text-gray-600">Your application is {progress}% complete</p>
            </CardContent>
          </Card>

          {/* Document Upload */}
          <Card>
            <CardHeader>
              <CardTitle>Document Upload</CardTitle>
              <CardDescription>Submit required documents</CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full">
                <Upload className="w-4 h-4 mr-2" />
                Upload Documents
              </Button>
            </CardContent>
          </Card>

          {/* Notifications */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Notifications</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {[
                  'Your application has been received',
                  'Please upload the missing document',
                  'Registration process update',
                ].map((notification, index) => (
                  <li key={index} className="flex items-center text-sm">
                    <Bell className="w-4 h-4 mr-2 text-primary" />
                    {notification}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Help Center */}
          <Card>
            <CardHeader>
              <CardTitle>Help Center</CardTitle>
              <CardDescription>Get assistance and find answers</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button variant="outline" className="w-full justify-start">
                <HelpCircle className="w-4 h-4 mr-2" />
                FAQs
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <FileText className="w-4 h-4 mr-2" />
                User Guides
              </Button>
              <Separator />
              <p className="text-sm text-gray-600">Need more help? Contact support:</p>
              <p className="text-sm font-medium">support@ayushportal.com</p>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
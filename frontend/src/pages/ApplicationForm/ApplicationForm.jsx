import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

export default function ApplicationForm() {
  return (
    <div className="container mx-auto p-6">
      <Card className="w-full max-w-3xl mx-auto">
        <CardHeader>
          <CardTitle>AYUSH Startup Registration Application</CardTitle>
          <CardDescription>Please fill out all the required information to register your startup.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="startup-name">Startup Name</Label>
            <Input id="startup-name" placeholder="Enter your startup name" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="founder-name">Founder's Name</Label>
            <Input id="founder-name" placeholder="Enter founder's name" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input id="email" type="email" placeholder="Enter your email address" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input id="phone" type="tel" placeholder="Enter your phone number" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="ayush-category">AYUSH Category</Label>
            <Select>
              <SelectTrigger id="ayush-category">
                <SelectValue placeholder="Select AYUSH category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ayurveda">Ayurveda</SelectItem>
                <SelectItem value="yoga">Yoga</SelectItem>
                <SelectItem value="unani">Unani</SelectItem>
                <SelectItem value="siddha">Siddha</SelectItem>
                <SelectItem value="homeopathy">Homeopathy</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="description">Startup Description</Label>
            <Textarea id="description" placeholder="Briefly describe your startup and its goals" />
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full">Submit Application</Button>
        </CardFooter>
      </Card>
    </div>
  )
}
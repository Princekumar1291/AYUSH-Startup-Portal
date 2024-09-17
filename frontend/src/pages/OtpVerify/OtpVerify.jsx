import { useState } from 'react'
import { useNavigate, } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Eye, EyeOff, Leaf } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Link } from 'react-router-dom'
import axios from 'axios'

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)

  const token = useSelector((state) => state.auth.token || "");

  const email = document.cookie.email || "random@gmail.com";

  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault()

    const requestBody = {
      token: token,
      otp: event.target.password.value
    }

    axios.post('http://localhost:5000/user_login', requestBody)
    .then((response) => {
      console.log(response)
      navigate('/dashboard');    // Redirect after login
    })
    .catch((error) => {
      console.error(error)
    })


    console.log('Login form submitted')
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white flex flex-col justify-center items-center p-4">
      <Link to="/" className="flex items-center mb-8">
        <Leaf className="h-8 w-8 text-green-600 mr-2" />
        <span className="text-2xl font-bold text-green-800">AYUSH Portal</span>
      </Link>
      
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Verify your OTP</CardTitle>
          <CardDescription>A 6-Digit OTP has been send to {email}</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">

              <div className="space-y-2">
                <Label htmlFor="password">Enter your OTP</Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="OTP"
                    required
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="absolute right-2 top-1/2 transform -translate-y-1/2"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    <span className="sr-only">{showPassword ? "Hide password" : "Show password"}</span>
                  </Button>
                </div>
              </div>
            </div>
            <Button type="submit" className="w-full mt-6">Verify</Button>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <div className="text-sm text-gray-600">
            {`Don't have an account?`}
            <Link to="/signup" className="text-green-600 hover:underline">
              Sign up
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}
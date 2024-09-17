import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Eye, EyeOff, Leaf } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Link } from 'react-router-dom'
import { toast } from 'sonner'
import { useSelector } from 'react-redux'

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)


  const navigate = useNavigate();
const auth = useSelector(state => state.auth.auth);
  if(auth){
    navigate("/dashboard")
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const requestBody = {
      email: event.target.email.value,
      password: event.target.password.value
    }

    axios.post('http://localhost:3000/api/v1/user_login', requestBody, {withCredentials: true} )
    .then((response) => {
      console.log(response);
      toast.success('OTP has been sent to your email.')
      navigate('/otpverify');    
      

    })
    .catch((error) => {
      if(error.status == 401){
        toast.error('Invalid username and password!')
      } else {
          toast.error('Something went wrong!')
      }
    })


  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white flex flex-col justify-center items-center p-4">
      <Link to="/" className="flex items-center mb-8">
        <Leaf className="h-8 w-8 text-green-600 mr-2" />
        <span className="text-2xl font-bold text-green-800">AYUSH Portal</span>
      </Link>
      
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Login to Your Account</CardTitle>
          <CardDescription>Enter your email and password to access the AYUSH Startup Portal</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="your@email.com" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
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
            <Button type="submit" className="w-full mt-6">Login</Button>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <Link to="#" className="text-sm text-green-600 hover:underline">
            Forgot your password?
          </Link>
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
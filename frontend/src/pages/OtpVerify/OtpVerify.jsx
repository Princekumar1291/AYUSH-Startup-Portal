import { useEffect, useState } from 'react'
import { useNavigate, } from 'react-router-dom'
import { Eye, EyeOff, Leaf } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { setUser } from '@/redux/authSlice'
import { toast } from 'sonner'
import { getCookie } from '@/lib/getCookie'





export default function VerifyOTPPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [token, setToken] = useState(null);


  const email = getCookie('email') || "";

  const navigate = useNavigate()

  useEffect(() => {
    if(email == ""){
      toast.error("Please login again!");
      navigate("/login")
      return;
    }
    axios.post('http://localhost:3000/api/v1/otp/send-otp', {}, { withCredentials: true })
      .then((response) => {
        setToken(response.data.token)
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault()

    const requestBody = {
      token: token,
      otp: event.target.password.value,
      email: email
    }

    axios.post('http://localhost:3000/api/v1/otp/verify-otp', requestBody, {withCredentials: true})
    .then((response) => {
      console.log(response)
      dispatch(setUser(true));
      toast.success('OTP verified successfully.');
      navigate('/dashboard');    

    })
    .catch((error) => {
      toast.error('Something went wrong.');
      console.error(error)
    })


    console.log('Login form submitted')
  }


  useEffect(() => {
    axios.post('http://localhost:3000/api/v1/otp/send-otp',{email:email},{ withCredentials: true },)
    .then((response) => {
      console.log(response)
      setToken(response.data.token)
    })
    .catch((error) => {
      console.error(error)
    })
  },[]);
    

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
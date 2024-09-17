import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'
const PrivateRoutes = () => {
  let auth = useSelector(state => state.auth.auth);
  console.log("dashboar: ", auth);
  
return (
    auth ? <Outlet/> : <Navigate to='/login'/>
  )
}

export default PrivateRoutes
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

const HomeLayout = () => {
  return (
    <>
      {/* NAVBAR WILL BE COMMON ACROSS THE APP */}
      <Navbar />
      {/* OUTLET HELPS RENDERING CHILDREN ROUTES */}
      <Outlet />
    </>
  )
}
export default HomeLayout

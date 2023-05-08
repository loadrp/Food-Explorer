import { Routes, Route } from 'react-router-dom'

import { New } from '../pages/New'
import { Profile } from '../pages/Profile'
import { Details } from '../pages/Details'
import { Home } from '../pages/Home'
import { AdminDetails } from '../pages/AdminDetails'
import { AdminHome } from '../pages/AdminHome'
import { AdminNewFood } from '../pages/AdminNewFood'
import { AdminEditFood } from '../pages/AdminEditFood'

export function AppRoutes(){
  return(
    <Routes>
      <Route path='/new' element={<New/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/details' element={<Details/>}/>
      <Route path='/admindetails' element={<AdminDetails/>}/>
      <Route path='/adminhome/' element={<AdminHome/>}/>
      <Route path='/newfood/' element={<AdminNewFood/>}/>
      <Route path='/editfood/' element={<AdminEditFood/>}/>
      <Route path='/' element={<Home/>}/>
    </Routes>

  )

}
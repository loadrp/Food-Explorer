import { Routes, Route } from 'react-router-dom'

import { AdminDetails } from '../pages/AdminDetails'
import { AdminHome } from '../pages/AdminHome'
import { AdminNewFood } from '../pages/AdminNewFood'
import { AdminEditFood } from '../pages/AdminEditFood'

export function AdminRoutes(){
  return(
    <Routes>
      <Route path='/admin' element={<AdminHome/>} />
      <Route path='/admindetails/:id' element={<AdminDetails/>}/>
      <Route path='/newfood' element={<AdminNewFood/>}/>
      <Route path='/editfood/:id' element={<AdminEditFood/>}/>
    </Routes>

  )

}
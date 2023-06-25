import {createContext, useContext, useState, useEffect} from 'react'
import { useRoutes } from 'react-router-dom';
import { api } from '../services/api';


const AuthContext = createContext({});



function AuthProvider({children}){
  const [data, setData] = useState({})

  async function signIn({email, password}) {
    try {
      const response = await api.post('/sessions', {email, password});
      const user = response?.data?.user;
      const token = response?.data?.token;
      const role = response?.data?.user?.role;
  
      if (user && token) {
        localStorage.setItem("@foodexplorer:user", JSON.stringify(user));
        localStorage.setItem("@foodexplorer:token", token );
        
  
        api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        setData({ user, token, role})
      } else {
        throw new Error('Usuário ou token não fornecidos pela API');
      }
    }
    catch(error){
      if(error.response){
        alert(error.response.data.message)
      }else{
        alert("Não foi possível realizar o login")
      }
    }
  }

  function signOut(){
    localStorage.removeItem("@foodexplorer:user")
    localStorage.removeItem("@foodexplorer:token")
  

    setData({});
  }

  async function updateProfile({user, avatarFile}){
    try{
      if(avatarFile){
        const fileUploadForm = new FormData();
        fileUploadForm.append("avatar", avatarFile);

        const response = await api.patch("/users/avatar", fileUploadForm);
        user.avatar = response.data.avatar;
      }

      await api.put("/users", user);
      localStorage.setItem("@foodexplorer:user", JSON.stringify(user));
      setData({ user, token: data.token })
      alert("Perfil atualizado!")
    }
    catch(error){
      if(error.response){
        console.log(error.response.data.message)
        alert(error.response.data.message)
      } else {
        alert("Não foi possível atualizar o perfil")
      }

    }

  }

    useEffect(()=>{
    const token = localStorage.getItem("@foodexplorer:token");
    const user = localStorage.getItem("@foodexplorer:user");

    if(token && user) {

      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      setData({
        token,
        user: JSON.parse(user)
      })
    }
  

  },[]);

  return(
    <AuthContext.Provider value= {{signIn , signOut, updateProfile, user: data.user, admin: data.user}}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth(){
  const context = useContext(AuthContext);
  return context
}



export {AuthProvider, useAuth};



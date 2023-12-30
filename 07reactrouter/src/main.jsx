import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter,Link, createRoutesFromElements, Route } from 'react-router-dom'
import Routee from './Routee.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Github, { githubInfoLoader } from './components/Github/Github.jsx'


// Method-1 to create router
// const router=createBrowserRouter([
//     {   
//         // TO level Mapping
//         path:'/',
//         element:<Route />,

//         // WHen we have further value then we will add childer
//         children:[
//             {
//                 path:"",
//                 element:<Home/>
//             },
//             {
//                 path:"about",
//                 element:<About/>
//             },{
//                 path:"contact",
//                 element:<Contact/>
//             }
//         ]
//     }
// ])

const router =createBrowserRouter(
    createRoutesFromElements(
        // Main router which should be there like Header and footer
        <Route path="/" element={<Routee/>}>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/user/:id' element={<User/>}/>
            <Route 
                loader={githubInfoLoader}
                path='/github' 
                element={<Github/>}/>

        </Route>
    )
)

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}/>
)

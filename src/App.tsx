import { useEffect, useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import SiteLayout from './pages/layouts/SiteLayout'
import PersonalLayout from "./pages/layouts/personalLayout"
import HomePage from './pages/HomePage'
import ProductPage from './pages/ProductPage'
import DetailProduct from './pages/DetailProduct'
import Index from './pages/admin/index'
import AdminLayout from './pages/layouts/adminLayout'
import PostsManager from './pages/admin/posts/PostsManager'
import PersonalPage from './pages/PersonalPage'
import PostAdd from './pages/admin/posts/PostAdd'
import SignUp from './SignUp'
import SignIn from './SignIn'
import { postType } from './type/posts'
import { getAllRoute, addRoute, deleteRoute, updateRoute } from "./api/route"
import PostsEdit from './pages/admin/posts/PostsEdit'
import Learn from './pages/Learn'
import CoursesDetail from './pages/CoursesDetail'
import VideoLearn from './pages/VideoLearn'
import LearnLayout from './pages/layouts/LearnLayout'
import LearningPath from './pages/LearningPath'
import EditVideo from './pages/admin/video/editVideo'
import EditAccount from './pages/admin/account/EditAccount'
import ManagerAccount from './pages/admin/account/ManagerAccount'
import PriveateRoute from './components/PriveateRoute'

function App() {
  const [posts, setPosts] = useState<postType[]>([]);

  useEffect(() => {
    const getAllPosts = async () => {
      const { data } = await getAllRoute();
      setPosts(data)
    };
    getAllPosts();
  }, [])

  const onHandlerAdd = async (post: postType) => {
    const { data } = await addRoute(post)
    setPosts([...posts, data])
  }

  const onHandlerRemove = (id: number) => {
    deleteRoute(id);
    setPosts(posts.filter(item => item._id !== id))
    console.log(posts);
    
  }

  const onHandlerUpdate = async (id: number, post: postType) => {
    const { data } = await updateRoute(id, post)
    setPosts(posts.map(item => item.id ? data : item))
  }

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<SiteLayout />}>
          <Route path='/' element={<HomePage />}></Route>
          <Route path='post'>
            <Route index element={<ProductPage posts={posts} />} />
            <Route path=':id' element={<DetailProduct />} />
          </Route>
          <Route path='courses'>
            <Route index element={<Learn />} />
            <Route path=":id">
              <Route index element={<CoursesDetail />} />
            </Route>
          </Route>
          <Route path='route' element={<LearningPath />} />
        </Route>

        <Route path='/learn/:slug' element={<VideoLearn />}>
        </Route>

        <Route path='/personal' element={<PersonalLayout />}>
          <Route index element={<PersonalPage />} />
        </Route>
      </Routes>

      <Routes>
        <Route path='admin' element={<PriveateRoute><AdminLayout /></PriveateRoute>}>
          <Route index element={<Index />} />
          <Route path='posts'>
            <Route index element={<PostsManager posts={posts} onRemove={onHandlerRemove} />} />
            <Route path='add' element={<PostAdd onAdd={onHandlerAdd} />} />
            <Route path='edit/:id' element={<PostsEdit onUpdate={onHandlerUpdate} />} />
          </Route>
          <Route path='video/:slug' element={<EditVideo />}></Route>
          <Route path='user' element={<PersonalPage />}></Route>
          <Route path='manager-account'>
            <Route index  element={<EditAccount />} />
            <Route path='edit/:id' element={<ManagerAccount />} />
          </Route>
        </Route>
        <Route path='/signup' element={<SignUp />} />
        <Route path='/signin' element={<SignIn />} />
      </Routes>

    </div>

  )
}

export default App

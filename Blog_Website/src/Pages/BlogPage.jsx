import React,{useState, useEffect} from 'react'
import Data from '../Components/Data'
import Blog from '../Components/Blog'
import Navbar from '../Components/Navbar'
import axios from "axios"
// import axios from "axios"
const BlogPage = () => {
   
const [post, setPost] = useState([])
const [imgs, setImgs] = useState([])

useEffect(()=>{

  axios.get(" https://jsonplaceholder.typicode.com/posts").then(res => setPost(res.data.splice(1,10))).catch(err =>{console.log(err)})
  const imgUrls = Array.from({ length: 10 }, (_, i) => `https://picsum.photos/200/300?random=${i}`);
  setImgs(imgUrls);
},[])
  return (
    <>
    <Navbar/>
    <Blog blogs = {post} images ={imgs} />
    </>
  )
}

export default BlogPage
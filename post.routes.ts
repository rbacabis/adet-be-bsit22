import { Hono } from 'hono'
import * as PostController from '../controllers/post.controller'  

const postRoutes = new Hono()

postRoutes.get('/posts', PostController.getPosts)
postRoutes.get('/posts/:id', PostController.getPost)
postRoutes.post('/posts', PostController.addPost)
postRoutes.patch('/posts/:id', PostController.updatePost)
postRoutes.delete('/posts/:id', PostController.deletePost)

export default postRoutes
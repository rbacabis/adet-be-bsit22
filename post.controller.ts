import { Context } from 'hono'
import * as PostModel from '../models/post.model'  

export const getPosts = async (c: Context) => {
  const posts = await PostModel.getAllPosts()
  return c.json(posts)
}

export const getPost = async (c: Context) => {
  const id = Number(c.req.param('id'))
  const post = await PostModel.getPostById(id)

  if (!post || (post as any[]).length === 0) {
    return c.json({ message: "Post not found" }, 404)
  }

  return c.json(post)
}

export const addPost = async (c: Context) => {
  const body = await c.req.json()
  const { title, description } = body

  if (!title) {
    return c.json({ error: "Title is required" }, 400)
  }

  const result = await PostModel.createPost(title, description)
  return c.json({ message: "Post created", result })
}

export const updatePost = async (c: Context) => {
  const id = Number(c.req.param('id'))
  const body = await c.req.json()

  if (!body.status) {
    return c.json({ error: "Status is required" }, 400)
  }

  const result = await PostModel.updatePost(id, body.status)
  return c.json({ message: "Post updated", result })
}

export const deletePost = async (c: Context) => {
  const id = Number(c.req.param('id'))

  const result = await PostModel.deletePost(id)
  return c.json({ message: "Post deleted", result })
}
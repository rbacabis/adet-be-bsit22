import { db } from '../config/db'

export const getAllPosts = async () => {
  const [rows] = await db.query("SELECT * FROM posts")
  return rows
}

export const getPostById = async (id: number) => {
  const [rows] = await db.query("SELECT * FROM posts WHERE post_id = ?", [id])
  return rows
}

export const createPost = async (title: string, description: string) => {
  const [result] = await db.query(
    "INSERT INTO posts (title, description) VALUES (?, ?)",
    [title, description]
  )
  return result
}

export const updatePost = async (id: number, status: string) => {
  const [result] = await db.query(
    "UPDATE posts SET status = ? WHERE post_id = ?",
    [status, id]
  )
  return result
}

export const deletePost = async (id: number) => {
  const [result] = await db.query(
    "DELETE FROM posts WHERE post_id = ?",
    [id]
  )
  return result
}
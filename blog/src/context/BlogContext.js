import React, { useReducer } from 'react'
import { call } from 'react-native-reanimated'
import createDataContext from './createDataContext'



const blogReducer = (state, action) => {
  switch (action.type) {
    case 'add':
      return [...state, {
        id: Math.floor(Math.random()* 99999), 
        title: action.payload.title,
        content: action.payload.content
      }]
    case 'edit':
      return state.map((blog) => {
        return blog.id === action.payload.id ? action.payload : blog
      })
    case 'delete':
      return state.filter(blogPost => blogPost.id !== action.payload )
    default:
      return state
  }
}

const addBlogPost = (dispatch) => {
  return (title, content, callback) => {
    dispatch({ type: 'add', payload: { title, content }})
    if (callback) {
      callback()
    }  
  }
}

const editBlogPost = (dispatch) => {
  return (id, title, content, callback) => {
    dispatch({type: 'edit', payload: { id, title, content }})
    if (callback) {
      callback()
    }
  }
}

const deleteBlogPost = dispatch => {
  return (id) => {
    dispatch({ type: 'delete', payload: id }) // naming conventions for obj
  }
}

export const { Context, Provider } = createDataContext(
  blogReducer, 
  { addBlogPost, deleteBlogPost, editBlogPost },
  [{ title: 'Test Post', content: 'testing...', id: 0 }]
)
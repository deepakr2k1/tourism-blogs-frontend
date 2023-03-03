import { useState } from "react";
import { Navigate } from "react-router-dom";
import { createBlog } from '../services/BlogService';
import Editor from "../components/Editor";

export default function CreateBlog() {
  const [title, setTitle] = useState('');
  const [snippet, setSnippet] = useState('');
  const [content, setContent] = useState('');
  const [redirect, setRedirect] = useState(false);

  async function createNewBlog(e) {
    e.preventDefault();
    try {
      await createBlog({ title, snippet, content });
      setRedirect(true);
    } catch (error) {
      console.error(error);
    }
  }

  if (redirect) {
    return <Navigate to={ '/' } />;
  }
  return (
    <form onSubmit={ createNewBlog }>
      <input type="title"
        placeholder={ 'Title' }
        value={ title }
        onChange={ e => setTitle(e.target.value) } />
      <input type="summary"
        placeholder={ 'Snippet' }
        value={ snippet }
        onChange={ e => setSnippet(e.target.value) } />
      <Editor value={ content } onChange={ setContent } />
      <button style={ { marginTop: '5px' } }>Create post</button>
    </form>
  );
}
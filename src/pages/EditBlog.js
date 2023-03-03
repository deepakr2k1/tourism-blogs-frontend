import { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import { getBlogById, updateBlog } from '../services/BlogService';
import Editor from "../components/Editor";

export default function EditBlog() {
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [snippet, setSnippet] = useState('');
  const [content, setContent] = useState('');
  const [redirect, setRedirect] = useState(false);

  async function fetchBlogById() {
    try {
      let _blog = await getBlogById(id);
      setTitle(_blog.title);
      setSnippet(_blog.snippet);
      setContent(_blog.content);
    } catch (error) {
      console.error(error);
    }
  }

  async function saveBlog(e) {
    e.preventDefault();
    try {
      await updateBlog({ id, title, snippet, content });
      setRedirect(true);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchBlogById();
  }, []);

  if (redirect) {
    return <Navigate to={ `/post/${id}` } />;
  }

  return (
    <form onSubmit={ saveBlog }>
      <input type="title"
        placeholder={ 'Title' }
        value={ title }
        onChange={ ev => setTitle(ev.target.value) } />
      <input type="summary"
        placeholder={ 'snippet' }
        value={ snippet }
        onChange={ ev => setSnippet(ev.target.value) } />
      <Editor onChange={ setContent } value={ content } />
      <button style={ { marginTop: '5px' } }>Update post</button>
    </form>
  );
};
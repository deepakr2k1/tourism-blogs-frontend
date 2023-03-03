import { format } from 'date-fns';
import { Link } from "react-router-dom";

export default function Blog({ _id, title, snippet, updated_at }) {
  return (
    <div className="post">
      <div className="texts">
        <Link to={ `/post/${_id}` }>
          <h2>{ title }</h2>
        </Link>
        <p className="date">Last updated on { format(new Date(updated_at), 'dd MMM yyyy') }</p>
        <div dangerouslySetInnerHTML={ { __html: snippet } } />
      </div>
    </div>
  );
}
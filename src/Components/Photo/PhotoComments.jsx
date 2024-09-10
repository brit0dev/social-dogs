import React from 'react';
import styles from './PhotoComments.module.css';
import { UserContext } from '../../UserContext';
import PhotoCommentsForm from './PhotoCommentsForm';

function PhotoComments(props) {
  const commentsSection = React.useRef(null);
  const [comments, setComments] = React.useState(() => props.comments);
  const { login } = React.useContext(UserContext);

  React.useEffect(() => {
    commentsSection.current.scrollTop = commentsSection.current.scrollHeight;
  }, [comments]);

  return (
    <>
      <ul ref={commentsSection} className={styles.comments}>
        {comments.map((comment) => (
          <li key={comment.comment_ID}>
            <strong>{comment.comment_author}</strong>
            <span>{comment.comment_content}</span>
          </li>
        ))}
      </ul>
      {login && <PhotoCommentsForm id={props.id} setComments={setComments} />}
    </>
  );
}

export default PhotoComments;

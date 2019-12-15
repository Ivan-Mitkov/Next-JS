import Comment from './Comment'

const CommentsList = ({comments}) => {
    return (
        <>
          {comments.map(comment=>(
              <Comment key={comment.id} comment={comment}/>
          ))}  
        </>
    )
}

export default CommentsList

const FeedbackCard = ({ key, content, name, title, img }) => (
  <div className="text-whitesmoke">
    <div>{key}</div>
    <div>{content}</div>
    <div>{name}</div>
    <div>{title}</div>
    <div>{img}</div>
  </div>
  
)


export default FeedbackCard
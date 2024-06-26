function Card({posts}){
  return(
    <div className="card-container">
      {
        posts.map(post =>(
          <div key={`post_${post.id}`} className="card">
            
            <figure>
              <img src={post.image} alt={post.title} />
            </figure>
            
            <div className="text">

              <div className="title">
                <h3>{post.title}</h3>
                {
                    post.published === true ||
                    <span>Bozza</span>
                }
              </div>

              <div className="content">
                <p>{post.content}</p>
              </div>

              <div className="category">
                  <span>{post.category.name}</span>
              </div>

              <div className="tags">
                {
                  post.tags.map(tag => <span key={`card_tag${tag.id}`}>{tag.name}</span>)
                }
              </div>

            </div>
          </div>
        ))
      }
  </div>
  )
}
export default Card
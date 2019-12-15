import Link from "next/link";

const StoryList = ({ stories }) => {
  return (
    <div className="story-list">
      {stories.map(story => {
        return (
          <div className="story" key={story.id}>
            <h4 className="story-title">
              <a href={story.url}>{story.title}</a>
            </h4>
            <div className="story-details">
              <span>{story.points || 0} points </span>
              <Link href={`/story?id=${story.id}`}>
                <a>{story.coments_count || 0} comments</a>
              </Link>
            </div>
          </div>
        );
      })}
      <style jsx>{`
        .story-list {
          padding: 0 1rem;
        }
        .story {
          padding: 1rem 0;
        }
        .story-title {
          font-size: 1rem;
          font-weight: 400;
          margin: 0;
          margin-bottom: 0.5rem;
        }
        .story-title a {
          color: #333;
          text-decoration: none;
        }
        .story-title a:hover, .story-details a:hover {
            color: #000;
          text-decoration: underline;
        }
        .story-details {
          font-size: 0.8rem;
          font-weight: bold;
        }
        .story-details span {
            margin-right:1rem;
         
        }
        .story-details a {
         color:#6600ff;
          text-decoration: none;
        }
      `}</style>
    </div>
  );
};

export default StoryList;
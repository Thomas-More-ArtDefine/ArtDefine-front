const TextCard = ({
  title, 
  subTitle, // (optional)
  text, 
  creationDate, //  (optional)
  links, //  (optional)
  owner, // (optional)
}: {
  title: string;
  subTitle?: string;
  text: string;
  creationDate?: string;
  links?: string[];
  owner?: string;
}) => {
  return (
    <div className="text-card card">
      <div className="title">{title}</div> 
      {subTitle && <h3 className="subtitle">{subTitle}</h3>} {/* Display the subtitle if it exists */}
      <p className="content">{text}</p> 
      <div className="footer">
        <div className="footer-top"> 
          {links && links.length > 0 && (
            <>
              <p className="link-title">Links:</p> {/* Display the "Links:" title if there are links */}
            </>
          )}
           {creationDate && owner && (
            <div className="creationdate">
              <p >Created on: {creationDate}</p> {/* Display the creation date and owner if they exist */}
              <p className="owner">By {owner}</p> 
            </div>
          )}
        </div>
        {links && links.length > 0 && (
          <>
            <ul className="links">
              {links.map((link, index) => (
                <li key={index} className="link">
                  <a href={link}>{link}</a> {/* Display each link id they exist */}
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
};

export default TextCard;

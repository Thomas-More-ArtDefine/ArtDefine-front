const TextCard = ({
  title,
  subTitle,
  text,
  creationDate,
  links,
  owner,
}: {
  title: string;
  subTitle?: string;
  text: string;
  creationDate?: string;
  links?: string[];
  owner?: string;
}) => {
  return (
    <div className="text-card">
      <div className="title">{title}</div>
      {subTitle && <h3 className="subtitle">{subTitle}</h3>}
      <p className="content">{text}</p>
      <div className="footer">
        <div className="footer-top">
         
          {links && links.length > 0 && (
            <>
              <p className="link-title">Links:</p>
            </>
          )}
           {creationDate && owner && (
            <div className="creationdate">
              <p >Created on: {creationDate}</p>
              <p className="owner">By {owner}</p>
            </div>
          )}
        </div>
        {links && links.length > 0 && (
          <>
            <ul className="links">
              {links.map((link, index) => (
                <li key={index} className="link">
                  <a href={link}>{link}</a>
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

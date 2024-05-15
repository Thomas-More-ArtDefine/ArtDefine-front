import { Link } from "../../model/LinkModel";
import Card from "./Card";


const Content: React.FC<{
  subTitle?: string;
  text: string;
  creationDate?: string;
  links?: Link[];
  owner?: string;
  pronouns?: string;
}> = ({
  text,
  subTitle,
  creationDate,
  links,
  owner,
  pronouns,
}) => {
  return (
    <>
      {subTitle && pronouns?
      <div className="flex justify-spacebetween">
      <h3 className="subtitle font eaves heavy">{subTitle}</h3>
      <h3 className="subtitle font eaves heavy">{pronouns}</h3>
      </div>
      : subTitle && !pronouns?
      <h3 className="subtitle font eaves heavy">{subTitle}</h3>
      : ''
      }{/* Display the subtitle if it exists */}
    
      
      <p className="content">{text}</p> 
      <div className="footer">
        <div className="footer-top"> 
          {links && links.length > 0 && (
            <>
              <p className="link-title">Links:</p> {/* Display the "Links:" title if there are links */}
            </>
          )}
           {creationDate && owner ? 
            <div className="creationdate">
              <p >Created on: {creationDate}</p> {/* Display the creation date and owner if they exist */}
              <p className="owner">By {owner}</p> 
            </div>
          : creationDate && !owner?
          <div className="creationdate">
              <p >Joined: {creationDate}</p> {/* Display the creation date if they exist */}
            </div>
            : ''
          }
        </div>
        {links && links.length > 0 && (
          <>
            <ul className="links">
              {links.map((link, index) => (
                <li key={index} className="link">
                  <i className="material-icons">public</i>
                  <a href={link.link_url}>{link.link_name}</a> {/* Display each link id they exist */}
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
      </>
  );
}


const TextCard: React.FC<{
  title: string;
  subTitle?: string;
  text: string;
  creationDate?: string;
  links?: Link[];
  owner?: string;
  isUser: boolean;
  pronouns?: string;
}> = ({
  title,
  text,
  subTitle,
  creationDate,
  links,
  owner,
  isUser,
  pronouns,
}) => {
  return (
    <>
      <Card
        title={title}
        isUser={isUser}
        cssProperty="text-card"
        content={<Content pronouns={pronouns} subTitle={subTitle} text={text} creationDate={creationDate} links={links} owner={owner} />}
      />
    </>
  );
};

export default TextCard;

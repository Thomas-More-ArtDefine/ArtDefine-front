import React from "react";

type SvgType = React.FunctionComponent<
  React.SVGProps<SVGSVGElement> & {
    title?: string | undefined;
  }
>;

const CatButton = ({ text, icon: Icon, onClick: handleClick, active }: { text: string; icon: SvgType, onClick: () => void, active: boolean}) => {
    return (
      <div className={`cat-button ${active ? 'active' : ''}`}>
        <div className="button" onClick={handleClick}>
          <div className="icon">
            <Icon />
          </div>
        </div>
        <div className="text">{text}</div>
      </div>
    );
  };
export default CatButton;

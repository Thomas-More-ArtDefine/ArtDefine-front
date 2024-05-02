const tabs: React.FC<{
    setShowTab1: React.Dispatch<React.SetStateAction<boolean>>;
    setShowTab2: React.Dispatch<React.SetStateAction<boolean>>;
    ShowTab1: boolean;
    ShowTab2: boolean;
    NameTab1: string;
    NameTab2: string;
  }> = ({ setShowTab1,setShowTab2, ShowTab1, ShowTab2, NameTab1, NameTab2 }) => {
    return (
        <div className="navtabs">
                <div className="flex justify-spacebetween">
                    {ShowTab1 ? (
                        <div className="tab active position relative">
                            <div className="font eaves heavy fs32 purple-dark">{NameTab1}</div>
                            <div className="divider purple thick position absolute"></div>
                        </div>
                            
                        ) : (
                            <div className="tab position relative">
                                <div className=" font eaves book fs32 purple-dark opacity p75" onClick={() => {setShowTab2(false); setShowTab1(true);}}>{NameTab1}</div>
                            </div>
                        )}
                        

                    {ShowTab2 ? (
                        <div className="tab active position relative">
                            <div className="font eaves heavy fs32 purple-dark">{NameTab2}</div>
                            <div className="divider purple thick position absolute"></div>
                        </div>
                            
                        ) : (
                            <div className="tab position relative">
                                <div className=" font eaves book fs32 purple-dark opacity p75" onClick={() => {setShowTab2(true); setShowTab1(false);}}>{NameTab2}</div>
                            </div>
                        )}
                </div>
                
                <div className="divider purple opacity p75"></div>
            </div>
    );
};

export default tabs;
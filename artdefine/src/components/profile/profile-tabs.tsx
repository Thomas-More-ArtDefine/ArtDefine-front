const ProfileTabs: React.FC<{
    handleTabClick: any,
    ShowTab1: boolean;
    ShowTab2: boolean;
    ShowTab3: boolean;
  }> = ({ handleTabClick, ShowTab1, ShowTab2, ShowTab3 }) => {
    return (
        <div className="navtabs">
                <div className="flex justify-spacebetween">
                {ShowTab1 ? (
                        <div className="tab active position relative">
                            <div className="font eaves heavy fs24 purple-dark">Followers</div>
                            <div className="divider purple thick position absolute"></div>
                        </div>
                            
                        ) : (
                            <div className="tab position relative">
                                <div className=" font eaves book fs24 purple-dark opacity p75" onClick={() => handleTabClick('followers')}>Followers</div>
                            </div>
                        )}

                        {ShowTab2 ? (
                        <div className="tab active position relative">
                            <div className="font eaves heavy fs24 purple-dark">Following</div>
                            <div className="divider purple thick position absolute"></div>
                        </div>
                            
                        ) : (
                            <div className="tab position relative">
                                <div className=" font eaves book fs24 purple-dark opacity p75" onClick={() => handleTabClick('following')}>Following</div>
                            </div>
                        )}

                        {ShowTab3 ? (
                        <div className="tab active position relative">
                            <div className="font eaves heavy fs24 purple-dark">Groups</div>
                            <div className="divider purple thick position absolute"></div>
                        </div>
                            
                        ) : (
                            <div className="tab position relative">
                                <div className=" font eaves book fs24 purple-dark opacity p75" onClick={() => handleTabClick('groups')}>Groups</div>
                            </div>
                        )}


                </div>
                <div className="divider purple opacity p75"></div>
            </div>
    );
};

export default ProfileTabs;
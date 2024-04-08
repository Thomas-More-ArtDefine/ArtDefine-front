import { useParams } from "react-router-dom";
import Banner from "../../components/bannerAndProfileImage/Banner";
import { GroupModel } from "../../model/GroupModel";
import GROUPMOCK from "../../mock/GroupMock";
import { useState } from "react";
import GroupBanner from "../../components/group/GroupBanner";
import GroupNav from "../../components/group/GroupNav";

export default function Group() {

    const { id } = useParams<{ id: string }>();
    const [group, setGroup] = useState<GroupModel>(GROUPMOCK[0]);


    return (
        <>
            <div className="page group-page">
                <GroupBanner name={group.group_name} bannerUrl={group.group_banner_picture} alt={"Banner picture of the group."} />
                <GroupNav />
            </div>

        </>
        
    )
}

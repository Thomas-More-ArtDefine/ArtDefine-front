import { Folder } from "../model/FolderModel";
import { visibility } from "../model/PostModel";
import GROUPMOCK from "./GroupMock";
import USERMOCK from "./UserMock";

const FOLDERMOCK:Folder[] = [
    {
        id: "1",
        folder_name: "example folder 1",
        folder_description: "an example folder",
        folder_archived: false,
        folder_visibility: visibility.PUBLIC,
        group: GROUPMOCK[0]
    },
    {
        id: "2",
        folder_name: "example folder 2",
        folder_description: "an example folder",
        folder_archived: false,
        folder_visibility: visibility.PUBLIC,
        group: GROUPMOCK[1]
    },
    {
        id: "3",
        folder_name: "example user folder 1",
        folder_description: "an example folder",
        folder_archived: false,
        folder_visibility: visibility.PRIVATE,
        user: USERMOCK[0]
    }
];


export default FOLDERMOCK;
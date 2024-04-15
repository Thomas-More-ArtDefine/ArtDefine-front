import { Artwork, visibility } from "../model/PostModel";
import FOLDERMOCK from "./FolderMock";

const FEEDMOCK:Artwork[] = [
    {
        id: "21",
        post_content: "https://upload.wikimedia.org/wikipedia/commons/9/91/Inside_the_Churchill_War_Rooms_%2822%29_-_geograph.org.uk_-_2807382.jpg?20211201135822",
        post_title: "example post 21",
        post_description: "",
        post_visibility: visibility.PUBLIC,
        post_medium: "Digital Art",
        user: {
            id: "1",
            user_name: "testuser1",
            user_subtitle: "",
            user_profile_picture: "",
            user_deactivated: false,
            user_deactivation_date: ""
        },
        folders:FOLDERMOCK
    },
    {
        id: "9",
        post_content: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Carnaval_de_San_Juan_Totolac%2C_Tlaxcala_2018_03.jpg/800px-Carnaval_de_San_Juan_Totolac%2C_Tlaxcala_2018_03.jpg?20190613214544",
        post_title: "example post 9",
        post_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in",
        post_visibility: visibility.PUBLIC,
        post_medium: "Digital Art",
        user: {
            id: "1",
            user_name: "testuser1",
            user_subtitle: "",
            user_profile_picture: "",
            user_deactivated: false,
            user_deactivation_date: ""
        },
        folders:FOLDERMOCK
    },
    {
        id: "7",
        post_content: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/2021._09.01_%E7%B8%BD%E7%B5%B1%E5%81%95%E5%90%8C%E5%89%AF%E7%B8%BD%E7%B5%B1%E5%87%BA%E5%B8%AD%E3%80%8COur_Heroes%EF%BC%81%E5%8F%B0%E7%81%A3%E8%8B%B1%E9%9B%84_%E5%87%B1%E6%97%8B%E6%B4%BE%E5%B0%8D%E3%80%8D_%2851417923285%29.jpg/800px-2021._09.01_%E7%B8%BD%E7%B5%B1%E5%81%95%E5%90%8C%E5%89%AF%E7%B8%BD%E7%B5%B1%E5%87%BA%E5%B8%AD%E3%80%8COur_Heroes%EF%BC%81%E5%8F%B0%E7%81%A3%E8%8B%B1%E9%9B%84_%E5%87%B1%E6%97%8B%E6%B4%BE%E5%B0%8D%E3%80%8D_%2851417923285%29.jpg?20210901115429",
        post_title: "example post 7",
        post_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in",
        post_visibility: visibility.PUBLIC,
        post_medium: "Digital Art",
        user: {
            id: "1",
            user_name: "testuser1",
            user_subtitle: "",
            user_profile_picture: "",
            user_deactivated: false,
            user_deactivation_date: ""
        },
        folders:FOLDERMOCK
    },
    {
        id: "2",
        post_content: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/ISS030-E-21277_-_View_of_Earth.jpg/800px-ISS030-E-21277_-_View_of_Earth.jpg?20211024230858",
        post_title: "example post 2",
        post_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in",
        post_visibility: visibility.PUBLIC,
        post_medium: "Digital Art",
        user: {
            id: "1",
            user_name: "testuser1",
            user_subtitle: "",
            user_profile_picture: "",
            user_deactivated: false,
            user_deactivation_date: ""
        },
        folders:FOLDERMOCK
    },
    {
        id: "12",
        post_content: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Jf4391Saint_Augustine_Parish_Lubao_Churchfvf_09.JPG/450px-Jf4391Saint_Augustine_Parish_Lubao_Churchfvf_09.JPG?20150310152429",
        post_title: "example post 12",
        post_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in",
        post_visibility: visibility.PUBLIC,
        post_medium: "Digital Art",
        user: {
            id: "1",
            user_name: "testuser1",
            user_subtitle: "",
            user_profile_picture: "",
            user_deactivated: false,
            user_deactivation_date: ""
        },
        folders:FOLDERMOCK
    },
    {
        id: "11",
        post_content: "https://upload.wikimedia.org/wikipedia/commons/5/51/Coat_of_Arms_of_Bizhbulyak_rayon_%28Bashkortostan%29.png?20071225115421",
        post_title: "example post 11",
        post_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in",
        post_visibility: visibility.PUBLIC,
        post_medium: "Digital Art",
        user: {
            id: "1",
            user_name: "testuser1",
            user_subtitle: "",
            user_profile_picture: "",
            user_deactivated: false,
            user_deactivation_date: ""
        },
        folders:FOLDERMOCK
    },
    {
        id: "1",
        post_content: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Franz_Marc_029.jpg/800px-Franz_Marc_029.jpg",
        post_title: "example post",
        post_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in",
        post_visibility: visibility.PUBLIC,
        post_medium: "Digital Art",
        user: {
            id: "1",
            user_name: "testuser1",
            user_subtitle: "",
            user_profile_picture: "",
            user_deactivated: false,
            user_deactivation_date: ""
        },
        folders:FOLDERMOCK
    },
    {
        id: "20",
        post_content: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Footpath_to_Cromer_Hyde_Lane_-_geograph.org.uk_-_5047968.jpg/800px-Footpath_to_Cromer_Hyde_Lane_-_geograph.org.uk_-_5047968.jpg?20230703130309",
        post_title: "example post 20",
        post_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in",
        post_visibility: visibility.PUBLIC,
        post_medium: "Digital Art",
        user: {
            id: "1",
            user_name: "testuser1",
            user_subtitle: "",
            user_profile_picture: "",
            user_deactivated: false,
            user_deactivation_date: ""
        },
        folders:FOLDERMOCK
    },
    {
        id: "13",
        post_content: "https://upload.wikimedia.org/wikipedia/commons/1/12/Farmland%2C_Kilmeston_-_geograph.org.uk_-_2817530.jpg?20211203063447",
        post_title: "example post 13",
        post_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in",
        post_visibility: visibility.PUBLIC,
        post_medium: "Digital Art",
        user: {
            id: "1",
            user_name: "testuser1",
            user_subtitle: "",
            user_profile_picture: "",
            user_deactivated: false,
            user_deactivation_date: ""
        },
        folders:FOLDERMOCK
    },
    {
        id: "18",
        post_content: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Blue_parakeet.jpg/436px-Blue_parakeet.jpg?20191201161434",
        post_title: "example post 18",
        post_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in",
        post_visibility: visibility.PUBLIC,
        post_medium: "Digital Art",
        user: {
            id: "1",
            user_name: "testuser1",
            user_subtitle: "",
            user_profile_picture: "",
            user_deactivated: false,
            user_deactivation_date: ""
        },
        folders:FOLDERMOCK
    }
];


export default FEEDMOCK;
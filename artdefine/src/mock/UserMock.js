// Mock data for user profile
const userMockData = [
    {
        id: 1,
        name: "Alisa Doe",
        subtitle: "Digital artist",
        profile_picture: "https://static.diverseui.com/female-7.jpg",
        email: "alisadoe@example.com",
        password: "password123",
        bio: "I am a digital artist passionate about creating stunning visuals."
    },
    {
        id: 2,
        name: "Jane Smith",
        subtitle: "Graphic designer",
        profile_picture: "https://static.diverseui.com/male-2.jpg",
        email: "janesmith@example.com",
        password: "password456",
        bio: "I specialize in creating visually appealing designs for various mediums."
    },
    {
        id: 3,
        name: "Alex Johnson",
        subtitle: "Illustrator",
        profile_picture: "https://static.diverseui.com/male-7.jpg",
        email: "alexjohnson@example.com",
        password: "password789",
        bio: "I love bringing stories to life through my illustrations."
    }
];

const postMockData = [ 
    { id: 1, photo: "https://example.com/post1.jpg",
     username: "alisadoe",
     title: "Amazing artwork" 
    }, 
     { id: 2, 
        photo: "https://example.com/post2.jpg", 
        username: "janesmith", 
        title: "Creative design" 
    }, 
    { id: 3, photo: "https://example.com/post3.jpg", 
    username: "alexjohnson", 
    title: "Illustration masterpiece" 
} 
];

export { userMockData, postMockData };

export default userMockData;
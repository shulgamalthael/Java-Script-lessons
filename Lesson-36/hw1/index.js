const dataUrl = `https://api.github.com/users`;

async function getUsersBlogs(users) {
    console.log(users)

    try {
        const getDataUsers = await users.forEach(userId => {
            fetch(`${dataUrl}/${userId}`)
            console.log(dataUrl)
            console.log(userId)
                .then(response => {
                    if (response.ok) {
                        console.log(response.json());
                    }
                })
            throw new Error('Failed to fetch users blog');
        })
            .then(userBlog => userBlog.blog);


        const dataUser = Promise.all(getDataUsers);
        console.log(dataUser)
        return dataUser;
    }
    catch (error) {
        throw new Error(error);
    }
};

getUsersBlogs(['google', 'facebook', 'gaearon'])

// getUsersBlogs(['google'])
    // .then(response => response.json())
    // .then(data => console.log(data))

// Promise.all([getUsersBlogs(['google']), getUsersBlogs(['facebook']), getUsersBlogs(['gaearon'])])

export { getUsersBlogs };
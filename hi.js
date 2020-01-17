




  static async newStoryData(token, author, title, url) {
    const response = await axios.post(`${BASE_URL}/stories`, {
        user: {
            token,
            story.author,
            story.title,
            story.url,
        }
    })
}
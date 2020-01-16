



$("story-submit-button").on("submit", function (e) {
    console.log("this button works");
    e.preventDefault();
    let newStoryAuthor = $("#author").val();
    let newStorytitle = $("#title").val();
    let newStoryurl = $("#url").val();
    let newStoryObj = {
        author: newStoryAuthor,
        title: newStorytitle,
        url: newStoryurl
    }

    let newStoryClass = new Story(newStoryObj);

})
  
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
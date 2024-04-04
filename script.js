const postsData = [
    { id: 1, title: "A Journey into Secure Decentralization", content: "Introduction to Blockchain Technology for DApps",
     author: "Rejoy J" },
    
    
];

function renderPosts() {
    const postsContainer = document.getElementById("posts");
    postsContainer.innerHTML = "";
    
    postsData.forEach(post => {
        const postElement = document.createElement("div");
        postElement.classList.add("post");
        postElement.innerHTML = `
            <h2>${post.title}</h2>
            <p>${post.content}</p>
            <p class="author">Author: ${post.author}</p>
            <a href="article.html?id=${post.id}" class="read-more-link">Read more</a>
        `;
        postsContainer.appendChild(postElement);
    });
}

window.onload = renderPosts;

function addSubmitListener() {
    document.getElementById('postForm').addEventListener('submit', handleSubmit);
}

function handleSubmit(event) {
    event.preventDefault();

    const title = document.getElementById('title').value;
    const story = document.getElementById('story').value;
    const imageLink = document.getElementById('imageLink').value;

    if (!isValidImageUrl(imageLink)) {
        alert('Please enter a valid image URL ending with .jpg, .jpeg, .png, or .gif');
        return;
    }

    const post = createPost(title, story, imageLink);

    savePost(post);
    goToHomePage();
}

function createPost(title, story, imageLink) {
    return {
        title: title,
        story: story,
        imageLink: imageLink
    };
}

function savePost(post) {
  
    const posts = JSON.parse(localStorage.getItem('posts')) || [];
    
    posts.push(post);
    
    localStorage.setItem('posts', JSON.stringify(posts));
}

function goToHomePage() {
    window.location.href = '/home.html'; 
}

function isValidImageUrl(url) {
    return url.match(/\.(jpeg|jpg|gif|png)$/) != null;
}

function deleteAllPosts() {
    localStorage.removeItem('posts'); 
}

function initializePage() {
    const container = UI.createElement('div', { class: 'container-root' }, [
        UI.createElement('header', { class: 'header' }, [
            UI.createElement('a', { class: 'btn', href: "/home.html" }, 'Home')
        ]),
        UI.createElement('div', { id: "createPost" }, [
            UI.createElement('h1', { class: "heading" }, 'Create Post'),
            UI.createElement('div', { class: "form-wrapper" }, [
                UI.createElement('form', { id: "postForm" }, [
                    UI.createElement('label', { for: "title" }, "Title"),
                    UI.createElement('input', { type: "text", id: "title", name: "title", class: "input" }),
                    UI.createElement('label', { for: "story" }, "Story"),
                    UI.createElement('textarea', { id: "story", name: "story", class: "input" }),
                    UI.createElement('label', { for: "imageLink" }, "Image Link"),
                    UI.createElement('input', { type: "url", id: "imageLink", name: "imageLink", class: "input", placeholder: "e.g. https://example.com/image.jpg" }),
                    UI.createElement('button', { type: "submit", class: "btn" }, 'Create')
                ])
            ])
        ])
    ]);

    UI.render(container, document.querySelector('body'));

    addSubmitListener();
}

initializePage();

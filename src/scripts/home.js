function createHomeLayout() {
    document.body.style.backgroundImage = "url('src/images/background.jpg')";
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundPosition = 'center';
  
    const container = UI.createElement('div', { class: 'container-root' }, [
      UI.createElement('header', { class: 'header' }, [
        UI.createElement('div', { class: 'buttons' }, [
          UI.createElement('a', { href: 'index.html', class: 'btn' }, 'Log In'),
          UI.createElement('a', { href: 'registration.html', class: 'btn' }, 'Sign Up'),
        ]),
        UI.createElement('div', { class: 'content' }, [
          UI.createElement('h1', { class: 'heading' }, 'Welcome to Your Workspace'),
          UI.createElement('p', { class: 'text' }, 'Explore your postcards and connect with bloggers.'),
        ]),
      ]),
  
      UI.createElement('main', { class: 'main-section' }, [
        UI.createElement('nav', { class: 'sidebar' }, [
          UI.createElement('h2', { class: '_title' }, 'Bloggers'),
          ...bloggers.map(blogger =>
            UI.createElement('div', { class: 'bloger' }, [
              UI.createElement('img', { src: blogger.avatar, alt: `${blogger.firstName} ${blogger.lastName}`, class: 'avatar' }),
              UI.createElement('h3', { class: 'name' }, `${blogger.firstName} ${blogger.lastName}`)
            ])
          ),
        ]),
  
        UI.createElement('div', { class: 'sections' }, [
          UI.createElement('section', { class: 'box' }, [
            UI.createElement('h2', { class: '_title' }, 'Posts'),
            ...posts.map(post =>
              UI.createElement('div', { class: 'author' }, [
                UI.createElement('div', { class: 'content' }, [
                  UI.createElement('h3', { class: 'name' }, post.authorName),
                  UI.createElement('p', { class: 'text' }, post.title),
                ]),
                UI.createElement('div', { class: 'post' }, [
                  UI.createElement('p', { class: 'story' }, post.story),
                ]),
              ])
            ),
          ]),
          UI.createElement('footer', { class: 'footer' }, 'footer content here'),
        ]),
      ]),
    ]);
  
    UI.render(container, document.querySelector('body'));
  }
  
  createHomeLayout();
  
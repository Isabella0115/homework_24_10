function createRegistrationLayout() {
    
  
    const container = UI.createElement('div', { class: 'container-root' }, [
      UI.createElement('header', { class: 'header' }, [
        UI.createElement('a', { href: 'home.html', class: 'btn' }, 'Home'),
        UI.createElement('a', { href: 'index.html', class: 'btn' }, 'Log In'),
      ]),
      UI.createElement(
        'div',
        { class: 'form-wrapper' },
        UI.createElement('div', { class: 'form-container' }, [
          UI.createElement('h1', { class: 'heading' }, 'Registration Form'),
          UI.createElement(
            'p',
            { class: 'text' },
            'Fill out the form carefully for registration',
          ),
          UI.createElement('form', {}, [
            UI.createElement('div', { class: 'input-box' }, [
              UI.createElement('input', {
                class: 'input',
                type: 'text',
                placeholder: 'First Name',
              }),
              UI.createElement('input', {
                class: 'input',
                type: 'text',
                placeholder: 'Last Name',
              }),
              UI.createElement('div', { class: 'gender-selection' }, [
                UI.createElement('input', {
                  type: 'radio',
                  class: 'gender',
                  name: 'gender',
                }),
                UI.createElement('label', { for: 'gender' }, 'Male'),
                UI.createElement('input', {
                  type: 'radio',
                  class: 'gender',
                  name: 'gender',
                }),
                UI.createElement('label', { for: 'gender' }, 'Female'),
              ]),
              UI.createElement('input', {
                class: 'input',
                type: 'email',
                placeholder: 'Email',
              }),
              UI.createElement('input', {
                class: 'input',
                type: 'password',
                placeholder: 'Password',
              }),
            ]),
  
            UI.createElement('select', { class: 'country select-box' }, [
              UI.createElement('option', { value: 'armenia' }, 'Armenia'),
              UI.createElement('option', { value: 'usa' }, 'USA'),
              UI.createElement('option', { value: 'russia' }, 'Russia'),
              UI.createElement('option', { value: 'georgia' }, 'Georgia'),
              UI.createElement('option', { value: 'france' }, 'France'),
            ]),
  
            UI.createElement('div', { class: 'submit-info' }, [
              UI.createElement('input', {
                id: 'send_email',
                class: 'send_email',
                type: 'checkbox',
              }),
              UI.createElement('label', { for: 'send_email' }, 'Send me Email'),
              UI.createElement('button', { class: 'btn' }, 'Submit'),
            ]),
  
            UI.createElement('div', { class: 'social-buttons' }, [
              UI.createElement('button', { class: 'social-button' }, [
                UI.createElement('img', {
                  src: 'src/images/Facebook_Logo.png',
                  alt: 'Facebook Logo',
                  class: 'social-logo',
                }),
                ' Facebook',
              ]),
              UI.createElement('button', { class: 'social-button' }, [
                UI.createElement('img', {
                  src: 'src/images/Google.png',
                  alt: 'Google Logo',
                  class: 'social-logo',
                }),
                ' Google',
              ]),
              UI.createElement('button', { class: 'social-button' }, [
                UI.createElement('img', {
                  src: 'src/images/inkedin.webp',
                  alt: 'LinkedIn Logo',
                  class: 'social-logo',
                }),
                ' LinkedIn',
              ]),
            ]),
          ]),
        ]),
      ),
    ]);
  
    UI.render(container, document.body);
  }
  
  createRegistrationLayout();
  

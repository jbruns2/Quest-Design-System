function changeContent(page) {
    const contentDiv = document.getElementById('content');
    let url = '';

    switch (page) {
        case 'home':
            url = 'https://jbruns2.github.io/Quest-Design-System/pages/home.html';
            break;
        case 'typography':
            url = 'https://jbruns2.github.io/Quest-Design-System/pages/typography.html';
            console.log(url);
            break;
        case 'buttons':
            url = 'https://jbruns2.github.io/Quest-Design-System/pages/buttons.html';
            break;
        case 'colors':
            url = 'https://jbruns2.github.io/Quest-Design-System/pages/colors.html';
            break;
        case 'forms':
            url = 'https://jbruns2.github.io/Quest-Design-System/pages/forms.html';
            break;
        case 'icons':
            url = 'https://jbruns2.github.io/Quest-Design-System/pages/icons.html';
            break;
        case 'images':
            url = 'https://jbruns2.github.io/Quest-Design-System/pages/images.html';
            break;
        case 'layout':
            url = 'https://jbruns2.github.io/Quest-Design-System/pages/layout.html';
            break;
        case 'voice':
            url = 'https://jbruns2.github.io/Quest-Design-System/pages/voice.html';
            break;
        case 'cards':
            url = 'https://jbruns2.github.io/Quest-Design-System/pages/cards.html';
            break;
        default:
            url = '404.html';
    }

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            contentDiv.innerHTML = data;
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
            contentDiv.innerHTML = '<h2>Error Loading Content</h2><p>Sorry, there was an error loading the content.</p>';
        });
}


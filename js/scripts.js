function changeContent(page) {
    const contentDiv = document.getElementById('content');
    let url = '';

    switch (page) {
        case 'home':
            url = '/pages/home.html';
            break;
        case 'typography':
            url = 'https://jbruns2.github.io/Quest-Design-System/pages/typography.html';
            console.log(url);
            break;
        case 'buttons':
            url = '/pages/buttons.html';
            break;
        case 'colors':
            url = '/pages/colors.html';
            break;
        case 'forms':
            url = '/pages/forms.html';
            break;
        case 'icons':
            url = '/pages/icons.html';
            break;
        case 'images':
            url = '/pages/images.html';
            break;
        case 'layout':
            url = '/pages/layout.html';
            break;
        case 'voice':
            url = '/pages/voice.html';
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


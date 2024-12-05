const container = document.getElementById('navbarButtons');
const contentContainer = document.getElementById('contentContainer');

        container.addEventListener('click', (event) => {
            const clickedButton = event.target;
            

            if (clickedButton.tagName === 'BUTTON') {
                const buttonId = clickedButton.id;

                switch (buttonId) {
                    case 'logo':
                        alert('Button 1 clicked!');
                        break;
                    case 'play':
                        contentContainer.innerHTML = `
                        <p> Играть что-то там </p>
                        `;
                        break;
                    case 'magicrpg':
                        contentContainer.innerHTML = `
                        <p> Тут пвп делают, не смотри </p>
                        `;
                        break;
                    case 'tmr':
                        contentContainer.innerHTML = `
                        <p> Тут воняет тмр-овцами </p>
                        `;
                        break;
                    case 'tech':
                        contentContainer.innerHTML = `
                        <p> Иди лучше калькулятор собери </p>
                        `;
                        break;
                    case 'donations':
                        contentContainer.innerHTML = `
                        <p> Деньги! </p>
                        `;
                        break;
                    case 'rules':
                        contentContainer.innerHTML = `
                        <p> Забаню! </p>
                        `;
                        break;
                    case 'banlist':
                        contentContainer.innerHTML = `
                        <p> Забанил... </p>
                        `;
                        break;
                    case 'votes':
                        contentContainer.innerHTML = `
                        <p> Выборы-выборы </p>
                        `;
                        break;
                    case 'tops':
                        contentContainer.innerHTML = `
                        <p> Ты в топе, всё норм </p>
                        `;
                        break;
                    default:
                        console.log('Unknown button:', buttonId);
                }
            }
        });
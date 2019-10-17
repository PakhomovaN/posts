console.log('worked');

const rootEl = document.getElementById('root');
// log (объекта console)
console.log(rootEl); // HTML Element'ы печатает в виде разметки
// dir (объекта console)
console.dir(rootEl);

const post = {
    id: 999,
    content: 'Первый пост в моей соц.сети',
    imageUrl: 'https://placekitten.com/300/300',
    likes: 0,
};

// большинство HTML Element'ов можно создавать через document.createElement
const postEl = document.createElement('div');

// большинство* свойств объектов кореллируют с атрибутами HTML Element'ов
// но не для всех (и не всегда)
postEl.className = 'card'; // className, classList (поработаем чуть позже)

// TODO: прописать условия на разные типы постов
const imgEl = document.createElement('img');
imgEl.src = post.imageUrl;
imgEl.className = 'card-img-top';
postEl.appendChild(imgEl);

const postBodyEl = document.createElement('div');
postBodyEl.className = 'card-body';
postEl.appendChild(postBodyEl);

const postContentEl = document.createElement('p');
postContentEl.textContent = post.content;
postBodyEl.appendChild(postContentEl);

const likesEl = document.createElement('button');
likesEl.className = 'btn btn-primary';
likesEl.textContent = '❤ ' + post.likes;
// function expression - объявление функции в виде выражения (не всплывает)
likesEl.onclick = function () {
    // замыкание (запоминаем лексическое окружение)
    post.likes = post.likes + 1;
    // свойства в DOM автоматически не обновляются
    likesEl.textContent = '❤ ' + post.likes;
    // Клик по ссылке приводит к скроллу вверх страницы (поэтому поменяли на кнопку)
};

// likes.onclick()

postBodyEl.appendChild(likesEl);

rootEl.appendChild(postEl);

// video
/*
const videoEl = document.createElement('video');
videoEl.controls = true; // здесь не пустой, а именно true
rootEl.appendChild(videoEl);
*/
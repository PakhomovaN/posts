console.log('worked');

const rootEl = document.getElementById('root');
console.log(rootEl); 
console.dir(rootEl);

const post = {
    id: 999,
    content: 'Первый пост в моей соц.сети',
    imageUrl: 'https://placekitten.com/300/300',
    likes: 0,
    dislikes: 0,
};

const postEl = document.createElement('div');

postEl.className = 'card'; 

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
likesEl.textContent = '👍 ' + post.likes;

likesEl.onclick = function () {
    post.likes = post.likes + 1;
    likesEl.textContent = '👍 ' + post.likes;
};

const dislikesEl = document.createElement('button');
dislikesEl.className = 'btn btn-primary';
dislikesEl.textContent = '👎 ' + post.dislikes;

dislikesEl.onclick = function () {
    post.dislikes = post.dislikes + 1;
    dislikesEl.textContent = '👎 ' + post.dislikes;
};
// likes.onclick()

postBodyEl.appendChild(likesEl);
postBodyEl.appendChild(dislikesEl);

rootEl.appendChild(postEl);

const secondPost = {
    id: 996,
    content: 'EXO - Tempo (cover by ACID Family)',
    audioUrl: 'https://www.youtube.com/watch?v=CcRJVBsBE1M',
    likes: 0,
    dislikes: 0,
};

const secondPostEl = document.createElement('div');

secondPostEl.className = 'card'; 

const audioEl = document.createElement('audio');
audioEl.controls = true; 
rootEl.appendChild(audioEl);

const secondPostBodyEl = document.createElement('div');
secondPostBodyEl.className = 'card-body';
secondPostEl.appendChild(secondPostBodyEl);

const secondPostContentEl = document.createElement('p');
secondPostContentEl.textContent = secondPost.content;
secondPostBodyEl.appendChild(secondPostContentEl);

const secondLikesEl = document.createElement('button');
secondLikesEl.className = 'btn btn-primary';
secondLikesEl.textContent = '👍 ' + secondPost.likes;

secondLikesEl.onclick = function () {
    secondPost.secondLikes = secondPost.secondLikes + 1;
    secondLikesEl.textContent = '👍 ' + secondPost.likes;
};

const secondDislikesEl = document.createElement('button');
secondDislikesEl.className = 'btn btn-primary';
secondDislikesEl.textContent = '👎 ' + secondPost.dislikes;

secondDislikesEl.onclick = function () {
    secondPost.secondDislikes = secondPost.secondDislikes + 1;
    secondDislikesEl.textContent = '👎 ' + secondPost.dislikes;
};
// likes.onclick()

secondPostBodyEl.appendChild(secondLikesEl);
secondPostBodyEl.appendChild(secondDislikesEl);

rootEl.appendChild(secondPostEl);

const thirdPost = {
    id: 986,
    content: 'EXO - Tempo (cover by ACID Family)',
    videoUrl: 'https://www.youtube.com/watch?v=CcRJVBsBE1M',
    likes: 0,
    dislikes: 0,
};

const thirdPostEl = document.createElement('div');

thirdPostEl.className = 'card';

const videoEl = document.createElement('video');
videoEl.controls = true; 
rootEl.appendChild(videoEl);

const thirdPostBodyEl = document.createElement('div');
thirdPostBodyEl.className = 'card-body';
thirdPostEl.appendChild(thirdPostBodyEl);

const thirdPostContentEl = document.createElement('p');
thirdPostContentEl.textContent = thirdPost.content;
thirdPostBodyEl.appendChild(thirdPostContentEl);

const thirdLikesEl = document.createElement('button');
thirdLikesEl.className = 'btn btn-primary';
thirdLikesEl.textContent = '👍 ' + thirdPost.likes;

thirdLikesEl.onclick = function () {
    thirdPost.secondLikes = thirdPost.likes + 1;
    thirdLikesEl.textContent = '👍 ' + thirdPost.likes;
};

const thirdDislikesEl = document.createElement('button');
thirdDislikesEl.className = 'btn btn-primary';
thirdDislikesEl.textContent = '👎 ' + thirdPost.dislikes;

thirdDislikesEl.onclick = function () {
    thirdPost.thirdDislikes = thirdPost.dislikes + 1;
    thirdDislikesEl.textContent = '👎 ' + thirdPost.dislikes;
};
// likes.onclick()

thirdPostBodyEl.appendChild(thirdLikesEl);
thirdPostBodyEl.appendChild(thirdDislikesEl);

rootEl.appendChild(thirdPostEl);

// video
/*
const videoEl = document.createElement('video');
videoEl.controls = true; // здесь не пустой, а именно true
rootEl.appendChild(videoEl);
*/
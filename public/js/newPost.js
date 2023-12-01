const postFormHandler = async (event) => {
    event.preventDefault();
    console.log('Hello?');

    const game = document.querySelector('#game-title').value;
    const genre = document.querySelector('#game-genre').value;
    const rating = document.querySelector('#game-rating').value;
    const video_embed = document.querySelector('#game-video').value;

    if (game && genre && rating && video_embed) {
        const response = await fetch('/api/posts', {
            method: 'POST',
            body: JSON.stringify({ game, genre, video_embed, rating }),
            headers: { 'Content-Type': 'application/json' },
        });
        if (response.ok) {
            document.location.replace('/dashboard');
        }
    }
}

document.querySelector('.newPostForm').addEventListener('submit', postFormHandler);

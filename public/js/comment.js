// Event Listner for adding comments
const commentFormHandler = async (event) => {
    event.preventDefault();

    const body = document.querySelector('#game-genre').value;
    const reaction = document.querySelector('#game-rating').value;
    
    if (body && reaction) {
        const response = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({ body, reaction }),
            headers: { 'Content-Type': 'application/json' },
        });
        if (response.ok) {
            document.location.reload();
        }
    }
};

document.querySelector('#comment-form').addEventListener('submit', commentFormHandler);
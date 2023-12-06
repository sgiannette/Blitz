async function getPostId(unicode, post_id) {
    console.log(unicode, post_id);
    const emoji = `&#x${unicode};`
    const res = await fetch("/api/comments", {
        method: "POST",
        body: JSON.stringify({ PostId: post_id, reaction: emoji }),
        headers: { "Content-Type": "application/json" }
    })
    if (res.ok) {
        location.reload()
    } else {
        alert(res.statusText)
    }

}
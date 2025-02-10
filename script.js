function generateEmbed() {
    let title = document.getElementById("title").value;
    let description = document.getElementById("description").value;
    let image = document.getElementById("image").value;
    let redirect = document.getElementById("redirect").value;

    // Encode data into a sharable URL
    let embedData = encodeURIComponent(btoa(JSON.stringify({ title, description, image, redirect })));

    // Generate the full link (hosted on GitHub Pages)
    let embedURL = `https://yourusername.github.io/discord-embed-gen/embed.html?data=${embedData}`;

    // Show the generated URL
    let outputLink = document.getElementById("output");
    outputLink.href = embedURL;
    outputLink.innerText = embedURL;
}

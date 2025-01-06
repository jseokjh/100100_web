function selectTab(tab) {
    // Clear selected class from all buttons
    document.getElementById('promotion-btn').classList.remove('selected');
    document.getElementById('playground-btn').classList.remove('selected');

    // Add selected class to clicked button
    if (tab === 'promotion') {
        document.getElementById('promotion-btn').classList.add('selected');
    } else {
        document.getElementById('playground-btn').classList.add('selected');
    }
}

const projectData = [
    {id: 1, meta: "web"},
    {id: 2, meta: "game"},
    {id: 3, meta: "ai"}
];

function filterContent(category) {

    const thumbnails = document.querySelectorAll(".thumbnail");

    thumbnails.forEach((thumbnail, index) => {

        const projectMeta = projectData[index].meta;

        if (projectMeta === category || category === "all") {
            thumbnail.style.display = "block";
        } else {
            thumbnail.style.display = "none";
        }
    });

}

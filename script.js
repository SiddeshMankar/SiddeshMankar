// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// AI Chatbot Toggle
document.getElementById("chatbot-toggle").addEventListener("click", () => {
    document.getElementById("chat-window").style.display = "block";
});
document.getElementById("close-chat").addEventListener("click", () => {
    document.getElementById("chat-window").style.display = "none";
});

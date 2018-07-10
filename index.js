var monster = document.getElementById("monster");
var msg = document.getElementById("msg");
var loading = document.getElementById("loading");
var heart = document.getElementById("heart");

monster.addEventListener("click", function () {
    msg.classList.remove("hide");

    setTimeout(popHeart, 2500);
});

function popHeart() {
    loading.classList.add("hide");
    heart.classList.remove("hide");
}

heart.addEventListener("click", function () {
    heart.classList.add("heart-active");
});

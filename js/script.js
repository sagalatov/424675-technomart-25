var link = document.querySelector(".write-us");
var popup = document.querySelector(".modal-feedback");
var close = document.querySelector(".modal-close");
var form = document.querySelector("form");
var login = document.querySelector("[name=user-name]");
var email = document.querySelector("[name=email]");
var isStorageSupport = true;
var storage = "";
var mapLink = document.querySelector(".contacts-button-map");
var mapPopup = document.querySelector(".modal-map");
var mapClose = document.querySelector(".modal-map .modal-close");
var buyLink = document.querySelectorAll(".buy");
var cartPopup = document.querySelector(".modal-cart");
var cartClose = document.querySelector(".modal-cart .modal-close");
var continueShopping = document.querySelector(".button-cart");

try {
    storage = localStorage.getItem("login");
} catch (err) {
    isStorageSupport = false;
}

link && link.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");

    if (storage) {
        login.value = storage;
        email.focus();
    } else {
        login.focus();
    }

    login.focus();

});

close && close.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup && popup.classList.remove("modal-show");
    popup && popup.classList.remove("modal-error");
})

form.addEventListener("submit", function(evt) {
    if (!login.value || !email.value) {
        evt.preventDefault();
        popup.classList.remove("modal-error");
        popup.offsetWidth = popup.offsetWidth;
        popup.classList.add("modal-error");
        console.log("Нужно ввести имя и email");
    } else {
        if (isStorageSupport) {
            localStorage.setItem("login", login.value);
        }
    }
});

window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
        if (popup && popup.classList.contains("modal-show")) {
            popup && popup.classList.remove("modal-show");
            popup && popup.classList.remove("modal-error");
        }
    }
});

mapLink && mapLink.addEventListener("click", function(evt) {
    evt.preventDefault();
    mapPopup.classList.add("modal-show");
});

mapClose && mapClose.addEventListener("click", function(evt) {
    evt.preventDefault();
    mapPopup && mapPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
        if (mapPopup && mapPopup.classList.contains("modal-show")) {
            mapPopup && mapPopup.classList.remove("modal-show");
        }
    }
});

for (var i = 0; i < buyLink.length; i++) {
    buyLink[i].addEventListener("click", function(evt) {
        evt.preventDefault();
        cartPopup.classList.add("modal-show");
    });
}

cartClose && cartClose.addEventListener("click", function(evt) {
    evt.preventDefault();
    cartPopup && cartPopup.classList.remove("modal-show");
});

continueShopping && continueShopping.addEventListener("click", function(evt) {
    evt.preventDefault();
    cartPopup && cartPopup.classList.remove("modal-show");
});

window && window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
        if (cartPopup && cartPopup.classList.contains("modal-show")) {
            cartPopup.classList.remove("modal-show");
        }
    }
});

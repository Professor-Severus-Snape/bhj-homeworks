"use strict";

const stars = Array.from( document.querySelectorAll(".star") );

stars.forEach( (star_1, index_1) => {
    star_1.onclick = function() {
        stars.forEach( (star_2, index_2) => {
            index_2 <= index_1 ? star_2.classList.add("star_active") : star_2.classList.remove("star_active");
        });
    }
});

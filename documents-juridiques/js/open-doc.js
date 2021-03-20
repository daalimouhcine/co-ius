
function openDoc(e) {
    const target = e.lastElementChild;
    target.classList.add("open-doc-up");
}

function closDoc(e) {
    const target = e.lastElementChild;
    target.classList.remove("open-doc-up");
}

function clickDoc(e) {
    const target = e.parentNode.parentNode.firstElementChild;
    const h = target.cloneNode(true);
    h.classList.add("iframe-width");

    const big = document.createElement("div");
    big.classList.add("pdf-big");

    const i = document.createElement('i');
    i.classList.add("fas");
    i.classList.add("fa-times");

    big.appendChild(h);
    big.appendChild(i);

    const body = document.querySelector("body");

    body.appendChild(big);


    document.querySelector(".fa-times").addEventListener("click",function(){
        this.parentNode.remove();
    })
}

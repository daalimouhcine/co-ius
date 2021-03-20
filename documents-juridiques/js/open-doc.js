

		var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
		if (isMobile) {
            const d = document.querySelectorAll(".display-pdf");
            for(var i = 0 ; i < d.length ; i++) {
                d[i].remove();
            }

            const e = document.querySelectorAll(".iframe-div");
            for(var i = 0 ; i < e.length ; i++) {
                const target = e[i].lastElementChild;
                target.classList.add("phon-open-doc-up");
            }
            

		} else {
			const d = document.querySelectorAll(".display-google");
            for(var i = 0 ; i < d.length ; i++) {
                d[i].remove();
                
            }
            function openDoc(e) {
                const target = e.lastElementChild;
                target.classList.add("open-doc-up");
            }
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


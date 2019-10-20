//@ts-check
javascript: (() => {
    window["list"] = () => {
        const elems = document.querySelectorAll(".card");
        const items = [];
        for( let i=0; i<elems.length; i++ ){
            const item = elems[i];
            const row = [
                item.querySelector(".card-title").textContent,
                item.querySelector(".card-text").textContent,
                item.querySelector("img") ? item.querySelector("img").getAttribute("src") : "",
                item.querySelector("a").getAttribute("href")
            ];
            items.push(row.join("\t"));
        }
        return items.join("\n");
    };
    console.log("call 'copy(list())'");
})()
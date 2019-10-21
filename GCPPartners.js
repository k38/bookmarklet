//@ts-check
javascript: (() => {
    window["list"] = () => {
        const elems = document.querySelectorAll(".card");
        const items = [];
        for( let i=0; i<elems.length; i++ ){
            const item = elems[i];
            const row = [
                item.querySelector("h3").textContent,
            ];
            items.push(row.join("\t"));
        }
        return items.join("\n");
    };
    console.log("call 'copy(list())'");
})()
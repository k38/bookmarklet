//@ts-check
javascript: (() => {
    window["list"] = () => {
        const elems = document.querySelectorAll(".item-list");
        const items = [];
        for( let i=0; i<elems.length; i++ ){
            const item = elems[i];
            const row = [
                item.querySelector(".company-name").textContent,
                item.querySelector(".time").textContent,
            ];
            items.push(row.join("\t"));
        }
        return items.join("\n");
    };
    console.log("call 'copy(list())'");
})()
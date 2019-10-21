//@ts-check
javascript: (() => {
    window["list"] = () => {
        const elems = document.querySelectorAll(".list");
        const items = [];
        for( let i=0; i<elems.length; i++ ){
            const item = elems[i];
            const row = [
                item.querySelector(".publisher a").textContent || "",
                item.querySelector(".linktarget a").textContent || "",
                item.querySelector(".linktarget a").getAttribute("href") || "",
                // item.querySelector(".date time").textContent || "",
                item.querySelector(".date").textContent || "",
            ];
            items.push(row.join("\t"));
        }
        return items.join("\n");
    };
    console.log("call 'copy(list())'");
})()
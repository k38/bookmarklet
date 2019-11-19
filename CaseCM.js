//@ts-check
javascript: (() => {
    window["list"] = () => {
        const elems = document.querySelectorAll(".mb0_sp .box");
        const items = [];
        const filter = (str) => {
            str = str.replace(/[ ,\t]/g, "");
            str = str.replace(/\n{2}/g, "\n");
            return str;
        };
        for( let i=0; i<elems.length; i++ ){
            const item = elems[i];
            const row = [
                filter(item.textContent)
            ];
            items.push(row.join("\t"));
        }
        return items.join("\n");
    };
    console.log("call 'copy(list())'");
})()
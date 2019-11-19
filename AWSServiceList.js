//@ts-check
// https://docs.aws.amazon.com/en_us/index.html
javascript: (() => {
    window["list"] = () => {
        const elems = document.querySelectorAll(".split-list");
        const items = [];
        for( let i=0; i<elems.length; i++ ){
            const item = elems[i];
            const row = [
                item.textContent
            ];
            items.push(row.join("\t"));
        }
        return items.join("\n");
    };
    console.log("call 'copy(list())'");
})()
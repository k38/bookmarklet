javascript: (() => {
    window.list = () => {
        const elems = document.querySelectorAll(".midashi a");
        const items = [];
        for( i=0; i<elems.length; i++ ){
            items.push([
                elems[i].href,
                elems[i].textContent.trim().split("\n").join("")
            ].join("\t"));
        }
        return items.join("\n");
    };
    console.log("call 'copy(list())'");
})()
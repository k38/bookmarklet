javascript: (() => {
    window["section"] = () => {
        return copy($$(".section__content").map(i => i.textContent).join("\n"));
    };
    console.log("call 'copy(section())'");
})()
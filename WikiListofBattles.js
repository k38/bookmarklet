javascript: (() => {
    window["list"] = () => {        
        const rows = $$(".wikitable tr");
        let lastlen = 0;
        let lastyear = "";
        let l = [];
        for( i=0; i<rows.length; i++ ){
            const r = rows[i];
            const c = $$("td", r);
            const a = $$("a", r);
            const img = $$(".thumbborder", r);
            const len = c.length;
            const lst = [];

            if ( len === 0 ){ lastlen = 0; continue; }
            if ( lastlen !== 0 && len === lastlen - 1 ) {
                lst.push(lastyear);
            } else {
                lastyear = c[0].textContent.trim().split("\n").join("");
                lastlen = len;
            }
            for( j=0; j<c.length; j++ ){
                lst.push(c[j].textContent.trim().split("\n").join(""));
            }
            lst.push(a[0].href);

            if ( lst.length === 5 ){ lst.splice(2,1) }
            if ( img && img[0] && img[0].src && img[0].alt ){ lst.push(img[0].alt || ""); lst.push(img[0].src || "") }

            l.push(lst.join("\t"));
        }
        return l.join("\n");
    };
    console.log("call 'copy(list())'");
})()

// $$(".wikitable tr").map(_ => $$("td", _).map(_ => _.textContent.trim()).join("\t")).join("\n")
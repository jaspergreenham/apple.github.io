var a=!1, c=!1, h = function(f, b) {
            for (var c in f)
                b.style[c] = f[c]
        }, d = function() {
            c=!1;
            var f = document.getElementById("BrowserBar");
            f && document.getElementsByTagName("body")[0].removeChild(f);
            f = document.createElement("div");
            h({
                display: "none",
                position: "absolute",
                height: "19px",
                fontSize: "14px",
                lineHeight: "1em",
                fontFamily: "Arial, sans-serif",
                color: "black",
                padding: "10px 0",
                top: "-40px",
                left: "0px",
                backgroundColor: "#FDF2AB",
                backgroundImage: "url(//updatemybrowser.org/warning.gif)",
                backgroundPosition: "10px center",
                backgroundRepeat: "no-repeat",
                borderBottom: "1px solid #A29330",
                width: "100%",
                textAlign: "left",
                cursor: "pointer",
                zoom: "1",
                zIndex: 9999,
                "-webkit-box-sizing": "content-box",
                "-moz-box-sizing": "content-box",
                "box-sizing": "content-box",
                overflow: "hidden"
            }, f);
            f.setAttribute("id", "BrowserBar");
            var b = document.createElement("p");
            h({
                margin: "0px 0px 0px 40px",
                padding: "0px",
                lineHeight: "1.5em"
            }, b);
            var a = document.createElement("a");
            a.href = "javascript:void(0);";
            a.title = "Don't show me this notification bar for the next 24 hours";
            a.onclick = function(b) {
                b || (b = window.event);
                b.cancelBubble=!0;
                b.stopPropagation && b.stopPropagation();
                UMB.Widget.hidePersistent(1);
                return !1
            };
            h({
                display: "block",
                width: "20px",
                height: "20px",
                margin: "0px 0px 0px 40px",
                padding: "0px",
                lineHeight: "1.5em",
                position: "absolute",
                top: "10px",
                right: "10px",
                backgroundImage: "url(//updatemybrowser.org/close.gif)",
                backgroundPosition: "0 0",
                backgroundRepeat: "no-repeat"
            }, a);
            f.appendChild(b);
            f.appendChild(a);
            document.getElementsByTagName("body")[0].appendChild(f)
        }, e = function() {
            var f =
            UMB.getStatus(), b = UMB.getBrowserInfo(UMB.getCurrentBrowser()), a = UMB.getCurrentVersion();
            if (f && b && a) {
                var d = document.getElementById("BrowserBar"), k = document.createElement("a");
                k.href = "https://www.whatbrowser.org";
                k.onclick = function() {
                    return !1
                };
                k.style.color = "#2183d0";
                k.style.fontWeight = "bold";
                k.target = "_blank";
                var e = "", g = "";
                "latest" == f ? (e = "You have the latest version of your browser installed (" + b.name + " " + a + "). ", k.style.color = "#00A651", k.appendChild(document.createTextNode("Learn more"))) : "update" ==
                f ? (e = "An update (" + b.name + " " + b.current + ") is available for your browser. Please ", k.appendChild(document.createTextNode("install this browser update")), g = ".") : "warning" == f && (e = "An important update (" + b.name + " " + b.current + ") is available for your browser. Please ", k.style.color = "#ED1C24", k.appendChild(document.createTextNode("install this critical browser update")), g = ".", c=!0);
                d.getElementsByTagName("p")[0].appendChild(document.createTextNode(e));
                d.getElementsByTagName("p")[0].appendChild(k);
                d.getElementsByTagName("p")[0].appendChild(document.createTextNode(g));
                document.getElementById("BrowserBar").onclick = function() {
                    window.open(k.href)
                }
            }
        }, g = function(f, b) {
            var c;
            window.getComputedStyle ? c = window.getComputedStyle(f)[b] : f.currentStyle && (c = f.currentStyle[b]);
            c || (c = f.style[b]);
            return c
        }, m = function(c, b, a, d, e, h, l) {
            "opacity" == b && m(c, "filter", 100 * a, d, e, "alpha(opacity=", ")");
            h = h || "";
            l = l || "";
            - 1 < "|top|marginTop|".indexOf(b) && (l = l || "px");
            var r = parseFloat(g(c, b).replace(h, "").replace(l, "")) || 0;
            if (0 == a.toString().indexOf("+") || 0 == a.toString().indexOf("-"))
                a = r + parseFloat(a);
            var p = 1 / (d / 10), n = 0, t = function(b) {
                return Math.round(100 * (r + (a - r) * (.5 - Math.cos(b * Math.PI) / 2))) / 100
            }, q = setInterval(function() {
                n += p;
                var a = t(n);
                c.style[b] = h + a + l;
                1 <= n && (clearInterval(q), a = t(1), c.style[b] = h + a + l, e && e())
            }, 10)
        }, p = function() {
            var a = document.getElementsByTagName("body")[0], b = document.getElementById("BrowserBar");
            if ("none" === g(b, "display") && (a.className += " umb-active", b.style.opacity = "0", b.style.filter = "alpha(opacity=0)", b.style.display = "block", m(b, "opacity", .95, 600), "ie" == UMB.getCurrentBrowser() &&
            "BackCompat" == document.compatMode ? (b.style.top = "0px", b.style.width = (document.documentElement.clientWidth || document.body.clientWidth) + "px") : (a.style.position = "relative", a.style.overflow = "visible", m(a, "top", "+40", 300), c || (UMB.attach(window, "resize", function() {
                b.style.width = (document.documentElement.clientWidth || document.body.clientWidth) + "px"
            }), b.style.width = (document.documentElement.clientWidth || document.body.clientWidth) + "px", b.style.top = "-" + (parseFloat(g(a, "marginTop")) + 40) + "px", b.style.left = "-" +
            parseFloat(g(a, "marginLeft")) + "px")), c))
                if ("ie" == UMB.getCurrentBrowser() && "BackCompat" == document.compatMode)
                    UMB.attach(window, "scroll", function() {
                        b.style.top = (document.documentElement.scrollTop || document.body.scrollTop) + (!b.offsetHeight && 0) + "px"
                    }), b.style.top = (document.documentElement.scrollTop || document.body.scrollTop) + (!b.offsetHeight && 0) + "px";
                else if ("ie" == UMB.getCurrentBrowser() && 6 >= UMB.getCurrentVersion()) {
                    UMB.attach(window, "resize", function() {
                        b.style.width = (document.documentElement.clientWidth ||
                        document.body.clientWidth) + "px"
                    });
                    b.style.width = (document.documentElement.clientWidth || document.body.clientWidth) + "px";
                    var d = parseFloat(g(a, "marginTop")) + 40;
                    b.style.top = "-" + d + "px";
                    b.style.left = "-" + parseFloat(g(a, "marginLeft")) + "px";
                    UMB.attach(window, "scroll", function() {
                        b.style.top = (document.documentElement.scrollTop || document.body.scrollTop) - d + "px"
                    });
                    b.style.top = (document.documentElement.scrollTop || document.body.scrollTop) - d + "px"
                } else
                    b.style.top = "0px", b.style.position = "fixed"
        

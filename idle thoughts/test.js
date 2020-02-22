var items = document.getElementsByTagName("*");
for (var i = items.length; i--;) {
      let el = items[i];
      let style = window.getComputedStyle(el)
      if (style["background-image"].startsWith("url")) {
           let link = style["background-image"]
           link = link.substring("url(".length, link.length - 1)
           if (link.includes(".jpg") && link.includes("preview")) {
               console.log(link)
      }
}
}
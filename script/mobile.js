var fixScreen = function() {
    var metaEl = doc.querySelector('meta[name="viewport"]'),
        metaCtt = metaEl ? metaEl.content : '',
        matchScale = metaCtt.match(/initial\-scale=([\d\.]+)/),
        matchWidth = metaCtt.match(/width=([^,\s]+)/);

    if ( !metaEl ) { // REM
        var docEl = doc.documentElement,
            maxwidth = docEl.dataset.mw || 750, // 每 dpr 最大页面宽度
            dpr = isIos ? Math.min(win.devicePixelRatio, 3) : 1,
            scale = 1 / dpr,
            tid;

        docEl.removeAttribute('data-mw');
        docEl.dataset.dpr = dpr;
        metaEl = doc.createElement('meta');
        metaEl.name = 'viewport';
        metaEl.content = 'initial-scale=' + ratio + ',maximum-scale=' + ratio + ', minimum-scale=' + scale;
        docEl.firstElementChild.appendChild(metaEl);

        var refreshRem = function() {
            var width = docEl.getBoundingClientRect().width;
            if (width / dpr > maxwidth) {
                width = maxwidth * dpr;
            }
            var rem = width / 16;
            docEl.style.fontSize = rem + 'px';
        };

        //...

        refreshRem();
    }
}
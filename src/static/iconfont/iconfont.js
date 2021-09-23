!(function (t) {
  var e,
    n,
    o,
    i,
    c,
    l =
      '<svg><symbol id="icon-home" viewBox="0 0 1024 1024"><path d="M946.5 505L560.1 118.8l-25.9-25.9c-12.3-12.2-32.1-12.2-44.4 0L77.5 505c-12.3 12.3-18.9 28.6-18.8 46 0.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8 12.1-12.1 18.7-28.2 18.7-45.3 0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204z m217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z"  ></path></symbol><symbol id="icon-user" viewBox="0 0 1024 1024"><path d="M486.4 563.2C331.1104 563.2 204.8 436.8896 204.8 281.6S331.1104 0 486.4 0 768 126.3104 768 281.6 641.6896 563.2 486.4 563.2z m0-512C359.3728 51.2 256 154.5728 256 281.6S359.3728 512 486.4 512 716.8 408.6272 716.8 281.6 613.4272 51.2 486.4 51.2zM896 1024h-819.2C34.4576 1024 0 989.5424 0 947.2c0-3.4816 0.7168-86.272 62.72-168.96 36.096-48.128 85.504-86.3744 146.8928-113.6128C284.5696 631.296 377.7024 614.4 486.4 614.4s201.8304 16.896 276.7872 50.2272c61.3888 27.2896 110.7968 65.4848 146.8928 113.6128C972.0832 860.928 972.8 943.7184 972.8 947.2c0 42.3424-34.4576 76.8-76.8 76.8z m-409.6-358.4c-178.5344 0-310.272 48.7936-380.9792 141.1072C52.4288 875.8784 51.2512 946.5856 51.2 947.3024a25.6 25.6 0 0 0 25.6 25.4976h819.2a25.6 25.6 0 0 0 25.6-25.6c0-0.6144-1.1776-71.3216-54.2208-140.4928C796.6208 714.3936 664.8832 665.6 486.4 665.6z" fill="" ></path></symbol><symbol id="icon-cart" viewBox="0 0 1024 1024"><path d="M384 768a64 64 0 1 0 0.032 128.032A64 64 0 0 0 384 768m320 0a64 64 0 1 0 0.032 128.032A64 64 0 0 0 704 768M312.672 512l-51.424-192h560.96l-51.456 192h-458.08z m583.36-224a32 32 0 0 0-32-32H244.064l-34.272-128H96.032v64h64.64L306.4 736H800v-64H355.52l-25.696-96h490.048l12.16-45.376 64-238.88-0.768-0.192c0.16-1.216 0.736-2.272 0.736-3.552z" fill="#181818" ></path><path d="M448 448h192v-64H448z" fill="#181818" ></path></symbol><symbol id="icon-order" viewBox="0 0 1024 1024"><path d="M320 480h384v-64H320z m0 128h256v-64H320z m0 128h256v-64H320z" fill="#181818" ></path><path d="M832 160H704V96H320v64H192c-19.2 0-32 12.8-32 32v704c0 19.2 12.8 32 32 32h640c19.2 0 32-12.8 32-32V192c0-19.2-12.8-32-32-32z m-448 0h256v64H384v-64z m416 704H224V224h96v64h384v-64h96v640z" fill="#181818" ></path></symbol></svg>',
    a = (a = document.getElementsByTagName('script'))[
      a.length - 1
    ].getAttribute('data-injectcss'),
    d = function (t, e) {
      e.parentNode.insertBefore(t, e);
    };
  if (a && !t.__iconfont__svg__cssinject__) {
    t.__iconfont__svg__cssinject__ = !0;
    try {
      document.write(
        '<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>',
      );
    } catch (t) {
      console && console.log(t);
    }
  }
  function h() {
    c || ((c = !0), o());
  }
  function s() {
    try {
      i.documentElement.doScroll('left');
    } catch (t) {
      return void setTimeout(s, 50);
    }
    h();
  }
  (e = function () {
    var t, e;
    ((e = document.createElement('div')).innerHTML = l),
      (l = null),
      (t = e.getElementsByTagName('svg')[0]) &&
        (t.setAttribute('aria-hidden', 'true'),
        (t.style.position = 'absolute'),
        (t.style.width = 0),
        (t.style.height = 0),
        (t.style.overflow = 'hidden'),
        (e = t),
        (t = document.body).firstChild ? d(e, t.firstChild) : t.appendChild(e));
  }),
    document.addEventListener
      ? ~['complete', 'loaded', 'interactive'].indexOf(document.readyState)
        ? setTimeout(e, 0)
        : ((n = function () {
            document.removeEventListener('DOMContentLoaded', n, !1), e();
          }),
          document.addEventListener('DOMContentLoaded', n, !1))
      : document.attachEvent &&
        ((o = e),
        (i = t.document),
        (c = !1),
        s(),
        (i.onreadystatechange = function () {
          'complete' == i.readyState && ((i.onreadystatechange = null), h());
        }));
})(window);

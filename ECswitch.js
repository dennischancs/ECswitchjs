/* ======================================================================
中英文切换显示，淡入淡出效果 frome LDOCE 5++
======================================================================= */

(function () {
        return jQuery;
})()

(function ($) {
    const E = '.en'; // 英文切换
	const C = '.cn'; // 中文切换

    (function init() {
        J(); // jQuery extend
		setTimeout(U, 0); //ECSetup
    })()

    function U() { //ECSetup
        if (L('.Entry .cn')) { //hasElement
            $('.Entry')
                .on('click', E
                    , function (event) {
                        $(this).children(C).T();
                    });
        }
    }

    var swt = 300;  // 切换时淡入淡出300ms
    function J() {  // jQuery extend
        $.fn.extend({
            S: function () { // show
                var d = (arguments.length > 0)
                    ? arguments[0] : swt;

                return this.each(function () {
                    if (d <= 0) {
                        $(this).show();
                    } else {
                        $(this)
                            .fadeIn({duration: d});
                     }
                });
            },
            H: function () { // hide
                var d = (arguments.length > 0)
                    ? arguments[0] : swt;

                return this.each(function () {
                    if (d <= 0) {
                        $(this).hide();
                    } else {
                        $(this)
                            .fadeOut({duration: d});
                    }
                });
            },
            T: function (option) {  // toggle
                return this.each(function (index, element) {
                    if ((typeof (option) != 'undefined') ? option : !$(this).is(":visible")) {
                        $(this).S();
                    } else {
                        $(this).H();
                    }
                });
            },
        });


    }

    function L(selector) { //hasElement
        return !!document.querySelector(selector);
    }
})
// 防抖全局计时器
let TT = null;    //time用来控制事件的触发
// 防抖函数:fn->逻辑 time->防抖时间
function debounce(fn, time) {
    if (TT !== null) clearTimeout(TT);
    TT = setTimeout(fn, time);
}

document.onkeydown = function (e) {
    if (123 == e.keyCode || (e.ctrlKey && e.shiftKey && (74 === e.keyCode || 73 === e.keyCode || 67 === e.keyCode)) || (e.ctrlKey && 85 === e.keyCode)) return btf.snackbarShow("不让看,嘿嘿"), event.keyCode = 0, event.returnValue = !1, !1
};//D:\hexoblog\themes\butterfly\layout\includes\layout.pug 8-25

// 复制提醒
document.addEventListener("copy", function () {
    debounce(function () {
            btf.snackbarShow("！复制成功，拿去狠狠的使用");
    }, 300);
})
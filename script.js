var _a, _b, _c;
var count = 0;
(_a = document.getElementById('increment-btn')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
    count++;
    updateCount();
});
(_b = document.getElementById('decrement-btn')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', function () {
    if (count > 0) {
        count--;
        updateCount();
    }
});
(_c = document.getElementById('reset')) === null || _c === void 0 ? void 0 : _c.addEventListener('click', function () {
    count = 0;
    updateCount();
});
function updateCount() {
    document.getElementById('count').innerText = count.toString();
}

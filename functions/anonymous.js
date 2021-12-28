var arr = [3, 2, 1, 3, 4, 5, 1, 2, 3, 4, 5, 7, 9];

function orderBy(x, y) { return x - y; }

arr.sort(orderBy);

arr.sort(function (x, y) { return x - y; });

arr.sort((x, y) => x - y);
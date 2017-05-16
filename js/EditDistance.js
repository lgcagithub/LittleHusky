function EditDistance(nWidth, nHeight) {
    this._reset(nWidth, nHeight);
}

EditDistance.prototype._reset = function(nWidth, nHeight) {
    var w = nWidth || 128;
    var h = nHeight || 128;
    var m = new Array(h * w);

    m[0] = 0;

    for (var index = 1; index < w; index++) {
        m[index] = index;
    }

    for (var index = 1; index < h; index++) {
        m[index * w] = index;
    }

    this._nWidth = w;
    this._nHeight = h;
    this._matrix = m;
}

EditDistance.prototype.distance = function(szStr1, szStr2) {
    var str1 = szStr1;
    var str2 = szStr2;

    if(str1 == null || str2 == null) return null;

    var len1 = str1.length;
    var len2 = str2.length;

    if(len1 != len2) {
        if(len1 == 0) return len2;
        if(len2 == 0) return len1;
    } else {
        if(len1 == 0) return 0;
    }

    if(len1 + 1 > this._nHeight || len2 + 1 > this._nWidth) {
        var h = len1 + 1 > this._nHeight ? this._nHeight << 1 : this._nHeight;
        var w = len2 + 1 > this._nWidth ? this._nWidth << 1 : this._nWidth;
        this._reset(w, h);
    }

    var matrix = this._matrix;
    var width = this._nWidth;
    var row = 0;
    var col = 0;
    var isNotEqual = 0;

    for (var index1 = 0; index1 < len1; index1++) {
        row = index1 + 1;
        for (var index2 = 0; index2 < len2; index2++) {
            col = index2 + 1;

            isNotEqual = str1[index1] == str2[index2] ? 0 : 1;

            matrix[row * width + col] = Math.min(
                matrix[row * width + col - 1] + 1,
                matrix[(row - 1) * width + col] + 1,
                matrix[(row - 1) * width + col - 1] + isNotEqual
            );
        }
    }

    return matrix[len1 * width + len2];
}

EditDistance.prototype.similarity = function(szStr1, szStr2) {
    var str1 = szStr1;
    var str2 = szStr2;

    if(str1 == null || str2 == null) return null;

    var maxLen = Math.max(str1.length, str2.length);
    if(maxLen == 0) return 1;

    //暂时过滤掉两字符串长度相差50%的情况，以后考虑开放出参数设置
    var len1 = str1.length;
    var len2 = str2.length;
    if(len1 > len2) {
        var tmp = len1;
        len1 = len2;
        len2 = tmp;
    }
    if(len1 / len2  < 0.5) return 0;

    return 1 - this.distance(str1, str2) / maxLen;
}

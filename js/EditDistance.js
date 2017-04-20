var width = 256;
var height = 256;
var editDistanceMatrix = new Array(height * width);

//初始化矩阵的工作做一次就好啦，没必要每次比较都开一个新数组
editDistanceMatrix[0] = 0;

for (var index = 1; index < width; index++) {
    editDistanceMatrix[index] = index;
}

for (var index = 1; index < height; index++) {
    editDistanceMatrix[index * width] = index;
}

function computeEditDistance(str1, str2) {
    if(str1 == null || str2 == null) return null;

    var len1 = str1.length;
    var len2 = str2.length;

    if(len1 != len2) {
        if(len1 == 0) return len2;
        if(len2 == 0) return len1;
    } else {
        if(len1 == 0) return 0;
    }

    // var width = len2 + 1;
    // var height = len1 + 1;
    // var editDistanceMatrix = new Array(height * width);

    // //初始化矩阵
    // editDistanceMatrix[0] = 0;

    // for (var index = 1; index <= len2; index++) {
    //     editDistanceMatrix[index] = index;
    // }

    // for (var index = 1; index <= len1; index++) {
    //     editDistanceMatrix[index * width] = index;
    // }

    var row = 0;
    var col = 0;
    var isNotEqual = 0;
    for (var index1 = 0; index1 < len1; index1++) {
        row = index1 + 1;
        for (var index2 = 0; index2 < len2; index2++) {
            col = index2 + 1;

            isNotEqual = str1[index1] == str2[index2] ? 0 : 1;

            editDistanceMatrix[row * width + col] = Math.min(
                editDistanceMatrix[row * width + col - 1] + 1,
                editDistanceMatrix[(row - 1) * width + col] + 1,
                editDistanceMatrix[(row - 1) * width + col - 1] + isNotEqual
            );
        }
    }

    return editDistanceMatrix[len1 * width + len2];
}

function computeSimilarity(str1, str2) {
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

    return 1 - computeEditDistance(str1, str2) / maxLen;
}
/**
 * @description 数据分组
 * @author lexy
 * @date 2014-03-1
 * @export
 * @param { array } array 需要进行分组的数据
 * @param { string } key 进行分组时依据的键名
 * @param { string } resKey 分组后数据的键名，默认为 list
 * @returns { array } 一维数组形式
 */
export function dataGroupingToArray(array, key, resKey = "list") {
	if (!key) return array;
    var aMap = [];
    var aResult = [];
    for (var i = 0; i < array.length; i++) {
        var item = array[i];
        if (aMap.indexOf(item[key]) === -1) {
            var oItem = {};
            oItem[resKey] = [item];
            oItem[key] = item[key];
            aResult.push(oItem);
            aMap.push(item[key]);
        } else {
            var index = aMap.indexOf(item[key]);
            aResult[index][resKey].push(item);
        }
    }
    return aResult;
}

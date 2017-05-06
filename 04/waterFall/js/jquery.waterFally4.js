$.fn.waterFally4 = function(obj){
	// 首先用 $.extend 拿到间距
	obj = $.extend({gap:20},obj)
	// 然后开始获取总宽度，和每行能放的个数
	var w = $(".items").width();
	var itemnum = $(".items").children().width()+obj.gap;
	var col = Math.floor(w/itemnum);
	var colh = [] // 定义变量，接收每列的高度
	// 遍历，将每个开始定位
	$(".items").children().each(function(index, e){
		if (index<col) {   // 说明是第一排的
			$(e).css({
				left:index*itemnum,
				top:0
			})
			colh[index] = $(e).height()+obj.gap  // 获得第一排每一列的高度
		}else{
			var min = colh[0];
			var h = 0    // 第 h 列
			for (var i = 0; i < colh.length; i++) {
				if (min>colh[i]) {
					min = colh[i]
					h = i
				}
			} // 此时得到了这一排的最小高度，及其所在的列
			$(e).css({
				left:h*itemnum,
				top:min
			})
			colh[h] += $(e).height()+obj.gap  // 也要改变此列的高度
		}
	})
	// 最后再将最大的高度赋值给父元素以便撑开
	var max = colh[0]
	for (var i = 0; i < colh.length; i++) {
		if (max<colh[i]) {
			max = colh[i]
		}
	}
	console.log(max)
	$(this).height(max)
}
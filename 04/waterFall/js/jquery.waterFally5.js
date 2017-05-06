$.fn.waterFally5 = function(obj){
	obj = $.extend({gap:20},obj)
	// 首先，得到宽度和每列的数量
	var w = $(this).width()
	var childw = $(this).children().width()+obj.gap
	var lienum = Math.floor(w/childw);
	var arr = []
	$(this).children().each(function(index,e){
		if (index<lienum) { // 说明是第一列
			$(e).css({
				left:childw*index,
				top:0
			})
			arr[index] = $(e).height()+obj.gap   // 将本列的高度放到数组里面
		}else{
			var min = arr[0]
			var minindex = 0
			for (var i = 0; i < arr.length; i++) {
				if (min>arr[i]) {
					min = arr[i]  // 记录最小列的高度和索引
					minindex = i
				}
			}
			$(e).css({
				top:min,
				left:minindex*childw
			})
			arr[minindex] += $(e).height() + obj.gap  // 高度重新计算 原来的高度加上这个新的 div的高度
		}
	})
	// 找到最大高度给父盒子
	var max = arr[0];
	for (var i = 0; i < arr.length; i++) {
		if (max<arr[i]) {
			max = arr[i]
		}
	}
	$(this).height(max)
}
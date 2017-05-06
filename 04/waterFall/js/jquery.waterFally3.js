$.fn.waterFally3 = function(obj){
	obj = $.extend(obj,{gap:20});
	var childw = $(this).children().width()+obj.gap
	var lienum = Math.floor($(this).width()/childw);  // 一行多少列，取整
	var col = []  // 用来记录每列的高度
	$(this).children().each(function(index,e){
		if (index<lienum) { // 这是第一排
			$(e).css({
				top:0,
				left:childw*index
			})
			// 并记录下该列的高度
			col[index] = $(e).height()+obj.gap
		}else{
			// 开始找到最短的那一列，往上加
			var min = col[0]     // 假设第一列就是最短的那一列
			var colindex = 0
			for (var i = 0; i < col.length; i++) {
				if (min>col[i]) {
					min=col[i];
					colindex = i   // 记录下这是第几列
				}
			}
			$(e).css({
				left:colindex*childw,
				top:min
			})
			// 然后要更新本列的高度  本列高度 = 之前的高度 + gap + 所添加的元素的高度
			col[colindex] += $(e).height()+obj.gap
		}
	})
	// 最后把最大的高度给父盒子，以便撑开
	var colmax = col[0];
	for (var i = 0; i < col.length; i++) {
		if (colmax<col[i]) {
			colmax=col[i]
		}
	}
	$(this).height(colmax)
}
$.fn.waterFally2 = function(obj){
	var data = { gap:20 }
	obj = $.extend(data,obj) // 若没有传值，则使用默认值
	var w = $(this).width();
	var itemw = $(this).children().width()+obj.gap
	var num = Math.floor(w/itemw) // 得到每一排的个数，并向下取整
	var column = [] // 存放每一列的高度
	$(this).children().each(function(index,e){
		if (index<num) {  // 这是第一排
			$(e).css({
				top: 0,
				left: itemw*index
			});
			column[index] = $(e).height()+obj.gap
		}else{
			var min = column[0];
			var lienum = 0;
			for (var i = 0; i < column.length; i++) {
				if (min>column[i]) {
					min=column[i]
					lienum = i
				}
			}
			$(e).css({
				top:column[lienum],
				left:lienum*itemw
			})
			column[lienum] += $(e).height()+obj.gap
		}
	})
	// 将整个高度给自己
	var max = column[0];
	for (var i = 0; i < column.length; i++) {
		if (max<column[i]) {
			max=column[i]
		}
	}
	$(this).height(max)
}
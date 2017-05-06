$.fn.waterFally1 = function(obj){
	var data = {gap:20}
	obj = $.extend(data,obj); // 如果没有值，就用默认值
	var w = $(this).width();
	// 每排可以放几个 ，向下取整，防止除不通
	var itemw = $(this).children().width()
	var itemn = Math.floor(w/itemw); 
	var colume = [];
	
	$(this).children().each(function(index,e){
		// 将第一排的全部拿出来，top为0
		if (index<itemn) {
			$(e).css({
				top: 0,
				left: (itemw+obj.gap)*index
			});
			colume[index] = $(e).height() // 并记录每一列的高度
		}else{
			// 找到最小高度的那一列
			var min = colume[0];
			var lie = 0;  // 记录最小高度的那一列，并在其下面添加下一个div
			for (var i = 0; i < colume.length; i++) {
				if (min>colume[i]) {
					min = colume[i];
					lie = i
				}
				console.log(lie)
			}
			$(e).css({
				top: min,
				left: (itemw+obj.gap)*lie
			})
			colume[lie] +=$(e).height()+data.gap // 列高 = 之前的高度 + 这个元素的高度 + gap
		}
	})

	// 获取最大的高度，给  继续加载  腾个位置，也是为了继续往后加载腾出地方
	var max = colume[0];
	for (var i = 0; i < colume.length; i++) {
		if (max<colume[i]) {
			max = colume[i];
		}
	}
	$(this).height(max)
}
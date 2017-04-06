
// 删除电影
$('.del').on('click',function(){
	var id = $(this).data('id');
	var tr = $(this).closest('tr');

	$.ajax({
		type:'DELETE',
		url: '/admin/movieDelete?id=' + id
	}).done(function(ret){
		if(ret && ret.msg){
			if(tr && tr.length>0){
				tr.remove();
			}
		}
	});
});

// 调用豆瓣接口 查询电影信息
$('#douban').blur(function() {
	var douban = $(this);
	var id = douban.val();
	if (id) {
		$.ajax({
			url: 'http://api.douban.com/v2/movie/subject/' + id,
			cache: true,
			type: 'get',
			dataType: 'jsonp',
			crossDomain: true,
			jsonp: 'callback',
			success: function(data) {
				console.log(data);
				$('#inputTitle').val(data.title);
				$('#inputDoctor').val(data.directors[0].name);
				$('#inputCountry').val(data.countries[0]);
				$('#inputLanguage').val(data.countries[0]);
				$('#inputPoster').val(data.images.large);
				$('#inputYear').val(data.year);
				$('#inputSummary').val(data.summary);
			}
		})
	}
})
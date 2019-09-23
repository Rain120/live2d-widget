const live2d_path = "https://cdn.jsdelivr.net/gh/rain120/live2d-widget/";

$("<link>").attr({ href: live2d_path + "cute-widget.css", rel: "stylesheet" }).appendTo("head");

$.ajax({
	url: live2d_path + "live2d.min.js",
	dataType: "script",
	cache: true
});

/**
  * modelId: 默认模型 ID -> 1
  * modelTexturesId: 默认材质 ID -> 53
  */
$.ajax({
  url: live2d_path + "cute-widget-tips.js",
  dataType: "script",
  cache: true,
  data: {
	  modelId: 2,
	  modelTexturesId: 53
	}
});

var data = document.getElementById('live2d-widget-lib').getAttribute('data');
var ret = {}
data.split('&').map(item => {
	var obj = item.split('=')
	ret[obj[0]] = obj[1]
})

$(window).on("load", function() {
	var modelId = ret['modelId'];
	var modelTexturesId = ret['modelTexturesId'];
	initModel(modelId, modelTexturesId)
  /** 
    * function name: initWidget(tips, api)
    * tips： tips
    * api: https://live2d.fghrsh.net/api
    * 参考：https://github.com/fghrsh/live2d_api
    */
	initWidget(live2d_path + "cute-widget-tips.json", "https://live2d.fghrsh.net/api");
});

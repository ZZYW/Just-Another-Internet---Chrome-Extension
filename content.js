
function changeText(){
	$("h1").html("无法显示此网页");
	$('error-code').html("DNS_PROBE_FINISHED_NXDOMAIN");
	$("#details-button").html("详细信息");
	$("button#reload-button").html("重新加载");
}
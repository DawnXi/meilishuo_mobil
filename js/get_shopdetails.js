$(function () {
	var shopimages=[];
	var imgs=$(".pic-list").children("img");
	for(i = 0; i < imgs.length; i++){
		shopimages.push('http://'+$(imgs[i]).attr("src"));
	}

	var sizeimages=[];
	var imgs2=$(".size-image").children("img");
	for(i = 0; i < imgs2.length; i++){
		sizeimages.push('http://'+$(imgs2[i]).attr("src"));
	}
	console.log(shopimages);
	console.log("shopimages end");
	console.log(sizeimages);
});
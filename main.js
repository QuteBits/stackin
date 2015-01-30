$(function(){ 
	create_hn();
});

function create_hn(){
	$('.hn_stories').html('');
	$.get("https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty",function(data,status){
	    for(var i = 0; i < data.length; i++){
	    	$.get("https://hacker-news.firebaseio.com/v0/item/"+data[i]+".json?print=pretty",function(data_item,status_item){
	    		$('.hn_stories').append(template_hn_story(data_item.title, data_item.id, data_item.url, data_item.score));
			});
	    }
  	});
}

function template_hn_story(title, id, url, score){
	var url_comments = 'https://news.ycombinator.com/item?id=' + id;
	if(!url){ url = url_comments; url_comments = ''; }
	var score_int = parseInt(score);
	//console.log(score_int);
  	if(score_int > 255) { score_int = 255; }
	var result =    '<div class="hn_story" style="background-color: rgb('+score_int+',50,50);">' +
						//'<div class="hn_story_score">' + score + '</div>' + 
			    		'<div class="hn_story_title">' + 
			    			'<a target="_blank" href="' + url + '">' + title + '</a>' + 
			    		'</div>';
	if(url_comments != ''){
		result +=	'<div class="hn_story_comments">' +
			    			'<a target="_blank" href="https://news.ycombinator.com/item?id=' + id + '">comments</a>' +
			    		'</div>';
		result +=  	'</div>';
	}
	return result;
}
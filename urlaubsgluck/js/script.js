document.addEventListener('DOMContentLoaded', function() {
	var divMasonryGrid = document.createElement('div');
	divMasonryGrid.setAttribute('class', 'masonryGrid');

	var links = ['img/sport.jpg', 'img/wellness.jpg', 'img/extreme.jpg', 'img/games.jpg',
	'img/culture.jpg', 'img/relaxation.jpg', 'img/travelling.jpg'];
	var names = ['Sport and Activity', 'Wellnes and Health', 
	'Extreme Sports<br> and Expeditions', 'Games', 'Culture and Education', 
	'Relaxation', 'Travelling'];

	for (k = 0; k <= 6; k++) {


		var divMasonryGrid__item = document.createElement('div');
		divMasonryGrid__item.setAttribute('class', 'masonryGrid__item');



		var masonryGrid__img = document.createElement('img');
		masonryGrid__img.setAttribute('class', 'masonryGrid__img'  + ' ' 
			+ 'masonryGrid__img' + '--' + k);
		masonryGrid__img.setAttribute('src', links[k]);


		var masonryGrid__link = document.createElement('a');
		masonryGrid__link.setAttribute('class', 'masonryGrid__link');
		if (k == 2) {
			masonryGrid__link.setAttribute('class', 'masonryGrid__link' + ' '
				+ 'masonryGrid__link' + '--' + k);
		};
		masonryGrid__link.setAttribute('href', '#')
		masonryGrid__link.innerHTML = names[k];

		divMasonryGrid__item.appendChild(masonryGrid__link);   
		divMasonryGrid__item.appendChild(masonryGrid__img);

		divMasonryGrid.appendChild(divMasonryGrid__item);

	};


	console.log(divMasonryGrid);
	var parent = document.getElementsByClassName('holidayIdeas');
	var drop = document.getElementById('dropZone');
	parent[0].insertBefore(divMasonryGrid, drop);



});
$('.masonryGrid').masonry({
  columnWidth: 300,
  itemSelector: '.masonryGrid__item'
});

$(function() {
	$.ajax({
		url: 'pixabay.com/api/?key=7161611-d63bfa7b7243fea35e444bf57&q=yellow+flowers&image_type=photo',
		method: 'GET',
		success: function (hits) {
			console.log(hits.webformatURL);
			console.log('hello');
		}
	})
});




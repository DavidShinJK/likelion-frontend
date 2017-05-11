(function(global) {
  'use strict';
  var music_src = [
        'cheeze__mood_indigo.mp3',
        "cigarettes_after_sex__i'm_a_firefighter.mp3",
        'emily_king__distance.mp3',
        'honne__good_together.mp3',
        'st_vincent__rattlesnake.mp3',
        'tycho__awake.mp3'
      ],
      music_info = [
        { 'artist': 'CHEEZE',
          'song': 'Mood Indigo'},
        { 'artist': 'Cigarettes After Sex',
          'song': "I'm a Firefighter"},
        { 'artist': 'Emily King',
          'song': 'Distance'},
        { 'artist': 'HONNE',
          'song': 'Good Together'},
        { 'artist': 'St Vincent',
          'song': 'Rattlesnake'},
        { 'artist': 'Tycho',
          'song': 'Awake'}
      ],
      album_cover = [
        'cheeze__mood_indigo.jpg',
        "cigarettes_after_sex__i'm_a_firefighter.jpg",
        'emily_king__distance.jpg',
        'honne__good_together.jpg',
        'st_vincent__rattlesnake.jpg',
        'tycho__awake.jpg'
      ],
      title = document.querySelector('.title'),
      music_list = document.querySelector('.music__list'),
      button = document.querySelector('button'),
      audio = document.querySelector('audio');

  function createMusicItem(info, cover, idx) {
    var item = document.createElement('li'),
        img = document.createElement('img'),
        title = document.createElement('h4'),
        artist = document.createElement('p');
    // src
    img.setAttribute('src', 'assets/img/' + cover);
    // text
    title.innerHTML = info.song;
    artist.innerHTML = info.artist;
    // set class
    item.setAttribute('class', 'music__item');
    img.setAttribute('class', 'music__album');
    title.setAttribute('class', 'music__title');
    artist.setAttribute('class', 'music__desc');
    // assemble HTML
    item.appendChild(img);
    item.appendChild(title);
    item.appendChild(artist);

    item.addEventListener('click', function() {
    	playMusic(idx);
    });
    return item;
  }

  function playMusic(data) {
  	audio.setAttribute('src', 'assets/music/' + music_src[data]);
  	audio.play();
  }

  function loadMusic(idx) {
  	var item = createMusicItem(music_info[idx], album_cover[idx], idx);
  	music_list.appendChild(item);
  }

  button.addEventListener('click', function() {
  	TweenLite.to(this, 0.5, {
  		autoAlpha: 0,
  	});
  	TweenLite.fromTo(title, 1, {
  		opacity: 0,
  		y: -10
  	}, {
  		opacity: 1,
  		y: 0
  	});

    music_src.forEach(function(item, idx) {
    	loadMusic(idx);
    });

    var items = document.querySelectorAll('.music__item'),
        tl = new TimelineLite();
    tl.staggerFromTo(items, 0.5, {
    	autoAlpha: 0,
    	y: 10
    }, {
    	autoAlpha: 1,
    	y: 0
    }, 0.3);
  });
})(window);
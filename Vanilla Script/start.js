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
    // Write your code
  }

  function playMusic(data) {
  	// Write your code
  }

  function loadMusic(idx) {
    // Write your code
  }

  button.addEventListener('click', function() {
    music_src.forEach(function(item, idx) {
    	loadMusic(idx);
    });
  });
})(window);
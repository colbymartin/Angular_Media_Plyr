(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
let app = angular.module('MediaPlayer', []);

app.controller('SongController', function ($scope) {


    $scope.nowPlaying = {
        title: 'No Current Song',
        artist: 'Artist',
        cover: 'http://i.imgur.com/nszu54A.jpg',
    };

    $scope.songs = [
        {title: 'Be Still', artist: "The Killers", album: "Battle Born", durationMin: 4, durationSec: 33, playing: false, cover: 'https://upload.wikimedia.org/wikipedia/en/2/22/The_Killers_-_Battle_Born.png'},
        {title: 'Acrobat', artist: "U2", album: "Achtung Baby", durationMin: 4, durationSec: 30, playing: false, cover: 'https://upload.wikimedia.org/wikipedia/en/7/72/Achtung_Baby.png'},
        {title: 'Heavy Things', artist: "Phish", album: "Farmhouse", durationMin: 4, durationSec: 16, playing: false, cover: 'https://images-na.ssl-images-amazon.com/images/I/61dx5uU0gRL._SY300_.jpg'},
        {title: 'Original of the Species', artist: "U2", album: "How to Dismantle an Atomic Bomb", durationMin: 4, durationSec: 41, playing: false, cover: 'https://upload.wikimedia.org/wikipedia/en/9/99/U2_-_How_to_Dismantle_an_Atomic_Bomb_%28Album_Cover%29.png'},
        {title: 'Friend of the Devil', artist: "The Grateful Dead", album: "American Beauty", durationMin: 3, durationSec: 22, playing: false, cover: 'https://upload.wikimedia.org/wikipedia/en/6/6a/Grateful_Dead_-_American_Beauty.jpg'},
        {title: 'River', artist: "Leon Bridges", album: "Coming Home", durationMin: 3, durationSec: 59, playing: false, cover: 'http://floodmagazine.com/wp-content/uploads/2015/06/LeonBridges_ComingHome-300x300.jpg'},
        {title: 'Same Drugs', artist: "Chance the Rapper", album: "Coloring Book", durationMin: 4, durationSec: 18, playing: false, cover: 'https://upload.wikimedia.org/wikipedia/en/c/c4/Chance_the_Rapper_-_Coloring_Book.png'},
        {title: "The Lion's Roar", artist: "First Aid Kit", album: "The Lion's Roar", durationMin: 5, durationSec: 07, playing: false, cover: 'http://e.snmc.io/lk/f/l/5379cc08aaca08c38a574fa3bc6d0859/3953752.jpg'},
        {title: 'Confusion', artist: "Charles Bradley", album: "Victim of Love", durationMin: 3, durationSec: 29, playing: false, cover: 'https://images-na.ssl-images-amazon.com/images/I/51CnlUv9OIL._SY300_.jpg'},
        {title: 'Jungleland', artist: "Bruce Springsteen", album: "Born to Run", durationMin: 9, durationSec: 36, playing: false, cover: 'http://ultimateclassicrock.com/files/2013/01/born-to-run-cover-300x300.jpg'},
        {title: 'Out of Control', artist: "U2", album: "Boy", durationMin: 4, durationSec: 14, playing: false, cover: 'https://upload.wikimedia.org/wikipedia/en/1/15/U2_Boy.png'},
        {title: 'Halo(Dissapear/Reappear)', artist: "Noah Gundersen", album: "Carry the Ghost", durationMin: 3, durationSec: 55, playing: false, cover: 'https://i.scdn.co/image/6a70babe0d77e4d49fc497df923c80049c5b70cf'},
    ];
    $scope.playSong = function (song) {
        if ($scope.nowPlaying === song) {
            song.playing = false;
            $scope.nowPlaying.playing = false;
        } else {
            $scope.nowPlaying.playing = false;
            song.playing = true;
            $scope.nowPlaying = song;
        }
    }
});
},{}]},{},[1]);

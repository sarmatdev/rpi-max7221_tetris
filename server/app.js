const express = require('express');
const socketio = require('socket.io');

const Game = require('./game');

const Max7219 = require('max7219-display');

const m = new Max7219({
  device: '/dev/spidev0.0',
  controllerCount: 1,
  flip: 'both'
});

const hello = [
  [0, 0, 0, 0, 1, 1, 0, 0],
  [0, 1, 1, 0, 0, 0, 1, 0],
  [0, 1, 1, 0, 0, 0, 0, 1],
  [0, 0, 0, 0, 0, 0, 0, 1],
  [0, 0, 0, 0, 0, 0, 0, 1],
  [0, 1, 1, 0, 0, 0, 0, 1],
  [0, 1, 1, 0, 0, 0, 1, 0],
  [0, 0, 0, 0, 1, 1, 0, 0]
];

const lose = [
  [0, 0, 0, 0, 0, 0, 1, 1],
  [0, 1, 1, 0, 0, 1, 0, 0],
  [0, 1, 1, 0, 1, 0, 0, 0],
  [0, 0, 0, 0, 1, 0, 0, 0],
  [0, 0, 0, 0, 1, 0, 0, 0],
  [0, 1, 1, 0, 1, 0, 0, 0],
  [0, 1, 1, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 1, 1]
];

async function init() {
  await m.reset(0);
  await m.set(0, lose);
  await m.setIntensity(0, 1);
  console.log('Start...');
}

init();

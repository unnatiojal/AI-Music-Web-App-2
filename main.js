song1 = "";
song2 = "";
function preload() {
    song1 = loadSound("Kasoor-Prateek Kuhad.mp3");
    song2 = loadSound("The Chainsmokers & Coldplay - Something Just Like This .mp3");
}

function setup() {
    canvas = createCanvas(550, 450);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 0, 0, 550, 450);
}

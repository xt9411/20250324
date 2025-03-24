let button1, button2, button3;
let all1, all2, all3;
let currentSprite = null;
let frameIndex = 0;
let frameRate = 10; // 每秒顯示的幀數
let iframe;

function preload() {
  // 預載圖片精靈
  all1 = loadImage('all1.png');
  all2 = loadImage('all2.png');
  all3 = loadImage('all3.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  // 點擊螢幕空白處時關閉 iframe
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.mousePressed(() => {
    if (iframe) {
      iframe.remove();
      iframe = null;
    }
  });

  // 第一個按鈕
  button1 = createButton('學校網頁');
  button1.position(50, 50);
  button1.size(100, 50);
  button1.style('font-size', '20px');
  button1.mouseOver(() => {
    currentSprite = { image: all1, frames: 7, width: 940, height: 71 };
    frameIndex = 0;
  });
  button1.mouseOut(() => {
    currentSprite = null;
  });
  button1.mousePressed(() => {
    // 關閉前一個 iframe
    if (iframe) {
      iframe.remove();
      iframe = null;
    }
    // 顯示新的 iframe
    iframe = createElement('iframe');
    iframe.attribute('src', 'https://xt9411.github.io/20250317/');
    iframe.style('position', 'absolute');
    iframe.style('top', '15%');
    iframe.style('left', '15%');
    iframe.style('width', '70%');
    iframe.style('height', '70%');
    iframe.style('border', '2px solid black');
    iframe.style('z-index', '1000');
  });

  // 第二個按鈕
  button2 = createButton('作品-測驗');
  button2.position(180, 50);
  button2.size(100, 50);
  button2.style('font-size', '20px');
  button2.mouseOver(() => {
    currentSprite = { image: all2, frames: 11, width: 677, height: 70 };
    frameIndex = 0;
  });
  button2.mouseOut(() => {
    currentSprite = null;
  });
  button2.mousePressed(() => {
    // 關閉前一個 iframe
    if (iframe) {
      iframe.remove();
      iframe = null;
    }
    // 顯示新的 iframe
    iframe = createElement('iframe');
    iframe.attribute('src', 'https://xt9411.github.io/20250310/');
    iframe.style('position', 'absolute');
    iframe.style('top', '15%');
    iframe.style('left', '15%');
    iframe.style('width', '70%');
    iframe.style('height', '70%');
    iframe.style('border', '2px solid black');
    iframe.style('z-index', '1000');
  });

  // 第三個按鈕
  button3 = createButton('筆記');
  button3.position(310, 50);
  button3.size(100, 50);
  button3.style('font-size', '20px');
  button3.mouseOver(() => {
    currentSprite = { image: all3, frames: 7, width: 450, height: 84 };
    frameIndex = 0;
  });
  button3.mouseOut(() => {
    currentSprite = null;
  });
  button3.mousePressed(() => {
    // 關閉前一個 iframe
    if (iframe) {
      iframe.remove();
      iframe = null;
    }
    // 顯示新的 iframe
    iframe = createElement('iframe');
    iframe.attribute('src', 'https://hackmd.io/@nn8HNOmOTcGYy2MQDnIFYg/SJL_derh1e');
    iframe.style('position', 'absolute');
    iframe.style('top', '15%');
    iframe.style('left', '15%');
    iframe.style('width', '70%');
    iframe.style('height', '70%');
    iframe.style('border', '2px solid black');
    iframe.style('z-index', '1000');
  });
}

function draw() {
  background(220);

  // 顯示圖片精靈動畫
  if (currentSprite) {
    let frameWidth = currentSprite.width / currentSprite.frames;
    let sx = frameIndex * frameWidth; // 計算當前幀的 x 起點

    // 計算放大後的寬高
    let scaledWidth = frameWidth * 1.5; // 寬放大 50%
    let scaledHeight = currentSprite.height * 1.5; // 高放大 50%

    image(
      currentSprite.image,
      50, 150, // 顯示位置 (向下移動 100)
      scaledWidth, scaledHeight, // 顯示大小 (放大 50%)
      sx, 0, // 圖片裁剪起點
      frameWidth, currentSprite.height // 圖片裁剪大小
    );

    // 更新幀數
    if (frameCount % Math.round(60 / frameRate) === 0) {
      frameIndex = (frameIndex + 1) % currentSprite.frames;
    }
  }
}

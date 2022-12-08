const playBtn = document.querySelector("#playBtn");
const pause = document.querySelector("#pause");
const play = document.querySelector("#play");
const topCircle = document.querySelector("#topCircle");
const audio = document.querySelector("#audio");

let playing = false;

playBtn.onclick = () => {
  if (!playing) {
    play.style.opacity = '0';
    pause.style.opacity = '1';
    topCircle.style.width = '0';
    topCircle.style.height = '0';

    setTimeout(() => {
      topCircle.style.display = 'none';
    }, 500);

    audio.src = 'http://complex.in.ua:80/yantarne';
    audio.play();


    // Visualizer
    const context = new AudioContext(); // (Interface) Audio-processing graph
    const src = context.createMediaElementSource(audio); // Give the audio context an audio source,
    // to which can then be played and manipulated
    const analyser = context.createAnalyser(); // Create an analyser for the audio context
    analyser.fftSize = 256;
    src.connect(analyser); // Connects the audio context source to the analyser
    analyser.connect(context.destination); // End destination of an audio graph in a given context

    const bufferLength = analyser.frequencyBinCount;

    const dataArray = new Uint8Array(bufferLength); // Converts to 8-bit unsigned integer array
    // At this point dataArray is an array with length of bufferLength but no values

    const canvas = document.querySelector(".visualizer");
    const WIDTH = canvas.width;
    const HEIGHT = canvas.height;
    const ctx = canvas.getContext("2d");

    const barWidth = (WIDTH / bufferLength) * 5;

    let barHeight;
    let x = 0;

    function renderFrame() {
      requestAnimationFrame(renderFrame); // Takes callback function to invoke before rendering

      x = 0;

      analyser.getByteFrequencyData(dataArray); // Copies the frequency data into dataArray
      // Results in a normalized array of values between 0 and 255
      // Before this step, dataArray's values are all zeros (but with length of 8192)

      ctx.fillStyle = "#fff"; // Clears canvas before rendering bars (black with opacity 0.2)
      ctx.fillRect(0, 0, WIDTH, HEIGHT); // Fade effect, set opacity to 1 for sharper rendering of bars

      let bars = 30 // Set total number of bars you want per frame

      for (let i = 0; i < bars; i++) {
        barHeight = (dataArray[i] * 0.5);

        ctx.fillStyle = `#F3354C`;
        ctx.fillRect(x, (HEIGHT - barHeight), barWidth, barHeight);

        x += barWidth + 3; // Gives 3px space between each bar
      }
    }

    renderFrame();

    playing = true;
  } else {
    play.style.opacity = '1';
    pause.style.opacity = '0';
    topCircle.style.display = 'flex';

    setTimeout(() => {
      topCircle.style.width = '246px';
      topCircle.style.height = '246px';
    }, 10);

    audio.src = '';

    setTimeout(() => {
      window.location.reload();
    }, 1000);

    playing = false;
  }
}
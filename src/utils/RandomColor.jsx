export default function RandomColor() {
  const randomColor = `rgb(${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)})`;

  document.body.style.backgroundColor = randomColor;
  document.getElementById("new-quote").style.backgroundColor = randomColor;

  const rgb = randomColor.match(/\d+/g);
  const luminance = (rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1000;

  const textColor = randomColor;

  const bgColor = luminance > 128 ? "rgb(0, 0, 0)" : "rgb(255, 255, 255)"; 
  document.getElementById("quote-box").style.backgroundColor = bgColor;

  const elementsId = ["text", "author", "tweet-quote", "github"];
  elementsId.forEach((id) => {
    const element = document.getElementById(id);
    if (element) {
      element.style.color = textColor;
    }
  });
}

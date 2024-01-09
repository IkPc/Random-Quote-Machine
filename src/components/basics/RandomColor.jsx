export default function RandomColor() {
  const randomColor = `rgb(${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)})`;

  document.body.style.backgroundColor = randomColor;
  document.getElementById("new-quote").style.backgroundColor = randomColor;

  const elementsId = ["text", "author", "tweet-quote", "github"];

  elementsId.forEach((id) => {
    const element = document.getElementById(id);
    if (element) {
      element.style.color = randomColor;
    }
  });
}

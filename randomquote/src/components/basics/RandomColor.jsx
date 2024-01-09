export default function RandomColor() {
    const randomColor = document.body.style.backgroundColor = `rgb(${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)})`;
  
    document.body.style.backgroundColor = randomColor;
    document.getElementById("new-quote").style.backgroundColor = randomColor;
  
    const computedColor = getComputedStyle(document.body).backgroundColor;
    const elementsId = ["text", "author", "tweet-quote", "github"];
  
    elementsId.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        element.style.color = randomColor;
      }
    });
  }
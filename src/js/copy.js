function copyText() {
    var text = "aneeshkhunteta@gmail.com";

    try {
      navigator.clipboard.writeText(text)
      .then(()=>{
       // alert('Text copied to clipboard!');
        this.toggleColor();
    })
      .catch(()=>console.error('Could not copy text: ', err));
    } catch (err) {
      console.error('Oops, unable to copy: ', err);
    }
  }
function toggleColor() {
    var button = document.getElementById("copy-btn");
    button.textContent = "\u2714 Copied";
    if (button.classList.contains("green")) {
        button.classList.remove("green");
        button.classList.add("red");
    } else {
        button.classList.remove("red");
        button.classList.add("green");
    }
  }
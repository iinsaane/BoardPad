function sendMessage() {
  const message = document.getElementById("message").value;
  const title = document.getElementById("title").value;
  if (message.length > 0 && title.length > 0) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        console.log(this.responseText);
        document.getElementById("message").value = "";
        getMessages();
      }
    };
    xmlhttp.open(
      "GET",
      `https://palasan.ro/boardpad/api/getMessages.php?title=${title}&message=${message}`,
      true
    );
    xmlhttp.send();
  } else {
    alert("Please enter a title and message");
  }
}

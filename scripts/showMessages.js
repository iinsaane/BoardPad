function getMessages() {
  //make ajax call to get messages
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      var messages = JSON.parse(this.responseText);
      messages = messages.messages;
      //console.log(messages);
      var messageList = document.getElementById("messageList");
      messageList.innerHTML = "";
      for (var i = 0; i < messages.length; i++) {
        //console.log(messages[i]);
        var message = messages[i];
        var li = document.createElement("li");
        li.innerHTML = `<div class="row">
                <div class="col-sm-12">
                  <div class="row">
                    <div class="col-sm-12">
                      <div class="card">
                        <div class="card-body">
                          <h5 class="card-title">
                            <a href="#">${message.title}</a>
                          </h5>
                          <p class="card-text">
                            ${message.message}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>`;
        messageList.appendChild(li);
      }
    }
  };
  xmlhttp.open("GET", `https://palasan.ro/boardpad/api/getMessages.php`, true);
  xmlhttp.send();
}

//make a function that calls getMessages() every 30 seconds
function showMessages() {
  getMessages();
  setTimeout(showMessages, 25000);
}
showMessages();
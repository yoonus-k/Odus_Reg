(function start() {
  // check the odus url
  let odus_active = document.querySelector(".active");
  let odus_NotActive = document.querySelector(".notActive");
  let odus_NotActive_Time_Left = document.querySelector("#time-left");
  let time_left_Inseconds = document.querySelector(".time-left");

  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    let patt = "/*.P_AltPin/*";
    let patt2 = "/*.P_Regs/*";
    //!(tabs[0].url.match(patt) || tabs[0].url.match(patt2))
    if (!(tabs[0].url.match(patt) || tabs[0].url.match(patt2))) {
      odus_active.style.display = "none";
      odus_NotActive.style.display = "block";
      odus_NotActive_Time_Left.style.display = "none";
    } else {
      odus_active.style.display = "block";
      odus_NotActive.style.display = "none";
      odus_NotActive_Time_Left.style.display = "block";
    }
  });

  // assign keys
  let keys = [];

  let submit = document.querySelector(".submit");
  let save = document.querySelector(".save");
  let clear = document.querySelector(".clear");
  let get = document.querySelector(".getStorage");
  // fetch courses from memory

  chrome.storage.sync.get(["keys"]).then((result) => {
    if (result.keys != null) {
      for (let index = 0; index < result.keys.length; index++) {
        document.getElementById(`input${index + 1}`).value = result.keys[index];
      }
    }
  });

  // auto submit code
  submit.addEventListener("click", function () {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      for (let index = 0; index < 8; index++) {
        if (
          document.getElementById(`input${index + 1}`).value.length < 5 ||
          document.getElementById(`input${index + 1}`).value == ""
        ) {
          continue;
        } else {
          keys.push(document.getElementById(`input${index + 1}`).value);
        }
      }
      // code to wait the timer to come ()reg Time)
      assign_Time();
      function assign_Time(params) {
        const regTime = document.querySelector(".timer").value;
        if (regTime == "") {
          start_Assign();
        } else {
          let [h, m, s] = regTime.split(":");
          var now = new Date();
          var millisTill10 =
            new Date(
              now.getFullYear(),
              now.getMonth(),
              now.getDate(),
              h,
              m,
              s,
              0
            ) - now;
          if (millisTill10 < 0) {
            millisTill10 += 86400000; // it's after 10am, try 10am tomorrow.
          }
          // disply the time left bottom
          time_left_Inseconds.classList.remove("time-left");
          // count down
          setInterval(() => {
            refreshTime_popup(millisTill10);
            millisTill10 = millisTill10 - 10;
          }, 10);
          setTimeout(function () {
            console.log("it's the time !");
            start_Assign();
          }, millisTill10);
        }
      }

      // code for checking if the feild is on the dom for courses
      //----------------------------------------------------------

      function start_Assign() {
        let time = Date.now();
        check();

        function check() {
          chrome.tabs
            .sendMessage(tabs[0].id, { action: "check" })
            .then(function (response) {
              if (response.status == "success") {
                time = Date.now() - time;
                console.log("returned after: " + time);

                assign(keys);
              } else {
                console.log("failed");
                let reloading = chrome.tabs.reload(tabs[0].id);
                reloading.then(onReloaded);
                function onReloaded() {
                  setTimeout(() => check(), 1000);
                }
              }
            });
        }

        //----------------------------------------------------------

        function assign() {
          chrome.tabs.sendMessage(
            tabs[0].id,
            { action: "assign", keys: keys },
            function (response) {
              if (response.status) {
                console.log("success");
                odus_active.style.display = "none";
                check_Mark_Func(time_left_Inseconds);
              }
            }
          );
        }
      }
    });
  });

  // save codes code
  save.addEventListener("click", function () {
    // store all course code in array
    loop: for (let index = 0; index < 8; index++) {
      // check if the key is already existed
      if (
        document.getElementById(`input${index + 1}`).value.length < 5 ||
        document.getElementById(`input${index + 1}`).value == ""
      ) {
        continue;
      }
      for (let index2 = 0; index2 < keys.length; index2++) {
        if (
          keys[index2] === document.getElementById(`input${index + 1}`).value
        ) {
          continue loop;
        }
      }
      keys.push(document.getElementById(`input${index + 1}`).value);
    }
    chrome.storage.sync.set({ keys: keys }, function () {});
    check_Mark_Func();
  });
  // clear data from storage
  clear.addEventListener("click", function () {
    for (let index = 0; index < 8; index++) {
      document.getElementById(`input${index + 1}`).value = "";
    }
    keys = [];
    chrome.storage.sync.clear();
    // clear validation states
    validation("clear");
    start();
    location.reload();
  });
  /*
  // get data from storage
  get.addEventListener("click", function () {
    getStorage();
  });
*/
  function getStorage() {
    chrome.storage.sync.get(["keys"]).then((result) => {
      console.log(result.keys);
    });
  }
})();

// -----------------------------------------------
// refresh the time left on the bottom
function refreshTime_popup(time_left) {
  const timeDisplay = document.querySelector(".time-left-timer");

  timeDisplay.textContent = (time_left / 1000).toFixed(1) + " s";
}

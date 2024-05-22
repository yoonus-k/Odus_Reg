chrome.runtime.onMessage.addListener((data, sender, sendResponse) => {
  if (data.action == "check") {
    if (!document.getElementById("crn_id1")) {
      sendResponse({ status: "failed" });
    } else {
      sendResponse({ status: "success" });
    }
  } else if (data.action == "assign") {
    // means assign values to the DOM
    assign_course(data.keys);
    sendResponse({ status: true });
  }
});
function assign_course(data) {
  for (let index = 0; index < data.length; index++) {
    if (document.getElementById(`crn_id${index + 1}`)) {
      document.getElementById(`crn_id${index + 1}`).value = data[index];
    }
  }
  document.querySelector('input[value="تنفيذ التغييرات"]').click();
}

// ============================================================
// WREXX.AI — Master Google Apps Script
// Go to script.google.com → New Project → paste this
// Deploy → New Deployment → Web App
//   Execute as: Me
//   Who has access: Anyone
// Copy the Web App URL → paste into js/forms.js as SCRIPT_URL
// ============================================================

// Your 3 Google Sheet IDs (already linked to your sheets)
var SHEET_IDS = {
  demo:    "189LsIivNJ_ifcXyJfbygeLwn-rdryKwu_bquyC6YCfE",
  contact: "1_P4ZQRtyjyD3sPdCKUTEEXccg1O3Bzzi1og6DpBwvYI",
  signin:  "1yYHi_qpqQxp1hMtonjiJWZDXNGubcv04QAVMIOkdCrg"
};

var HEADERS = {
  demo:    ["Timestamp","First Name","Last Name","Email","Company","Company Size","Industry","Use Case"],
  contact: ["Timestamp","First Name","Last Name","Email","Company","Interest","Message"],
  signin:  ["Timestamp","Email","Login Method"],
  careers: ["Timestamp","Full Name","Email","Phone","Role Applied","Experience","LinkedIn","Portfolio","Current Company","Notice Period","Cover Note"]
};

var TAB_NAMES = {
  demo:    "Demo Requests",
  contact: "Contact & Expert",
  signin:  "Sign Ups & Logins",
  careers: "Career Applications"
};

function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    var formType = data.formType || "contact";
    var sheetId = SHEET_IDS[formType] || SHEET_IDS["contact"];
    var ss = SpreadsheetApp.openById(sheetId);
    var tabName = TAB_NAMES[formType] || "Form Data";
    var sheet = ss.getSheetByName(tabName);
    if (!sheet) sheet = ss.insertSheet(tabName);

    if (sheet.getLastRow() === 0) {
      var h = HEADERS[formType] || HEADERS["contact"];
      sheet.appendRow(h);
      var hRange = sheet.getRange(1, 1, 1, h.length);
      hRange.setBackground("#1565C0");
      hRange.setFontColor("#FFFFFF");
      hRange.setFontWeight("bold");
      hRange.setFontSize(11);
      sheet.setFrozenRows(1);
    }

    var ts = Utilities.formatDate(new Date(), "Asia/Kolkata", "dd/MM/yyyy HH:mm:ss");
    var row;

    if (formType === "demo") {
      row = [ts, data.firstName, data.lastName, data.email, data.company, data.companySize, data.industry, data.useCase];
    } else if (formType === "contact") {
      row = [ts, data.firstName, data.lastName, data.email, data.company, data.interest, data.message];
    } else if (formType === "signin") {
      row = [ts, data.email, data.loginMethod || "Email/Password"];
    } else if (formType === "careers") {
      row = [ts, data.name, data.email, data.phone, data.role, data.experience, data.linkedin, data.portfolio, data.current, data.notice, data.coverNote];
    } else {
      row = [ts, JSON.stringify(data)];
    }

    sheet.appendRow(row);
    sheet.autoResizeColumns(1, sheet.getLastColumn());

    return ContentService
      .createTextOutput(JSON.stringify({ status: "success", form: formType }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: "error", message: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService
    .createTextOutput("Wrexx.ai Form API is live — Founded by Vishal Gautam")
    .setMimeType(ContentService.MimeType.TEXT);
}

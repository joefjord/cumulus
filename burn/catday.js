var fwfval;

function makefwfone() {
fwfval="ARZ000"; 
makefwfthree();
}

function makefwftwo(form) {
fwfval = form.rencatday.value;
makefwfthree();
}

function makefwfthree() {
var myzone;
var myofc;
var myadd;
if (fwfval == "ARZ001") { myzone = "BENTON-"; myadd = "https://mesonet.agron.iastate.edu/wx/afos/p.php?pil=FWFTSA"; myofc = "Issued by NWS Tulsa, OK"; }
if (fwfval == "ARZ002") { myzone = "CARROLL-"; myadd = "https://mesonet.agron.iastate.edu/wx/afos/p.php?pil=FWFTSA"; myofc = "Issued by NWS Tulsa, OK"; }
if (fwfval == "ARZ003") { myzone = "BOONE-"; myadd = "https://mesonet.agron.iastate.edu/wx/afos/p.php?pil=FWFLZK"; myofc = "Issued by NWS Little Rock, AR"; }
if (fwfval == "ARZ004") { myzone = "MARION-"; myadd = "https://mesonet.agron.iastate.edu/wx/afos/p.php?pil=FWFLZK"; myofc = "Issued by NWS Little Rock, AR"; }
if (fwfval == "ARZ005") { myzone = "BAXTER-"; myadd = "https://mesonet.agron.iastate.edu/wx/afos/p.php?pil=FWFLZK"; myofc = "Issued by NWS Little Rock, AR"; }
if (fwfval == "ARZ006") { myzone = "FULTON-"; myadd = "https://mesonet.agron.iastate.edu/wx/afos/p.php?pil=FWFLZK"; myofc = "Issued by NWS Little Rock, AR"; }
if (fwfval == "ARZ007") { myzone = "SHARP-"; myadd = "https://mesonet.agron.iastate.edu/wx/afos/p.php?pil=FWFLZK"; myofc = "Issued by NWS Little Rock, AR"; }
if (fwfval == "ARZ008") { myzone = "RANDOLPH-"; myadd = "https://mesonet.agron.iastate.edu/wx/afos/p.php?pil=FWFMEG"; myofc = "Issued by NWS Memphis, TN"; }
if (fwfval == "ARZ009") { myzone = "CLAY-"; myadd = "https://mesonet.agron.iastate.edu/wx/afos/p.php?pil=FWFMEG"; myofc = "Issued by NWS Memphis, TN"; }
if (fwfval == "ARZ010") { myzone = "WASHINGTON AR-"; myadd = "https://mesonet.agron.iastate.edu/wx/afos/p.php?pil=FWFTSA"; myofc = "Issued by NWS Tulsa, OK"; }
if (fwfval == "ARZ011") { myzone = "MADISON-"; myadd = "https://mesonet.agron.iastate.edu/wx/afos/p.php?pil=FWFTSA"; myofc = "Issued by NWS Tulsa, OK"; }
if (fwfval == "ARZ012") { myzone = "NEWTON-"; myadd = "https://mesonet.agron.iastate.edu/wx/afos/p.php?pil=FWFLZK"; myofc = "Issued by NWS Little Rock, AR"; }
if (fwfval == "ARZ013") { myzone = "SEARCY-"; myadd = "https://mesonet.agron.iastate.edu/wx/afos/p.php?pil=FWFLZK"; myofc = "Issued by NWS Little Rock, AR"; }
if (fwfval == "ARZ014") { myzone = "STONE-"; myadd = "https://mesonet.agron.iastate.edu/wx/afos/p.php?pil=FWFLZK"; myofc = "Issued by NWS Little Rock, AR"; }
if (fwfval == "ARZ015") { myzone = "IZARD-"; myadd = "https://mesonet.agron.iastate.edu/wx/afos/p.php?pil=FWFLZK"; myofc = "Issued by NWS Little Rock, AR"; }
if (fwfval == "ARZ016") { myzone = "INDEPENDENCE-"; myadd = "https://mesonet.agron.iastate.edu/wx/afos/p.php?pil=FWFLZK"; myofc = "Issued by NWS Little Rock, AR"; }
if (fwfval == "ARZ017") { myzone = "LAWRENCE-"; myadd = "https://mesonet.agron.iastate.edu/wx/afos/p.php?pil=FWFMEG"; myofc = "Issued by NWS Memphis, TN"; }
if (fwfval == "ARZ018") { myzone = "GREENE-"; myadd = "https://mesonet.agron.iastate.edu/wx/afos/p.php?pil=FWFMEG"; myofc = "Issued by NWS Memphis, TN"; }
if (fwfval == "ARZ019") { myzone = "CRAWFORD-"; myadd = "https://mesonet.agron.iastate.edu/wx/afos/p.php?pil=FWFTSA"; myofc = "Issued by NWS Tulsa, OK"; }
if (fwfval == "ARZ020") { myzone = "FRANKLIN-"; myadd = "https://mesonet.agron.iastate.edu/wx/afos/p.php?pil=FWFTSA"; myofc = "Issued by NWS Tulsa, OK"; }
if (fwfval == "ARZ021") { myzone = "JOHNSON-"; myadd = "https://mesonet.agron.iastate.edu/wx/afos/p.php?pil=FWFLZK"; myofc = "Issued by NWS Little Rock, AR"; }
if (fwfval == "ARZ022") { myzone = "POPE-"; myadd = "https://mesonet.agron.iastate.edu/wx/afos/p.php?pil=FWFLZK"; myofc = "Issued by NWS Little Rock, AR"; }
if (fwfval == "ARZ023") { myzone = "VAN BUREN-"; myadd = "https://mesonet.agron.iastate.edu/wx/afos/p.php?pil=FWFLZK"; myofc = "Issued by NWS Little Rock, AR"; }
if (fwfval == "ARZ024") { myzone = "CLEBURNE-"; myadd = "https://mesonet.agron.iastate.edu/wx/afos/p.php?pil=FWFLZK"; myofc = "Issued by NWS Little Rock, AR"; }
if (fwfval == "ARZ025") { myzone = "JACKSON-"; myadd = "https://mesonet.agron.iastate.edu/wx/afos/p.php?pil=FWFLZK"; myofc = "Issued by NWS Little Rock, AR"; }
if (fwfval == "ARZ026") { myzone = "CRAIGHEAD-"; myadd = "https://mesonet.agron.iastate.edu/wx/afos/p.php?pil=FWFMEG"; myofc = "Issued by NWS Memphis, TN"; }
if (fwfval == "ARZ027") { myzone = "POINSETT-"; myadd = "https://mesonet.agron.iastate.edu/wx/afos/p.php?pil=FWFMEG"; myofc = "Issued by NWS Memphis, TN"; }
if (fwfval == "ARZ028") { myzone = "MISSISSIPPI-"; myadd = "https://mesonet.agron.iastate.edu/wx/afos/p.php?pil=FWFMEG"; myofc = "Issued by NWS Memphis, TN"; }
if (fwfval == "ARZ029") { myzone = "SEBASTIAN-"; myadd = "https://mesonet.agron.iastate.edu/wx/afos/p.php?pil=FWFTSA"; myofc = "Issued by NWS Tulsa, OK"; }
if (fwfval == "ARZ030") { myzone = "LOGAN-"; myadd = "https://mesonet.agron.iastate.edu/wx/afos/p.php?pil=FWFLZK"; myofc = "Issued by NWS Little Rock, AR"; }
if (fwfval == "ARZ031") { myzone = "CONWAY-"; myadd = "https://mesonet.agron.iastate.edu/wx/afos/p.php?pil=FWFLZK"; myofc = "Issued by NWS Little Rock, AR"; }
if (fwfval == "ARZ032") { myzone = "FAULKNER-"; myadd = "https://mesonet.agron.iastate.edu/wx/afos/p.php?pil=FWFLZK"; myofc = "Issued by NWS Little Rock, AR"; }
if (fwfval == "ARZ033") { myzone = "WHITE-"; myadd = "https://mesonet.agron.iastate.edu/wx/afos/p.php?pil=FWFLZK"; myofc = "Issued by NWS Little Rock, AR"; }
if (fwfval == "ARZ034") { myzone = "WOODRUFF-"; myadd = "https://mesonet.agron.iastate.edu/wx/afos/p.php?pil=FWFLZK"; myofc = "Issued by NWS Little Rock, AR"; }
if (fwfval == "ARZ035") { myzone = "CROSS-"; myadd = "https://mesonet.agron.iastate.edu/wx/afos/p.php?pil=FWFMEG"; myofc = "Issued by NWS Memphis, TN"; }
if (fwfval == "ARZ036") { myzone = "CRITTENDEN-"; myadd = "https://mesonet.agron.iastate.edu/wx/afos/p.php?pil=FWFMEG"; myofc = "Issued by NWS Memphis, TN"; }
if (fwfval == "ARZ037") { myzone = "SCOTT-"; myadd = "https://mesonet.agron.iastate.edu/wx/afos/p.php?pil=FWFLZK"; myofc = "Issued by NWS Little Rock, AR"; }
if (fwfval == "ARZ038") { myzone = "YELL-"; myadd = "https://mesonet.agron.iastate.edu/wx/afos/p.php?pil=FWFLZK"; myofc = "Issued by NWS Little Rock, AR"; }
if (fwfval == "ARZ039") { myzone = "PERRY-"; myadd = "https://mesonet.agron.iastate.edu/wx/afos/p.php?pil=FWFLZK"; myofc = "Issued by NWS Little Rock, AR"; }
if (fwfval == "ARZ040") { myzone = "POLK-"; myadd = "https://mesonet.agron.iastate.edu/wx/afos/p.php?pil=FWFLZK"; myofc = "Issued by NWS Little Rock, AR"; }
if (fwfval == "ARZ041") { myzone = "MONTGOMERY-"; myadd = "https://mesonet.agron.iastate.edu/wx/afos/p.php?pil=FWFLZK"; myofc = "Issued by NWS Little Rock, AR"; }
if (fwfval == "ARZ042") { myzone = "GARLAND-"; myadd = "https://mesonet.agron.iastate.edu/wx/afos/p.php?pil=FWFLZK"; myofc = "Issued by NWS Little Rock, AR"; }
if (fwfval == "ARZ043") { myzone = "SALINE-"; myadd = "https://mesonet.agron.iastate.edu/wx/afos/p.php?pil=FWFLZK"; myofc = "Issued by NWS Little Rock, AR"; }
if (fwfval == "ARZ044") { myzone = "PULASKI-"; myadd = "https://mesonet.agron.iastate.edu/wx/afos/p.php?pil=FWFLZK"; myofc = "Issued by NWS Little Rock, AR"; }
if (fwfval == "ARZ045") { myzone = "LONOKE-"; myadd = "https://mesonet.agron.iastate.edu/wx/afos/p.php?pil=FWFLZK"; myofc = "Issued by NWS Little Rock, AR"; }
if (fwfval == "ARZ046") { myzone = "PRAIRIE-"; myadd = "https://mesonet.agron.iastate.edu/wx/afos/p.php?pil=FWFLZK"; myofc = "Issued by NWS Little Rock, AR"; }
if (fwfval == "ARZ047") { myzone = "MONROE-"; myadd = "https://mesonet.agron.iastate.edu/wx/afos/p.php?pil=FWFLZK"; myofc = "Issued by NWS Little Rock, AR"; }
if (fwfval == "ARZ048") { myzone = "ST. FRANCIS-"; myadd = "https://mesonet.agron.iastate.edu/wx/afos/p.php?pil=FWFMEG"; myofc = "Issued by NWS Memphis, TN"; }
if (fwfval == "ARZ049") { myzone = "LEE AR-"; myadd = "https://mesonet.agron.iastate.edu/wx/afos/p.php?pil=FWFMEG"; myofc = "Issued by NWS Memphis, TN"; }
if (fwfval == "ARZ050") { myzone = "SEVIER-"; myadd = "https://mesonet.agron.iastate.edu/wx/afos/p.php?pil=FWFSHV"; myofc = "Issued by NWS Shreveport, LA"; }
if (fwfval == "ARZ051") { myzone = "HOWARD-"; myadd = "https://mesonet.agron.iastate.edu/wx/afos/p.php?pil=FWFSHV"; myofc = "Issued by NWS Shreveport, LA"; }
if (fwfval == "ARZ052") { myzone = "PIKE-"; myadd = "https://mesonet.agron.iastate.edu/wx/afos/p.php?pil=FWFLZK"; myofc = "Issued by NWS Little Rock, AR"; }
if (fwfval == "ARZ053") { myzone = "CLARK-"; myadd = "https://mesonet.agron.iastate.edu/wx/afos/p.php?pil=FWFLZK"; myofc = "Issued by NWS Little Rock, AR"; }
if (fwfval == "ARZ054") { myzone = "HOT SPRING-"; myadd = "https://mesonet.agron.iastate.edu/wx/afos/p.php?pil=FWFLZK"; myofc = "Issued by NWS Little Rock, AR"; }
if (fwfval == "ARZ055") { myzone = "GRANT-"; myadd = "https://mesonet.agron.iastate.edu/wx/afos/p.php?pil=FWFLZK"; myofc = "Issued by NWS Little Rock, AR"; }
if (fwfval == "ARZ056") { myzone = "JEFFERSON-"; myadd = "https://mesonet.agron.iastate.edu/wx/afos/p.php?pil=FWFLZK"; myofc = "Issued by NWS Little Rock, AR"; }
if (fwfval == "ARZ057") { myzone = "ARKANSAS-"; myadd = "https://mesonet.agron.iastate.edu/wx/afos/p.php?pil=FWFLZK"; myofc = "Issued by NWS Little Rock, AR"; }
if (fwfval == "ARZ058") { myzone = "PHILLIPS-"; myadd = "https://mesonet.agron.iastate.edu/wx/afos/p.php?pil=FWFMEG"; myofc = "Issued by NWS Memphis, TN"; }
if (fwfval == "ARZ059") { myzone = "LITTLE RIVER-"; myadd = "https://mesonet.agron.iastate.edu/wx/afos/p.php?pil=FWFSHV"; myofc = "Issued by NWS Shreveport, LA"; }
if (fwfval == "ARZ060") { myzone = "HEMPSTEAD-"; myadd = "https://mesonet.agron.iastate.edu/wx/afos/p.php?pil=FWFSHV"; myofc = "Issued by NWS Shreveport, LA"; }
if (fwfval == "ARZ061") { myzone = "NEVADA-"; myadd = "https://mesonet.agron.iastate.edu/wx/afos/p.php?pil=FWFSHV"; myofc = "Issued by NWS Shreveport, LA"; }
if (fwfval == "ARZ062") { myzone = "DALLAS-"; myadd = "https://mesonet.agron.iastate.edu/wx/afos/p.php?pil=FWFLZK"; myofc = "Issued by NWS Little Rock, AR"; }
if (fwfval == "ARZ063") { myzone = "CLEVELAND-"; myadd = "https://mesonet.agron.iastate.edu/wx/afos/p.php?pil=FWFLZK"; myofc = "Issued by NWS Little Rock, AR"; }
if (fwfval == "ARZ064") { myzone = "LINCOLN-"; myadd = "https://mesonet.agron.iastate.edu/wx/afos/p.php?pil=FWFLZK"; myofc = "Issued by NWS Little Rock, AR"; }
if (fwfval == "ARZ065") { myzone = "DESHA-"; myadd = "https://mesonet.agron.iastate.edu/wx/afos/p.php?pil=FWFLZK"; myofc = "Issued by NWS Little Rock, AR"; }
if (fwfval == "ARZ066") { myzone = "OUACHITA-"; myadd = "https://mesonet.agron.iastate.edu/wx/afos/p.php?pil=FWFLZK"; myofc = "Issued by NWS Little Rock, AR"; }
if (fwfval == "ARZ067") { myzone = "CALHOUN-"; myadd = "https://mesonet.agron.iastate.edu/wx/afos/p.php?pil=FWFLZK"; myofc = "Issued by NWS Little Rock, AR"; }
if (fwfval == "ARZ068") { myzone = "BRADLEY-"; myadd = "https://mesonet.agron.iastate.edu/wx/afos/p.php?pil=FWFLZK"; myofc = "Issued by NWS Little Rock, AR"; }
if (fwfval == "ARZ069") { myzone = "DREW-"; myadd = "https://mesonet.agron.iastate.edu/wx/afos/p.php?pil=FWFLZK"; myofc = "Issued by NWS Little Rock, AR"; }
if (fwfval == "ARZ070") { myzone = "MILLER-"; myadd = "https://mesonet.agron.iastate.edu/wx/afos/p.php?pil=FWFSHV"; myofc = "Issued by NWS Shreveport, LA"; }
if (fwfval == "ARZ071") { myzone = "LAFAYETTE-"; myadd = "https://mesonet.agron.iastate.edu/wx/afos/p.php?pil=FWFSHV"; myofc = "Issued by NWS Shreveport, LA"; }
if (fwfval == "ARZ072") { myzone = "COLUMBIA-"; myadd = "https://mesonet.agron.iastate.edu/wx/afos/p.php?pil=FWFSHV"; myofc = "Issued by NWS Shreveport, LA"; }
if (fwfval == "ARZ073") { myzone = "UNION-"; myadd = "https://mesonet.agron.iastate.edu/wx/afos/p.php?pil=FWFSHV"; myofc = "Issued by NWS Shreveport, LA"; }
if (fwfval == "ARZ074") { myzone = "ASHLEY-"; myadd = "https://mesonet.agron.iastate.edu/wx/afos/p.php?pil=FWFJAN"; myofc = "Issued by NWS Jackson, MS"; }
if (fwfval == "ARZ075") { myzone = "CHICOT-"; myadd = "https://mesonet.agron.iastate.edu/wx/afos/p.php?pil=FWFJAN"; myofc = "Issued by NWS Jackson, MS"; }

  if (window.XMLHttpRequest) {
      var xhttp = new XMLHttpRequest();
  } else { // IE 5/6
      var xhttp = new ActiveXObject("Microsoft.XMLHTTP");
  }
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var zoneLen = myzone.length;
      var newZone = myzone.substr(0, zoneLen-1) + " COUNTY CATEGORY DAY"; 
      var myPreText = this.responseText;
      var myUprText = myPreText.toUpperCase();
      var begTextTwo = myUprText.indexOf(myzone);
      var myPostTextTwo = myUprText.substr(begTextTwo);
      var endTextTwo = myPostTextTwo.indexOf("$$", 1);
      var myFireText = myPostTextTwo.substr(0, endTextTwo);
      var begTextOne = myFireText.indexOf("AM CST");
      var begTextTwo = myFireText.indexOf("AM CDT");
      var begTextThree = myFireText.indexOf("PM CST");
      var begTextFour = myFireText.indexOf("PM CDT");
      var newLine; var prodDay;
      if (begTextOne>=0) { newLine = myFireText.substr(begTextOne); prodDay = myFireText.substr(begTextOne+7,3).trim(); }  
      if (begTextTwo>=0) { newLine = myFireText.substr(begTextTwo); prodDay = myFireText.substr(begTextTwo+7,3).trim(); }
      if (begTextThree>=0) { newLine = myFireText.substr(begTextThree); prodDay = myFireText.substr(begTextThree+7,3).trim(); }  
      if (begTextFour>=0) { newLine = myFireText.substr(begTextFour); prodDay = myFireText.substr(begTextFour+7,3).trim(); }
      var prodAM=0; var prodPM=0;
      var findTonight = newLine.indexOf("TONIGHT");
      if (findTonight>50) { prodAM=1; }
      if (findTonight<50) { prodPM=1; }
      var dayOne; var dayTwo; var myCatDayOne; var myCatDayTwo;
      var findCatDay = newLine.indexOf("CATEGORY DAY");
      if (prodDay=="SUN" && prodAM==1 && findCatDay>=0) { dayOne = "Sunday: "; dayTwo = "Monday: "; myCatDayOne = newLine.substr(findCatDay+22,1).trim() + "; "; myCatDayTwo = newLine.substr(findCatDay+48,1).trim(); }
      if (prodDay=="SUN" && prodPM==1 && findCatDay>=0) { dayOne = "Monday: "; dayTwo = "Tuesday: "; myCatDayOne = newLine.substr(findCatDay+35,1).trim() + "; "; myCatDayTwo = newLine.substr(findCatDay+61,1).trim(); }
      if (prodDay=="MON" && prodAM==1 && findCatDay>=0) { dayOne = "Monday: "; dayTwo = "Tuesday: "; myCatDayOne = newLine.substr(findCatDay+22,1).trim() + "; "; myCatDayTwo = newLine.substr(findCatDay+48,1).trim(); }
      if (prodDay=="MON" && prodPM==1 && findCatDay>=0) { dayOne = "Tuesday: "; dayTwo = "Wednesday: "; myCatDayOne = newLine.substr(findCatDay+35,1).trim() + "; "; myCatDayTwo = newLine.substr(findCatDay+61,1).trim(); }
      if (prodDay=="TUE" && prodAM==1 && findCatDay>=0) { dayOne = "Tuesday: "; dayTwo = "Wednesday: "; myCatDayOne = newLine.substr(findCatDay+22,1).trim() + "; "; myCatDayTwo = newLine.substr(findCatDay+48,1).trim(); }
      if (prodDay=="TUE" && prodPM==1 && findCatDay>=0) { dayOne = "Wednesday: "; dayTwo = "Thursday: "; myCatDayOne = newLine.substr(findCatDay+35,1).trim() + "; "; myCatDayTwo = newLine.substr(findCatDay+61,1).trim(); }
      if (prodDay=="WED" && prodAM==1 && findCatDay>=0) { dayOne = "Wednesday: "; dayTwo = "Thursday: "; myCatDayOne = newLine.substr(findCatDay+22,1).trim() + "; "; myCatDayTwo = newLine.substr(findCatDay+48,1).trim(); }
      if (prodDay=="WED" && prodPM==1 && findCatDay>=0) { dayOne = "Thursday: "; dayTwo = "Friday: "; myCatDayOne = newLine.substr(findCatDay+35,1).trim() + "; "; myCatDayTwo = newLine.substr(findCatDay+61,1).trim(); }
      if (prodDay=="THU" && prodAM==1 && findCatDay>=0) { dayOne = "Thursday: "; dayTwo = "Friday: "; myCatDayOne = newLine.substr(findCatDay+22,1).trim() + "; "; myCatDayTwo = newLine.substr(findCatDay+48,1).trim(); }
      if (prodDay=="THU" && prodPM==1 && findCatDay>=0) { dayOne = "Friday: "; dayTwo = "Saturday: "; myCatDayOne = newLine.substr(findCatDay+35,1).trim() + "; "; myCatDayTwo = newLine.substr(findCatDay+61,1).trim(); }
      if (prodDay=="FRI" && prodAM==1 && findCatDay>=0) { dayOne = "Friday: "; dayTwo = "Saturday: "; myCatDayOne = newLine.substr(findCatDay+22,1).trim() + "; "; myCatDayTwo = newLine.substr(findCatDay+48,1).trim(); }
      if (prodDay=="FRI" && prodPM==1 && findCatDay>=0) { dayOne = "Saturday: "; dayTwo = "Sunday: "; myCatDayOne = newLine.substr(findCatDay+35,1).trim() + "; "; myCatDayTwo = newLine.substr(findCatDay+61,1).trim(); }
      if (prodDay=="SAT" && prodAM==1 && findCatDay>=0) { dayOne = "Saturday: "; dayTwo = "Sunday: "; myCatDayOne = newLine.substr(findCatDay+22,1).trim() + "; "; myCatDayTwo = newLine.substr(findCatDay+48,1).trim(); }
      if (prodDay=="SAT" && prodPM==1 && findCatDay>=0) { dayOne = "Sunday: "; dayTwo = "Monday: "; myCatDayOne = newLine.substr(findCatDay+35,1).trim() + "; "; myCatDayTwo = newLine.substr(findCatDay+61,1).trim(); }
      if (findCatDay<0) { dayOne = "Not Available"; dayTwo = ""; myCatDayOne = ""; myCatDayTwo = ""; }
      document.getElementById("myframe").innerHTML = newZone + "<br />" + myofc + "<br /><br />" + "Category Day: "/*dayOne*/ + myCatDayOne.slice(0,-2) + "<br /><br />"; //+ dayTwo + myCatDayTwo;   
    }
  };
  xhttp.open("GET", myadd, true);
  xhttp.send();
}
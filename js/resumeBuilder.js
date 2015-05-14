/*******HEADER********/
var headName = "Sihle Zenzile";
var headRole = "Web Developer";

var formattedName = HTMLheaderName.replace("%data%", headName);
var formattedRole = HTMLheaderRole.replace("%data%",headRole);


$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);


/*******MAIN********/
//function internationalized
//

function inName(name)
{
  var nm = [];
  nm = name.split(" ");

  var firstname = nm[0].toLowerCase();

  var surname = nm[1].toUpperCase();

  var firstLetter = firstname.slice(0, 1).toUpperCase()+firstname.slice(1) + " "+ surname;


  console.log(firstLetter);

}
inName(headName);
$("#main").append(internationalizeButton);
var education ={};
var projects ={};
/********BIO***********/
var bio ={};
bio = {"fullname": "Sihle Zenzile",
            "role": "Web Developer",
            "welcomeMessage": "This is the resume of Sihle Zenzile, Bienvenue",
            "contact": {"email":"sihle@skywalkinnovations.co.za",
                        "cell":"0737468494",
                        "twitter": "@SihleZenzile",
                        "github": "zenzilesihle",
                        "location": "Cape Town"},
        "pictureURL": "images/profile.png",
            "skills": ["Java", "C++", "PL/SQL", "Android"]};

bio.displayContact = function()
{
  //$("#header").append(HTMLcontactGeneric);


  var mail = HTMLemail.replace("%data%",bio.contact.email);
  $("#footerContacts").append(mail);
  var mob = HTMLmobile.replace("%data%",bio.contact.cell);
  $("#footerContacts").append(mob);
  var twit = HTMLtwitter.replace("%data%",bio.contact.twitter);
  $("#footerContacts").append(twit);
  var git = HTMLgithub.replace("%data%",bio.contact.github);
  $("#footerContacts").append(git);

}



var pic = HTMLbioPic.replace("%data%",bio.pictureURL);
$("#header").append(pic);
var pic = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
$("#header").append(pic);




if (bio.skills.length>0)
{
  $("#header").append(HTMLskillsStart);

  var formatterdSkills = HTMLskills.replace("%data%",bio.skills[0] )
  $("#skills").append(formatterdSkills);
  var formatterdSkills = HTMLskills.replace("%data%",bio.skills[1] )
  $("#skills").append(formatterdSkills);
  var formatterdSkills = HTMLskills.replace("%data%",bio.skills[2] )
  $("#skills").append(formatterdSkills);
  var formatterdSkills = HTMLskills.replace("%data%",bio.skills[3] )
  $("#skills").append(formatterdSkills);
}
bio.displayContact();
/********Work***********/
var work = {};
work = {"jobs":
          [{
            "employer": "Skywalk Innovations",
            "title": "Web Developer",
            "location": "Cape Town",
            "duration": "01 May 2015 - present",
            "description": "Building web application front-end and back-end using HTML,Javascript and Bootstrap"},
          {"employer": "Electorial Commission",
            "title": "Voter's roll officer",
            "location": "Cape Town",
            "duration": "October 2013 - 07 May 2014",
            "description": "Educating people about IEC, voting and voting process."
            }]};


function displayWork()
{
  for(index in work.jobs)
  {
    $("#workExperience").append(HTMLworkStart);
    var formattedJob = HTMLworkEmployer.replace("%data%", work.jobs[index].title);
    var formattedEmployer = HTMLworkTitle.replace("%data%", work.jobs[index].employer);
    var formattedLocation = HTMLworkLocation.replace("%data%",work.jobs[index].location);
    var formattedDates = HTMLworkDates.replace("%data%",work.jobs[index].duration);
    var formattedDescription =  HTMLworkDescription.replace("%data%",work.jobs[index].description);

    $(".work-entry:last").append(formattedJob +" "+ formattedEmployer + " "
                            +formattedDates+" "+formattedDescription);
  }
}
displayWork();

$("#mapDiv").append(googleMap);
/*******EDUCATION*********/
education = {"schools":[{"name":"SEK Mqhayi High",
                            "city": "East London",
                            "majors": ["Mathematics", "Physical Science"],
                            "minors":["Tourism", "Life Sciences", "Tourism"],
                            "degree": "National Senior Certificate",
                            "gradyear": "2004-2008",
                            "location" : "East London"},
                          {
                            "name": "Cape Peninsula University of Technology",
                            "majors":["Development Software",
                                      "Technical Programming",
                                      "Internet Programming"],
                            "minors": ["Project management",
                                      "Database Management"],
                            "degree": "National Diploma",
                            "location" : "Cape Town"  ,
                            "gradyear": "2011-2015",
                            "url" : "www.cput.ac.za"
                            }
                          ],
              "onlinecourse": {
                  "name": "Udacity",
                  "title": "Front-end Web Development",
                  "majors":["JQuery", " JavaScript", " Bootstrap"],
                  "minors": ["CSS", " HTML"],
                  "gradyear": "2015",
                  "url" : "https://www.udacity.com"
              }
          };

education.displayOnline = function()
{
  $(".education-entry:last").append(HTMLonlineClasses);

  //
  var site = HTMLonlineSchool.replace("%data%",education.onlinecourse.name);
  $(".education-entry:last").append(site);

  var year = HTMLonlineSchool.replace("%data%",education.onlinecourse.gradyear);
  $(".education-entry:last").append(year);

  var title = HTMLonlineTitle.replace("%data%",education.onlinecourse.title);
  $(".education-entry:last").append(title);

  var link = HTMLonlineURL.replace("%data%",education.onlinecourse.url);
  $(".education-entry:last").append(link);
}

education.display = function(){
    //  var contact = HTMLcontactGeneric.replace("%data%",);
for(index in education.schools){
  $("#education").append(HTMLschoolStart);

  var name = HTMLschoolName.replace("%data%",education.schools[index].name);
  $(".education-entry:last").append(name);
  var degree = HTMLschoolDegree.replace("%data%",education.schools[index].degree);
  $(".education-entry:last").append(degree);
  var dates = HTMLschoolDates.replace("%data%",education.schools[index].gradyear);
  $(".education-entry:last").append(dates);
  var loca = HTMLschoolLocation.replace("%data%",education.schools[index].location);
  $(".education-entry:last").append(loca);


  if(education.schools[index].majors.length>0)
  {
    for(inner in education.schools[index].majors)
    {
      var major = HTMLschoolMajor.replace("%data%",education.schools[index].majors[inner]);
      $(".education-entry:last").append(major);
    }
  }
  }


}

education.display();
education.displayOnline();

/******PROJECTS*****/
projects = {"project": [
                    {"title": "Android Mobile Application",
                      "date": "08-August 2014",
                      "description": "Android application that used as class attendance register",
                      "image": ["images/and1.png","images/and2.png","images/and3.png"]
                    },
                    {
                      "title":"School Registration System",
                      "date": "10 May 2014 - 02 June 2014",
                      "description": "School Registration System using C# .NET",
                      "image": ["images/reg1.jpg","images/reg2.jpg","images/reg3.jpg"]
                    }
                  ]
            };
projects.display = function()
{
  for(index in projects.project)
  {
    $("#projects").append(HTMLprojectStart);

    var title = HTMLprojectTitle.replace("%data%", projects.project[index].title);
    var dates = HTMLprojectDates.replace("%data%", projects.project[index].date);
    var description = HTMLprojectDescription.replace("%data%", projects.project[index].description);

    $(".project-entry:last").append(title + " "+dates +" "+description);
    if (projects.project[index].image.length>0)
    {
      for(pos in projects.project[index].image){

        var image = HTMLprojectImage.replace("%data%", projects.project[index].image[pos]);
        $(".project-entry:last").append(image);
      }
    }
  }

}

projects.display();




























/*
            var awesomeThoughts = "I am Sihle and I am AWESOME";
            console.log(awesomeThoughts);
            var email = "sihle@webmail.co.za";
            var newEmail = email.replace("webmail","skywalkinnovations");

            console.log(email);
            console.log(newEmail);
            var newArray = [];
                newArray = _array.slice(0);
                var lastNumber = newArray.pop();
                newArray.push(lastNumber + 1);
                return newArray;
            **************************************************
                given a string of a two word name
                formatted with any mix of capitalization,
                can you manipulate the string to ensure the first
                 name has a capital first letter and the last name
                 is totally capitalized? Assume there's a space
                 between the names. For instance, turning a string
                 like "cAmEROn PittMAN" into "Cameron PITTMAN".
                 Your answer should be a single string saved to
                 the variable called finalName.

                 var str1 ="Audacity";
                 var str2 = str1.slice(1);
                 str2 = str2.replace("u","U");
                 console.log(str2);
            *************************************
            var funThoughts = awesomeThoughts.replace("AWESOME", "FUN");
            $("#main").append(funThoughts);
            var awesomeThoughts = "I am Sihle and I am AWESOME";

            ************************************

                 var myname ="cAmEROn PittMAN";
                 var first = myname.charAt(0).toUpperCase();
                 var res = myname.split(" ");

                 var name = res[0].toLowerCase().slice(1);
                 var surname = res[1].toUpperCase();

                 var finalName = first+name+" "+surname;

                 console.log(finalName);
            *******************************************************
                 var myskills = ["C++", "Java", "Bootstrap", "HTML", "SQL"];
                 var bio = {"fullname": "Sihle Zenzile",
                             "role": "Web Developer",
                             "contact": {"email":"sihlezenzile@gmail.com",
                                         "cell":"0737468494",
                                         "twitter": "@sihleSZenzile"},
                       "pictureURL": "<img src ='images/profile.png' alt='Profile Image'>",
                             "welcomemessage": "This is the resume of Sihle Zenzile, Bienvenue",
                             "skills": myskills};

                 $("#main").append(bio.fullname+"");
                 $("#main").append(bio.role);
                 $("#main").append(bio.contact.email);
                 $("#main").append(bio.pictureURL+"");
                 $("#main").append(bio.welcomemessage);
                 $("#main").append(bio.skills[0] + bio.skills[1] +
                           bio.skills[2] + bio.skills[3]+bio.skills[4]);

            **********************************************************************
              var work = {};
              var educatio = {};

              work["position"] = "Software Developer";
              work["employer"] = "Skywalk Innovations";
              work["years"] = 1;
              work["city"] = "Cape Town";

              academic = educatio.name = "SEK Mqhayi High";
              educatio.years = 5;
              educatio.city = "East London";


              $("#main").append(educatio.name);
              $("#main").append(work["position"]);
              ************************************************
              ***********************************************
              *************************************************

            ****************************************
*/

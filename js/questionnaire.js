function tabulateAnswers() {
    event.preventDefault();
    var array = [];
    var index = [];
    var substances = [];
    array.push("Nothing");
    var diseases = ["Asthma", "LungCancer", "COPD", "Pneumoconiosis", "Mesothelioma", "Silicosis", "Asbestosis"];
    var urls = ['/Home/Asthma/#main', '/Home/LungCancer/#main', '/Home/COPD/#main', '/Home/Pneumoconiosis/#main', '/Home/Mesothelioma/#main', '/Home/Silicosis/#main', '/Home/Asbestosis/#main'];
    var symptoms = [["Copper and dust mist", "Wood dust", "Shortness of breath", "Chest Pain", "Wheezing", "Coughing", "Sneezing", "Runny nose and eyes", "Manufacturing", "Construction"],
    ["Silica gel", "Silica dust", "Wood dust", "Lead", "Shortness of breath", "Chest Pain", "Weight Loss", "Persistent Cough", "Coughing Blood", "Hoarse Voice", "Tiredness", "Construction", "Manufacturing", "Mining"],
    ["Grain dust", "Coal dust", "Wood dust", "Silica dust", "Any type of fumes", "Shortness of breath", "Wheezing", "Weight Loss", "Tiredness", "Coughing", "Construction", "Mining", "Manufacturing"],
    ["Silica gel", "Silica dust", "Cotton dust", "Coal dust", "Shortness of breath", "Phelgm", "Chest Pain", "Coughing", "Mining"],
    ["Coal tar", " Asbestos fibres", "Shortness of breath", "Persistent Cough", "Chest Pain", "Excessive Sweating", "Loss of Energy", "Construction", "Manufacturing"],
    ["Coal tar", "Rock wool", "Shortness of breath", "Persistent Cough", "Chest Pain", "Weight loss", "Fatigue", "Sudden fever", "Mining", "Manufacturing", "Construction"],
    ["Asbestos fibres", "Shortness of breath", "Dry Cough", "Chest Pain", "Weight Loss", "Pulmonary Hypertension", "Construction", "Manufacturing"],
    ]

    var x = document.getElementById("smoker");
    var ans = document.getElementById("answer");
    var quiz = document.getElementById("quiz");
    var image = document.getElementById("image");
    var years = document.getElementById("years");
    var choices = document.getElementsByTagName('input');
    var head = document.getElementById('header');
    var recom = document.getElementById('recommendations');
    var disease = [];
    var flag = false;
    var IndustryName;
    for (i = 0; i < choices.length; i++) {

        if (choices[i].checked && choices[i].name == 'Industry') {

            array[0] = choices[i].value;
        }

        if (choices[i].checked && choices[i].name == 'Symptoms') {

            array.push(choices[i].value);
        }
        if (choices[i].checked && choices[i].name == 'Chem') {
            if (flag == true) {

                substances.push(choices[i].value);

            }
            else {
                array.push(choices[i].value);
            }


        }
        if (choices[i].checked && choices[i].name == 'Smoke' && choices[i].value == 'Yes') {

            x.style.display = "block";
        }
        if (choices[i].checked && choices[i].name == 'Sub' && choices[i].value == 'Yes') {

            flag = true;
        }
        if (choices[i].checked && choices[i].name == 'q4') {
            if (choices[i].value == '10-20 years' || choices[i].value == '20+years') {
                years.style.display = "block";
                document.getElementById("years_text").innerHTML = "You have been working in an industry for a long time. It is advised for you to get a medical checkup done.";
            }
            else if (choices[i].value == '1-5 years' || choices[i].value == 'less than 1 year') {
                years.style.display = "block";
                document.getElementById("years_text").innerHTML = "As you have recently joined the industry, it is advised that you take preventive measures to save your lungs from damage.";

            }
            else {
                years.style.display = "block";
                document.getElementById("years_text").innerHTML = "As you have been in the industry for more than 5 years, it is advised for you to take frequent medical checkups as some of the OLDs remain asymptomatic for many years after the first exposure.";

            }

        }
        if (choices[i].checked && choices[i].name == 'Condition' && choices[i].value == 'Yes') {

            document.getElementById("old").style.display = "block";
        }
    }
    image.style.display = "block";
    quiz.style.display = "none";
    head.style.display = "none";
    recom.style.display = "block";

    for (i = 0; i < symptoms.length; i++) {

        for (y = 1; y < array.length; y++) {



            if (array[0] != "Nothing" && symptoms[i].includes(array[0])) {
                if (symptoms[i].includes(array[y])) {
                    // disease.push(urls[i])
                    index.push(i)
                    break;
                }

            }
            else if (array[0] == "Nothing") {
                if (symptoms[i].includes(array[y])) {
                    // disease.push(urls[i])
                    index.push(i)
                    break;
                }

            }

        }

    }
    if (substances.length > 0) {
        var limitData = document.getElementById("hazard_limit");
        document.getElementById("limit").style.display = "block";
        limitData.style.display = "block";
        var content = "The permissible limit of some of the substances you are exposed to-";

        for (i = 0; i < index.length; i++) {

            for (y = 0; y < substances.length; y++) {



                if (symptoms[index[i]].includes(substances[y])) {

                    disease.push(urls[index[i]])
                    break;

                }


            }

        }
        for (y = 0; y < substances.length; y++) {

            content = content + substances[y];
        }
        limitData.innerHTML = content;
        var a = document.createElement('a');
        a.target = '_blank';
        a.href = '/Home/HazardLimit';
        a.innerText = "    Know more about permissible limits";
        a.style.fontWeight = "bold";
       // a.type = "button";
       // a.className = "btn btn-primary";
        limitData.append(a);
    }


    if (disease.length == 0) {
        for (i = 0; i < index.length; i++) {


            disease.push(urls[index[i]]);



        }

    }



    for (i = 0; i < disease.length; i++) {

        var a = document.createElement('a');
        a.target = '_blank';
        a.href = disease[i];
        a.innerText = disease[i].split("/")[2];
        a.type = "button";
        a.className = "btn btn-primary";

        ans.append(a);
        ans.append("            ");

        // $("#answer").append("<a type=button href=# class='btn btn-primary'>" +
        //  response.list[i]+ "</a>");
        //  }


    }
    if (array[0] != null && array[0] != "Nothing") {
        var a = document.createElement('a');
        a.target = '_blank';
        a.href = '/Home/' + array[0];
        a.innerText = array[0];
        a.type = "button";
        a.className = "btn btn-primary";
        ans.append(a);
    }


}

 //$('#quiz').on('submit', function (event) {
 //   event.preventDefault();
 //   var answerbox = document.getElementById('answer');
 //   var array = [];
 //   $("input:checked").each(function () {

 //       if (this.name === 'Symptoms') {


 //           array.push(this.value);
 //       }
 //       if (this.name === 'Industry') {


 //           array.push(this.value);
 //       }
 //       if (this.name === 'Smoke') {
 //           $('#smoker').show();
 //       }

 //   });


 //   $.ajax({
 //       type: 'POST',
 //       dataType: 'json',
 //       url: '@Url.Action("Question", "Questions")',
 //       data: { 'data': array },
 //       success: function (response) {
 //           if (response.list) {
 //               for (let i = 0; i < response.list.length; i++) {

 //                   var link = $("<a>");
 //                   link.attr("href", "~/Home/" + response.list[i]);
 //                   link.text(response.list[i]);
 //                   link.attr("target", "_blank")
 //                   //link.type("button");
 //                   link.addClass("btn btn-primary");

 //                   $("#answer").append(link);


 //                   // $("#answer").append("<a type=button href=# class='btn btn-primary'>" +
 //                   //  response.list[i]+ "</a>");
 //                   //  }


 //               }
 //               $('#image').show();
 //               alert('yes');

 //           }




        // $.get('/QuestionsController/Question', {'data':array}, function (response) {
        // console.log(response);
        // if(response.list) //same result variable we are returning from controller.
        //{
        //     // Let the user download the file he/she requested
        //     console.log("hi");
        //} else {
        //     alert("There is no file assigned to this employee.");
        //     }



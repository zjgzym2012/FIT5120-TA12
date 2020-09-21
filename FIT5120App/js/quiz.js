/*--------loader script-----------*/
$(function(){https://bootsnipp.com/fullscreen/VvrGP
    var loading = $('#loadbar').hide();
    $(document)
    .ajaxStart(function () {
        loading.show();
    }).ajaxStop(function () {
    	loading.hide();
    });

    var questionNo = 0;
    var correctCount = 0;
    var q = [
        { 'Q': 'Which of the following are not the features of Occupational Lung Diseases(OLD)', 'A': 3, 'C': ['msg("Pneumothorax");', 'alert("Chronic Obstructive Pulmonary Disease");','alertBox("Pneumoconiosis");']},
        { 'Q': 'What are the common symptoms of Occupational Lung Diseases(OLDs)?', 'A': 4, 'C': ['Shortness of Breath', 'Coughing', 'Chest pain or chest tightness','All of the above']},
        { 'Q': 'What are the top risky occupations that are more likely to cause Occupational Lung Diseases(OLDs) in Australia?', 'A': 4, 'C': ['Construction', 'Manufacturing', 'Mining','All of the above']},
        { 'Q': 'What is the best possible way to protect oneself from Occupational Lung Diseases(OLDs) at work-place?', 'A': 1, 'C': ['Using Personal Protective Equipment(PPE)', 'Elimination of substances', 'Substitution of substances','Frequent medical check up']},
        { 'Q': 'What is the possible way that the work-place authorities could take to protect their workers from Occupational Lung Diseases(OLDs)', 'A': 1, 'C': ['Elimination of Substances', 'Substitution of Substances', 'Letting workers know about the risk-assessments','Administration Controls']}
    ];

    

    $(document.body).on('click', "label.element-animation", function (e){
    //ripple start
        //var parent, ink, d, x, y;
        // parent = $(this);
        //if(parent.find(".ink").length == 0)
        //    parent.prepend("<span class='ink'></span>");

        //ink = parent.find(".ink");
        //ink.removeClass("animate");

        //if(!ink.height() && !ink.width())
        //{
        //    d = Math.max(parent.outerWidth(), parent.outerHeight());
        //    ink.css({height: "100px", width: "100px"});
        //}

        // x = e.pageX - parent.offset().left - ink.width()/2;
        //y = e.pageY - parent.offset().top - ink.height()/2;

        //ink.css({top: y+'px', left: x+'px'}).addClass("animate");
    //ripple end

        var choice = $(this).parent().find('input:radio').val();
       // var check = $(this).parent().find('input:radio:checked .check').val();
        console.log(choice);
    	var anscheck =  $(this).checking(questionNo, choice);//$( "#answer" ).html(  );
        q[questionNo].UC = choice;
        if(anscheck){
            correctCount++;
            q[questionNo].result = "Correct";

            document.getElementById(choice).style.color = "#5AAC4E";
         //   document.getElementById(check).style.border = "5px solid #5AAC4E";
           // document.getElementById(check).style.backgroundColor = "#5AAC4E";
        } else {
            q[questionNo].result = "Incorrect";
            document.getElementById(choice).style.color = "#FF0000";
           // document.getElementById(check).style.border = "5px solid #FF0000";
           // document.getElementById(check).style.backgroundColor = "#FF0000";
        }
        console.log("CorrectCount:" + correctCount);
        setTimeout(function () {
            //$('#quiz').fadeOut();
            $('#loadbar').show();

            var abcd = '';
            if (choice === '1') {
                abcd = 'A';
            }
            else if (choice === '2') {
                abcd = 'B';
            }
            else if (choice === '3') {
                abcd = 'C';
            }
            else if (choice === '4') {
                abcd = 'D';
            }

            questionNo++;
            if ((questionNo + 0) > q.length) {
                $('label.element-animation').unbind('click');
                setTimeout(function () {
                    var toAppend = '';
                    $.each(q, function (i, a) {
                        toAppend += '<tr>'
                        toAppend += '<td>' + (i + 1) + '</td>';
                        toAppend += '<td>' + a.A + '</td>';
                        toAppend += '<td>' + a.UC + '</td>';
                        toAppend += '<td>' + a.result + '</td>';
                        toAppend += '</tr>'
                    });
                    $('#quizResult').html(toAppend);
                    $('#totalCorrect').html("Total correct: " + correctCount);
                    $('#quizResult').show();
                    $('#loadbar').fadeOut();
                    $('#result-of-question').show();
                    $('#graph-result').show();
                    $('#quiz').fadeOut();
                    //chartMake();
                }, 1000);
            }

            else if (questionNo === 1) {
                document.getElementById("line20").innerHTML = "Your answer: " + abcd;
                document.getElementById("line10").innerHTML = "The correct answer is C.";
                document.getElementById("line1").innerHTML = "Symptoms of OLDs do not continue to last in a person after his work ends. Because symptoms are usually shown in a person in a work-environment when he gets exposed to some hazardous substances, chemicals. When a person gets exposed to these hazardous substances, chemicals the small particles of it come in contact with a person where he breathes it , goes inside the body and starts showing some initial signs of symptoms. After a person leaves the work-environment he does not get exposed to anything and does not show any signs of symptoms.";
                //document.getElementById("line2").innerHTML = "due to various causes of air being filled in the pleural cavity surrounding the lungs. But it is not related with OLDs)";
                $("label.element-animation").css("pointer-events", "none");
                document.getElementById("button").style.display = "block";
                document.getElementById("progressBar").style.width = "20%";
            }
            else if (questionNo === 2) {
                document.getElementById("line20").innerHTML = "Your answer: " + abcd;
                document.getElementById("line10").innerHTML = "The correct answer is D.";
                document.getElementById("line1").innerHTML = "Symptoms of OLDs are very vague, where people can mislead these symptoms into other common diseases most of the time and do not take proper care. Because of this the diseases that are caused due to OLDs are identified at the advanced stages. Some of the diseases and  symptoms that could occur due to OLDs are as follows )";
                document.getElementById("line2").innerHTML = "Asthma - Shortness of breath , Chest pain, Wheezing, Coughing, Run nose and eyes, Sneezing";
                document.getElementById("line3").innerHTML = "COPD - Shortness of breath, Wheezing, Weight loss, Chest Pain, Coughing, Tiredness";
                document.getElementById("line4").innerHTML = "Lung Cancer - Shortness of breath, Persistent of cough, Weight loss, Chest pain, Coughing blood, Hoarse voice, Tiredness";
                document.getElementById("line5").innerHTML = "Pneumoconiosis - Shortness of breath, Phlegm, Coughing,Chest tightness";
                document.getElementById("line6").innerHTML = "Mesothelioma - Shortness of breath, Persistent cough, Excessive sweating, Loss of energy, Chest pain";
                document.getElementById("line7").innerHTML = "Silicosis - Shortness of breath, Persistent cough, Weight loss, Chest pain, Fatigue, Sudden fever, Skin sensitiveness and Swollen legs";
                document.getElementById("line8").innerHTML = "Most of the diseases do have common symptoms. Inorder to confirm a certain disease when you trigger to certain symptoms for a long period, try to consult a doctor and take necessary steps accordingly.";
                $("label.element-animation").css("pointer-events", "none");
                document.getElementById("button").style.display = "block";
                document.getElementById("progressBar").style.width = "40%";
            }
            else if (questionNo === 3) {
                document.getElementById("line20").innerHTML = "Your answer: " + abcd;
                document.getElementById("line10").innerHTML = "The correct answer is D.";
                document.getElementById("line1").innerHTML = "Some of the top risky occupations where most of the people may be triggered to OLDs are Construction, Manufacturing and Mining. These occupations usually have more chances to get in contact with various materials, hazardous substances and chemicals that play a key role in getting any of the OLD and also according to 2020 census of employment data 40% of employed people work in these industries.";
                document.getElementById("line2").innerHTML = "Construction:- Hazardous substances include Lead, Crystalline silica and Asbestos. Lung Diseases include Silicosis and Asbestosis.";
                document.getElementById("line3").innerHTML = "Manufacturing:- Hazardous substances include Silica and Quartz. Lung diseases include Occupational Asthma, COPD and Lung Cancer.";
                document.getElementById("line4").innerHTML = "Mining:- Hazardous substances include Coal, Dust, Silicon Dioxide and Asbestos. Lung Diseases include Silicosis, Pneumoconiosis and Asbestosis.";
                document.getElementById("line5").innerHTML = "Apart from these occupations there are also bakery, foundry,various other occupations that are risky.";
                $("label.element-animation").css("pointer-events", "none");
                document.getElementById("button").style.display = "block";
                document.getElementById("progressBar").style.width = "60%";
            }
            else if (questionNo === 4) {
                document.getElementById("line20").innerHTML = "Your answer: " + abcd;
                document.getElementById("line10").innerHTML = "The correct answer is A.";
                document.getElementById("line1").innerHTML = "Personal Protective Equipment(PPE) includes usage of respirators, gloves, coveralls, goggles e.t.c. Usage of all this by oneself at the work-place could reduce the risk of contact with the hazardous substances thereby reducing the risk of getting triggered to OLDs.";
                document.getElementById("line2").innerHTML = "Elimination or Substitution of substances is what the work-place authorities could do and which is not in the hands of workers.";
                document.getElementById("line3").innerHTML = "Frequent medical check-up is also one of the ways where one would come to know to identify the diseases at the starting stage itself. But this is not the best way to protect oneself from OLDs as most of the time the disease is not identified at the earlier stages.";
                $("label.element-animation").css("pointer-events", "none");
                document.getElementById("button").style.display = "block";
                document.getElementById("progressBar").style.width = "80%";
            }
            else if (questionNo === 5) {
                document.getElementById("line20").innerHTML = "Your answer: " + abcd;
                document.getElementById("line10").innerHTML = "The correct answer is A.";
                document.getElementById("line2").innerHTML = "Even Though all of the above options could make the workers better protect their health at the work-place without getting triggered by OLDs, Elimination of Substances is always the best possible way. Elimination of hazardous substances that would cause risk could be eliminated and alternative substances could be used at the work-place which are friendly substances.";
                document.getElementById("line3").innerHTML = "Substitution of hazardous substances with less harmful substances could still make workers triggered to OLD when the person gets exposed for a long duration to it.";
                document.getElementById("line4").innerHTML = "Letting workers know about the risk assessments can make the workers working in any of the occupation to know in prior itself about the hazardous substances and how they could protect oneself.";
                document.getElementById("line5").innerHTML = "Administrative controls include job rotation, rest periods, shift or location changes.";
                $("label.element-animation").css("pointer-events", "none");
                document.getElementById("button").innerHTML = "See result";
                document.getElementById("button").style.display = "block";
                document.getElementById("progressBar").style.width = "98%";
                
                //document.getElementById("Quiz_container").style.display = "none";
            }


            $(document.body).on('click', "button", function (e) {
                //if (questionNo === 5) {
                //    document.getElementById("Quiz_container").style.display = "none";
                //}
                document.getElementById("button").style.display = "none";
                document.getElementById("line20").innerHTML = "";
                document.getElementById("line10").innerHTML = "";
                document.getElementById("line1").innerHTML = "";
                document.getElementById("line2").innerHTML = "";
                document.getElementById("line3").innerHTML = "";
                document.getElementById("line4").innerHTML = "";
                document.getElementById("line5").innerHTML = "";
                document.getElementById("line6").innerHTML = "";
                document.getElementById("line7").innerHTML = "";
                document.getElementById("line8").innerHTML = "";
                document.getElementById("1").style.color = "#000000";
                document.getElementById("2").style.color = "#000000";
                document.getElementById("3").style.color = "#000000";
                document.getElementById("4").style.color = "#000000";

                if (questionNo === 5) {

                    $('label.element-animation').unbind('click');
                    document.getElementById("allLines").style.display = "none";
                    setTimeout(function () {
                        var toAppend = '';
                        $.each(q, function (i, a) {
                            toAppend += '<tr>'
                            toAppend += '<td>' + (i + 1) + '</td>';
                            toAppend += '<td>' + a.A + '</td>';
                            toAppend += '<td>' + a.UC + '</td>';
                            toAppend += '<td>' + a.result + '</td>';
                            toAppend += '</tr>'
                        });
                        $('#quizResult').html(toAppend);
                        $('#totalCorrect').html("Total correct: " + correctCount);
                        $('#quizResult').show();
                        $('#loadbar').fadeOut();
                        $('#result-of-question').show();
                        $('#graph-result').show();
                        $('#quiz').fadeOut();
                        //document.getElementById("goBack").style.display = "block";
                        //chartMake();
                        if (correctCount >= 3) {
                            document.getElementById("p1").innerHTML = "You got " + correctCount + " out of 5 marks. You are showing a great knowledge with OLDs, keep it up!";
                        }
                        else {
                            document.getElementById("p1").innerHTML = "You got " + correctCount + " out of 5 marks. It seems you are not familiar with OLDs, Check our OLD page for more information!";
                        }
                        document.getElementById("result").style.display = "block";
                        document.getElementById("progressBar").style.width = "100%";


                    }, 1000);
                }

                else {

                
                

                $('#qid').html(questionNo + 1);
                $('input:radio').prop('checked', false);
                setTimeout(function () {
                    //$('#quiz').show();
                    $('#loadbar').fadeOut();
                }, 1500);
                $('#question').html(q[questionNo].Q);
                $($('#f-option').parent().find('label')).html(q[questionNo].C[0]);
                $($('#s-option').parent().find('label')).html(q[questionNo].C[1]);
                $($('#t-option').parent().find('label')).html(q[questionNo].C[2]);
                $("label.element-animation").css("pointer-events", "auto");
                }


            });

            

        }, 10);
    });


    $.fn.checking = function(qstn, ck) {
        var ans = q[questionNo].A;
        if (ck != ans)
            return false;
        else
            return true;
    };

// chartMake();
    //function chartMake(){

    //     var chart = AmCharts.makeChart("chartdiv",
    //        {
    //        "type": "serial",
    //        "theme": "dark",
    //        "dataProvider": [{
    //            "name": "Correct",
    //            "points": correctCount,
    //            "color": "#00FF00",
    //            "bullet": "http://i2.wp.com/img2.wikia.nocookie.net/__cb20131006005440/strategy-empires/images/8/8e/Check_mark_green.png?w=250"
    //        }, {
    //            "name": "Incorrect",
    //            "points":q.length-correctCount,
    //            "color": "red",
    //            "bullet": "http://4vector.com/i/free-vector-x-wrong-cross-no-clip-art_103115_X_Wrong_Cross_No_clip_art_medium.png"
    //        }],
    //        "valueAxes": [{
    //            "maximum": q.length,
    //            "minimum": 0,
    //            "axisAlpha": 0,
    //            "dashLength": 4,
    //            "position": "left"
    //        }],
    //        "startDuration": 1,
    //        "graphs": [{
    //            "balloonText": "<span style='font-size:13px;'>[[category]]: <b>[[value]]</b></span>",
    //            "bulletOffset": 10,
    //            "bulletSize": 52,
    //            "colorField": "color",
    //            "cornerRadiusTop": 8,
    //            "customBulletField": "bullet",
    //            "fillAlphas": 0.8,
    //            "lineAlpha": 0,
    //            "type": "column",
    //            "valueField": "points"
    //        }],
    //        "marginTop": 0,
    //        "marginRight": 0,
    //        "marginLeft": 0,
    //        "marginBottom": 0,
    //        "autoMargins": false,
    //        "categoryField": "name",
    //        "categoryAxis": {
    //            "axisAlpha": 0,
    //            "gridAlpha": 0,
    //            "inside": true,
    //            "tickLength": 0
    //        }
    //    });
    //}
});

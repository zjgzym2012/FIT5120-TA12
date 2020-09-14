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
        { 'Q': 'What diseases do not belong to Occupational Lung Diseases(OLDs)?', 'A': 1, 'C': ['msg("Pneumothorax");', 'alert("Chronic Obstructive Pulmonary Disease");','alertBox("Pneumoconiosis");']},
        { 'Q': 'What are the common symptoms in OLDs?', 'A': 3, 'C': ['Shortness of Breath', 'Chest tightness','All of the above']},
        { 'Q': 'Which of the features of OLDs is not correct?', 'A': 2, 'C': ['It is caused by exposure to or inhalation of a substance related to a specific occupation, and various diseases appear in combination.', 'If OLDs are detected early and receive rapid treatment, lung can be recovered perfectly.','Symptoms usually appear when leaving work, such as retirement or leave of work, rather than while working.']},
        { 'Q': 'Which industry is not associated with OLDs?', 'A': 3, 'C': ['Bakery, Flour and grain industries', 'Agriculture','None the above']},
        { 'Q': 'What is a correct way to prevent OLDs?', 'A': 3, 'C': ['Instead of working for a long time, set aside time and take regular breaks.', 'Always carry inhalers and use them from time to time','Avoid direct occupational exposures as much as possible by wearing a mask and safety gear']}
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
        console.log(choice);
    	var anscheck =  $(this).checking(questionNo, choice);//$( "#answer" ).html(  );
        q[questionNo].UC = choice;
        if(anscheck){
            correctCount++;
            q[questionNo].result = "Correct";
        } else {
            q[questionNo].result = "Incorrect";
        }
        console.log("CorrectCount:" + correctCount);
        setTimeout(function () {
            //$('#quiz').fadeOut();
            $('#loadbar').show();



            questionNo++;
            if ((questionNo + 0) > q.length) {
                //alert("Quiz completed, Now click ok to get your answer");
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
            //else {
            //$('#qid').html(questionNo + 1);
            //$('input:radio').prop('checked', false);
            //setTimeout(function(){
            //    //$('#quiz').show();
            //    $('#loadbar').fadeOut();
            //}, 1500);
            //$('#question').html(q[questionNo].Q);
            //$($('#f-option').parent().find('label')).html(q[questionNo].C[0]);
            //$($('#s-option').parent().find('label')).html(q[questionNo].C[1]);
            //$($('#t-option').parent().find('label')).html(q[questionNo].C[2]);
            //}
            else if (questionNo === 1) {
                document.getElementById("line1").innerHTML = "Answer : A (Pneumothorax is a disease that causes symptoms such as difficulty breathing or chest pain due to various causes of air being filled in the pleural cavity surrounding the lungs. But it is not related with OLDs)";
                $("label.element-animation").css("pointer-events", "none");
                document.getElementById("button").style.display = "block";
            }
            else if (questionNo === 2) {
                document.getElementById("line1").innerHTML = "Answer : C (The common symptoms of OLDS are shortness of breath, chest tightness, chest pain, coughing and so on)";
                $("label.element-animation").css("pointer-events", "none");
                document.getElementById("button").style.display = "block";
            }
            else if (questionNo === 3) {
                document.getElementById("line1").innerHTML = "Answer : C (The common symptoms of OLDS are shortness of breath, chest tightness, chest pain, coughing and so on)";
                $("label.element-animation").css("pointer-events", "none");
                document.getElementById("button").style.display = "block";
            }
            else if (questionNo === 4) {
                document.getElementById("line1").innerHTML = "Answer : C ( Mining, Construction, Manufacturing<battery, textile, brick, ceramic etc>, Foundry, Welders etc are the industries related with OLDs)";
                $("label.element-animation").css("pointer-events", "none");
                document.getElementById("button").style.display = "block";
            }
            else if (questionNo === 5) {
                document.getElementById("line1").innerHTML = "Answer : C (Once the lungs are damaged, it is not possible to fully recover, so it is important to block the triggers in advance. Therefore, it is important to avoid exposures and wear a mask as much as possible)";
                $("label.element-animation").css("pointer-events", "none");
                document.getElementById("button").style.display = "block";
                
                //document.getElementById("Quiz_container").style.display = "none";
            }


            $(document.body).on('click', "button", function (e) {
                //if (questionNo === 5) {
                //    document.getElementById("Quiz_container").style.display = "none";
                //}
                document.getElementById("button").style.display = "none";
                document.getElementById("line1").innerHTML = "";
                document.getElementById("line2").innerHTML = "";

                if (questionNo === 5) {
                    //alert("Quiz completed, Now click ok to get your answer");
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
                        chartMake();
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


                //if (questionNo === 4) {
                //    alert("Quiz completed, Now click ok to get your answer");
                //    $('label.element-animation').unbind('click');
                //    setTimeout(function () {
                //        var toAppend = '';
                //        $.each(q, function (i, a) {
                //            toAppend += '<tr>'
                //            toAppend += '<td>' + (i + 1) + '</td>';
                //            toAppend += '<td>' + a.A + '</td>';
                //            toAppend += '<td>' + a.UC + '</td>';
                //            toAppend += '<td>' + a.result + '</td>';
                //            toAppend += '</tr>'
                //        });
                //        $('#quizResult').html(toAppend);
                //        $('#totalCorrect').html("Total correct: " + correctCount);
                //        $('#quizResult').show();
                //        $('#loadbar').fadeOut();
                //        $('#result-of-question').show();
                //        $('#graph-result').show();
                //        $('#quiz').fadeOut();
                //        chartMake();
                //    }, 1000);
                //}
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
    function chartMake(){

         var chart = AmCharts.makeChart("chartdiv",
            {
            "type": "serial",
            "theme": "dark",
            "dataProvider": [{
                "name": "Correct",
                "points": correctCount,
                "color": "#00FF00",
                "bullet": "http://i2.wp.com/img2.wikia.nocookie.net/__cb20131006005440/strategy-empires/images/8/8e/Check_mark_green.png?w=250"
            }, {
                "name": "Incorrect",
                "points":q.length-correctCount,
                "color": "red",
                "bullet": "http://4vector.com/i/free-vector-x-wrong-cross-no-clip-art_103115_X_Wrong_Cross_No_clip_art_medium.png"
            }],
            "valueAxes": [{
                "maximum": q.length,
                "minimum": 0,
                "axisAlpha": 0,
                "dashLength": 4,
                "position": "left"
            }],
            "startDuration": 1,
            "graphs": [{
                "balloonText": "<span style='font-size:13px;'>[[category]]: <b>[[value]]</b></span>",
                "bulletOffset": 10,
                "bulletSize": 52,
                "colorField": "color",
                "cornerRadiusTop": 8,
                "customBulletField": "bullet",
                "fillAlphas": 0.8,
                "lineAlpha": 0,
                "type": "column",
                "valueField": "points"
            }],
            "marginTop": 0,
            "marginRight": 0,
            "marginLeft": 0,
            "marginBottom": 0,
            "autoMargins": false,
            "categoryField": "name",
            "categoryAxis": {
                "axisAlpha": 0,
                "gridAlpha": 0,
                "inside": true,
                "tickLength": 0
            }
        });
    }
});

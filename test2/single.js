
Survey
    .StylesManager
    .applyTheme("default");

var json = {
    "pages": [
        {
         "name": "page1",
         "elements": [
          {
           "type": "comment",
           "name": "question1",
           "title": "Tell me about the employee"
          },
          {
           "type": "radiogroup",
           "name": "question2",
           "title": "How well did the employee do?",
           "choices": [
            {
             "value": "item1",
             "text": "Excellent"
            },
            {
             "value": "item2",
             "text": "Good"
            },
            {
             "value": "item3",
             "text": "Average"
            },
            {
             "value": "item4",
             "text": "Poor"
            }
           ]
          }
         ]
        },
        {
         "name": "page2",
         "elements": [
          {
           "type": "checkbox",
           "name": "question5",
           "title": "How many time he was absent from work in 1 year?",
           "choices": [
            {
             "value": "item1",
             "text": "0-5"
            },
            {
             "value": "item2",
             "text": "5-10"
            },
            {
             "value": "item3",
             "text": "10+"
            }
           ]
          },
          {
           "type": "radiogroup",
           "name": "question12",
           "title": "Does he have strong leadership skills?",
           "choices": [
            {
             "value": "item1",
             "text": "Yes"
            },
            {
             "value": "item2",
             "text": "No"
            },
            {
             "value": "item3",
             "text": "Average"
            }
           ]
          }
         ]
        },
        {
         "name": "page3",
         "elements": [
          {
           "type": "checkbox",
           "name": "question14",
           "title": "Rate his reliability",
           "choices": [
            {
             "value": "item1",
             "text": "Excellent"
            },
            {
             "value": "item2",
             "text": "Good"
            },
            {
             "value": "item3",
             "text": "Poor"
            }
           ]
          },
          {
           "type": "radiogroup",
           "name": "question13",
           "title": "Is he serious in his work?",
           "choices": [
            {
             "value": "item1",
             "text": "Yes"
            },
            {
             "value": "item2",
             "text": "No"
            }
           ]
          }
         ]
        },
        {
         "name": "page4",
         "elements": [
          {
           "type": "comment",
           "name": "question7",
           "title": "Would you recommend him to us and why?"
          },
          {
           "type": "comment",
           "name": "question9",
           "title": "What are his strongs? "
          }
         ]
        },
        {
         "name": "page5",
         "elements": [
          {
           "type": "comment",
           "name": "question4",
           "title": "What are his weaknesses?"
          },
          {
           "type": "comment",
           "name": "question3",
           "title": "How would you describe him in short?"
          }
         ]
        }
       ],
    completedHtml: "<h4>You have answered correctly <b>{correctedAnswers}</b> questions from <b>{questionCount}</b>.</h4>"
};

window.survey = new Survey.Model(json);

survey
    .onComplete
    .add(function (result) {
        document.location = "singlethanks.html";
    });

$("#surveyElement").Survey({ model: survey });
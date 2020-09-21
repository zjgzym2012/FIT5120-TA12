using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using FIT5120App.Models;

namespace FIT5120App.Controllers
{
    public class QuestionsController : Controller
    {
        private breathebelieveEntities db = new breathebelieveEntities();

        // GET: Questions


     
        public JsonResult Question(List<string> data)
        {
            int length = data.Count;
            var answers = db.Questions.ToList();
            //[industry_name,x,y,z]
            List<string> diseases = new List<string>();
            List<string> symptoms = new List<string>();
            string industry_name;

            for (int y = 1; y < length; y++)
            {

                symptoms.Add(data[y]);

            }
            industry_name = data[0];

            foreach (var i in answers)
            {
                for (int y = 0; y < length - 1; y++)
                {

                    if (i.Industry_name.Contains(industry_name) && i.Symptom.Contains(symptoms[y]))
                    {

                        diseases.Add(i.Disease_name);
                        Console.WriteLine(i.Disease_name);
                        break;
                    }

                }


            }
            return Json(new
            {
                list = diseases
            });

        }

    }
}

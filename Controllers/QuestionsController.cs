using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using FIT5120App.Models;
using Microsoft.Data.SqlClient;
using System.Text;

namespace FIT5120App.Controllers
{
    public class QuestionsController : Controller
    {
        private breathebelieveEntities db = new breathebelieveEntities();

        // GET: Questions

        static void Main(string[] args)
        {
           
        }

        public JsonResult Question(List<string> data)
        {
            List<string> diseases = new List<string>();
            //{
            //    int length = data.Count;
            //    var answers = db.Questions.ToList();
            //    //[industry_name,x,y,z]
            //    List<string> diseases = new List<string>();
            //    List<string> symptoms = new List<string>();
            //    string industry_name;

            //    for (int y = 1; y < length; y++)
            //    {

            //        symptoms.Add(data[y]);

            //    }
            //    industry_name = data[0];

            //    foreach (var i in answers)
            //    {
            //        for (int y = 0; y < length - 1; y++)
            //        {

            //            if (i.Industry_name.Contains(industry_name) && i.Symptom.Contains(symptoms[y]))
            //            {

            //                diseases.Add(i.Disease_name);
            //                Console.WriteLine(i.Disease_name);
            //                break;
            //            }

            //        }


            //    }


            try
            {
                SqlConnectionStringBuilder builder = new SqlConnectionStringBuilder();
                builder.DataSource = "question.database.windows.net";
                builder.UserID = "bmanasie";
                builder.Password = "Anita@123";
                builder.InitialCatalog = "Questions";
                
                using (SqlConnection connection = new SqlConnection(builder.ConnectionString))
                {
                    Console.WriteLine("\nQuery data example:");
                    Console.WriteLine("=========================================\n");

                    StringBuilder sb = new StringBuilder();
                    sb.Append("SELECT TOP 20 q.Disease as Name, q.Symptoms as symp ");
                    sb.Append("FROM [Questions].[Diseases] q ");

                    String sql = sb.ToString();

                    using (SqlCommand command = new SqlCommand(sql, connection))
                    {
                        connection.Open();
                        using (SqlDataReader reader = command.ExecuteReader())
                        {
                            while (reader.Read())
                            {
                                Console.WriteLine("{0} {1}", reader.GetString(0), reader.GetString(1));
                                diseases.Add(reader.GetString(0));
                            }
                        }
                    }
                }
            }
            catch (SqlException e)
            {
                Console.WriteLine(e.ToString());
            }
            Console.ReadLine();
            return Json(new
            {
                list = diseases
            });

        }

    }
}

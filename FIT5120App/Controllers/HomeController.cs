using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace FIT5120App.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }

        public ActionResult ViewDiseases()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
        public ActionResult Industries()
        {
            return View();
        }
        public ActionResult Mining()
        {
            return View();
        }
        public ActionResult Manufacturing()
        {
            return View();
        }
        public ActionResult Construction()
        {
            return View();
        }
        public ActionResult Asthma()
        {
            return View();
        }
    }
}
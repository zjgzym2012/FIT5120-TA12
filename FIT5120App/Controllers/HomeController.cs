using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace FIT5120App.Controllers
{

    [BasicAuthenticationAttribute("your-username", "your-password", 
    BasicRealm = "your-realm")]
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
        public ActionResult LungCancer()
        {
            return View();
        }
        public ActionResult COPD()
        {
            return View();
        }
        public ActionResult Asbestosis()
        {
            return View();
        }
        public ActionResult Silicosis()
        {
            return View();
        }
        public ActionResult Mesothelioma()
        {
            return View();
        }
        public ActionResult Pneumoconiosis()
        {
            return View();
        }
        public ActionResult Quiz()
        {
            return View();
        }
        public ActionResult Questionnaire()
        {
            return View();
        }

        public ActionResult test()
        {
            return View();
        }
    }

    public class BasicAuthenticationAttribute : ActionFilterAttribute
    {
        public string BasicRealm { get; set; }
        protected string Username { get; set; }
        protected string Password { get; set; }

        public BasicAuthenticationAttribute(string username, string password)
        {
            this.Username = "admin";
            this.Password = "123";
        }


        public override void OnActionExecuting(ActionExecutingContext filterContext)
        {
            var req = filterContext.HttpContext.Request;
            var auth = req.Headers["Authorization"];
            if (!String.IsNullOrEmpty(auth))
            {
                var cred = System.Text.ASCIIEncoding.ASCII.GetString(Convert.FromBase64String(auth.Substring(6))).Split(':');
                var user = new { Name = cred[0], Pass = cred[1] };
                if (user.Name == Username && user.Pass == Password) return;
            }
            filterContext.HttpContext.Response.AddHeader("WWW-Authenticate", String.Format("Basic realm=\"{0}\"", BasicRealm ?? "Ryadel"));
            /// thanks to eismanpat for this line: http://www.ryadel.com/en/http-basic-authentication-asp-net-mvc-using-custom-actionfilter/#comment-2507605761
            filterContext.Result = new HttpUnauthorizedResult();
        }
    }

}
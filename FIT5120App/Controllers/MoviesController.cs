using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using FIT5120App.Models;

namespace FIT5120App.Controllers
{
    public class MoviesController : Controller
    {
        // GET: Movies/Random
        public ActionResult Random()
        {
            var movie = new Movie() { Name = "Shelk!" ,Id = 1};
            return View(movie);
        }
    }
}
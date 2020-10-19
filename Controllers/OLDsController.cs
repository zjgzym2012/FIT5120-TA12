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
    public class OLDsController : Controller
    {
        private breathebelieveEntities1 db = new breathebelieveEntities1();

        // GET: OLDs
        public ActionResult Index()
        {
            return View(db.OLDs.ToList());
        }

        // GET: OLDs/Details/5
        public ActionResult Details(string id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            OLD oLD = db.OLDs.Find(id);
            if (oLD == null)
            {
                return HttpNotFound();
            }
            return View(oLD);
        }

        // GET: OLDs/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: OLDs/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "Disease_Name,Disease_Description")] OLD oLD)
        {
            if (ModelState.IsValid)
            {
                db.OLDs.Add(oLD);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            return View(oLD);
        }

        // GET: OLDs/Edit/5
        public ActionResult Edit(string id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            OLD oLD = db.OLDs.Find(id);
            if (oLD == null)
            {
                return HttpNotFound();
            }
            return View(oLD);
        }

        // POST: OLDs/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "Disease_Name,Disease_Description")] OLD oLD)
        {
            if (ModelState.IsValid)
            {
                db.Entry(oLD).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            return View(oLD);
        }

        // GET: OLDs/Delete/5
        public ActionResult Delete(string id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            OLD oLD = db.OLDs.Find(id);
            if (oLD == null)
            {
                return HttpNotFound();
            }
            return View(oLD);
        }

        // POST: OLDs/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(string id)
        {
            OLD oLD = db.OLDs.Find(id);
            db.OLDs.Remove(oLD);
            db.SaveChanges();
            return RedirectToAction("Index");
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }
    }
}

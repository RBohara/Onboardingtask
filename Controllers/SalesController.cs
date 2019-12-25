using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using OnboardingTask.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace OnboardingTask.Controllers
{
    [Route("api/[controller]")]
    public class SalesController : Controller
    {
        SalesDataAccessLayer obj = new SalesDataAccessLayer();
        // GET: api/<controller>
        [HttpGet]
        [Route("Index")]
        public IEnumerable<Sales> Index()
        {
            return obj.GetAllSales();
        }

        // GET api/<controller>/5
        [HttpGet("{id}")]
        public Sales Details(int id)
        {
            return obj.GetSalesData(id);
        }

        // POST api/<controller>
        [HttpPost]
        [Route("Create")]
        public int Create(Sales sales)
        {
            return obj.CreateSales(sales);
        }

        // PUT api/<controller>/5
        [HttpPut]
        [Route("Edit")]
        public int Edit(Sales sales)
        {
            return obj.UpdateSales(sales);
        }

        // DELETE api/<controller>/5
        [HttpDelete]
        [Route("{id}")]
        public int Delete(int id)
        {
            return obj.DeleteSales(id);
        }
    }
}

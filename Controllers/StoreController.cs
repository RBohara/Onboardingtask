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
    public class StoreController : Controller
    {
        StoreDataAccessLayer obj = new StoreDataAccessLayer();
        // GET: api/<controller>
        [HttpGet]
        [Route("Index")]
        public IEnumerable<Store> Index()
        {
            return obj.GetAllStores();
        }

        // GET api/<controller>/5
        [HttpGet("{id}")]
        public Store Details(int id)
        {
            return obj.GetStoreData(id);
        }

        // POST api/<controller>
        [HttpPost]
        [Route("Create")]
        public int Create(Store store)
        {
            return obj.CreateStore(store);
        }

        // PUT api/<controller>/5
        [HttpPut]
        [Route("Edit")]
        public int Edit(Store store)
        {
            return obj.UpdateStore(store);
        }

        // DELETE api/<controller>/5
        [HttpDelete]
        [Route("{id}")]
        public int Delete(int id)
        {
            return obj.DeleteStore(id);
        }
    }
}

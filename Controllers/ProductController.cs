using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using OnboardingTask.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace OnboardingTask.Controllers
{
    [Route("api/Product")]
    public class ProductController : Controller
    {

        ProductDataAccessLayer obj = new ProductDataAccessLayer();
        // GET: api/<controller>
        [HttpGet]
        [Route("Index")]
        public IEnumerable<Product> Index()
        {
            return obj.GetAllProducts();
        }

        // GET api/<controller>/5
        [HttpGet("{id}")]
        public Product Details(int id)
        {
            return obj.GetProductData(id);
        }

        // POST api/<controller>
        [HttpPost]
        [Route("Create")]
        public int Create(Product product)
        {
            return obj.CreateProduct(product);
        }

        // PUT api/<controller>/5
        [HttpPut]
        [Route("Edit")]
        public int Edit(Product product)
        {
            return obj.UpdateProduct(product);
        }

        // DELETE api/<controller>/5
        [HttpDelete]
        [Route("{id}")]
        public int Delete(int id)
        {
            return obj.DeleteProduct(id);
        }
    }
}

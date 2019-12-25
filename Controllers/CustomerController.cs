using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using OnboardingTask.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace OnboardingTask.Controllers
{
    [Route("api/Customer")]
    public class CustomerController : Controller
    {

        CustomerDataAccessLayer obj = new CustomerDataAccessLayer();
        // GET: api/<controller>
        [HttpGet]
        [Route("Index")]
        public IEnumerable<Customer> Index()
        {
            return obj.GetAllCustomers();
        }

        // GET api/<controller>/5
        [HttpGet("{id}")]
        public Customer Details(int id)
        {
            return obj.GetCustomerData(id);
        }

        // POST api/<controller>
        [HttpPost]
        [Route("Create")]
        public int Create(Customer customer)
        {
            return obj.CreateCustomer(customer);
        }

        // PUT api/<controller>/5
        [HttpPut]
        [Route("Edit")]
        public int Edit(Customer customer)
        {
            return obj.UpdateCustomer(customer);
        }

        // DELETE api/<controller>/5
        [HttpDelete]
        [Route("{id}")]
        public int Delete(int id)
        {
            return obj.DeleteCustomer(id);
        }
    }
}

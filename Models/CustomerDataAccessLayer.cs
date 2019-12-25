using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OnboardingTask.Models
{
    public class CustomerDataAccessLayer
    {
        OnboardingTaskContext db = new OnboardingTaskContext();

        // retrieves all the record of customer
        public IEnumerable<Customer> GetAllCustomers()
        {
            return db.Customer.ToList();
        }

        // add new customer to the database
        public int CreateCustomer(Customer customer)
        {
            db.Customer.Add(customer);
            db.SaveChanges();
            return 1;
        }
        
        // update existing customer record
        public int UpdateCustomer(Customer customer)
        {
            db.Entry(customer).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
            db.SaveChanges();
            return 1;
        }

        // get the details of the specific customer
        public Customer GetCustomerData(int id)
        {
            Customer customer = db.Customer.Find(id);
            return customer;
        }

        // delete the specific customer
        public int DeleteCustomer(int id)
        {
            Customer customer = db.Customer.Find(id);
            db.Customer.Remove(customer);
            db.SaveChanges();
            return 1;
        }



    }
}

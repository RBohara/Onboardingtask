using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OnboardingTask.Models
{
    public class ProductDataAccessLayer
    {

        OnboardingTaskContext db = new OnboardingTaskContext();

        // retrieves all the record of product
        public IEnumerable<Product> GetAllProducts()
        {
            return db.Product.ToList();
        }

        // add new product to the database
        public int CreateProduct(Product product)
        {
            db.Product.Add(product);
            db.SaveChanges();
            return 1;
        }

        // update existing product record
        public int UpdateProduct(Product product)
        {
            db.Entry(product).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
            db.SaveChanges();
            return 1;
        }

        // get the details of the specific product
        public Product GetProductData(int id)
        {
            Product product = db.Product.Find(id);
            return product;
        }

        // delete the specific product
        public int DeleteProduct(int id)
        {
            Product product = db.Product.Find(id);
            db.Product.Remove(product);
            db.SaveChanges();
            return 1;
        }

    }
}

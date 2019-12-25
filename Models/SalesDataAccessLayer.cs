using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OnboardingTask.Models
{
    public class SalesDataAccessLayer
    {

        OnboardingTaskContext db = new OnboardingTaskContext();

        // retrieves all the record of sales
        public IEnumerable<Sales> GetAllSales()
        {
            return db.Sales.ToList();
        }

        // add new sales to the database
        public int CreateSales(Sales sales)
        {
            db.Sales.Add(sales);
            db.SaveChanges();
            return 1;
        }

        // update existing sales record
        public int UpdateSales(Sales sales)
        {
            db.Entry(sales).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
            db.SaveChanges();
            return 1;
        }

        // get the details of the specific sales
        public Sales GetSalesData(int id)
        {
            Sales sales = db.Sales.Find(id);
            return sales;
        }

        // delete the specific sales
        public int DeleteSales(int id)
        {
            Sales sales = db.Sales.Find(id);
            db.Sales.Remove(sales);
            db.SaveChanges();
            return 1;
        }

    }
}

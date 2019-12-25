using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OnboardingTask.Models
{
    public class StoreDataAccessLayer
    {

        OnboardingTaskContext db = new OnboardingTaskContext();

        // retrieves all the record of store
        public IEnumerable<Store> GetAllStores()
        {
            return db.Store.ToList();
        }

        // add new store to the database
        public int CreateStore(Store store)
        {
            db.Store.Add(store);
            db.SaveChanges();
            return 1;
        }

        // update existing store record
        public int UpdateStore(Store store)
        {
            db.Entry(store).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
            db.SaveChanges();
            return 1;
        }

        // get the details of the specific store
        public Store GetStoreData(int id)
        {
            Store store = db.Store.Find(id);
            return store;
        }

        // delete the specific store
        public int DeleteStore(int id)
        {
            Store store = db.Store.Find(id);
            db.Store.Remove(store);
            db.SaveChanges();
            return 1;
        }

    }
}

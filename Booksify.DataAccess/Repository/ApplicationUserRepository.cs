using Booksify.DataAccess.Data;
using Booksify.DataAccess.Repository.IRepository;
using Booksify.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Booksify.DataAccess.Repository
{
    public class ApplicationUserRepository : Repository<ApplicationUser>, IApplicationUserRepository
    {
        private readonly ApplicationDbContext _db;

        public ApplicationUserRepository(ApplicationDbContext db) : base(db)
        {
            _db = db;
        }

    }
}

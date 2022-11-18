//using finalAssestment.net.Models;
//using finalAssestment.net.repositories;
//using Microsoft.AspNetCore.Http;
//using Microsoft.AspNetCore.Mvc;
//using System.ComponentModel.DataAnnotations;
//using System.Security.Cryptography.X509Certificates;

//namespace finalAssestment.net.Controllers
//{
//    [Route("api/[controller]")]
//    [ApiController]
//    public class Controller : ControllerBase
//    {
//        private readonly IRepositorys repository;

//        public Controller(IRepositorys repository)
//        {
//            this.repository = repository;
//        }
//        [HttpGet]
//        public async Task<IActionResult> GetAllOwners() {
//            return Ok(await repository.GetAllOwners());
//        }
//        [HttpGet("{id}")]
//        public async Task<IActionResult> GetOwnerDetails(int id)
//        {
//            return Ok(await repository.GetOwnersDetails(id));
//        }
//        [HttpPost]
//        public async Task<IActionResult> CreateOwner([FromBody] Owners owner) {
//            if (owner == null) 
//            return BadRequest();
            
//            if(!ModelState.IsValid) 
//                return BadRequest(ModelState);
//            var created = await repository.InsertOwner(owner);
//            return Created("Created", created);
//        }
//        [HttpPut]
//        public async Task<IActionResult> UpdateOwner([FromBody] Owners owner) {
//            {
//                if (owner == null)
//                    return BadRequest();

//                if (!ModelState.IsValid)
//                    return BadRequest(ModelState);
//                var created = await repository.UpdateOwner(owner);
//                return NoContent();
//            }
            
            
            
//        }
        
//      //  public async Task<IActionResult> DeleteOwner(int id) {
//      //  await 
        
//      //  }

//    }
//}

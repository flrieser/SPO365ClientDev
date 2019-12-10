using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace SkillsApi
{
    [Route("api/[controller]")]
    [ApiController]
    public class OpenController : ControllerBase
    {
        public OpenController()
        {
        }

        // GET api/open
        [HttpGet()]
        public ActionResult<string> GetHelloWorld()
        {
            return "Hello World";
        }
    }
}
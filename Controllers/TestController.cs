﻿using Microsoft.AspNetCore.Mvc;

namespace ModelRiskDemo2.Controllers;

[ApiController]
[Route("[controller]")]
public class TestController: ControllerBase
{
    [HttpGet]
    public string Get()
    {
        return "sss";

    }
}
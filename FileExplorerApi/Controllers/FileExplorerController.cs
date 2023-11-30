// Controllers/FileExplorerController.cs
using Microsoft.AspNetCore.Mvc;
using System;

//[ApiController]
//[Route("api/fileexplorer")]
//public class FileExplorerController : ControllerBase
//{
//    private readonly FileService _fileService;

//    public FileExplorerController(FileService fileService)
//    {
//        _fileService = fileService;
//    }

//    [HttpGet]
//    public IActionResult GetFilesAndFolders(string folderPath)
//    {
//        try
//        {
//            var filesAndFolders = _fileService.GetFilesAndFolders(folderPath);
//            return Ok(filesAndFolders);
//        }
//        catch (Exception ex)
//        {
//            return BadRequest($"Error: {ex.Message}");
//        }
//    }
//}
// Controllers/FileExplorerController.cs
[ApiController]
[Route("api/fileexplorer")]
public class FileExplorerController : ControllerBase
{
    private readonly FileService _fileService;

    public FileExplorerController(FileService fileService)
    {
        _fileService = fileService;
    }

    [HttpGet]
    public IActionResult GetFilesAndFolders(string folderPath)
    {
        try
        {
            var filesAndFolders = _fileService.GetFilesAndFolders(folderPath);
            return Ok(filesAndFolders);
        }
        catch (Exception ex)
        {
            return BadRequest($"Error: {ex.Message}");
        }
    }
}


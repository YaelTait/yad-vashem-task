// Services/FileService.cs
//// Services/FileService.cs
using FileExplorerApi.Models;
using System.Collections.Generic;
using System.IO;
using System.Linq;
// Services/FileService.cs
// Services/FileService.cs
// Services/FileService.cs
public class FileService
{
    public IEnumerable<FileModel> GetFilesAndFolders(string folderPath)
    {
        var result = new List<FileModel>();
        ProcessFolder(folderPath, result);
        return result;
    }

    private void ProcessFolder(string folderPath, List<FileModel> result)
    {
        var folderModel = GetFolderModelFromPath(folderPath);
        result.Add(folderModel);

        var files = Directory.GetFiles(folderPath).Select(GetFileModelFromPath);
        folderModel.Children.AddRange(files);

        var folders = Directory.GetDirectories(folderPath);
        foreach (var subfolder in folders)
        {
            ProcessFolder(subfolder, folderModel.Children);
        }
    }

    private FileModel GetFileModelFromPath(string filePath)
    {
        var fileInfo = new FileInfo(filePath);

        return new FileModel
        {
            Name = fileInfo.Name,
            Type = fileInfo.Extension,
            Path = fileInfo.FullName,
            IsDirectory = false, // This is a file
            Children = new List<FileModel>() // Files don't have children
        };
    }

    private FileModel GetFolderModelFromPath(string folderPath)
    {
        var folderInfo = new DirectoryInfo(folderPath);

        return new FileModel
        {
            Name = folderInfo.Name,
            Type = "", // Folders don't have extensions
            Path = folderInfo.FullName,
            IsDirectory = true, // This is a directory
            Children = new List<FileModel>() // Initialize with an empty list for children
        };
    }
}




//// Services/FileService.cs
//using FileExplorerApi.Models;
//using System.Collections.Generic;
//using System.IO;
//using System.Linq;

//public class FileService
//{
//    public IEnumerable<FileModel> GetFilesAndFolders(string folderPath)
//    {
//        var files = Directory.GetFiles(folderPath).Select(GetFileModel);
//        var folders = Directory.GetDirectories(folderPath).Select(GetFileModel);

//        return folders.Concat(files);
//    }

//    private FileModel GetFileModel(string filePath)
//    {
//        //var isDirectory = (File.GetAttributes(filePath) & FileAttributes.Directory) == FileAttributes.Directory;
//        var fileInfo = new FileInfo(filePath);
//        return new FileModel
//        {
//            Name = fileInfo.Name,
//            Type = fileInfo.Extension,
//            Path = fileInfo.FullName,
//            isDirectory = Directory.Exists(filePath)
//        };
//    }
//}


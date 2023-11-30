using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FileExplorerApi.Models
{
    // Models/FileModel.cs
    public class FileModel
    {
        public string Name { get; set; }
        public string Type { get; set; }
        public string Path { get; set; }
        public bool IsDirectory { get; set; }
        public List<FileModel> Children { get; set; } = new List<FileModel>();
    }

}

# yad-vashem-task
i choose to bring all files and subfolders in one server call


1. **Reduced Server Calls:**
   - Bringing all files and subfolders in one server call reduces the number of requests made to the server. This can be beneficial for performance, especially when dealing with a relatively small amount of data.

2. **Faster Initial Loading:**
   - Since all the data is fetched at once, the initial loading of the application is likely to be faster. This is because the client doesn't need to make additional server requests when expanding folders.

from the other hand,

1. **Increased Initial Payload:**
   - Fetching all files and subfolders in one go might result in a larger initial payload, especially if there are a lot of files or the files themselves are large. This could impact the initial loading time, especially on slower network connections.

2. **Potential Overhead:**
   - If the server call retrieves more data than needed for the initial view, there might be some unnecessary overhead.


Given that the project is a local project  with a relatively small amount of data, the advantages of reduced server calls, faster initial loading, and simplified client-side logic outweigh the potential downsides.

Since performance is not a critical concern for this particular project, and the data size is manageable, the simplicity of loading all data at once and avoiding multiple server calls makes the implementation straightforward and suitable for the context of a homework assignment.

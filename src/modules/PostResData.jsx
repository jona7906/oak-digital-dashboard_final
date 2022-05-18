function PostResData(servername, testtime, restime) {
  
    // console.log("UPLOADIING RES DATA!!!")

   let resData = {
    server: servername,
    timestamp: testtime,
    restime: restime
} 

    fetch("", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        "x-api-key": "627bd9e1e8128861fcf3d227",
        "cache-control": "no-cache",
        
      },
      body: resData,json: true 
    })
      .then((res) => res.json())
      .then((data) => console.log(`${data}`));
  }

  export default PostResData;
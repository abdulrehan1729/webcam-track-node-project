if(navigator.webkitGetUserMedia!=null) { 
    var options = { 
        video:true, 
        audio:false 
    }; 
     
    //request webcam access 
    navigator.webkitGetUserMedia(options, 
        function(stream) { 
            //get the video tag 
            var video = document.querySelector('video'); 
            //turn the stream into a magic URL 
            video.src = window.webkitURL.createObjectURL(stream); 
        }, 
        function(e) { 
            console.log("error happened"); 
        } 
    ); 
    }
    
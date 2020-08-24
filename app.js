
      function mail(){
        var userEmail= document.getElementById("btn");
        if(userEmail == ""+"@gmail.com"){
          alert("Thank you for signing up! You'll receive a welcome email soon.")
          mail();
        }
        else{
          alert("please enter a valid email address")
        }
      }

      $('.carousel').carousel({
        interval : 3000,
        pause :'hover'
      });
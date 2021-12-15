
         //function that display value
         function display(y)
         {
             let x = document.getElementById("result").value;

             x=x+y;

             document.getElementById("result").value=x;
         }
           
         //function that evaluates the digit and return result
         function solve()
         {
             let x = document.getElementById("result").value;
             let y = eval(x);
             document.getElementById("result").value = y;
         }
           
         //function that clear the display
         function clr()
         {
             document.getElementById("result").value = "";
         }

         function percent()
         {
             let x = document.getElementById("result").value;

            let result;
            result= x / 100;
            document.getElementById("result").value = result;

         }

         function signed()
         {
            let x = document.getElementById("result").value;
            let result;

            result=x*(-1);
            document.getElementById("result").value = result;
         }
        


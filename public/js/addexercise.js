$(document).ready(function(){
    $('.add-exercise').on('click', async function(){
     
      console.log("button was presses")
       console.log('working', $(this).attr('id'))
       const id = $(this).attr('id')

       const response = await fetch('/api/add/'+id, {
        method: 'POST',
        
        // body: JSON.stringify({ email, password }),
        // headers: { 'Content-Type': 'application/json' },
      });
      

    })
    
    
    console.log("hello");
    
})

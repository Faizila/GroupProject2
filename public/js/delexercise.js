$(document).ready(function(){
    $('.del-exercise').on('click', async function(){
     
      console.log("button was presses")
       console.log('working', $(this).attr('id'))
       const id = $(this).attr('id')

       const response = await fetch('/api/del/'+id, {
        method: 'DELETE',

      });
      

    })

    
});

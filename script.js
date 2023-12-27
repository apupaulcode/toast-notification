let toastBox = document.getElementById('toastBox');

let successMsg = '<i class="fa-solid fa-circle-check"></i> Submitted Successfully';
let errorMssg = '<i class="fa-solid fa-circle-xmark"></i> An error has occured';
let invalidmsg = '<i class="fa-solid fa-circle-exclamation"></i> Invalid input';





function showToast(msg){
   let toast = document.createElement('div');
   toast.classList.add('toast');
   toast.innerHTML = msg;
   toastBox.appendChild(toast);
   if(msg.includes('error')){
      toast.classList.add('error')
   }
   if(msg.includes('Invalid')){
      toast.classList.add('invalid')
   }

   setTimeout(() => {
      toast.remove();
   }, 6000);
}
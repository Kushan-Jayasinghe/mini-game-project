const Player = document.getElementById('player');
const Ground = document.getElementById('ground');
const Play = document.getElementById('play');


console.log(Player, Ground);

// Player.addEventListener("keydown", function(event) {
    
//     if (event.key === "Enter") {
//       // Cancel the default action, if needed
//       event.preventDefault();
//       // Trigger the button element with a click
//      Player.click();
//     }
//   }); 

let dx=0;
let index=0;
// setInterval(()=>{
//     if (dx !==0){
//         Player.style.backgroundImage = `url('../img/ninjaadventurenew/png/Run__00${index++}.png')`;

//     }else if(dy !==0){
//         Player.style.backgroundImage = `url('../img/ninjaadventurenew/png/Jump__00${index++}.png')`;

//     }else{
//         Player.style.backgroundImage = `url('../img/ninjaadventurenew/png/Idle__00${index++}.png')`;
//     }
    
//     if (index>9) index=1;
//     if ((Player.offsetLeft + Player.offsetWidth) > innerWidth -dx){
//         dx=0
//         Player.style.left = `${innerWidth -offsetWidth}px`;
//     }else if(Player.offsetLeft < 0) {
//         dx=0;
//         Player.style.left='0';

//     }
        

    

    
//     Player.style.left=`${Player.offsetLeft + dx }px`;

// },17);
const draw= ()=>{
            if (dx !==0){
                Player.style.backgroundImage = `url('img/ninjaadventurenew/png/Run__00${index++}.png')`;
        
            }else if(dy !==0){
                Player.style.backgroundImage = `url('img/ninjaadventurenew/png/Jump__00${index++}.png')`;
        
            }else{
                Player.style.backgroundImage = `url('img/ninjaadventurenew/png/Idle__00${index++}.png')`;
            }
            
            if (index>9) index=1;
            if ((Player.offsetLeft + Player.offsetWidth) > innerWidth -dx){
                dx=0
                Player.style.left = `${innerWidth -offsetWidth}px`;
            }else if(Player.offsetLeft < 0) {
                dx=0;
                Player.style.left='0';
        
            }
                
        
            
        
            
            Player.style.left=`${Player.offsetLeft + dx }px`;
            requestAnimationFrame(draw);

}



addEventListener('keydown',({key})=>{
    if (key === 'ArrowRight'){
        // console.log("right arrow down");
        index=1;
        Player.classList.remove('turn')
        dx=10;

    }else if(key=== 'ArrowLeft'){
        // console.log('Left arrow down')
        index=1;
        Player.classList.add('turn')
        dx=-10;
    }
});

addEventListener('keyup',({key})=>{
    if (key === 'ArrowRight' || key === 'ArrowLeft'){
       dx=0;

    }
});

let dy=2;
let acceleration =0.3;
// setInterval(()=>{
    
//     dy+=acceleration;
//     if((Player.offsetTop +Player.offsetHeight)> Ground.offsetTop ){
//         dy=0;
//         Player.style.top=`${Ground.offsetTop - Player.offsetHeight }px`;
//         acceleration=0;
//     } //else if(Player.offsetTop < 0) {
//     //     dy=10;
//     //     Player.style.bottom='0';

//     // }

//     Player.style.top=`${Player.offsetTop + dy}px`;
    
// },30);
const animate = ()=>{
    dy+=acceleration;
        if((Player.offsetTop +Player.offsetHeight)> Ground.offsetTop ){
            dy=0;
            Player.style.top=`${Ground.offsetTop - Player.offsetHeight }px`;
            acceleration=0;
        } //else if(Player.offsetTop < 0) {
        //     dy=10;
        //     Player.style.bottom='0';
    
        // }
    
        Player.style.top=`${Player.offsetTop + dy}px`;
        requestAnimationFrame(animate);
        
}
// addEventListener('keydown',({key})=>{
//     if (key === 'ArrowUp'){
//         // console.log("right arrow down");
//         dy=-10;

//     }
// });

addEventListener('keypress',({key})=>{
    if (key === ' '){
        // console.log("right arrow down");
        index=1;
        dy=-10;
        acceleration=0.3
    }
    
});

requestAnimationFrame(draw);
requestAnimationFrame(animate);

let j=0;
let t1=0;

function repaint(timestamp){
    if(!t1) t1 = timestamp;
    const diff = timestamp -t1 ;
    if (diff >= (interval * 1000)){
        t1=timestamp;
    }
    console.log('painted' + j++, timestamp);
    requestAnimationFrame(repaint);
}
requestAnimationFrame(repaint);


// ===================================================================================================================

let dx1=0;
let index1=0;
// setInterval(()=>{
//     if (dx !==0){
//         Player.style.backgroundImage = `url('../img/ninjaadventurenew/png/Run__00${index++}.png')`;

//     }else if(dy !==0){
//         Player.style.backgroundImage = `url('../img/ninjaadventurenew/png/Jump__00${index++}.png')`;

//     }else{
//         Player.style.backgroundImage = `url('../img/ninjaadventurenew/png/Idle__00${index++}.png')`;
//     }
    
//     if (index>9) index=1;
//     if ((Player.offsetLeft + Player.offsetWidth) > innerWidth -dx){
//         dx=0
//         Player.style.left = `${innerWidth -offsetWidth}px`;
//     }else if(Player.offsetLeft < 0) {
//         dx=0;
//         Player.style.left='0';

//     }
        

    

    
//     Player.style.left=`${Player.offsetLeft + dx }px`;

// },17);
const draw1= ()=>{
            if (dx1 !==0){
                Play.style.backgroundImage = `url('img/ninjaadventurenew/png/Run__00${index++}.png')`;
        
            }else if(dy1 !==0){
                Play.style.backgroundImage = `url('img/ninjaadventurenew/png/Jump__00${index++}.png')`;
        
            }else{
                Play.style.backgroundImage = `url('img/ninjaadventurenew/png/Attack__00${index++}.png')`;
            }
            
            if (index1>9) index1=1;
            if ((Play.offsetLeft + Play.offsetWidth) > innerWidth -dx1){
                dx1=0
                Play.style.left = `${innerWidth -offsetWidth}px`;
            }else if(Play.offsetLeft < 0) {
                dx1=0;
                Play.style.left='0';
        
            }
                
        
            
        
            
            Play.style.left=`${Play.offsetLeft + dx1 }px`;
            requestAnimationFrame(draw1);

}



addEventListener('keydown',({key})=>{
    if (key === 'ArrowLeft'){
        // console.log("right arrow down");
        index1=1;
        Play.classList.remove('turn')
        dx1=10;

    }else if(key=== 'ArrowRight'){
        // console.log('Left arrow down')
        index1=1;
        Play.classList.add('turn')
        dx1=-10;
    }
});

addEventListener('keyup',({key})=>{
    if (key === 'ArrowRight' || key === 'ArrowLeft'){
       dx1=0;

    }
});

let dy1=2;
let acceleration1 =0.3;
// setInterval(()=>{
    
//     dy+=acceleration;
//     if((Player.offsetTop +Player.offsetHeight)> Ground.offsetTop ){
//         dy=0;
//         Player.style.top=`${Ground.offsetTop - Player.offsetHeight }px`;
//         acceleration=0;
//     } //else if(Player.offsetTop < 0) {
//     //     dy=10;
//     //     Player.style.bottom='0';

//     // }

//     Player.style.top=`${Player.offsetTop + dy}px`;
    
// },30);
const animate1 = ()=>{
    dy1+=acceleration1;
        if((Play.offsetTop +Play.offsetHeight)> Ground.offsetTop ){
            dy1=0;
            Play.style.top=`${Ground.offsetTop - Play.offsetHeight }px`;
            acceleration1=0;
        } //else if(Player.offsetTop < 0) {
        //     dy=10;
        //     Player.style.bottom='0';
    
        // }
    
        Play.style.top=`${Play.offsetTop + dy1}px`;
        requestAnimationFrame(animate1);
        
}
// addEventListener('keydown',({key})=>{
//     if (key === 'ArrowUp'){
//         // console.log("right arrow down");
//         dy=-10;

//     }
// });

addEventListener('keypress',({key})=>{
    if (key === ' '){
        // console.log("right arrow down");
        index1=1;
        dy1=-10;
        acceleration1=0.3
    }
    
});

requestAnimationFrame(draw1);
requestAnimationFrame(animate1);

let j1=0;
let t2=0;

function repaint(timestamp){
    if(!t2) t2 = timestamp;
    const diff = timestamp -t2 ;
    if (diff >= (interval * 1000)){
        t2=timestamp;
    }
    console.log('painted' + j++, timestamp);
    requestAnimationFrame(repaint);
}
requestAnimationFrame(repaint);









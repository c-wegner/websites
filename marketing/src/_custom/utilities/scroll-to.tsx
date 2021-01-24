export const scrollTo = (target: number, speed = 40) => {
  let currentPosition = window.pageYOffset;

  let steps = 0;
  let thisStep: number;
  let thisTimer: any;

  const goal = target - 75;


  if (currentPosition < goal) {

    thisTimer = setInterval(
      () => {
        steps += 1;
        thisStep = (steps * speed) + currentPosition;
        window.scrollTo(0, thisStep)
        if (thisStep > goal) {
          clearInterval(thisTimer)
          return;
        }
      }, 1
    )
  } else {
    thisTimer = setInterval(
      ()=>{
        steps +=1;
        thisStep = currentPosition - (steps* speed)
        window.scrollTo(0, thisStep)
        if(thisStep<goal){
          clearInterval(thisTimer)
          return
        }
      }, 1
    )
  }
}
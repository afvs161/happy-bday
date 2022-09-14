window.addEventListener('DOMContentLoaded', () => {
  const loader = document.querySelector('.loader'),
    age = document.querySelectorAll('.age'),
    p = document.querySelector('.my-progress')

  // Loader
  setTimeout(() => {
    loader.style.opacity = '0'
    setTimeout(() => {
      loader.style.display = 'none'
    }, 0)
  }, 0)


  // Countdown
  let day = document.querySelector('.days')
  let hour = document.querySelector('.hours')
  let minute = document.querySelector('.minutes')
  let second = document.querySelector('.seconds')
  let mainBox = document.querySelector('.main_box')

  function withO(an) {
    if (an >= 0 && an < 10) {
      return `0${an}`
    } else {
      return an
    }
  }

  setInterval(function(){

    let UpcomingDate = new Date('26 september 2022 00:00:00 AM');
    let NowDate = new Date();
    let differanceTime  = Math.floor((UpcomingDate-NowDate)/1000)

    let differanceDay = Math.floor(differanceTime/60/60/24)
    let differanceHour = Math.floor((differanceTime/60/60)%24)
    let differanceMinute = Math.floor((differanceTime/60)%60)
    let differanceSecound = Math.floor(differanceTime%60)

    if(differanceDay >= 0){
        mainBox.style.display = "block";
        day.innerHTML =  differanceDay;
        hour.innerHTML =  differanceHour;
        minute.innerHTML = withO(differanceMinute);
        second.innerHTML = withO(differanceSecound);
    } else {
      mainBox.style.display = "block";
      day.innerHTML =  '0';
      hour.innerHTML =  '0';
      minute.innerHTML = '00';
      second.innerHTML = '00';
    }
  },1000)


  // progress bar
  p.style.width = pb() + '%'

  function pb() {
    // return progress.scrollTop / ((progress.scrollHeight - progress.clientHeight) / 100)
    let i = 90
    
    // age
    if (i == 100) {
      age[0].classList.add('hide')
      age[1].classList.add('ageSm')
      age[2].classList.remove('active')
      age[3].classList.add('active')
      age[4].classList.remove('ageSm')
      age[5].classList.remove('hide')
    }

    return i
  }

})
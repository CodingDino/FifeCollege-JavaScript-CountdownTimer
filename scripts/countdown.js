// A function to start a timer
function startTimer(timeString, countdownElement) {
    
    // Set the date we're counting down to
    var countDownDate = new Date(timeString).getTime();

    // Update the count down every 1 second using the setInterval function.
    // We provide our own function directly to the setInterval function, 
    // then store the result in a variable for use later so we can stop the timer
    // if we reach the countdown target
    var repeater = setInterval(function() {

        // Get todays date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var milisecondsRemaining = countDownDate - now;
        
        // Absolute time remaining for each denomination
        var secondsRemaining = milisecondsRemaining / 1000;
        var minutesRemaining = secondsRemaining / 60;
        var hoursRemaining = minutesRemaining / 60;
        var daysRemaining = hoursRemaining / 24;

        // Displayed amount remaining for each denomination
        var days = Math.floor(daysRemaining);
        
        var hoursAccountedFor = days * 24;
        var hours = Math.floor(hoursRemaining - hoursAccountedFor);
        
        var minutesAccoutedFor = (hoursAccountedFor + hours) * 60;
        var minutes = Math.floor(minutesRemaining - minutesAccoutedFor);
        
        var secondsAccoutedFor = (minutesAccoutedFor + minutes) * 60;
        var seconds = Math.floor(secondsRemaining - secondsAccoutedFor);

        // Output the result in an element with id="demo"
        document.getElementById(countdownElement).innerHTML = days + "d " + hours + "h "
        + minutes + "m " + seconds + "s ";

        // If the count down is over, write some text 
        if (milisecondsRemaining < 0) {
            clearInterval(repeater);
            document.getElementById(countdownElement).innerHTML = "NOW!";
        }
    }, 1000);
}

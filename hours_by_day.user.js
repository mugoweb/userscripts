
$('.active-day').each(function(index, day){

    let dayName = ($(day).find('.date-link').text());
    let totalHours = 0.0;
    $(day).find(".calendar-task").each( function(i, task) {
        let hours = $(task).text();
        hours = hours.replace(/^\s+|\s+$/gm,'');
        hours = hours.replace((/  |\r\n|\n|\r/gm),"");
        hours = hours.replace(/ /g, "")
        let start = hours.indexOf("hours:");
        //console.log('start at', start);
        let hoursText = hours.substring(start + 6, start + 10);
        hoursText = hoursText.replace("Bil", '');
        hoursText = hoursText.replace("B", '');
        hoursText = hoursText.replace("il", '');

        totalHours += parseFloat(hoursText);
        //console.log(dayName + " : ", hoursText);
    });

    console.log(dayName + " total hours: ", totalHours);
    $(day).find('.date-link').append("<span style='text-align:right; color:red; float:right' class='total-hours'>" + totalHours + "</span>");
})

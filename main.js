let department = document.getElementById('Department')
let level = document.getElementById('Level')
let hoursWorked = document.getElementById('Hours')
let monthlyPerformance = document.getElementById('Performance')
let hourly = document.getElementById('Hourly')
let monthly = document.getElementById('Monthly')
let bar = document.getElementById('bar')

hourly.innerHTML = 'Hourly Results'
monthly.innerHTML = 'Monthly Results'

let repairLevels = {
    1: 125,
    2: 169.64,
    3: 214.29,
    4: 258.93,
    5: 297.62,
    6: 336.31,
    7: 375
}

let qaLevels = {
    1: 100,
    2: 200,
    3: 300,
    4: 400,
    5: 500,
    6: 600,
    7: 700
}

department.addEventListener('change', metrics)
level.addEventListener('change', metrics)
hoursWorked.addEventListener('input', metrics)
monthlyPerformance.addEventListener('input', metrics)

function metrics() {
    if(department.value == 'Repair') {
        if(hoursWorked.value && monthlyPerformance.value !== '') {
            let monthlyGoal = (monthlyPerformance.value - (repairLevels[level.value]*hoursWorked.value)).toFixed(2)
            let percentage = ((monthlyPerformance.value / (repairLevels[level.value]*hoursWorked.value))*100)
            switch(true) {
                case monthlyGoal < 0:
                    bar.style.backgroundColor='red'
                    bar.style.width=`${percentage}%`
                    monthly.innerHTML = monthlyGoal
                    break
                    
                case monthlyGoal >= 0:
                    bar.style.backgroundColor='green'
                    bar.style.width='100%'
                    monthly.innerHTML = monthlyGoal
                    break
            }
            hourly.innerHTML = `${(monthlyPerformance.value / hoursWorked.value).toFixed(2)}/hr`
        }
    }

    if(department.value == 'QA') {
        if(hoursWorked.value && monthlyPerformance.value !== '') {
            let monthlyGoal = (monthlyPerformance.value - (qaLevels[level.value]*hoursWorked.value)).toFixed(2)
            let percentage = ((monthlyPerformance.value / (qaLevels[level.value]*hoursWorked.value))*100)
            switch(true) {
                case monthlyGoal < 0:
                    bar.style.backgroundColor='red'
                    bar.style.width=`${percentage}%`
                    monthly.innerHTML = monthlyGoal
                    break
                    
                case monthlyGoal >= 0:
                    bar.style.backgroundColor='green'
                    bar.style.width='100%'
                    monthly.innerHTML = monthlyGoal
                    break
            }
            hourly.innerHTML = `${(monthlyPerformance.value / hoursWorked.value).toFixed(2)}/hr`
        }
    }
}
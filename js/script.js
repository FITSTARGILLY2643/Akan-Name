// General Array Function

function MakeArray(n) {
    this.length = n;
    for (var i = 1; i <= n; i++) {
        this[i] = 0;
    }
}
// Initialize Days of Week Array
days = new MakeArray(7);
days[0] = "Saturday"
days[1] = "Sunday"
days[2] = "Monday"
days[3] = "Tuesday"
days[4] = "Wednesday"
days[5] = "Thursday"
days[6] = "Friday"

// Initialize Months Array
months = new MakeArray(12);
months[1] = "January"
months[2] = "February"
months[3] = "March"
months[4] = "April"
months[5] = "May"
months[6] = "June"
months[7] = "July"
months[8] = "August"
months[9] = "September"
months[10] = "October"
months[11] = "November"
months[12] = "December"

// Initialize Male 's Akan Name Array
male = new MakeArray(7);
male[0] = "Kwasi"
male[1] = "Kwandwo"
male[2] = "Kwabena"
male[3] = "Kwaku"
male[4] = "Yaw"
male[5] = "Kofi"
male[6] = "Kwame"

//Initialize Female's Akan Name Array
female = new MakeArray(7);
female[0] = "Akosua"
female[1] = "Adwoa"
female[2] = "Abenaa"
female[3] = "Akua"
female[4] = "Yaa"
female[5] = "Afua"
female[6] = "Ama"
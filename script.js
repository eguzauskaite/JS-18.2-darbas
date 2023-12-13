// 2. Naudojant "https://party-wedding.glitch.me/v1/party" - pasiimkite informaciją iš šito puslapio ir naudojant skirtingus array metodus, transformuokite duomenis bei išmeskite true/false ekrane - ar "Kristupas Lapeika" yra VIP, ar ne?
// Names	Attending	Plus One
// Kristupas Lapeika	+	+
// Jonas Jonaitis	+	-
// Petras Petraitis	-	+
// Ona Onaitė	-	-
// Marija Marijaitė	+	+
// Rimas Rimaitis	+	-
// Dalia Dalienė	-	+
// Gintaras Gintaraitis	+	-
// Egle Eglaitė	-	+
// Andrius Andriaitis	+	-

const apiUrl = 'https://party-wedding.glitch.me/v1/party'

// informacija iš web puslapio
fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        // Transform. duomenis ir patikrinti, ar "Kristupas Lapeika" yra VIP
        const attendees = data
        const kristupasInfo = attendees.find(person => person.name === 'Kristupas Lapeika')

        if (kristupasInfo) {
            // Tikrinam ar "Kristupas Lapeika" yra VIP
            const isVip = kristupasInfo.attending === '+' && kristupasInfo.plusOne === '+'
            console.log(isVip)
        } else {
            console.log('Nerasta informacijos apie "Kristupas Lapeika".')
        }
    })
    .catch(error => console.error('Klaida gaunant duomenis:', error))
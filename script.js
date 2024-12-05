const questions = [
    {
        question: "Welcher Spieler hat folgende Vereinsstationen durchlaufen: Osasuna, Marseille, Chelsea, Atletico Madrid?",
        logos: ['osasuna.png', 'marseille.png', 'chelsea.png', 'atletico.png'],
        answers: ['César Azpilicueta', 'Sergio Ramos', 'Dani Carvajal', 'Gerard Piqué'],
        correct: 'César Azpilicueta'
    },
    {
        question: "Welcher Spieler hat folgende Vereinsstationen durchlaufen: Sporting CP, Manchester United, Real Madrid, Juventus, Al Nassr?",
        logos: ['sporting.png', 'manutd.png', 'realmadrid.png', 'juventus.png', 'alnassr.png'],
        answers: ['Cristiano Ronaldo', 'Lionel Messi', 'Kylian Mbappé', 'Neymar'],
        correct: 'Cristiano Ronaldo'
    },
    {
        question: "Welcher Spieler hat folgende Vereinsstationen durchlaufen: Malmö FF, Ajax, Juventus, Inter Mailand, Barcelona, AC Milan, Paris SG, Manchester United, Los Angeles, AC Mailand?",
        logos: ['malmo.png', 'ajax.png', 'juventus.png', 'inter.png', 'barcelona.png', 'acmilan.png', 'psg.png', 'manutd.png', 'losangeles.png', 'acmilan.png'],
        answers: ['Zlatan Ibrahimović', 'Ronaldinho', 'Robert Lewandowski', 'Thierry Henry'],
        correct: 'Zlatan Ibrahimović'
    },
    {
        question: "Welcher Spieler hat folgende Vereinsstationen durchlaufen: AS Monaco, Paris Saint-Germain, Real Madrid?",
        logos: ['asmonaco.png', 'psg.png', 'realmadrid.png'],
        answers: ['Kylian Mbappé', 'Eden Hazard', 'Antoine Griezmann', 'Paul Pogba'],
        correct: 'Kylian Mbappé'
    },
    {
        question: "Welcher Spieler hat folgende Vereinsstationen durchlaufen: Genk, Chelsea, Wolfsburg, Manchester City?",
        logos: ['genk.png', 'chelsea.png', 'wolfsburg.png', 'manchestercity.png'],
        answers: ['Kevin De Bruyne', 'Luka Modrić', 'Marco Reus', 'James Rodríguez'],
        correct: 'Kevin De Bruyne'
    },
    {
        question: "Welcher Spieler hat folgende Vereinsstationen durchlaufen: Schalke 04, Bayern München?",
        logos: ['schalke.png', 'bayern.png'],
        answers: ['Manuel Neuer', 'Iker Casillas', 'Gianluigi Buffon', 'Jan Oblak'],
        correct: 'Manuel Neuer'
    },
    {
        question: "Welcher Spieler hat folgende Vereinsstationen durchlaufen: Inter Mailand, Liverpool, Bayern München, FC Barcelona, Aston Villa?",
        logos: ['inter.png', 'liverpool.png', 'bayern.png', 'barcelona.png', 'astonvilla.png'],
        answers: ['Philippe Coutinho', 'Sergio Agüero', 'Neymar', 'Kylian Mbappé'],
        correct: 'Philippe Coutinho'
    },
    {
        question: "Welcher Spieler hat folgende Vereinsstationen durchlaufen: US Palermo, SSC Neapel, Paris SG, Manchester United, FC Valencia?",
        logos: ['USPalermo.png', 'sscneapel.png', 'parissg.png', 'manchesterunited.png', 'fcvalencia'],
        answers: ['Mauro Icardi', 'Edinson Cavani', 'Gonzalo Higuain', 'Zlatan Ibrahimović'],
        correct: 'Edinson Cavani'
    },
    {
        question: "Welcher Spieler hat folgende Vereinsstationen durchlaufen: Udinese Calcio, Barcelona, Arsenal, Manchester United, Inter Mailand, Marseille, Udinese Calcio?",
        logos: ['udinese.png', 'barcelona.png', 'arsenal.png', 'manutd.png', 'inter.png', 'marseille.png', 'udinese.png'],
        answers: ['Alexis Sánchez', 'Luis Suárez', 'Neymar', 'Andrés Iniesta'],
        correct: 'Alexis Sánchez'
    },
    {
        question: "Welcher Spieler hat folgende Vereinsstationen durchlaufen: Porto, Chelsea, Real Madrid, Liverpool?",
        logos: ['porto.png', 'chelsea.png', 'realmadrid.png', 'liverpool.png'],
        answers: ['Ricardo Carvalho', 'Javier Hernández', 'Álvaro Morata', 'Fabio Coentrão'],
        correct: 'Ricardo Carvalho'
    },
    {
        question: "Welcher Spieler hat folgende Vereinsstationen durchlaufen: Lyon, Real Madrid, Al- Ittihad?",
        logos: ['lyon.png', 'realmadrid.png','alittihad.png'],
        answers: ['Karim Benzema', 'Samuel Eto\'o', 'Zinedine Zidane', 'Raúl'],
        correct: 'Karim Benzema'
    },
    {
        question: "Welcher Spieler hat folgende Vereinsstationen durchlaufen: Barcelona, Paris SG, Al-Hilal?",
        logos: ['barcelona.png', 'psg.png','alhilal.png'],
        answers: ['Neymar', 'Lionel Messi', 'Ronaldinho', 'Thiago Silva'],
        correct: 'Neymar'
    },
    {
        question: "Welcher Spieler hat folgende Vereinsstationen durchlaufen: River Plate, Corinthians, West Ham United, FC Liverpool, FC Barcelona, HB CFFC, Estudiantes LP?",
        logos: ['riverplate.png','Corinthians.png','westhamunited.png','fcliverpool,','barcelona.png','hbcddc.png','estudianteslp.png'],
        answers: ['Javier Mascherano', 'Sergio Agüero', 'Radamel Falcao', 'Ángel Di María'],
        correct: 'Javier Mascherano'
    },
    {
        question: "Welcher Spieler hat folgende Vereinsstationen durchlaufen: Benfica, Real Madrid, Manchester United, Paris SG, Juventus Turin, Benfica?",
        logos: ['benfica.png', 'realmadrid.png', 'manchesterunited.png','parissg.png','juventusturin.png','benfica.png'],
        answers: ['Ángel Di María', 'James Rodríguez', 'Arjen Robben', 'Raúl González'],
        correct: 'Ángel Di María'
    },
    {
        question: "Welcher Spieler hat folgende Vereinsstationen durchlaufen: River Plate, Real Madrid, SSC Neapel, Juventus, Inter Miami?",
        logos: ['riverplate.png', 'realmadrid.png', 'sscneapel.png', 'juventus.png','intermiami.png'],
        answers: ['Gonzalo Higuaín', 'Diego Maradona', 'Paulo Dybala', 'Javier Zanetti'],
        correct: 'Gonzalo Higuaín'
    },
    {
        question: "Welcher Spieler hat folgende Vereinsstationen durchlaufen: Barcelona, Bayern München, FC Liverpool?",
        logos: ['barcelona.png', 'bayern.png', 'fcliverpool.png'],
        answers: ['Thiago Alcântara', 'Arturo Vidal', 'Philippe Coutinho', 'Xherdan Shaqiri'],
        correct: 'Thiago Alcântara'
    },
    {
        question: "Welcher Spieler hat folgende Vereinsstationen durchlaufen: Porto, AS Monaco, Real Madrid, FC Everton, Al-Rayyan SC, FC Sao Paolo?",
        logos: ['porto.png', 'asmonaco.png', 'realmadrid.png','fceverton.png','alraayyansc.png','fcsaopaolo.png'],
        answers: ['Pepe', 'James Rodríguez', 'Fabio Coentrão', 'Ricardo Carvalho'],
        correct: 'James Rodríguez'
    },
    {
        question: "Welcher Spieler hat folgende Vereinsstationen durchlaufen: Dortmund, Bayern München, Barcelona?",
        logos: ['dortmund.png', 'bayern.png', 'barcelona.png'],
        answers: ['Robert Lewandowski', 'Mats Hummels', 'Mario Götze', 'Pierre-Emerick Aubameyang'],
        correct: 'Robert Lewandowski'
    },
    {
        question: "Welcher Spieler hat folgende Vereinsstationen durchlaufen: Lille, Chelsea, Real Madrid?",
        logos: ['lille.png', 'chelsea.png', 'realmadrid.png'],
        answers: ['Eden Hazard', 'Didier Drogba', 'Claude Makélélé', 'Luka Modric'],
        correct: 'Eden Hazard'
    },
    {
        question: "Welcher Spieler hat folgende Vereinsstationen durchlaufen: Atletico Madrid, Chelsea, Atletico Madrid, Atletico-MG, Botafogo, Gremio?",
        logos: ['atletico.png', 'chelsea.png', 'atletico.png','atleticomg.png','botafogo.png','gremio.png'],
        answers: ['Fernando Torres', 'Diego Costa', 'Thibaut Courtois', 'Filipe Luís'],
        correct: 'Diego Costa'
    },
    {
        question: "Welcher Spieler hat folgende Vereinsstationen durchlaufen: Everton, Manchester United, Everton, D.C. United, Derby County?",
        logos: ['everton.png', 'manutd.png', 'everton.png','dcunited.png','derbycounty.png'],
        answers: ['Ander Herrera', 'Wayne Rooney', 'David Beckham', 'Edinson Cavani'],
        correct: 'Wayne Rooney'
    },
    {
        question: "Welcher Spieler hat folgende Vereinsstationen durchlaufen: Shakhtar Donetsk, Bayern München, Juventus Turin, Los Angeles, Fluminense?",
        logos: ['shakhtar.png', 'bayern.png','juventusturin.png','losangeles.png','fluminense.png'],
        answers: ['Douglas Costa', 'Willian', 'Luka Modric', 'Javi Martínez'],
        correct: 'Douglas Costa'
    },
    {
        question: "Welcher Spieler hat folgende Vereinsstationen durchlaufen: Tottenham, Real Madrid, LAFC?",
        logos: ['tottenham.png', 'realmadrid.png','lafc.png'],
        answers: ['Gareth Bale', 'Luka Modric', 'David Beckham', 'Cristiano Ronaldo'],
        correct: 'Gareth Bale'
    },
    {
        question: "Welcher Spieler hat folgende Vereinsstationen durchlaufen: FC Chelsea, Aston Villa?",
        logos: ['fcchelsea.png', 'astonvilla.png'],
        answers: ['John Terry', 'David Beckham', 'Thiago Silva', 'Ronaldinho'],
        correct: 'John Terry'
    },
    {
        question: "Welcher Spieler hat folgende Vereinsstationen durchlaufen: Valencia, Barcelona, Atletico Madrid, New York City, Vissel Kobe?",
        logos: ['valencia.png', 'barcelona.png', 'atletico.png','newyorkcity.png','visselkobe'],
        answers: ['David Villa', 'Luis Suárez', 'Fernando Torres', 'Sergio Agüero'],
        correct: 'David Villa'
    },
    {
        question: "Welcher Spieler hat folgende Vereinsstationen durchlaufen: Sevilla, Barcelona, Juventus Turin, Paris Saint-Germain, FC Sao Paolo, FC Barcelona, UNAM                      Pumas?",
        logos: ['sevilla.png', 'barcelona.png','juventusturin.png', 'psg.png','fcsaopaolo.png','fcbarcelona','unampumas.png'],
        answers: ['Dani Alves', 'Neymar', 'Thiago Silva', 'Andrés Iniesta'],
        correct: 'Dani Alves'
    },
    {
        question: "Welcher Spieler hat folgende Vereinsstationen durchlaufen: AC Mailand, Corinthians, FC Villareal, TJ Quanjian, FC Sao Paolo?",
        logos: ['acmailand.png', 'Corinthians.png', 'fcvillareal.png', 'tjquanjian.png','fcsaopaolo'],
        answers: ['Alexandre Pato', 'Rivaldo', 'Ronaldinho', 'Thiago Silva'],
        correct: 'Alexandre Pato'
    },
    {
        question: "Welcher Spieler hat folgende Vereinsstationen durchlaufen: Boca Juniors, Corinthians, West Ham United, Manchester United, Manchester City, Juventus Turin, Boca Juniors, SH Shenhua, Boca Juniors?",
        logos: ['bocajuniors.png', 'corinthians.png', 'westhamunited.png','manchesterunited.png','manchestercity.png','juventusturin.png','bocajuniors.png','shshenhua.png','bocajuniors.png'],
        answers: ['Carlos Tevez', 'Juan Román Riquelme', 'Sergio Agüero', 'Pablo Zabaleta'],
        correct: 'Carlos Tevez'
    },
    {
        question: "Welcher Spieler hat folgende Vereinsstationen durchlaufen: MFK Kosice, FC Chelsea,'Benfica, FC Chelsea, Manchester United, AS Rom, Stade Rennes, Olympique Lyon?",
        logos: ['mfkkosice.png', 'fcchelsea.png', 'benfica.png','fcchelsea.png','manchesterunited.png','asrom.png','staderennes.png','olympiquelyon.png'],
        answers: ['Nemanja Matić', 'Branislav Ivanović', 'David Luiz', 'Ángel Di María'],
        correct: 'Branislav Ivanović'
    },
    {
        question: "Welcher Spieler hat folgende Vereinsstationen durchlaufen: Montpellier, Arsenal, Chelsea, AC Mailand, LAFC?",
        logos: ['montpellier.png', 'arsenal.png', 'chelsea.png','acmailand.png','lafc.png'],
        answers: ['Nicolas Pépé', 'Pierre-Emerick Aubameyang', 'Eden Hazard', 'Olivier Giroud'],
        correct: 'Olivier Giroud'
    },
    {
        question: "Welcher Spieler hat folgende Vereinsstationen durchlaufen: Cagliari Calcio, AS Rom, Inter Mailand, Royal Antwerpen, SPAL?",
        logos: ['cagliaricalcio.png', 'asrom.png', 'inter.png','royalantwerpen.png','spal.png'],
        answers: ['Juan Sebastián Verón', 'Paul Pogba', 'Diego Forlán', 'Radja Nainggolan'],
        correct: 'Radja Nainggolan'
    },
    {
        question: "Welcher Spieler hat folgende Vereinsstationen durchlaufen: FC Porto, Chelsea, Queens Park Rangers, Trabzonspor?",
        logos: ['porto.png', 'chelsea.png', 'queensparkrangers.png','trabzonspor.png'],
        answers: ['André Villas-Boas', 'Paulo Ferreira', 'José Bosingwa', 'Ricardo Carvalho'],
        correct: 'José Bosingwa'
    },
    {
        question: "Welcher Spieler hat folgende Vereinsstationen durchlaufen: Corinthians, Shakhtar Donetsk,Anzhi, FC Chelsea, FC Arsenal, Corinthians, FC Fulham?",
        logos: ['Corinthians.png', 'shakhtardonetsk.png','anzhi.png', 'chelsea.png','fcarsenal.png','corinthians.png','fcfulham.png'],
        answers: ['Oscar', 'Willian', 'Douglas Costa', 'Hulk'],
        correct: 'Willian'
    },
    {
        question: "Welcher Spieler hat folgende Vereinsstationen durchlaufen: G. Bordeaux, Juventus Turin, Real Madrid?",
        logos: ['gbordeaux.png', 'juventusturin.png', 'realmadrid.png'],
        answers: ['Adriano', 'Gabriel Barbosa', 'Zinedine Zidane', 'Mauro Icardi'],
        correct: 'Zinedine Zidane'
    },
    {
        question: "Welcher Spieler hat folgende Vereinsstationen durchlaufen: Rennes, FC Chelsea, Al-Ahli?",
        logos: ['rennes.png', 'fcchelsea.png', 'alahli.png'],
        answers: ['Petr Čech', 'Steve Mandanda', 'Édouard Mendy', 'Julian Escudé'],
        correct: 'Édouard Mendy'
    },
    {
        question: "Welcher Spieler hat folgende Vereinsstationen durchlaufen: FC Brügge, Sevilla, AC Milan, FC Villareal, FC Granada, Junior FC?",
        logos: ['fcbrügge.png', 'sevilla.png', 'acmilan.png', 'fcvillareal.png','fcgranada.png','juniorfc.png'],
        answers: ['Thiago Silva', 'Gonzalo Higuaín', 'Sergio Ramos', 'Carlos Bacca'],
        correct: 'Carlos Bacca'
    },
    {
        question: "Welcher Spieler hat folgende Vereinsstationen durchlaufen: AC Parma, Chelsea, Cagliari Calcio, APIA Leichhardt, Marc. Stallions?",
        logos: ['acparma.png', 'chelsea.png', 'cagliaricalcio.png','apialeichhardt.png','marcstallions.png'],
        answers: ['Patrick Vieira', 'Gianfranco Zola', 'Antonio Conte', 'Duván Zapata'],
        correct: 'Gianfranco Zola'
    },
    {
        question: "Welcher Spieler hat folgende Vereinsstationen durchlaufen: Vitesse, Chelsea, Lyon, Aston Villa, FC Villareal, Ajax Amsterdam?",
        logos: ['vitesse.png', 'chelsea.png', 'lyon.png','astonvilla.png','fcvillareal.png','ajaxamsterdam.png'],
        answers: ['Marcos Alonso', 'Lucas Piazon', 'Bertrand Traoré', 'Hakim Ziyech'],
        correct: 'Bertrand Traoré'
    }
];

// Aktuelle Frage-Index
let currentQuestionIndex = 0;

// Funktion zum Laden der Fragen
function loadQuestion(index) {
    if (index >= questions.length) {
        alert("Quiz beendet!");
        return;
    }

    const question = questions[index];
    document.getElementById('question').textContent = question.question;
    const logosContainer = document.getElementById('logos');
    logosContainer.innerHTML = ''; // Vorherige Logos entfernen

    question.logos.forEach(logo => {
        const img = document.createElement('img');
        img.src = logo;
        logosContainer.appendChild(img);
    });

    const answersContainer = document.getElementById('answers');
    answersContainer.innerHTML = ''; // Vorherige Antworten entfernen

    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.textContent = answer;
        button.addEventListener('click', () => checkAnswer(answer, question.correct));
        answersContainer.appendChild(button);
    });
}

// Funktion zum Überprüfen der Antwort
function checkAnswer(selectedAnswer, correctAnswer) {
    if (selectedAnswer === correctAnswer) {
        alert('Richtig!');
    } else {
        alert('Falsch! Die richtige Antwort ist: ' + correctAnswer);
    }

    // Zur nächsten Frage wechseln
    currentQuestionIndex++;
    loadQuestion(currentQuestionIndex);
}

// Initiales Laden der ersten Frage
loadQuestion(currentQuestionIndex);

// Dark Mode Umschalten
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    document.querySelector('header').classList.toggle('dark-mode');
    document.querySelector('main').classList.toggle('dark-mode');
    document.querySelectorAll('section').forEach(section => section.classList.toggle('dark-mode'));
    document.querySelectorAll('h2').forEach(h2 => h2.classList.toggle('dark-mode'));
    document.querySelector('footer').classList.toggle('dark-mode');

    const icon = document.getElementById('dark-mode-icon');
    if (document.body.classList.contains('dark-mode')) {
        icon.src = 'sun.svg'; // Pfad zum Sonnen-Icon
        icon.alt = 'Hell-Modus Umschalten';
    } else {
        icon.src = 'moon.svg'; // Pfad zum Mond-Icon
        icon.alt = 'Dunkel-Modus Umschalten';
    }
}

//  Dark Mode Button
document.getElementById('dark-mode-toggle').addEventListener('click', toggleDarkMode);

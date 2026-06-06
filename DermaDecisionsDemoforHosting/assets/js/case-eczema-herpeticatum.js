
const eczemaHerpeticatumData = {
  completionText: 'Im echten Projekt könnten hier leitlinienbezogene Hinweise, Eskalationskriterien und Hinweise zur interdisziplinären Versorgung ergänzt werden.',
  steps: [
    {title:'1. Klinische Priorisierung',question:'Welche Arbeitshypothese ist bei diesem Befund am dringlichsten?',teaching:'Monomorphe, schmerzhafte Erosionen/Vesikel auf ekzematösem Grund mit Befall im Gesichtsbereich sollten an ein Eczema herpeticatum denken lassen.',choices:[
      { text:'Eczema herpeticatum als dermatologischen Notfall vermuten', score:25, type:'correct', feedback:'Richtig. Der Befund ist hochverdächtig und erfordert ein rasches Handeln.' },
      { text:'Ausschließlich eine bakterielle Impetiginisierung annehmen', score:10, type:'partial', feedback:'Eine bakterielle Superinfektion kann zusätzlich vorliegen, erklärt aber den gesamten Befund nicht ausreichend.' },
      { text:'Nur eine Kontaktdermatitis vermuten und abwarten', score:0, type:'wrong', feedback:'Das würde den potenziell bedrohlichen Verlauf eines Eczema herpeticatum verkennen.' },
      { text:'Den Befund primär kosmetisch einordnen', score:0, type:'wrong', feedback:'Hier liegt ein potenziell schweres infektiöses Geschehen vor.' }
    ]},
    {title:'2. Akutmanagement',question:'Welche unmittelbare Maßnahme ist am wichtigsten?',teaching:'Bei Verdacht auf Eczema herpeticatum sollte frühzeitig eine antivirale Therapie erwogen und eine augenärztliche Mitbeurteilung bei Augenlid-/periorbitalem Befall geprüft werden.',choices:[
      { text:'Sofortige antivirale Therapie einleiten und augenärztliche Mitbeurteilung prüfen', score:25, type:'correct', feedback:'Sehr gut. Gerade im Gesichtsbereich ist das zügige Management entscheidend.' },
      { text:'Ausschließlich topisches Steroid intensivieren', score:4, type:'wrong', feedback:'Das adressiert das wahrscheinliche Herpesgeschehen nicht ausreichend.' },
      { text:'Keine Therapie beginnen und zunächst nur Hautabstrich abwarten', score:2, type:'wrong', feedback:'Eine Bestätigung ist sinnvoll, aber die Therapie sollte bei hohem Verdacht nicht unnötig verzögert werden.' },
      { text:'Nur lokale Wundpflege empfehlen', score:0, type:'wrong', feedback:'Das ist als alleiniges Vorgehen unzureichend.' }
    ]},
    {title:'3. Labor und Diagnostik',question:'Wie sollten die folgenden fiktiven Laborwerte in die Einschätzung einbezogen werden?',teaching:'Laborbefunde dienen der Schweregradeinschätzung und Erkennung von Begleitproblemen, ersetzen aber nicht die klinische Diagnose.',labs:[
      { name:'CRP', value:'38 mg/L', ref:'< 5 mg/L', flag:'high', flagLabel:'erhöht' },
      { name:'Leukozyten', value:'12.8 /nL', ref:'4.0–10.0 /nL', flag:'high', flagLabel:'erhöht' },
      { name:'Kreatinin', value:'0.78 mg/dL', ref:'0.5–1.0 mg/dL', flag:'normal', flagLabel:'normal' },
      { name:'ALT', value:'24 U/L', ref:'< 35 U/L', flag:'normal', flagLabel:'normal' }
    ],choices:[
      { text:'Die Laborwerte sprechen für ein entzündliches Geschehen; antivirale Therapie und klinische Überwachung bleiben priorisiert', score:25, type:'correct', feedback:'Genau. Die Werte stützen die Entzündungsaktivität, ändern aber nicht die Dringlichkeit des Managements.' },
      { text:'Normale Nierenwerte schließen ein Eczema herpeticatum aus', score:0, type:'wrong', feedback:'Normale Nierenwerte sagen nichts gegen die Diagnose.' },
      { text:'Da Leukozyten und CRP erhöht sind, sollte nur antibiotisch behandelt werden', score:6, type:'partial', feedback:'Eine bakterielle Superinfektion kann mitbehandelt werden, die antivirale Therapie bleibt aber zentral.' },
      { text:'Ohne pathologische Leberwerte ist keine weitere Diagnostik nötig', score:0, type:'wrong', feedback:'Die Einschätzung richtet sich primär nach Klinik, Verlauf und ggf. virologischer Diagnostik.' }
    ]},
    {title:'4. Weiteres Vorgehen',question:'Welche zusätzliche Maßnahme ist in diesem Fall besonders wichtig?',teaching:'Augennähe, Allgemeinzustand und Flüssigkeitshaushalt sind wichtige Faktoren bei der weiteren Versorgung.',choices:[
      { text:'Augenbeteiligung aktiv ausschließen, Verlauf eng kontrollieren und Superinfektion mitbedenken', score:25, type:'correct', feedback:'Sehr gut. Das verbindet Notfallmanagement mit strukturierter Verlaufskontrolle.' },
      { text:'Patient:in ohne klare Warnzeichen und ohne Kontrolle nach Hause schicken', score:0, type:'wrong', feedback:'Das wäre bei diesem Befund zu riskant.' },
      { text:'Nur den Hautbefund dokumentieren und systemische Aspekte ignorieren', score:5, type:'partial', feedback:'Dokumentation ist wichtig, reicht aber nicht aus.' },
      { text:'Nur die antivirale Therapie verordnen und keine weitere Aufklärung geben', score:8, type:'partial', feedback:'Therapie ist zentral, aber Aufklärung und Sicherheitsnetz sind ebenso wichtig.' }
    ]}
  ]
};
makeCaseEngine(eczemaHerpeticatumData);

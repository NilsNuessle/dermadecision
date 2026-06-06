
const psoriasisCaseData = {
  completionText: 'Im echten Projekt könnten hier individuelle Lernhinweise, Vergleichsdaten, passende Leitlinien und Empfehlungen für den nächsten Fall eingeblendet werden.',
  steps: [
    {title:'1. Erste Einordnung',question:'Welche Information ist jetzt am wichtigsten, um den Befund klinisch einzuordnen?',teaching:'Bei schuppenden Plaques sind Morphologie, Verteilung, Dauer, Juckreiz, Trigger und Begleitsymptome essenziell.',choices:[
      { text:'Gezielte Anamnese, Familienanamnese, Medikamente, Gelenksymptome und Ausdehnung erfassen', score:25, type:'correct', feedback:'Sehr gut. Diese Informationen helfen, Psoriasis, Ekzem und Tinea gezielt zu unterscheiden.' },
      { text:'Nur das Bild beurteilen und direkt eine Diagnose stellen', score:5, type:'partial', feedback:'Das Bild ist wichtig, reicht allein aber nicht aus. Klinischer Kontext und Begleitsymptome sind zentral.' },
      { text:'Sofort systemische Antibiotika beginnen', score:0, type:'wrong', feedback:'Es gibt hier keinen Hinweis auf eine bakterielle Infektion. Eine vorschnelle Therapie wäre nicht sinnvoll.' },
      { text:'Keine weitere Diagnostik, nur Pflegecreme empfehlen', score:8, type:'partial', feedback:'Basistherapie ist sinnvoll, aber zunächst sollte der Befund besser eingeordnet werden.' }
    ]},
    {title:'2. Differenzialdiagnostik',question:'Welche differenzialdiagnostische Überlegung sollte aktiv berücksichtigt werden?',teaching:'Auch bei typischer Plaque-Morphologie sollten wichtige Differenzialdiagnosen strukturiert geprüft werden.',choices:[
      { text:'Tinea corporis bei randbetonter Schuppung mitdenken und ggf. Mykologie veranlassen', score:25, type:'correct', feedback:'Richtig. Eine Mykose sollte bei passenden Merkmalen ausgeschlossen werden.' },
      { text:'Ausschließlich Psoriasis annehmen, weil die Plaque schuppt', score:8, type:'partial', feedback:'Psoriasis ist plausibel, aber Differenzialdiagnosen sollten mitgedacht werden.' },
      { text:'Primär eine maligne Erkrankung vermuten und sofort stationär aufnehmen', score:2, type:'wrong', feedback:'Das ist hier nicht die naheliegendste erste Einschätzung.' },
      { text:'Keine Differenzialdiagnosen berücksichtigen, weil die Therapie immer gleich ist', score:0, type:'wrong', feedback:'Die Therapie unterscheidet sich deutlich, z. B. zwischen Tinea, Ekzem und Psoriasis.' }
    ]},
    {title:'3. Ersttherapie',question:'Die Befunde sprechen am ehesten für eine Plaque-Psoriasis. Was ist der nächste sinnvolle Schritt?',teaching:'Bei Plaque-Psoriasis stehen topische Therapie, Basistherapie und Aufklärung im Vordergrund.',choices:[
      { text:'Topische antientzündliche Therapie plus Basistherapie, Triggerberatung und Verlaufskontrolle', score:25, type:'correct', feedback:'Sehr gut. Dies entspricht einem leitliniennahen, patientenzentrierten Vorgehen.' },
      { text:'Sofort Biologikum einleiten', score:4, type:'wrong', feedback:'Für einen lokal begrenzten Erstbefund ist das in der Regel nicht der erste Schritt.' },
      { text:'Nur kosmetisch beruhigen, keine Therapie anbieten', score:3, type:'wrong', feedback:'Psoriasis ist mehr als ein kosmetisches Problem und sollte strukturiert behandelt werden.' },
      { text:'Hochdosierte systemische Steroide als Standardtherapie beginnen', score:0, type:'wrong', feedback:'Systemische Steroide sind keine Standard-Ersttherapie der Plaque-Psoriasis.' }
    ]},
    {title:'4. Weiteres Management',question:'Welche Maßnahme stärkt die nachhaltige Versorgung und das klinische Lernen?',teaching:'Dermatologische Entscheidungen enden nicht mit der Diagnose: Komorbiditäten, Lebensqualität und Verlauf sind relevant.',choices:[
      { text:'Schweregrad, Lebensqualität, Gelenksymptome und Komorbiditäten erfassen; Eskalationskriterien definieren', score:25, type:'correct', feedback:'Optimal. So werden dermatologisches und internistisches Denken verbunden.' },
      { text:'Patient:in ohne Verlaufskontrolle entlassen', score:0, type:'wrong', feedback:'Ohne Verlaufskontrolle bleiben Therapieansprechen und Eskalationsbedarf unklar.' },
      { text:'Nur die Hautläsion dokumentieren, systemische Aspekte ignorieren', score:6, type:'partial', feedback:'Dokumentation ist sinnvoll, aber systemische Aspekte und Psoriasis-Arthritis sollten mitgedacht werden.' },
      { text:'Jede Plaque-Psoriasis stationär aufnehmen', score:2, type:'wrong', feedback:'Das wäre in der Regel nicht ressourcengerecht und nicht patientenzentriert.' }
    ]}
  ]
};
makeCaseEngine(psoriasisCaseData);

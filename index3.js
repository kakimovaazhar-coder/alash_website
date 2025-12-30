const infoPanel = document.getElementById("leader-info");
const infoTitle = document.getElementById("info-title");
const infoText = document.getElementById("info-text");

function showLeader(id) {
  let content = {
    bukeikhanov: {
      title: "Alikhan Bukeikhanov",
      text: `Leader of National Political Movement: Founder and head of the Alash party and the Alash Orda government, the first attempt at creating an autonomous Kazakh state after the 1917 revolution.

Political Activist and Petition Organizer: Co-author of the 1905 Karkaraly petition, which demanded political rights and land reforms for Kazakhs, marking a significant national protest against the Russian Empire.

Public Intellectual and Scientist: Member of the Russian Geographical Society, contributed to studies in ethnography, geography, and economics; promoted Kazakh national identity through science and journalism.

Victim of Soviet Repression: Arrested and executed in 1937 for alleged counter-revolutionary activity; posthumously rehabilitated, symbolizing the tragic fate of Kazakh national leaders under Stalin.`
    },
    baitursynov: {
      title: "Akhmet Baitursynov",
      text: `Linguistic Reformer and Educator: Created the reformed Kazakh Arabic script; laid the foundation for modern Kazakh linguistics and literary criticism, and published textbooks for Kazakh schools.

Co-founder of the Alash Movement: Key figure in the Alash party and government, worked closely with Bukeikhanov and Dulatov to promote Kazakh autonomy and national consciousness.

Journalist and Cultural Revivalist: Editor of the national newspaper Kazakh, which became a platform for political, cultural, and educational reforms.

Repressed Intellectual: Arrested multiple times by Soviet authorities for his national views; executed in 1938; now honored with institutions and streets named after him across Kazakhstan.`
    },
    dulatov: {
      title: "Mirzhakyp Dulatov",
      text: `Writer and National Poet: Authored the iconic poem \"Oyan, Qazaq!\" (Awake, Kazakh!) which inspired political awakening among Kazakhs; wrote \"Unhappy Jamal\", the first Kazakh novel.

Political Activist and Educator: Active member of the Alash movement, contributed to its party program, and promoted enlightenment through teaching and journalism.

Translator and Cultural Bridge: Translated classic works of Pushkin, Lermontov, Schiller, and others into Kazakh, enriching Kazakh literature and connecting it to world culture.

Martyr of Stalinism: Imprisoned and exiled to Solovki, where he died in 1935; posthumously rehabilitated, and reburied in his homeland in 1992 as a national hero.`
    }
  };

  if (content[id]) {
    infoTitle.textContent = content[id].title;
    infoText.textContent = content[id].text;
    infoPanel.classList.remove("hidden");
  }
}

function closeInfo() {
  infoPanel.classList.add("hidden");
}

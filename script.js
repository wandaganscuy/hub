function showSection(section, el){
  document.getElementById("tools").classList.add("hidden");
  document.getElementById("games").classList.add("hidden");
  document.getElementById(section).classList.remove("hidden");
  document.querySelectorAll(".tab").forEach(t=>t.classList.remove("active"));
  el.classList.add("active");
}

// ======= TOOLS =======
function passwordGen(){
  const length=prompt("Panjang password?",12); if(!length) return;
  const chars="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
  let pass=""; for(let i=0;i<length;i++){pass+=chars.charAt(Math.floor(Math.random()*chars.length));}
  alert("Password kamu:\n\n"+pass);
}

function calculator(){
  const exp=prompt("Masukkan perhitungan, contoh: 12+8*2"); if(!exp) return;
  try{alert("Hasil: "+eval(exp));}catch(e){alert("Input salah");}
}

function textTool(){
  const txt=prompt("Masukkan teks"); if(!txt) return;
  const upper=txt.toUpperCase();
  const lower=txt.toLowerCase();
  alert("Uppercase: "+upper+"\nLowercase: "+lower);
}

function urlShortener(){
  const url=prompt("Masukkan URL"); if(!url) return;
  const short="https://short.url/"+Math.random().toString(36).substring(2,8);
  alert("Short URL: "+short);
}

// ======= GAMES =======
function guessGame(){
  const number=Math.floor(Math.random()*10)+1;
  const guess=prompt("Tebak angka 1-10"); if(!guess) return;
  alert(parseInt(guess)===number? "🎉 Benar! Angkanya "+number : "❌ Salah. Angkanya "+number);
}

// Tic Tac Toe sederhana vs AI random
function ticTacToe(){
  alert("Tic Tac Toe coming soon! 🕹️");
}

// Mini Quiz 3 pertanyaan
function miniQuiz(){
  let score=0;
  const q=[
    {q:"Ibukota Indonesia?", a:"jakarta"},
    {q:"2+2*2=?", a:"6"},
    {q:"HTML kepanjangan dari?", a:"hypertext markup language"}
  ];
  q.forEach(o=>{
    const ans=prompt(o.q);
    if(ans && ans.toLowerCase().trim()===o.a) score++;
  });
  alert("Skor kamu: "+score+"/"+q.length);
}

// Memory Game placeholder
function memoryGame(){
  alert("Memory Game coming soon! 🃏");
}
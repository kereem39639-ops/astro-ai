function goHome(){ toggle('screen-home'); }
function goToMap(){ toggle('screen-map'); speak("يلا اختار كوكب! تحب نروح المريخ الأول؟"); }
function toggle(id){ document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active')); document.getElementById(id).classList.add('active'); }
function speak(text){ document.getElementById('nova-text').innerText = text; }
function openPlanet(name){ speak("أهلا بيك في كوكب " + name + "! جاهز تجمع النجوم؟"); }

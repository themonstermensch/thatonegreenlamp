export default function CheckSpecial(lamp) {
    /* One in 10,000 check to get a secret, unlisted lamp */
    var specialCheck = Math.floor(Math.random() * (9999));
    if(specialCheck == 0) {
      lamp.title = "Placeholder Art";
      lamp.author = "Raleigh Welch";
      lamp.year = 2026;
      lamp.src = "src/assets/placeholder_lamp.webp";
      lamp.alt = "poorly drawn placeholder art of a green banker's lamp";
      lamp.medium = "art"
      lamp.submittedBy = "Rals"
    } else if (specialCheck == 1) {
      lamp.title = "404: Lamp Not Found";
      lamp.author = "KatNap";
      lamp.year = 2026;
      lamp.src = "src/assets/lamp-painting.png";
      lamp.alt = "a digital painting of a green bankers lamp looking left";
      lamp.medium = "art"
      lamp.submittedBy = "Kat"
    } else if (specialCheck == 2) {
      lamp.title = "Missing Lamp";
      lamp.author = "KatNap";
      lamp.year = 2026;
      lamp.src = "src/assets/lampmissingillustration.png";
      lamp.alt = "a digital sketch of a bankers lamp for a missing person's poster";
      lamp.medium = "art"
      lamp.submittedBy = "Kat"
    } 
    return lamp
   }
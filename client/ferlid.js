const ferlidTexti = `
<p>
Lúxusskrímslið er fyrsti skúlptúr sem Listhópurinn Smyrsl býr til. Skrímslið er bæði hannað og búið til af hópnum og er uppspretta Skapandi sumarstarfa í Kópavogi sumarið 2020.
</p>
<p>
Án nokkurrar reynslu á skúlptúrasviðinu lögðu Smyrslstrákar af stað í óvissuferð um hvað þeir gætu gert til að glæða bæinn lífi. Við tók tveggja vikna rannsókn þar sem þeir skoðuðu hvern krók og kima í ólíkum hverfum Kópavogs. Niðurstaðan var sú að það vantaði eitthvað upp á.
</p>
<p>
Lúxusskrímslið var lausnin.
</p>
`;

const texti1 = "Fyrsta skyssa.";
const texti2 = "Lítið leirmódel hannað út frá skyssu í réttum hlutföllum.";
const texti3 = "Fullklárað leirmódel í sinni fyrstu myndatöku.";
const texti4 = "Fullklárað leirmódel í sinni fyrstu myndatöku.";
const texti5 = "Stafræn útgáfa af skrímslinu hönnuð af Andra Þór Arasyni.";
const texti6 = "Kópavogur styrkti verkefnið meðal annars með vinnuaðstöðu.";
const texti7 = "Efniviður kominn í hús.";
const texti8 = "Hafist handa.";
const texti9 = "Búkurinn mótaður.";
const texti10 =
  "Leirmódelið kunni vel við sig í vinnurýminu og fylgdist spennt með gerð stærri útgáfu af sjálfu sér.";
const texti11 = "Búkur og haus taka á sig mynd.";
const texti12 = "Hali bætist við.";
const texti13 = "Sporður líka.";
const texti14 = "Hlutarnir mátaðir saman af Ara Jakobssyni, starfsnema.";
const texti15 = "Mikil gleði innan hópsins með fyrstu mátun.";
const texti16 =
  "Pásur eru mikilvægar, sérstaklega þegar þær fara í að aðstoða góða vini.";
const texti17 = "Andlit tekur á sig mynd.";
const texti18 =
  "Kannski er hægt að hanna kastara sem varpar sporðinum á himininn til að bera út boðskap Lúxusskrímslisins.";
const texti19 =
  "Eftir að allir hlutar voru orðnir vel slípaðir voru þeir límdir saman.";
const texti20 = "Öryggi í fyrirrúmi, mikil bugun en gleði á sama tíma.";
const texti21 = "Allt að verða tilbúið.";
const texti22 = "Litur ákveðinn og límmiðar hannaðir af Andra Þór Arasyni.";

const createModal = (num) => {
  const myndaTexti = eval(`texti${num}`);
  return `
    <div id="modal${num}" class="modal">
    <div class="modal-content">
    <img class="modal-img" src="./myndir/${num}.jpg" />
    <p>${myndaTexti}</p>
    </div>
    </div>
    `;
};

const renderFerlidContent = () => {
  let allImages = "";

  for (let i = 1; i <= 22; i++) {
    if ((i - 1) % 3 === 0) {
      allImages += '<div class="row" >';
    }
    const a = `<div class="col s4"><a href="#modal${i}" class="modal-trigger"><img src="./myndir/${i}.jpg" class="small-img" /></a></div>`;
    allImages += a;
    allImages += createModal(i);
    if ((i - 1) % 3 === 2) {
      allImages += "</div>";
    }
  }

  allImages += "</div>";

  return `
    <h5 class="">
    Ferlið & myndir
    </h5>
    ${ferlidTexti}
    ${allImages}
    `;
};

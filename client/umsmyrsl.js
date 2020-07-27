const umSmyrlsTexti = () => {
  return `
    <p>
    Listhópurinn Smyrsl er fjöllistahópur sem sérhæfir sig fyrst og fremst í leikhússtörfum. Smyrslið setjur sér engar skorður og smýgur sér í hvaða miðla sem þykja hentugir fyrir útkomuna. Aðal viðfangsefni Smyrslins er að taka gríninu og bullinu háalvarlega. Hópurinn samanstendur af Helga Grími Hermannssyni og Jökli Smára Jakobssyni. Lúxusskrímslið er frumraun hópsins í skúlptúragerð. Hópurinn er þekktastur fyrir að hafa samið og sett upp leikritið Samningurinn ásamt fríðu föruneyti árið 2017 en verkið var frumsýnt á Ungleik í Borgarleikhúsinu og fór eftir það á Sauðárkrók, Selfoss og Búdapest.
    </p>
    `;
};

const umHelga = () => {
  return `
    <p>
    Helgi Grímur er sviðshöfundur en hefur aðallega lagt áherslu á skrif fyrir leikhúsið síðustu misseri. Áhugaefni Helga er að búa til ærslafull ævintýri fyrir fullorðna og húmorinn er hafður í hávegum. Helgi Grímur fer í mastersnám í ritlist í haust.
    </p>
    `;
};

const umJokul = () => {
  return `
    Jökull Smári er leikaranemi í Listaháskóla Íslands. Fyrir það stundaði hann tónlistarnám á bæði rafbassa og jazzpíanó í Tónlistarskóla FÍH, nútímadans og ballett í Listdansskóla Íslands og bókmenntafræði og ritlist í Háskóla Íslands. Jökull hefur ekki klárað neitt af þessu námi en hefur lært ýmislegt sem hann nýtir svo sannarlega í listsköpun sinni.

    `;
};

const smyrslImg = () => {
  return `
  
  <img src="./myndir/smyrslboys.jpg" class="smyrsl-pic" />
  
  `;
};

const renderUmSmyrslContent = () => {
  return `
    <h5 class="">Um Smyrsl</h5>
    ${umSmyrlsTexti()}
    ${umHelga()}
    ${umJokul()}
    ${smyrslImg()}
    `;
};

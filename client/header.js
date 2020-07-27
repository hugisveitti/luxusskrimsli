const headerOptions = {
  LUXUS: "luxusskrimsli",
  FERLID: "ferlid",
  UPPRUNASAGA: "upprunasaga",
  UMSMYRSL: "umsmyrsl",
};

const navOption = "nav-option";

const selectedNav = "selected-nav";

const header = () => {
  const luxusSkrimsliATag = `<a class='${headerOptions.LUXUS}-a-tag ${navOption}'>Lúxusskrímslið</a>`;

  const ferlidATag = `<a class="${headerOptions.FERLID}-a-tag ${navOption}">Ferlið & myndir</a>`;

  const upprunasagaATag = `<a class="${headerOptions.UPPRUNASAGA}-a-tag ${navOption}">Upprunasaga</a>`;

  const umsmyrslATag = `<a class="${headerOptions.UMSMYRSL}-a-tag ${navOption}">Um Smyrsl</a>`;

  return `<header id="header">
        <nav>
            <div class="nav-wrapper">
            <img src="myndir/hringur.png" class="navbar-hringur" /> 
                <a href="" data-target="mobile-demo" class="sidenav-trigger"
                    ><i class="material-icons">menu</i></a
                >
                <ul class="left hide-on-med-and-down">
                    <li>
                        ${luxusSkrimsliATag}
                    </li>
                    <li>
                        ${ferlidATag}
                    </li>
                    <li>
                        ${umsmyrslATag}
                    </li>
                </ul>
            </div>
        </nav>
    
        <ul class="sidenav" id="mobile-demo">
            <li>
                ${luxusSkrimsliATag}
            </li>
            <li>
                ${ferlidATag}
            </li>
            <li>
                ${umsmyrslATag}
            </li>
        </ul>
    </header>`;
};

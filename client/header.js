const headerOptions = {
    LUXUS: 'luxusskrimsli',
    FERLID: 'ferlid',
    UPPRUNASAGA: 'upprunasaga',
    UMSMYRSL: 'umsmyrsl',
}

const header = (selected) => {
    const luxusSkrimsliATag =
        selected === headerOptions.LUXUS
            ? '<a selected>Lúxusskrímslið</a>'
            : "<a href='./index.html'>Lúxusskrímslið</a>"

    const ferlidATag =
        selected === headerOptions.FERLID
            ? '<a selected>Ferlið & myndir</a>'
            : '<a href="./ferlid.html">Ferlið & myndir</a>'

    const upprunasagaATag =
        selected === headerOptions.UPPRUNASAGA
            ? '<a selected>Upprunasaga</a>'
            : '<a href="./upprunasaga.html">Upprunasaga</a>'

    const umsmyrslATag =
        selected === headerOptions.UMSMYRSL
            ? '<a selected>Um Smyrsl</a>'
            : '<a href="./umsmyrsl.html">Um Smyrsl</a>'

    return `<header id="header">
        <nav>
            <div class="nav-wrapper">
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
                       ${upprunasagaATag}
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
                ${upprunasagaATag}
            </li>
            <li>
                ${umsmyrslATag}
            </li>
        </ul>
    </header>`
}

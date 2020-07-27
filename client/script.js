let sidenavInstance;

document.addEventListener("DOMContentLoaded", function () {
  let insertSoundcloud = document.getElementById("insert-soundcloud");
  insertSoundcloud.innerHTML = soundcloudIframe;

  renderHeader();

  let insertFooter = document.getElementById("insert-footer");
  insertFooter.innerHTML = footer;

  const content = document.getElementById("content");
  content.innerHTML = renderLuxusskrimsliContent();

  const luxusTags = document.getElementsByClassName("luxusskrimsli-a-tag");
  if (luxusTags) {
    for (let i = 0; i < luxusTags.length; i++) {
      luxusTags[i].addEventListener("click", () => {
        content.innerHTML = renderLuxusskrimsliContent();
        setSelectedATag(headerOptions.LUXUS);
      });
    }
  }

  const ferlidTags = document.getElementsByClassName("ferlid-a-tag");
  if (ferlidTags) {
    for (let i = 0; i < ferlidTags.length; i++) {
      ferlidTags[i].addEventListener("click", () => {
        content.innerHTML = renderFerlidContent();
        setSelectedATag(headerOptions.FERLID);
        var elems = document.querySelectorAll(".modal");
        var modalInstances = M.Modal.init(elems, {});
      });
    }
  }

  const upprunasagaTags = document.getElementsByClassName(
    `${headerOptions.UPPRUNASAGA}-a-tag`
  );
  for (let i = 0; i < upprunasagaTags.length; i++) {
    upprunasagaTags[i].addEventListener("click", () => {
      content.innerHTML = renderUpprunasagaContent();
      setSelectedATag(headerOptions.UPPRUNASAGA);
    });
  }

  const umSmyrslTags = document.getElementsByClassName(
    `${headerOptions.UMSMYRSL}-a-tag`
  );
  for (let i = 0; i < umSmyrslTags.length; i++) {
    umSmyrslTags[i].addEventListener("click", () => {
      content.innerHTML = renderUmSmyrslContent();
      setSelectedATag(headerOptions.UMSMYRSL);
    });
  }
});

const renderHeader = () => {
  let insertHeader = document.getElementById("insert-header");
  insertHeader.innerHTML = header(headerOptions.LUXUS);
  var elems = document.querySelectorAll(".sidenav");
  const options = {
    edge: "left",
  };
  sidenavInstance = M.Sidenav.init(elems, options);

  setSelectedATag(headerOptions.LUXUS);
};

const setSelectedATag = (selected) => {
  if (selected === headerOptions.LUXUS) {
    document.getElementsByTagName("main")[0].classList.add("blue-background");
  } else {
    document
      .getElementsByTagName("main")[0]
      .classList.remove("blue-background");
  }

  const allNavTags = document.getElementsByClassName(navOption);
  for (let i = 0; i < allNavTags.length; i++) {
    allNavTags[i].classList.remove(selectedNav);
  }

  const tags = document.getElementsByClassName(`${selected}-a-tag`);
  for (let i = 0; i < tags.length; i++) {
    tags[i].classList.add(selectedNav);
  }

  if (sidenavInstance) {
    for (let i = 0; i < sidenavInstance.length; i++) {
      sidenavInstance[i].close();
    }
  }
};

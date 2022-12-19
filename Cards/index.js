fetch("https://api.github.com/users")
  .then((res) => res.json())
  .then((data) => {
    document.getElementById("imge-1").setAttribute("src", data[0].avatar_url);
    document.getElementById("Name-1").innerText = data[0].login;
    document.getElementById("link-1").setAttribute("href", data[0].html_url);

    document.getElementById("imge-2").setAttribute("src", data[1].avatar_url);
    document.getElementById("Name-2").innerText = data[1].login;
    document.getElementById("link-2").setAttribute("href", data[1].html_url);

    document.getElementById("imge-3").setAttribute("src", data[2].avatar_url);
    document.getElementById("Name-3").innerText = data[2].login;
    document.getElementById("link-3").setAttribute("href", data[2].html_url);

    document.getElementById("imge-4").setAttribute("src", data[3].avatar_url);
    document.getElementById("Name-4").innerText = data[3].login;
    document.getElementById("link-4").setAttribute("href", data[3].html_url);

    document.getElementById("imge-5").setAttribute("src", data[4].avatar_url);
    document.getElementById("Name-5").innerText = data[4].login;
    document.getElementById("link-5").setAttribute("href", data[4].html_url);

    document.getElementById("imge-6").setAttribute("src", data[5].avatar_url);
    document.getElementById("Name-6").innerText = data[5].login;
    document.getElementById("link-6").setAttribute("href", data[5].html_url);

    document.getElementById("imge-7").setAttribute("src", data[6].avatar_url);
    document.getElementById("Name-7").innerText = data[6].login;
    document.getElementById("link-7").setAttribute("href", data[6].html_url);

    document.getElementById("imge-8").setAttribute("src", data[7].avatar_url);
    document.getElementById("Name-8").innerText = data[7].login;
    document.getElementById("link-8").setAttribute("href", data[7].html_url);

    document.getElementById("imge-9").setAttribute("src", data[8].avatar_url);
    document.getElementById("Name-9").innerText = data[8].login;
    document.getElementById("link-9").setAttribute("href", data[8].html_url);

    document.getElementById("imge-10").setAttribute("src", data[9].avatar_url);
    document.getElementById("Name-10").innerText = data[9].login;
    document.getElementById("link-10").setAttribute("href", data[9].html_url);

    document.getElementById("imge-11").setAttribute("src", data[10].avatar_url);
    document.getElementById("Name-11").innerText = data[10].login;
    document.getElementById("link-11").setAttribute("href", data[10].html_url);

    document.getElementById("imge-12").setAttribute("src", data[11].avatar_url);
    document.getElementById("Name-12").innerText = data[11].login;
    document.getElementById("link-12").setAttribute("href", data[11].html_url);
  });
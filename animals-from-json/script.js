const response = await fetch("animals.json");
const zoodarzs = await response.json();

console.log(zoodarzs);
const main= document.getElementById("main");

zoodarzs.forEach(nebrunurupucis => {

    console.log(nebrunurupucis);
    const article = document.createElement("article");
    main.appendChild(article);

    const img = document.createElement("img");
    img.src = nebrunurupucis["image"];
    article.appendChild(img);

    const div = document.createElement("div");
    div.className = "info";
    article.appendChild(div);

    const h2 = document.createElement("h2");
    h2.textContent = nebrunurupucis["animal"];
    div.appendChild(h2);

    const p = document.createElement("p");
    p.textContent = nebrunurupucis["description"];
    div.appendChild(p);

   // const li = document.createElement("li");
    //li.textContent = nebrunurupucis["answers"];
   // article.appendChild(li);

   const ul = document.createElement("ul");
   article.appendChild(ul);
   const answers = nebrunurupucis["answers"];
   answers.forEach((mailijs) => {
    const li = document.createElement("li");
    ul.appendChild(li);
    li.textContent = mailijs;
   });
});
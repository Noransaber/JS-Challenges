fetch("articles.json")
  .then((result) => {
    console.log(result);
    let myData = result.json();
    console.log(myData);
    return myData;
  })
  .then((full) => {
    full.length = 5;
    return full;
  })
  .then((final) => {
    for (let i = 0; i < final.length; i++) {
      let div = document.createElement("div");
      let heading = document.createElement("h3");
      let headingTxt = document.createTextNode(final[i]["title"]);
      // append txt to h3 then h3 to div
      heading.appendChild(headingTxt);
      div.appendChild(heading);
      let p = document.createElement("p");
      let pText = document.createTextNode(final[i]["description"]);
      // Append txt to p and p to div
      p.appendChild(pText);
      div.appendChild(p);
      document.body.appendChild(div);
    }
  });

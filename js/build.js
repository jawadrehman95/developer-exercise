$.getJSON("https://raw.githubusercontent.com/jawadrehman95/developer-exercise/master/data/recommendations.json", function(json) {
  // console.log("Placements", json.placements);
  // Offload items array to variable
  var productList = json.placements[0].items;
  $("#welcomeMessage").append(json.placements[0].message);

  for (var x in productList) {
    var product = productList[x];
    var template = `
    <div id=` + product.id + ` class="card">
      <img class="card-img-top" src="` + product.imageURL + `" alt="product image">
      <div class="card-block">
        <h4 class="card-title">` + product.name + `</h4>
        <p class="card-text">£` + product.price + `</p>
      </div>
    </div>
    `;
    $("#productList").append(template);
  }

});

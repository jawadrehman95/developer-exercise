$.getJSON("data/recommendations.json", function(json) {
  // console.log("JSON", json);
  // console.log("Placements", json.placements);
  // console.log("First object", json.placements[0]);
  // console.log("Object attributes", json.placements[0].message);
  // console.log("Smock Dress", json.placements[0].items[1].name);
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

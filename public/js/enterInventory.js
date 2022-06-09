const inventoryFormHandler = async (event) => {
  event.preventDefault();

  //changed const names to match with models
  const media_type = document
    .querySelector("#mediaType-inventory")
    .value.trim();
  const category_id = document.querySelector("#genre-inventory").value.trim();
  const product_name = document.querySelector("#title-inventory").value.trim();

  const wholesale_price = document
    .querySelector("#wholesalePrice-inventory")
    .value.trim();
  const retail_price = document
    .querySelector("#retailPrice-inventory")
    .value.trim();
  //const in_stock = document.querySelector("#inStock-inventory").value.trim();
  const quantity = parseInt(
    document.querySelector("#quantity-inventory").value.trim()
  );
  const product_artist = document
    .querySelector("#artist-inventory")
    .value.trim();

  const response = await fetch("/api/inventory", {
    method: "POST",
    body: JSON.stringify({
      media_type,
      category_id,
      product_name,
      product_artist,
      wholesale_price,
      retail_price,
      //in_stock,
      quantity,
      product_artist,
    }),
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/enterInventory");
  } else {
    alert("Failed to create project");
  }
};

// const media_type = document.querySelector("#mediaType-inventory-levels").value.trim();

// console.log(media_type);
// const genre_type = document
//   .querySelector("#genreType-inventory-levels").value.trim();

// window.location.href = `/inventory/${genre_type}`;

// const getResponse = await fetch("/api/inventory/", {
//   method: "GET",
//   body: JSON.stringify({

//   })
// })

document
  .querySelector(".inventory-entry-form")
  .addEventListener("submit", inventoryFormHandler);

const alertHandler = async (event) => {
  event.preventDefault();

  const myAlert = document.getElementById("#myAlert");
  document.querySelector("#myAlert").addEventListener(".submit", myAlert);
};
// do something, for instance, explicitly move focus to the most appropriate element,
// so it doesn't get lost/reset to the start of the page
// document.getElementById('...').focus()

//Add route to push inventory to database

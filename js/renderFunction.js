let productCounts = {};
let cartCounter = 3;

function renderCard(data, containerId, limit = null) {
  const container = document.getElementById(containerId);
  container.innerHTML = "";

  data = limit ? data.slice(0, limit) : data;

  data.forEach((item) => {
    const card = document.createElement("div");
    card.className = "w-38 flex-shrink-0 bg-white border-2 border-teal-400 relative shadow rounded-lg overflow-hidden";

    const img = document.createElement("img");
    img.src = "img/produk/" + item.img;
    img.className = "w-full";
    card.appendChild(img);

    const info = document.createElement("div");
    info.className = "px-2 pb-3";
    info.innerHTML = `
      <h3 class="nama-dagangan font-bold text-md mt-2">${item.name}</h3>
      <span class="text-sm harga-dagangan">Rp. ${item.price.toLocaleString()}</span>
    `;
    card.appendChild(info);

    // counter (plus & minus)
    const count = document.createElement("div");
    count.className = "flex justify-between items-center text-xs font-bold h-5 w-[80px] bg-white absolute right-[5px] top-[130px] shadow px-1 rounded-full border-2 border-teal-400";
    count.innerHTML = `
      <div class="h-[20px] w-[15px] flex items-center justify-center cursor-pointer" onclick="kurang(${item.id})">
        <i class="fa fa-minus"></i>
      </div>
      <div id="count-${item.id}" class="h-[20px] w-[15px] flex items-center justify-center">0</div>
      <div class="h-[20px] w-[15px] flex items-center justify-center cursor-pointer" onclick="tambah(${item.id})">
        <i class="fa fa-plus"></i>
      </div>
    `;
    card.appendChild(count);

    container.appendChild(card);
  });
}

function tambah(productId) {
  if (!productCounts[productId]) {
    productCounts[productId] = 0;
  }
  productCounts[productId] += 1;
  cartCounter += 1;

  document.getElementById(`count-${productId}`).innerHTML = productCounts[productId];
  document.getElementById("cartCouter").innerHTML = cartCounter;
}

function kurang(productId) {
  if (productCounts[productId] && productCounts[productId] > 0) {
    productCounts[productId] -= 1;
    cartCounter -= 1;

    document.getElementById(`count-${productId}`).innerHTML = productCounts[productId];
    document.getElementById("cartCouter").innerHTML = cartCounter;
  }
}

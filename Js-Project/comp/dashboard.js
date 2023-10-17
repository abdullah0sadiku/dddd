const products = [
    {
      id: 1,
      name: "Gaming Laptop",
      image: "https://example.com/laptop.jpg",
      price: 999.99,
    },
    {
      id: 2,
      name: "Smartphone",
      image: "https://example.com/smartphone.jpg",
      price: 499.99,
    },
    {
      id: 3,
      name: "Wireless Headphones",
      image: "https://example.com/headphones.jpg",
      price: 79.99,
    },
    {
      id: 4,
      name: "Desktop Computer",
      image: "https://example.com/desktop.jpg",
      price: 1199.99,
    },
    {
      id: 5,
      name: "Tablet",
      image: "https://example.com/tablet.jpg",
      price: 299.99,
    },
    {
      id: 6,
      name: "Smartwatch",
      image: "https://example.com/smartwatch.jpg",
      price: 149.99,
    },
    {
      id: 7,
      name: "Portable Charger",
      image: "https://example.com/charger.jpg",
      price: 29.99,
    },
    {
      id: 8,
      name: "Bluetooth Speaker",
      image: "https://example.com/speaker.jpg",
      price: 49.99,
    },
    {
      id: 9,
      name: "External Hard Drive",
      image: "https://example.com/harddrive.jpg",
      price: 89.99,
    },
    {
      id: 10,
      name: "VR Headset",
      image: "https://example.com/vr.jpg",
      price: 199.99,
    },
    {
        id: 11,
        name: "Wireless Keyboard",
        image: "https://example.com/keyboard.jpg",
        price: 49.99,
      },
      {
        id: 12,
        name: "In-Ear Earbuds",
        image: "https://example.com/earbuds.jpg",
        price: 29.99,
      },
      {
        id: 13,
        name: "4K Ultra HD TV",
        image: "https://example.com/tv.jpg",
        price: 799.99,
      },
      {
        id: 14,
        name: "Digital Camera",
        image: "https://example.com/camera.jpg",
        price: 399.99,
      },
      {
        id: 15,
        name: "Gaming Console",
        image: "https://example.com/console.jpg",
        price: 299.99,
      },
      {
        id: 16,
        name: "Laptop Backpack",
        image: "https://example.com/backpack.jpg",
        price: 39.99,
      },
      {
        id: 17,
        name: "Portable Monitor",
        image: "https://example.com/monitor.jpg",
        price: 199.99,
      },
      {
        id: 18,
        name: "Smart Home Hub",
        image: "https://example.com/smarthome.jpg",
        price: 149.99,
      },
      {
        id: 19,
        name: "Graphic Tablet",
        image: "https://example.com/tablet.jpg",
        price: 159.99,
      },
      {
        id: 20,
        name: "Noise-Canceling Headphones",
        image: "https://example.com/noisecanceling.jpg",
        price: 149.99,
      }
  ];





  export function composeProduct(product, limit=null) {
    const data = (limit == null) ? product : products.slice(0, limit)
    let html = `<div class="row">`

    for (let products of data) {
        html +=  `
        <div class="col-md-4">
            <div class="card">
              <img src="${products.image}" class="card-img-top" alt="${products.name}">
              <div class="card-body">
                <h5 class="card-title">${products.name}</h5>
                <p class="card-text">Price: $${products.price}</p>
                <a href="#" class="btn btn-primary">Add to Cart</a>
              </div>
            </div>
          </div>`
    }

    html += `</div>`

    return html
}



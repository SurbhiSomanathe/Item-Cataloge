const products = [
  
    {
    
      name: "Logitech Pop keys Keyboard",      
      imageUrl: "https://resource.logitech.com/w_1001,c_limit,q_auto,f_auto,dpr_2.0/d_transparent.gif/content/dam/logitech/en/products/keyboards/pop-keys-wireless-mechanical/pop-keys-intro-heartbreaker-desktop-1.png?v=1",
      description: "Pair your POP Keys with POP Mouse, the comfy and quiet mouse made for working anywhere, with a customizable top button that opens a world of emojis and shortcuts",
      price: 9000,
      countInStock: 10,
    },
    {
      name: "Wireless charging mouse",
      imageUrl: "https://i5.walmartimages.com/asr/b1fc528c-4bd8-44ba-835a-d9c42f7794db.b34c757f2557b69259b1c8b5b4414def.jpeg",
      description: "A mouse pad with wireless charging serves multiple purposes for computer and smartphone users. It is made of PU leather. It ensures the smooth movement of your mouse, making it easy for you to use your computer.",
      price: "2300",
      countInStock: 15,
    },
    {
      name: "Table lamp",      
      imageUrl: "https://donlighting.com/wp-content/uploads/2019/10/ENDO-Table-Lamp-by-Pepe-Fornas-Ref.A-S1156DL-Foto1-600-800.jpg",
      description: "A table lamp is a small electric lamp which stands on a table or other piece of furniture.",
      price: "5000",
      countInStock: 50,
    },
    {     
      name: "Aghori by Mayur Kalbag(Best seller)",      
      imageUrl: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1626846951i/58599662._UY2560_SS2560_.jpg",
      description: "The book is not just a story but an opportunity for the reader to experience an exuberant expedition that incorporates different and diverse activities which are spiritual, intriguing, ethereal and at times, frightening! ",
      price: "300",
      countInStock: 50,
    },
    {     
      name: "Glass Rice Despenser ",      
      imageUrl: "https://m.media-amazon.com/images/I/71AuGsIT-+L._AC_SL1154_.jpg",
      description: "【Airtight Food Container】Glass rice dispenser, suitable for holding cereal, flour, corn, soybeans, grain, dry goods, etc.It could lock the nutrition without loss, and keep your kitchen organized.",
      price: "25000",
      countInStock: 20,
    },
    {  
      name: "Headphones",      
      imageUrl: "https://images.philips.com/is/image/PhilipsConsumer/TAPH805BK_00-IMS-en_IN?$jpglarge$&wid=1250",
      description: "Headphones are a pair of small loudspeaker drivers worn on or around the head over a user's ears. They are electroacoustic transducers, which convert an electrical signal to a corresponding sound.",
      price: "5000",
      countInStock: 10,
    },
    
    {     
      name: "Laptop table",
      imageUrl: "https://n1.sdlcdn.com/imgs/i/6/z/Story-Home-Premium-Height-Adjustable-SDL172389501-1-bd0d2.jpg",
      description: "The Laptop Table is lightweight and has a movable front ledge that allows for the most comfortable hand position. It also eliminates the heat on legs or lap. Securely holds laptops of all sizes and even your personal DVD player. Assembles in no time with no tools! ",
      price: "90500",
      countInStock: 6,
    },
        
  {
    name: "PlayStation 5",
    imageUrl:
      "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80",
    description:
      "PlayStation 5 (PS5) is a home video game console developed by Sony Interactive Entertainment. Announced in 2019 as the successor to the PlayStation 4, the PS5 was released on November 12, 2020 in Australia, Japan, New Zealand, North America, Singapore, and South Korea, and November 19, 2020 onwards in other major markets except China and India.",
    price: 499,
    countInStock: 15,
  },
  {
    name: "Iphone 12",
    imageUrl:
      "https://images.unsplash.com/photo-1605787020600-b9ebd5df1d07?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1463&q=80",
    description:
      "Welcome to a new era of iPhone. Beautifully bright 6.1-inch Super Retina XDR display.1 Ceramic Shield with 4x better drop performance.2 Incredible low-light photography with Night mode on all cameras. Cinema-grade Dolby Vision video recording, editing, and playback. Powerful A14 Bionic chip. And new MagSafe accessories for easy attach and faster wireless charging.3 Let the fun begin.",
    price: 1099,
    countInStock: 10,
  },
  {
    name: "Cannon EOS-1D",
    imageUrl:
      "https://images.unsplash.com/photo-1519183071298-a2962feb14f4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    description:
      "The EOS-1D X combines speed with image quality, to create the next generation camera for professionals. Full frame 18 megapixel sensor with Dual “DIGIC 5+” processors sets the standard, and up to 12 frames per second shooting takes it beyond.",
    price: 1300,
    countInStock: 5,
  },
  {
    name: "Amazon Alexa",
    imageUrl:
      "https://images.unsplash.com/photo-1518444065439-e933c06ce9cd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80",
    description:
      "It is capable of voice interaction, music playback, making to-do lists, setting alarms, streaming podcasts, playing audiobooks, and providing weather, traffic, sports, and other real-time information, such as news. Alexa can also control several smart devices using itself as a home automation system.",
    price: 50000,
    countInStock: 25,
  },
  {
    name: "Audio Technica Headphones",
    imageUrl:
      "https://images.unsplash.com/photo-1558756520-22cfe5d382ca?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    description:
      "Outfitted with 45mm large-aperture dynamic drivers and an over-ear, closed-back design, the ATH-M50x headphones deliver clarity, deep bass, and extended bandwidth (15 Hz to 28 kHz) while isolating you from outside sounds.",
    price: 233,
    countInStock: 4,
  },
  {
    name: "JBL FLIP 4",
    imageUrl:
      "https://images.unsplash.com/photo-1564424224827-cd24b8915874?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80",
    description:
      "JBL Flip 4 is the next generation in the award-winning Flip series; it is a portable Bluetooth speaker that delivers surprisingly powerful stereo sound. This compact speaker is powered by a 3000mAh rechargeable Li-ion battery that offers up to 12 hours of continuous, high-quality audio playtime.",
    price: 140,
    countInStock: 10,
  },
];

module.exports = products;
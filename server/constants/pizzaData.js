const pizzas = [
    {
      name: "Margherita",
      varients: ["small", "medium", "large"],
      prices: [
        {
          small: 99,
          medium: 199,
          large: 399,
        },
      ],
      category: "veg",
      image: "https://images.unsplash.com/photo-1594007654729-407eedc4be65?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGl6emF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      description: "Classic delight with 100% real mozzarella cheese",
    },
    {
      name: "Farmhouse",
      varients: ["small", "medium", "large"],
      prices: [
        {
          small: 229,
          medium: 399,
          large: 599,
        },
      ],
      category: "veg",
      image: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cGl6emF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      description:
        "Delightful combination of onion, capsicum, tomato & grilled mushroom",
    },
    {
      name: "Veggie Paradise",
      varients: ["small", "medium", "large"],
      prices: [
        {
          small: 180,
          medium: 290,
          large: 460,
        },
      ],
      category: "veg",
      description:
        "The awesome foursome! Golden corn, black olives, capsicum, red paprika",
      image: "https://images.unsplash.com/photo-1613564834361-9436948817d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHBpenphfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      name: "Chicken Golden Delight",
      varients: ["small", "medium", "large"],
      prices: [
        {
          small: 249,
          medium: 349,
          large: 599,
        },
      ],
      category: "nonveg",
      image: "https://images.unsplash.com/photo-1615719413546-198b25453f85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fHBpenphfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      description:
        "Double pepper barbecue chicken, golden corn and extra cheese, true delight",
    },
    {
      name: "Chicken Pepperoni",
      varients: ["small", "medium", "large"],
      prices: [
        {
          small: 320,
          medium: 580,
          large: 800,
        },
      ],
      category: "nonveg",
      image: "https://images.unsplash.com/photo-1555072956-7758afb20e8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fHBpenphfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      description:
        "A classic American taste! Relish the delectable flavor of Chicken Pepperoni, topped with extra cheese",
    },
    {
      name: "Indi Chicken Tikka",
      varients: ["small", "medium", "large"],
      prices: [
        {
          small: 250,
          medium: 380,
          large: 500,
        },
      ],
      category: "nonveg",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDJ8fHBpenphfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      description:
        "The wholesome flavour of tandoori masala with Chicken tikka, onion, red paprika & mint mayo",
    },
    {
      name: "New York-Style Pizza.",
      varients: ["small", "medium", "large"],
      prices: [
        {
          small: 250,
          medium: 380,
          large: 500,
        },
      ],
      category: "nonveg",
      image: "https://images.unsplash.com/photo-1573821663912-569905455b1c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njl8fHBpenphfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      description:
        "The wholesome flavour ofnew york masala , onion, red paprika & mint mayo and ajwayin",
    },
    {
      name: "Margherita Pizza",
      varients: ["small", "medium", "large"],
      prices: [
        {
          small: 250,
          medium: 380,
          large: 500,
        },
      ],
      category: "nonveg",
      image: "https://images.unsplash.com/photo-1571407921708-4202261ea9e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTJ8fHBpenphfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      description:
        "Deceptively simple, the Margherita pizza is made with basil, fresh mozzarella, and tomatoes.",
    },
    {
      name: "BBQ Chicken Pizza",
      varients: ["small", "medium", "large"],
      prices: [
        {
          small: 250,
          medium: 380,
          large: 500,
        },
      ],
      category: "nonveg",
      image: "https://images.unsplash.com/photo-1587085416963-22efba033dd5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTIwfHxwaXp6YXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      description:
        " The chicken slathered over the top of a pie gives it a tangy, sweet flavor that can’t be beaten.",
    },
    {
      name: "Supreme Pizza",
      varients: ["small", "medium", "large"],
      prices: [
        {
          small: 250,
          medium: 380,
          large: 500,
        },
      ],
      category: "nonveg",
      image: "https://images.unsplash.com/photo-1620894599483-aefd71cb525f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTM1fHxwaXp6YXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      description:
        "The “supreme” refers to the litany of toppings that come scattered on these pies, from sausage to vegetables to pepperoni. ",
    },
  ];
  export default pizzas;
  
const images = [
  {
    url: "/images/avatar.png",
  },
  {
    url: "/images/avatar1.png",
  },
  {
    url: "/images/avatar2.png",
  },
  {
    url: "/images/avatar3.png",
  },
];

const chatData = [
  {
    message: "Hi team 👋",
    sender: null,
    time: "11:31 AM",
  },
  {
    message: "Anyone on for lunch today",
    sender: null,
    time: "11:31 AM",
  },
  {
    message: "I’m down! Any ideas??",
    sender: {
      name: "Jav",
      role: "Engineering",
      url: "/images/avatar1.png",
    },
    time: "11:35 AM",
  },
  {
    message: "I am down for whatever!",
    sender: null,
    time: "11:36 AM",
  },
  {
    message: "I was thinking the cafe downtown",
    sender: {
      name: "Aubrey",
      role: "Product",
      url: "/images/avatar6.png",
    },
    time: "11:45 AM",
  },
  {
    message: "But limited vegan options @Janet!",
    sender: {
      name: "Aubrey",
      role: "Product",
      url: "/images/avatar6.png",
    },
    time: "11:46 AM",
  },
  {
    message: "Agreed",
    sender: null,
    time: "11:52 AM",
  },
  {
    message: "That works- I was actually planning to get a smoothie anyways 👍",
    sender: {
      name: "Janet",
      role: "Engineering",
      url: "/images/avatar3.png",
    },
    time: "12:03 AM",
  },
  {
    message: "On for 12:30 PM then ?",
    sender: {
      name: "Janet",
      role: "Product",
      url: "/images/avatar5.png",
    },
    time: "12:04 AM",
  },
];

export { images, chatData };

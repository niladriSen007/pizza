import React from "react";

const about = [
  {
    q: "What Are The Best Pominozz. Stores Near Me?",
    a: "In this fast-paced world where everything is technologically driven, so is our search for food nearby when we are famished. Without a second thought, we instantly pick up our phones to search for food places that are willing to deliver tasty food quickly to satiate our hunger. And guess what’s the first name that tops this list? Yes, it’s Pominozz.!",
  },
  {
    q: "Dine-In At The Nearest Pominozz.",
    a: "Struggling to spend some quality time with your family and friends? Then dining out is a great way to accomplish this! We understand that picking the best place is of utmost importance so, why not head to one of the nearest Pominozz. for dinner? The bright ambiance, vibrant colors, friendly staff, and the aroma of a freshly baked pizza with its roots in Italian taste, makes Pominozz. one of the most sought places to dine in.",
  },
  {
    q: "Lunch At Nearest Pominozz.",
    a: "On the days when you are strapped for time and want a quick wholesome lunch, grabbing a gooey slice of pizza from the nearest Pominozz. could be a good idea. If you are puzzled about how to locate Pominozz. near your location, one easy way is to use the store locator option on the official website. You will be pleasantly surprised to know that Pominozz. is omnipresent, with food and a variety of options near you on every corner.!",
  },
  {
    q: "Get Best Late Night Food From Pominozz.",
    a: "Time becomes elusive when we are with friends, and evening catch-ups turn into late-night party inevitability. You can rely only on one of the Pominozz. to supply you with hot and pocket-friendly food even in the middle of the night. Unlike other nights Pominozz. bakes every single pizza on the menu fresh and delivers it at a lightning speed. Pominozz. restaurants open for dine-in near you take extreme care to follow all safety protocols.",
  },
  {
    q: "No Contact Food Delivery From Pominozz.",
    a: "No matter which part of India you visit, the taste of Pominozz. pizza remains uncompromised. From being one of the best restaurants in New Delhi up north to being one of the best restaurants in Bangalore down south, Pominozz. has been winning the hearts of millions of people in a cheesy way. Looking for the best restaurants in Mumbai that can beat the traffic and deliver food near me that’s still hot and fresh, then Pominozz. is your way to go!",
  },
  {
    q: "Impromptu Food Cravings:",
    a: "Late night food cravings keeping you awake? Then Pominozz. late night takeaway restaurants are here to rescue you! Install the app to browse the menu and place an order for your favorite pizza. On the checkout page, you can request a takeaway. Pominozz. takeaway near you will keep your order packed and ready to be picked and gone in less than a few minutes.",
  },
  {
    q: "A Crust Of Your Choice:",
    a: "You can choose between different crusts like new hand-tossed, wheat thin, cheese burst, and fresh pan. You can then top the pie with your favorite veggie and meat toppings and even add extra cheese! Pominozz. delivery in Pune upon receiving your order will craft the pie exactly how you like it and the food home delivery partner will bring the order right to your doorstep or any location that you specify.",
  },
  {
    q: "Food Delivery Made Easy:",
    a: "Undoubtedly Pominozz. is one of the top restaurants that comes to our mind when we think of food delivery near me that’s quick, safe, and responsible. We know when you are hungry, you hate waiting, and we hate to make you wait too. Unlike other home delivery restaurants, Pominozz. stores near you prepare, pack, and deliver your boxes of happiness in just 30 minutes! Unbeatable right?",
  },
  {
    q: "An End-To-End Order Tracking:",
    a: "Pominozz. remains uncontested as one of the best delivery restaurants in India. Pominozz. home delivery service empowers you to track the complete process from the start of the order till the pizza delivery is done so that you stay informed at every step. Looking for food delivery in Ahmedabad that is open late at night? Save Pominozz. on your speed dial!",
  },
  {
    q: "Dine-In Anytime:",
    a: "If you are scouting for a good dine-in near you to take your family for a hearty meal or when you want to just hang out with your friends at lunch at Domino's nearby, then Pominozz. is the perfect pick. The staff takes the safety of the customers very seriously, and sanitization of the outlets happens at regular intervals so that when you are at the Pominozz. for lunch dine-in, you know that you are in safe hands and you can enjoy in peace.",
  },
  {
    q: "New To The City:",
    a: "If you are new to the city and looking for takeaway restaurants in Chennai then you are sure to find Pominozz. food outlet near me every stone’s throw away. You can easily dial the restaurant and place an order while you take a stroll in the neighborhood",
  },
];

const About = () => {
  return (
    <div className="px-6 md:px-24 py-4">
        <iframe
        title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.851199305698!2d88.44321601491318!3d22.6965825851191!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89f2f4d8192db%3A0x8b53463b0e497142!2sSreepur%2C%20Madhyamgram%2C%20West%20Bengal%20700130!5e0!3m2!1sen!2sin!4v1672233648723!5m2!1sen!2sin"
          // width="1330"
          // height="450"
          style={{border:"0"}}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          className="mb-12 w-[330px] md:w-[1330px] h-[300px] md:h-[450px] "
        ></iframe>
      {about.map((a) => (
        <div key={a.q} className="py-3">
          <p className="text-lg md:text-2xl font-bold py-1 text-red-800">{a.q}</p>
          <p className=" text-sm md:text-base font-normal py-1">{a.a}</p>
        </div>
      ))}
    </div>
  );
};

export default About;

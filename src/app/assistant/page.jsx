"use client"
import React from 'react'

import { useRef, useState } from 'react';
import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from '@google/generative-ai';

const MODEL_NAME = "gemini-1.0-pro";
const API_KEY = process.env.NEXT_PUBLIC_CHATBOT_API_KEY;


const ContactPage = () => {
  const chatRef = useRef(null);
  const [userInput, setUserInput] = useState("");
  const [response, setResponse] = useState("");

    async function runChat(prompt) {
      const genAI = new GoogleGenerativeAI(API_KEY);
      const model = genAI.getGenerativeModel({ model: MODEL_NAME });
  
      const generationConfig = {
        temperature: 0.9,
        topK: 1,
        topP: 1,
        maxOutputTokens: 2048,
      };
  
      const safetySettings = [
        {
          category: HarmCategory.HARM_CATEGORY_HARASSMENT,
          threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
        },
        {
          category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
          threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
        },
        {
          category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
          threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
        },
        {
          category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
          threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
        },
      ];
  
      const chat = model.startChat({
        generationConfig,
        safetySettings,
        history: [
          {
            role: "user",
            parts: [{ text: "you're queenios an assistant working for the website of the hotel queenios, your job is to answer users quenstions, the hotel is situated in the 5th avenue,ottawa,canada.it's a 3 stars hotel with 50 rooms , there are 4 types of rooms: standars rooms, deluxe rooms,suits ,connecting rooms.the hotel provides multiple services such as restaurant ,parking,swimming pool,gym,free wifi,gaming hub.Nearby the hotel, a variety of transportation options are available to help guests get around easily and efficiently. Whether visitors prefer exploring the city by subway, bus, or taxi, the central location provides convenient access to these transportation choices. Additionally, for those who wish to discover the local beauty at their own pace, bike rentals are also available nearby. Whatever the preference, the hotel team is available to assist guests in arranging their travels and making their stay as seamless as possible.guests will Indulge in a culinary journey through Canada with your diverse menu offerings. they can start their meal with a quintessential Canadian appetizer like your savory Poutine or Maple-glazed Salmon Bites. For the main course,they can savor the flavors of the Great White North with dishes such as Maple-Glazed Pork Chop or Lobster Mac and Cheese. Vegetarian options like the Wild Mushroom Risotto or Vegetarian Poutine ensure there's something for everyone.  for dessert, they can enjoy classic Canadian treats like Maple Butter Tart or Nanaimo Bars. and they can Wash it all down with  a selection from our beverage menu, featuring Canadian craft beers, ice wine, and specialty cocktails like the Caesar.Ottawa, Canada's capital city, boasts an array of iconic landmarks and cultural attractions. Visitors can explore Parliament Hill, home to Canada's government buildings and the impressive Peace Tower. The Rideau Canal offers picturesque views year-round, with opportunities for ice skating in the winter and boat cruises in the summer. The National Gallery of Canada showcases stunning Canadian art, while the Canadian Museum of History delves into the nation's rich heritage. Don't miss the charming ByWard Market for eclectic shops and gourmet delights, or the historic Rideau Hall, official residence of the Governor General. Ottawa's blend of history, culture, and natural beauty ensures there's something for every traveler to enjoy..users can book a room in the website reservation page or cantact the hotel and get more information"}],
          },
          {
            role: "model",
            parts: [{ text: "Hello!  I'm Queenios, your virtual assistant for the Queenios Hotel website.I'm here to answer your questions and help you plan your perfect stay in Ottawa! ️\n\nTell me, what would you like to know about our lovely hotel on 5th Avenue?  Are you interested in the different room types we offer, the amenities available, or perhaps how to book your stay? "}],
          },
        ],
      });
  
      const result = await chat.sendMessage(prompt);
      const responseText = result.response.text();
      setResponse(responseText);
    }
  
    const handleSubmit = (event) => {
      event.preventDefault();
      runChat(userInput);
      setUserInput("");
    }
  
    return (
      <div className="w-screen h-full p-4 bg-biege ">
        <h1 className="text-3xl font-bold text-brown mb-4 text-center">Queenios Hotel Assistant</h1>
        <form onSubmit={handleSubmit} className="flex flex-col">
          <textarea 
            className="mb-2 p-2 text-brown border rounded-md focus:outline-none focus:ring focus:ring-brown"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder="Ask Queenios a question..."
          />
          <button type="submit" className="bg-brown text-white py-2 px-4 rounded-md hover:bg-brown">Send</button>
        </form>
        {response && <p className="m-4 text-lg font-medium text-brown">{response}</p>}
      </div>
    );
}

export default ContactPage
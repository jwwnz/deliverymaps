import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

const iconComp = <div />;

const AnyReactComponent = ({ text }) => (
  <div>
    <i className="fa fa-map-marker" style={{ color: "red" }} />
    {text}
  </div>
);

const MyLocationComponent = () => (
  <div>
    <i className="fa fa-car" style={{ color: "green" }} />
  </div>
);

class SimpleMap extends Component {
  constructor(props) {
    super(props);

    this.state = {
      restaurants: [
        {
          lat: -36.8523379,
          lng: 174.7691077,
          text: "Auckland Uni"
        },
        { text: "McDonald's® (Britomart)", lat: -36.844342, lng: 174.767201 },
        {
          text: "Murder Burger Ponsonby",
          lat: -36.85650116914914,
          lng: 174.74697142327685
        },
        { text: "Better Burger Mount Eden", lat: -36.880862, lng: 174.762177 },
        { text: "Kebab King Symonds Street", lat: -36.858148, lng: 174.763746 },
        { text: "Kokoro Kitchen", lat: -36.864388, lng: 174.760615 },
        { text: "Soul Thai", lat: -36.870649, lng: 174.761108 },
        { text: "Pizza Club (Auckland CBD)", lat: -36.849627, lng: 174.76442 },
        { text: "Hell (Victoria Street)", lat: -36.848172, lng: 174.763001 },
        { text: "Mexicali Fresh Ponsonby", lat: -36.855112, lng: 174.745932 },
        { text: "Lord Of The Fries K Road", lat: -36.857694, lng: 174.760139 },
        { text: "Boy & Bird", lat: -36.852815, lng: 174.744939 },
        { text: "Burger Wisconsin Mt Eden", lat: -36.883178, lng: 174.761543 },
        { text: "Wok Express Ponsonby", lat: -36.851993, lng: 174.744749 },
        { text: "Ben & Jerry's - Ponsonby", lat: -36.855509, lng: 174.746034 },
        { text: "Bird On A Wire Ponsonby", lat: -36.855828, lng: 174.746299 },
        { text: "Raviz", lat: -36.847734, lng: 174.761808 },
        { text: "Nando's (Queen St)", lat: -36.852747, lng: 174.764034 },
        { text: "Mad Mex Ponsonby", lat: -36.857392, lng: 174.747987 },
        { text: "HA! Poke (Ponsonby)", lat: -36.852083, lng: 174.744727 },
        { text: "Oh Calcutta", lat: -36.854089, lng: 174.77936 },
        { text: "Donair Kebab", lat: -36.857432, lng: 174.758005 },
        { text: "Po' Brothers", lat: -36.853201, lng: 174.745563 },
        { text: "Kai Eatery", lat: -36.852024, lng: 174.764409 },
        { text: "Tiffin Indian cuisine", lat: -36.873957, lng: 174.736826 },
        { text: "Tank Juice Ponsonby", lat: -36.855509, lng: 174.746034 },
        { text: "La Porchetta (Parnell)", lat: -36.854305, lng: 174.779623 },
        { text: "Poké Bar (Ponsonby)", lat: -36.853986, lng: 174.74585 },
        { text: "Grill and Shakes", lat: -36.871882, lng: 174.744708 },
        { text: "Epolito's Pizzeria", lat: -36.85512, lng: 174.738665 },
        {
          text: "Cafe BBQ Duck 东风好食中心",
          lat: -36.848146,
          lng: 174.766559
        },
        { text: "Cafe Viet", lat: -36.863913, lng: 174.737025 },
        { text: "Bolliwood Ponsonby", lat: -36.857372, lng: 174.747937 },
        { text: "East Noodle Bar", lat: -36.853955, lng: 174.745924 },
        { text: "Namaste Infusion Kitchen", lat: -36.851509, lng: 174.760249 },
        {
          text: "Otto Woo Noodle Bar (Newmarket)",
          lat: -36.87052,
          lng: 174.778129
        },
        { text: "@Bangkok", lat: -36.871986, lng: 174.745044 },
        {
          text: "Ku Bick Japanese Restaurant",
          lat: -36.854692,
          lng: 174.768177
        },
        { text: "Thai Silver Restaurant", lat: -36.845534, lng: 174.736083 },
        { text: "Nando's (Newmarket)", lat: -36.868311, lng: 174.777789 },
        { text: "Dumpling House", lat: -36.85961330000001, lng: 174.761135 },
        { text: "Al Volo Pizzeria", lat: -36.865887, lng: 174.761085 },
        { text: "Pita Pit (Ponsonby)", lat: -36.857623, lng: 174.748304 },
        { text: "Burger Boy", lat: -36.84218, lng: 174.763717 },
        { text: "Pizzeria Rosso Pomodoro", lat: -36.866076, lng: 174.743496 },
        { text: "Kings Roast", lat: -36.869558, lng: 174.749924 },
        {
          text: "PappaRich - Auckland",
          lat: -36.85167304704154,
          lng: 174.76324692773113
        },
        { text: "Black Dog Burger", lat: -36.847471, lng: 174.75996 },
        { text: "Pocha", lat: -36.848316, lng: 174.76767 },
        { text: "Pane e Vino", lat: -36.85897, lng: 174.748087 },
        { text: "Wok Express Parnell", lat: -36.858388, lng: 174.782315 },
        { text: "Fokker Bros", lat: -36.843404, lng: 174.762621 },
        { text: "Top Cafe Dumpling House", lat: -36.858461, lng: 174.760322 },
        { text: "Food Truck Garage", lat: -36.849453, lng: 174.758714 },
        { text: "Wok Express Kingsland", lat: -36.874699, lng: 174.735278 },
        { text: "Bangkok's Thai Food", lat: -36.857661, lng: 174.758605 },
        { text: "Turkish Kebab Express", lat: -36.865392, lng: 174.760665 },
        { text: "Circus Circus", lat: -36.882292, lng: 174.761974 },
        { text: "Turkish Cafe Ponsonby", lat: -36.848889, lng: 174.743738 },
        {
          text: "Delight Spice Indian Cuisine",
          lat: -36.867544,
          lng: 174.776804
        },
        {
          text: "Mueng Fern Thai Takeaway",
          lat: -36.8528937,
          lng: 174.7639278
        },
        {
          text: "Kebab Grillers 'n' Fried Chicken",
          lat: -36.8580501,
          lng: 174.7634771
        },
        { text: "The Ancient Mariner", lat: -36.8710929, lng: 174.7611691 },
        { text: "Hell (Symonds Street)", lat: -36.863075, lng: 174.761391 },
        {
          text: "The Flying Burrito Brothers (Newmarket)",
          lat: -36.86697166524601,
          lng: 174.77765952264932
        },
        { text: "Japanese Dining En", lat: -36.852494, lng: 174.763815 },
        { text: "Mexicali Fresh K Road", lat: -36.858394, lng: 174.760322 },
        { text: "Sawadee Thai Cuisine", lat: -36.858996, lng: 174.751069 },
        {
          text: "Papa's Italian Eatery (aka Papa's Pizza)",
          lat: -36.874741,
          lng: 174.741631
        },
        { text: "Nahm", lat: -36.850176, lng: 174.763524 },
        { text: "Chicka", lat: -36.872296, lng: 174.743341 },
        {
          text: "Velvet Burger Federal Lane",
          lat: -36.848926,
          lng: 174.762341
        },
        { text: "Bona Pizzeria", lat: -36.849098, lng: 174.743799 },
        { text: "The Burgerie", lat: -36.857754, lng: 174.76203 },
        {
          text: "Wagamama Newmarket",
          lat: -36.87100817727773,
          lng: 174.777927026155
        },
        { text: "Hunger Burger", lat: -36.857781, lng: 174.759671 },
        { text: "Farina", lat: -36.851745, lng: 174.744467 },
        { text: "Zambrero (K Road)", lat: -36.858167, lng: 174.759295 },
        { text: "Hell (Quay St)", lat: -36.847823, lng: 174.780746 },
        { text: "Murder Burger Mt Eden", lat: -36.875782, lng: 174.750872 },
        { text: "McDonald's® (Grey Lynn)", lat: -36.861996, lng: 174.750356 },
        { text: "Gusto Italiano", lat: -36.84895, lng: 174.744188 },
        {
          text: "Pita Pit (Britomart)",
          lat: -36.84472270382991,
          lng: 174.77071767771113
        },
        { text: "Kati Grill K Road", lat: -36.858107, lng: 174.760711 },
        {
          text: "Hot Lips - Nashville Style Chicken & Cauli",
          lat: -36.852077,
          lng: 174.74471
        },
        { text: "Nickie's Thai Restaurant", lat: -36.864651, lng: 174.779399 },
        { text: "B&D Restaurant", lat: -36.8778145, lng: 174.7506231 },
        { text: "Aroma Indian Cuisine", lat: -36.868311, lng: 174.777789 },
        {
          text: "Krung Thep Thai Street Food - Karangahape Rd",
          lat: -36.857431,
          lng: 174.757704
        },
        {
          text: "Betsia Kebabs & Burgers Symonds St",
          lat: -36.863341,
          lng: 174.761039
        },
        { text: "Pedro's House of Lamb", lat: -36.85836, lng: 174.74841 },
        { text: "Simon & Lee", lat: -36.851242, lng: 174.782777 },
        {
          text: "Fujisan Japanese Restaurant",
          lat: -36.855942,
          lng: 174.762509
        },
        { text: "Ginas Italian Kitchen", lat: -36.862435, lng: 174.761141 },
        { text: "Dumpling Box Commerce St", lat: -36.845457, lng: 174.76785 },
        { text: "Winnie's Thai Cuisine", lat: -36.868392, lng: 174.777788 },
        { text: "Saan", lat: -36.855509, lng: 174.746034 },
        { text: "Thai Friends", lat: -36.85708, lng: 174.781206 },
        { text: "Malay Parlour", lat: -36.852077, lng: 174.74471 },
        { text: "Dumpling Box on Elliot", lat: -36.849182, lng: 174.764088 },
        { text: "Everest Dine", lat: -36.856395, lng: 174.780827 },
        {
          text: "Mekong Neua Thai Restaurant",
          lat: -36.872096,
          lng: 174.744436
        },
        { text: "Thai Hut Takeaways", lat: -36.877814, lng: 174.740986 },
        { text: "Tom Yum Eden Thai Cuisine", lat: -36.876742, lng: 174.750572 },
        { text: "Pita Pit (Symonds St)", lat: -36.855017, lng: 174.766851 },
        {
          text: "Elisabeth - Coffee & Dessert",
          lat: -36.871789,
          lng: 174.744858
        },
        { text: "Bian Sushi & Donburi", lat: -36.863015, lng: 174.760968 },
        { text: "Tucks and Bao", lat: -36.865665, lng: 174.777843 },
        { text: "Petra Shawarma", lat: -36.872479, lng: 174.743785 },
        { text: "Ha Noi Corner", lat: -36.852894, lng: 174.763928 },
        { text: "Osaka Restaurant", lat: -36.854322, lng: 174.763303 },
        { text: "Pokpok Thai Restaurant", lat: -36.857425, lng: 174.758414 },
        { text: "New Inn Pizza Beach Road", lat: -36.848512, lng: 174.774055 },
        { text: "Brothers Juke Joint", lat: -36.868469, lng: 174.7588 },
        { text: "Little Easy", lat: -36.853724, lng: 174.745431 },
        {
          text: "Gorgeous New York Pizza Bar",
          lat: -36.878756,
          lng: 174.749888
        },
        {
          text: "Pita Pit (Parnell)",
          lat: -36.85346053789108,
          lng: 174.77913397116117
        },
        { text: "E-Sarn WOK", lat: -36.858962, lng: 174.759105 },
        { text: "Kebabs on Queen", lat: -36.851273, lng: 174.764702 },
        { text: "Mithaiwala CBD", lat: -36.857863, lng: 174.758802 },
        {
          text: "Fuga Modern Japanese Brasserie",
          lat: -36.84831892388325,
          lng: 174.7625898404397
        },
        {
          text: "Mexicali Fresh Princes Wharf",
          lat: -36.841869,
          lng: 174.764939
        },
        {
          text: "Jaan Mediterranean Cafe & Takeaway",
          lat: -36.872249,
          lng: 174.743569
        },
        {
          text: "Johnny Barr's Fresh Food Bistro",
          lat: -36.841799,
          lng: 174.758057
        },
        {
          text: "Lord Of The Fries NZ Queen St",
          lat: -36.84533171266981,
          lng: 174.7677090194624
        },
        { text: "Loco Pizza", lat: -36.858855, lng: 174.782571 },
        { text: "The Yakitori House", lat: -36.846462, lng: 174.767052 },
        { text: "Velvet Burger Fort Street", lat: -36.846045, lng: 174.767365 },
        {
          text: "HomeCooked Filipino Cuisine",
          lat: -36.85035901601001,
          lng: 174.76344373657054
        },
        { text: "Al's Deli Queen Street", lat: -36.856654, lng: 174.762279 },
        { text: "Grey Lynn Turkish Kebabs", lat: -36.864368, lng: 174.73757 },
        { text: "Farang Cafe & Bistro", lat: -36.872163, lng: 174.7437 },
        { text: "Filipino Ensalada Cafe", lat: -36.857851, lng: 174.75827 },
        { text: "Sushi Samurai", lat: -36.863749, lng: 174.760912 },
        {
          text: "Gelatiamo",
          lat: -36.840881428664275,
          lng: 174.75800965049058
        },
        { text: "Kebab King Parnell", lat: -36.853252, lng: 174.779106 },
        { text: "Heat Pizza", lat: -36.854947, lng: 174.766958 },
        {
          text: "Mexicali Fresh Victoria Street",
          lat: -36.847866,
          lng: 174.761937
        },
        {
          text: "Miss Clawdy",
          lat: -36.841206776068056,
          lng: 174.75753588566872
        },
        { text: "Kebab Korner (Halal)", lat: -36.851479, lng: 174.760275 },
        { text: "Rumi", lat: -36.855877, lng: 174.780713 },
        { text: "The Java Room", lat: -36.857177, lng: 174.781283 },
        {
          text: "Betsia Kebabs & Burgers City Rd",
          lat: -36.85672,
          lng: 174.763405
        },
        {
          text: "Handmade Burgers Kingsland",
          lat: -36.871728,
          lng: 174.745287
        },
        { text: "Portofino Parnell", lat: -36.85374, lng: 174.77969 },
        { text: "Indian Lounge", lat: -36.883972, lng: 174.761461 },
        { text: "The Mexican Cafe", lat: -36.848149, lng: 174.763082 },
        { text: "Basil Thai", lat: -36.876204, lng: 174.751257 },
        { text: "Kampung Malaysia", lat: -36.857582, lng: 174.748336 },
        { text: "Roll N Sushi", lat: -36.846523, lng: 174.773862 },
        {
          text: "The Coffee Club High Street",
          lat: -36.848166,
          lng: 174.766534
        },
        { text: "Miss Moonshine's", lat: -36.856812, lng: 174.746998 },
        { text: "Ruk Thai Ponsonby", lat: -36.8576227, lng: 174.748304 },
        { text: "Little India Anzac Avenue", lat: -36.846205, lng: 174.771472 },
        { text: "The Portland Public House", lat: -36.871834, lng: 174.744971 },
        {
          text: "Zambrero (Elliot Street)",
          lat: -36.849048545989525,
          lng: 174.7644382659156
        },
        { text: "Kuta Bali Ponsonby", lat: -36.857583, lng: 174.748205 },
        { text: "The Zing", lat: -36.872119, lng: 174.743792 },
        {
          text: "Wishing Well Indian Restaurant",
          lat: -36.858151,
          lng: 174.782051
        },
        {
          text: "Asian Ruby Vietnamese Restaurant",
          lat: -36.85708,
          lng: 174.781206
        },
        {
          text: "Jango Mumbai Street Food (Elliott Street)",
          lat: -36.849182,
          lng: 174.764088
        },
        {
          text: "Krung Thep Thai Street Food - Custom St",
          lat: -36.843723,
          lng: 174.762568
        },
        { text: "The Island Gelato Company", lat: -36.842997, lng: 174.766901 },
        {
          text: "Pita Pit (Victoria Street West)",
          lat: -36.848514,
          lng: 174.764057
        },
        { text: "Green Time", lat: -36.845984, lng: 174.767881 },
        { text: "K Road Bufia", lat: -36.857701, lng: 174.761954 },
        { text: "Al's Doughnuts", lat: -36.856693, lng: 174.762325 },
        {
          text: "The Chef Indian Restaurant & Bar",
          lat: -36.875632,
          lng: 174.776903
        },
        {
          text: "The Coffee Club Metro Centre",
          lat: -36.852053,
          lng: 174.763983
        },
        { text: "Ela Cuisine", lat: -36.850293, lng: 174.7636 },
        { text: "Desserts Near Me", lat: -36.871882, lng: 174.744708 },
        { text: "Pita Pit (Victoria Park)", lat: -36.847489, lng: 174.758794 },
        { text: "Miann", lat: -36.846358, lng: 174.769037 },
        { text: "The Spaghetti Incident", lat: -36.878756, lng: 174.749888 },
        { text: "Scarlett Slimms and Lucky", lat: -36.882867, lng: 174.762255 },
        {
          text: "The Culpeper",
          lat: -36.84172069383403,
          lng: 174.7645066926895
        },
        { text: "White+Wong's", lat: -36.84218, lng: 174.763717 },
        { text: "Taco Joint", lat: -36.8478663, lng: 174.7619367 },
        { text: "Miss Hotpot", lat: -36.879244, lng: 174.749708 },
        { text: "Beijing Lu Bar", lat: -36.857716, lng: 174.76069 },
        { text: "Pita Pit (Viaduct Harbor)", lat: -36.845224, lng: 174.756936 },
        {
          text: "Malaysian Noodles",
          lat: -36.84477450000001,
          lng: 174.7647914
        },
        { text: "Mr Toms", lat: -36.854659, lng: 174.746255 },
        { text: "Proper Pizza", lat: -36.847259, lng: 174.767271 },
        { text: "Romani Cafe", lat: -36.845984, lng: 174.767881 },
        { text: "Chapel Bar and Bistro", lat: -36.855022, lng: 174.746385 },
        { text: "Pitt St Pub", lat: -36.857516, lng: 174.758781 },
        { text: "Sitara", lat: -36.881076, lng: 174.761847 },
        { text: "The Crab Shack", lat: -36.841869, lng: 174.764939 },
        { text: "Gerome", lat: -36.856183, lng: 174.780689 },
        {
          text: "Charminar Cuisines of India",
          lat: -36.859515,
          lng: 174.751875
        },
        { text: "Bangkok Ice Cream", lat: -36.858026, lng: 174.75997 },
        { text: "Buffalo Bar and Grill", lat: -36.840399, lng: 174.764982 },
        { text: "Red Elephant Thai Cuisine", lat: -36.865516, lng: 174.766822 },
        { text: "Mentatz Anzac Ave", lat: -36.846997, lng: 174.771849 },
        { text: "Good Times Bar", lat: -36.858107, lng: 174.760711 },
        { text: "Tama Eatery and Bar", lat: -36.858311, lng: 174.761434 },
        {
          text: "The Tandoor",
          lat: -36.849193932969115,
          lng: 174.7643574053778
        },
        {
          text: "Harbourside Ocean Bar Grill",
          lat: -36.842997,
          lng: 174.766901
        },
        { text: "Kaya", lat: -36.85050310430877, lng: 174.76561443520185 },
        {
          text: "POKE BAR - QUEEN STREET",
          lat: -36.84655170000001,
          lng: 174.7657366
        },
        { text: "Dolly Bird", lat: -36.846552, lng: 174.765737 },
        { text: "Sweat Shop Brew Kitchen", lat: -36.849039, lng: 174.756894 },
        { text: "Besos Latinos Restaurant", lat: -36.850176, lng: 174.763524 },
        { text: "Chamate", lat: -36.845992, lng: 174.765082 },
        {
          text: "OKO Dessert Kitchen",
          lat: -36.851814756481836,
          lng: 174.7635213174143
        },
        {
          text: "That's Amore",
          lat: -36.84845202711721,
          lng: 174.7669095276126
        },
        {
          text: "Thirst Beverages  & Finger Foods ",
          lat: -36.85810379606873,
          lng: 174.76003037327231
        },
        { text: "Zambrero Vulcan Lane", lat: -36.84721, lng: 174.766152 },
        {
          text: "El Limon Spanish Tapas and Mediterranean",
          lat: -36.840367,
          lng: 174.765118
        },
        { text: "Le Garde Manger", lat: -36.8488999, lng: 174.7441869 },
        {
          text: "Apple Charcoal BBQ 大苹果烤串",
          lat: -36.852347,
          lng: 174.750841
        },
        { text: "Whatever", lat: -36.852894, lng: 174.763928 },
        { text: "Eden Kebab", lat: -36.865847, lng: 174.779025 },
        {
          text: "The Coffee Club Victoria Street",
          lat: -36.84854,
          lng: 174.762905
        },
        { text: "The Kimchi Project", lat: -36.850192, lng: 174.765691 },
        { text: "Jasmine and Dragon", lat: -36.872296, lng: 174.743341 },
        { text: "De Grand", lat: -36.8832923, lng: 174.7852049 },
        { text: "Degree Gastrobar", lat: -36.842636, lng: 174.763662 },
        { text: "Shahi", lat: -36.846758, lng: 174.742878 },
        {
          text: "Vikki Lane Bar and Kitchen",
          lat: -36.847489,
          lng: 174.758794
        },
        {
          text: "The Shakespeare Hotel & Brewery",
          lat: -36.846738,
          lng: 174.764044
        },
        { text: "Sally O'Rourke's", lat: -36.852181, lng: 174.756421 },
        { text: "Trilogy Bar & Eatery", lat: -36.85803, lng: 174.760489 },
        { text: "Star Kebab", lat: -36.852024, lng: 174.764409 },
        { text: "Cafe Brioche", lat: -36.84843060000001, lng: 174.7582052 },
        { text: "Madriz Spanish Restaurant", lat: -36.845467, lng: 174.767322 },
        { text: "Kai Pasifika", lat: -36.865327, lng: 174.760618 },
        { text: "Jar Story", lat: -36.84655170000001, lng: 174.7657366 },
        { text: "Bella Verona", lat: -36.857623, lng: 174.748304 },
        { text: "Burger Wisconsin Ponsonby", lat: -36.855065, lng: 174.745922 },
        { text: "&Sushi Newmarket", lat: -36.868653, lng: 174.776165 },
        { text: "Dabbawala", lat: -36.856849, lng: 174.758665 },
        { text: "Brooklyn By Night", lat: -36.849453, lng: 174.758714 },
        { text: "The Bean Cafe", lat: -36.865009, lng: 174.779356 },
        { text: "Cafe Midnight Express", lat: -36.848238, lng: 174.763181 },
        { text: "Yeah Bowl (Britomart)", lat: -36.8441848, lng: 174.7677324 },
        { text: "Country Fried Chicken", lat: -36.853711, lng: 174.763656 },
        { text: "Fukuko", lat: -36.844443, lng: 174.769452 },
        { text: "Frida Cocina", lat: -36.843511, lng: 174.763035 },
        { text: "KB Bakery & Cafe", lat: -36.87447, lng: 174.777751 },
        {
          text: "The Coffee Club Wyndham Street",
          lat: -36.847401,
          lng: 174.764865
        },
        { text: "Poké Poké Newmarket", lat: -36.870417, lng: 174.777895 },
        { text: "Wine Chambers", lat: -36.846916, lng: 174.767445 },
        { text: "Mad Samurai", lat: -36.845157, lng: 174.767558 },
        { text: "Galata kebabs and grill", lat: -36.8459943, lng: 174.7644407 },
        { text: "Spize Indian Restaurant", lat: -36.840818, lng: 174.756876 },
        { text: "El Loco Taco", lat: -36.858138, lng: 174.756953 },
        { text: "Tom Tom Bar & Eatery", lat: -36.848599, lng: 174.754503 },
        { text: "Jasmine Station Cafè", lat: -36.856098, lng: 174.758649 },
        { text: "The Gyoza Bar", lat: -36.854031, lng: 174.745964 },
        { text: "Shaka Bowl Poke", lat: -36.846837, lng: 174.766596 },
        {
          text: "MELT By New Zealand Natural",
          lat: -36.841869,
          lng: 174.764939
        },
        { text: "La Zeppa", lat: -36.848651, lng: 174.754228 },
        { text: "Giusto Bar Eatery", lat: -36.849964, lng: 174.755185 },
        { text: "Dosa Plaza (Aotea Square)", lat: -36.851418, lng: 174.763727 },
        { text: "Thai by Night", lat: -36.849453, lng: 174.758714 },
        { text: "Go Veggie", lat: -36.851418, lng: 174.763727 },
        { text: "Wok’n Noodle", lat: -36.868075, lng: 174.764166 },
        { text: "Osteria Del Pane", lat: -36.845631, lng: 174.735435 },
        { text: "Atlas Bar and Eatery", lat: -36.858394, lng: 174.760322 },
        { text: "Shahi Darbar", lat: -36.853413, lng: 174.77901 },
        { text: "The Burger Bar", lat: -36.857694, lng: 174.760139 },
        { text: "Urban Sizzlers", lat: -36.848002, lng: 174.772627 },
        { text: "Ralph's Bar and Eatery", lat: -36.875782, lng: 174.750872 },
        { text: "Adam Arnold Kitchen", lat: -36.853955, lng: 174.745924 },
        { text: "Royaltea", lat: -36.847864, lng: 174.767232 },
        { text: "The Crew Club", lat: -36.84218, lng: 174.763717 }
      ],
      myLocation: {
        lat: 0,
        lng: 0
      },
      center: {
        lat: -36.8523379,
        lng: 174.7691077
      },
      zoom: 14
    };
  }

  // static defaultProps = {};

  componentDidMount() {
    this.getGeoLocation();
  }

  getGeoLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        console.log(position.coords);
        this.setState({
          myLocation: {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          }
        });
        // center = {
        //   lat: position.coords.latitude,
        //   lng: position.coords.longitude
        // };
      });
    }
  };

  render() {
    const { restaurants, myLocation } = this.state;

    return (
      // Important! Always set the container height explicitly
      <div style={{ height: "90vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyCAA0cjcjXsjZBymMjQuQyZR6hJ0SUf7hI" }}
          defaultCenter={this.state.center}
          defaultZoom={this.state.zoom}
        >
          {restaurants.map(rest => (
            <AnyReactComponent lat={rest.lat} lng={rest.lng} text={rest.text}>
              {" "}
              <i className="fa fa-cloud" />
            </AnyReactComponent>
          ))}

          <MyLocationComponent lat={myLocation.lat} lng={myLocation.lng} />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;

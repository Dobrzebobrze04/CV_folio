// src/config/site.config.ts

export const siteConfig = {
  // Global Branding & SEO
  author: "Ashurov Bobur",         // Used in meta tags
  title: "dobrzebobrze@cv-folio:~$", // Browser tab title
  description: "Bobur Ashurov — IT specialist portfolio, built with Astro.js.",
  siteUrl: "https://dobrzebobrze04.github.io/CV_folio", // Used for OpenGraph
  metaImage: "/og-image.png", // Placed in public/ directory

  themeColor: "#4af626",

  // Custom Prompt
  prompt: {
    user: "dobrzebobrze",
    host: "cv-folio",
  },

  // Feature Toggles (Enable/Disable sections)
  features: {
    fastfetch: true,
    about: true,
    experiences: true,
    projects: true,
    education: true,
    skills: true,
    remotes: false,
    contact: true,
    wallets: false,   	// Set to false by default for generic users
    translations: true, // Set to false to disable the locale switcher and RU routing
    torMirror: false, 	// Set to false by default for generic users
  },

  // Sensitive/Specific Data
  onionAddress: "your-onion-address-here.onion",

  // Fastfetch ASCII Art (Use raw string template)
  asciiArt: `
  ..............                                                              
  .............. .                                                            
  ..............            .                                                 
  ...............                                                             
  .............                 .                                             
  .............   ...       .'.,.       .'                                    
  ...........  ..      .,':x0OOOxOO0Ok0OOcccoll:                              
  ......... . ...    .od0NWWWMMMMWMMWWWWNN0c'.                                
  ...............  ..lxoOWMMMMMMMMMMMMWWMWWNX0dc,.                            
  .......... .......:0NWWMMMMMMMMWMMMMWMMMMMWWWWNXkl.                         
  ...........  .. ,OWWMMWNKOOOkO0KXXXXK00KNWWWWWWNXO:              .          
  ................xWMMW0o:;;:;;;:lldddol::cld0WMWWWK:                         
  .............. ,NMMXc''''.........'''.''''',lKWWWNx                         
  ........  .... kWWNl,'.....................''lKWWNl                         
  ........ ......dWWO;''......................'';0WX.                         
  .............. :WN:,,,;;;,'.........,:loolcc:,'cNK                          
  .............. .NO:ddok000xo:,'''';lxkOkdoooc:';XK                       ...
  ............    Kk:llc;;:odxd:'.';cdxdocclloc:,'0K.                       ..
  ............    0x:dk0k0NNOOdc...,ldkOdXNOxkdl;'d0cc                       .
  ........ .  . .oKc;:cccclc:::,...',;,,,'',,''...:x::...                     
  .....'.... .. .cl,....''...','...''............';d;'...  .          .       
  ...............,;,'........,''...''''.......'',,l:;...... ..                
  .............. .:;,'......',',...''',,......',;;d:,.........         .... ..
  .............. ..c;,''....,okkolok0ko,...''',;:cl;'.......... . .     ...   
  ................ 'c::;,''.'clloddolc;'..',,,;::c:,'........... .. .  .......
  ..................cc::;,,,;;cccolcc::cc:;;;;;;:ccc,................ ........
  ..................'c;,;;lddddxxddxxdddolc;,,;:llcc'........................ 
  ...................,c:;;;',:c::;;;;:;,',;;;:clllc:''........................
  ....................;lcc:;;;:loodolc::ccclloolcol:'''.......................
  ...................'';coollc::clllc:::cccoddol:ll:,''.......................
  ..................',,,,:doc:;,',;;;;;:;:oxxdo:;c:,,,''......................
  ..................',,,;;oddooollooodddxxxxdoc;;:;,,'''......................
  ''.................',,;,looxkOOOOOOOkkxxxdl::;;:::clc'......................
  ...................';:loxlloodxxxxxxxxxdoc::;;;::;'':;;;,;'.................
  .............'',;:ccccdodlloooooodxxxddol::;;;,:c,..':;,,;;:;;'''...........
  .....',,;::cccc:clcc::lldlclooddddoooolc::;;;;,:c,..,:,;;,,,;;;;;;,,,,......
  .',;::c:cc:lll:::cc:::clllcccllllllllllc::::;;;c:,.'c;';,,;,',,,;;;,;;;;,,'.
  :;:::;ccc::lcc::;:l:::ccloclccllllllolccccc:;;::,';l;,;,,,,,;,,,,,,,;;;;;;;;
  ;:::cc:c:;;o:::;,:lc::l::llolccllllllccccc:;,,,,;cc;;;;;,,,,,;,,,,,,;;;;;;;;
  ;:::;:c:c;llc:;;,:c:::lc::clooccllllc:::;,'..':lc;;,;;,,;;;;:;,,,,,;,;;;;;;;
  ;;c::::;::o:;::;,:c:;;c:;:::lll:;:;;,,''...,cllc;::;;,;;:;,,;;;;,;;;;;;;;;;;
  ;:c:;;c:;co:c::;;:c;,;c:;ccc:cooc,,'''...'loo:::;;::;,;;;;;,;::;;,;,;:;;:;;;`
};

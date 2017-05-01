$('.ui.accordion')
  .accordion('refresh')
;

$('.ui.dropdown')
  .dropdown()
;

$('.ui.embed').embed();

$(document).ready(function(){
  // need way to dynamically choose which button was chosen
  $(".quote-button").click(function(){
  });
});

// ISSUE -items not unbluring on scroll up

// $('.img-btns, .ship-title-bg, .flavor-title, .info')
//   .visibility({
//     once       : false,
//     continuous : true,
//     onPassing  : function(calculations) {
//       var iconBlur = 'blur(' + calculations.pixelsPassed/3 + 'px)';
//       $(this)
//         .css('filter', iconBlur)
//       ;
//     }
//   })
// ;


// ----- Ship Variables -----

var shipsInfo = [
  {
    name: '85x',
    id: 'id85x',
    basePrice: 50000,
    quoteImg: '../assets/ships/85x/quote_img.png'
  },
  {
    name: 'M50',
    id: 'idM50',
    basePrice: 100000,
    quoteImg: '../assets/ships/m50/quote_img.png'
  },
  {
    name: '300i',
    id: 'id300i',
    basePrice: 55000,
    quoteImg: '../assets/ships/ship300series/quote_img_300i.png'
  },
  {
    name: '315p',
    id: 'id315p',
    basePrice: 65000,
    quoteImg: '../assets/ships/ship300series/quote_img_315p.png'
  },
  {
    name: '325a',
    id: 'id325a',
    basePrice: 70000,
    quoteImg: '../assets/ships/ship300series/quote_img_325a.png'
  },
  {
    name: '350r',
    id: 'id350r',
    basePrice: 125000,
    quoteImg: '../assets/ships/350r/quote_img.png'
  },
  {
    name: '890 Jump',
    id: 'id890',
    basePrice: 900000,
    quoteImg: '../assets/ships/890/quote_img.png'
  }
]

var baseShips = [
  {
    name: '300i',
    role: 'Touring',
    flavorText: 'If you’re going to travel the stars… why not do it in style? The 300i is Origin Jumpworks’ premiere luxury spacecraft. It is a sleek, silver killer that sends as much of a message with its silhouette as it does with its weaponry.',
    buttonExplore: 'Explore the 300i',
    id: 'threeHundredI',
    shipBg: 'http://i.imgur.com/zDdWO4g.jpg',
    vidEmbed: 'https://www.youtube.com/embed/JrQ0qMRZ_1Q?autoplay=1&controls=0&disablekb=1&enablejsapi=1&fs=0&modestbranding=1&rel=0&showinfo=0',
    sketchFab: 'https://sketchfab.com/models/504663144d53469199baa53f5b934cd1/embed?autospin=0.2&amp;autostart=1&amp;preload=1;transparent=1;controls=0&amp;ui_settings=0&amp;ui_help=0&amp;ui_vr=0&amp;ui_animations=0&amp;ui_annotations=0&amp;ui_infos=0&amp',
    threeDfileLocal: 'https://ucarecdn.com/d326e462-4edf-438c-840a-9559bb62fe3e/',
    threeDid: 'threeHundredI-obj',
    maxCrew: 1,
    mass: 20085,
    cargo: 4,
    length: 24,
    height: 7,
    beam: 16,
    upgradeCap: 6,
    hullMat: 'Metal',
    pwrPlantSize: 3,
    pwrPlantFactory: 'VACOM StarHeart IV',
    thrustersMainNum: 1, // 1x TR4
    engineFactory: 'Hammer Propulsion HE 5.3',
    thrustersManeuveringNum: 12, //12x TR4
    thrustersManeuveringMake: '10× Origin Scalpel Precision, 2× Origin Omni Precision',
    sheild: 'Gorgon Defender AllStop',
    weaponSysC1: '2× A&amp;R Omnisky VI Laser Cannons',
    weaponSysC2: 'N/A',
    weaponSysC3: 'N/A',
    vPrecision: 50,
    vSCM: 215,
    vBoost: 645,
    maxSpeedPitch: 65,
    maxSpeedYaw: 65.0,
    maxSpeedRoll: 75,
    maxAccelPitch: 950,
    maxAccelYaw: 50,
    maxAccelRoll: 950,
    modalFlavorTitle: 'DISTINCT LUXURY',
    modalFlavorText: 'The 300i touring model is the premiere spacecraft hull on the market today. A true jack-of-all-trades, the 300i is capable of making any role its own and doing so with the class and sophistication expected of an ORIGIN design. All models feature Gorgon Defender shields and & Omnisky VI cannon standard.',
  },
  {
    name: '315p',
    role: 'Exploration',
    flavorText: 'Exploration is man’s highest calling. Prepare to chart distant horizons with man’s most sophisticated piece of technology, the ORIGIN 315p. Featuring a more robust power plant and a custom scanning package, exclusively designed by Chimera Communications.',
    buttonExplore: 'Explore the 315p',
    id: 'three15p',
    shipBg: 'http://i.imgur.com/Gw35AJX.jpg',
    vidEmbed: 'https://www.youtube.com/embed/lzlNuCJ0NqE?autoplay=1&controls=0&disablekb=1&enablejsapi=1&fs=0&modestbranding=1&rel=0&showinfo=0',
    sketchFab: 'https://sketchfab.com/models/48328d2b7e9c454a88da91f4b0d81311/embed?autospin=0.2&amp;autostart=1&amp;preload=1;transparent=1;ui_general_controls=0&amp;ui_settings=0&amp;ui_help=0&amp;ui_vr=0&amp;ui_animations=0&amp;ui_annotations=0&amp;ui_infos=0&amp',
    threeDfileLocal: 'https://ucarecdn.com/b77d3308-7b45-46a0-ab8d-32e284278b18/',
    threeDid: 'three15p-obj',
    maxCrew: 1,
    mass: 20085,
    cargo: 6,
    length: 24,
    height: 7,
    beam: 16,
    upgradeCap: 6,
    hullMat: 'Metal',
    pwrPlantSize: 4,
    pwrPlantFactory: 'Alliance Startech K3S-9',
    thrustersMainNum: 1, //1x TR4
    engineFactory: 'Dragon Stellar STC Silver',
    thrustersManeuveringNum: 12, //12x TR1
    thrustersManeuveringMake: '10× Origin Scalpel Precision, 2× Origin Omni Precision',
    sheild: 'Gorgon Defender AllStop',
    weaponSysC1: '2× A&amp;R Omnisky VI Laser Cannons',
    weaponSysC2: 'Greycat Industrial SureGrip Tractor Beam',
    weaponSysC3: 'N/A',
    vPrecision: 50,
    vSCM: 215,
    vBoost: 700,
    maxSpeedPitch: 65,
    maxSpeedYaw: 65, //65.0°/s
    maxSpeedRoll: 75,
    maxAccelPitch: 950,
    maxAccelYaw: 50,
    maxAccelRoll: 950, //950°/s²
    modalFlavorTitle: 'BEYOND DISCOVERY',
    modalFlavorText: 'Exploration is man’s highest calling. Prepare to chart distant horizons with man’s most sophisticated piece of technology, the ORIGIN 315p. Featuring a more robust power plant and a custom scanning package, exclusively designed by Chimera Communications, the 315p is designed for the pilot who wants to go further, to see things that few have seen.',
  },
  {
    name: '325a',
    role: 'Interdiction',
    flavorText: 'Just because it’s a rough galaxy doesn’t mean you need to sacrifice your comfort: the 325a can come out on top in any dogfight. The 325a features an advanced weapon payload as well as a custom targeting system designed especially for the 325a by WillsOp.',
    buttonExplore: 'Explore the 325a',
    id: 'three25a',
    shipBg: 'http://i.imgur.com/YigEDiE.jpg',
    vidEmbed: 'https://www.youtube.com/embed/OvIuzXmkTDY?autoplay=1&controls=0&disablekb=1&enablejsapi=1&fs=0&modestbranding=1&rel=0&showinfo=0',
    sketchFab: 'https://sketchfab.com/models/2d050f5296e24debba9436958d1e4921/embed?autospin=0.2&amp;autostart=1&amp;preload=1;transparent=1;ui_general_controls=0&amp;ui_settings=0&amp;ui_help=0&amp;ui_vr=0&amp;ui_animations=0&amp;ui_annotations=0&amp;ui_infos=0&amp',
    threeDfileLocal: 'https://ucarecdn.com/033c60f0-80ad-44c5-ae3a-db1d8f08ea12/',
    threeDid: 'three25a-obj',
    maxCrew: 1,
    mass: 20085,
    cargo: 4,
    length: 24,
    height: 7,
    beam: 16,
    upgradeCap: 6,
    hullMat: 'Metal',
    pwrPlantSize: 3,
    pwrPlantFactory: 'VHT 2 Plus',
    thrustersMainNum: 1, //1x TR4
    engineFactory: 'Hammer Propulsion',
    thrustersManeuveringNum: 12,  //12x TR1
    thrustersManeuveringMake: '10× Origin Scalpel Precision, 2× Origin Omni Precision',
    sheild: 'Gorgon Defender ForceWall',
    weaponSysC1: '2× Omnisky VI Laser Cannons',
    weaponSysC2: '1× Klaus Werner Mass Driver Cannon',
    weaponSysC3: '2x2 Talon Stalker IR',
    vPrecision: 50, //50 m/s
    vSCM: 210,
    vBoost: 630,
    maxSpeedPitch: 75, //75.0°/s
    maxSpeedYaw: 75, //75.0°/s
    maxSpeedRoll: 85,
    maxAccelPitch: 950, //950°/s²
    maxAccelYaw: 50,
    maxAccelRoll: 950, //950°/s²
    modalFlavorTitle: 'UNEQUALLED STRENGTH',
    modalFlavorText: 'It’s a dangerous universe out there. Be the arbiter of your fate with the combat-enhanced ORIGIN 325a. Just because it’s a rough galaxy doesn’t mean you need to sacrifice your comfort: the 325a can come out on top in any dogfight. The 325a features an advanced weapon payload as well as a custom targeting system designed especially for the 325a by WillsOp.'
  },
  {
    name: '350r',
    role: 'Racing',
    flavorText: 'The combination of a Gangleri BP 707 Standard powerplant with a 300i fuselage re-engineered to accommodate twin Hammer Propulsion HM 4.3 thrusters makes the 350r the fastest personal craft you’ll ever call your own.',
    buttonExplore: 'Explore the 325a',
    id: 'three50r',
    shipBg: 'http://i.imgur.com/gYLaaBj.jpg',
    vidEmbed: 'https://www.youtube.com/embed/fYjD1wiTBmM?autoplay=1&controls=0&disablekb=1&enablejsapi=1&fs=0&modestbranding=1&rel=0&showinfo=0',
    sketchFab: 'https://sketchfab.com/models/ac1b0d41f1ff40d18bccb0af0e94216f/embed?autospin=0.2&amp;autostart=1&amp;preload=1;transparent=1;ui_general_controls=0&amp;ui_settings=0&amp;ui_help=0&amp;ui_vr=0&amp;ui_animations=0&amp;ui_annotations=0&amp;ui_infos=0&amp',
    threeDfileLocal: 'https://ucarecdn.com/e213c706-3b8b-4003-b3f5-fdbaa08d74e1/',
    threeDid: 'three50r-obj',
    maxCrew: 1,
    mass: 20085,
    cargo: 0,
    length: 24,
    height: 7,
    beam: 16,
    upgradeCap: 6,
    hullMat: 'Metal',
    pwrPlantSize: 4,
    pwrPlantFactory: 'VACOM StarHeart IV',
    thrustersMainNum: 2, //2x TR4
    engineFactory: 'Hammer Propulsion HM 4.3',
    thrustersManeuveringNum: 12,  //12x TR1
    thrustersManeuveringMake: '10× Origin Scalpel Precision, 2× Origin Omni Precision',
    sheild: 'Gorgon Defender AllStop',
    weaponSysC1: '2× A&amp;R Omnisky III Laser Cannons',
    weaponSysC2: 'N/A',
    weaponSysC3: 'N/A',
    vPrecision: 70, //70 m/s
    vSCM: 270,
    vBoost: 810,
    maxSpeedPitch: 95, //75.0°/s
    maxSpeedYaw: 95, //75.0°/s
    maxSpeedRoll: 105,
    maxAccelPitch: 950, //950°/s²
    maxAccelYaw: 50,
    maxAccelRoll: 950, //950°/s²
    modalFlavorTitle: 'PURE SPEED',
    modalFlavorText: 'Since the dawn of civilization, Humans have striven to build faster machines. Now, ORIGIN presents the culmination of that effort: the ORIGIN 350r. The combination of a Gangleri BP 707 Standard powerplant with a 300i fuselate re-engineered to ac- commodate twin Hammer Propulsion HM 4.3 thrusters makes the 350r the fastest personal craft you’ll ever call your own.'
  },
]
// ======================================================================================================

// var $m50QuoteBtn = document.getElementById("ship-m50-btn-quote")
//
// var $quote = document.getElementById("quote")
// var $quoteImg = document.getElementById("quote-ship-img")
// var $quoteStep = document.getElementById("quote-ship-step")
// var $quoteInfo = document.getElementById("quote-info")
// var $quoteSummary = document.getElementById("quote-summary")
//
//
// function findShip(shipsInfo, shipId) {
//   for (var i = 0; i < shipsInfo.length; i++) {
//     if (shipsInfo[i].id === shipId) {
//       return shipsInfo[i]
//     }
//   }
// }
//
// function renderShipDetails(ship) {
//   var $imgDiv = document.createElement('img')
//   $imgDiv.setAttribute('src', shipsInfo.quoteImg)
//   $quoteImg.appendChild($imgDiv)
//   return $imgDiv
// }
//
// function showView($quote, viewId) {
//   for (var i = 0; i < $quote.children.length; i++) {
//     var $view = $quote.children[i]
//     if ($view.id === viewId) {
//       $view.classList.add('current-ship-quote')
//     }
//     else {
//       $view.classList.remove('current-ship-quote')
//     }
//   }
// }
//
//
// $m50QuoteBtn.addEventListener('click', function (event) {
//     if (event.target.tagName !== 'BUTTON') {
//       return
//     }
//     renderShipDetails(ship)
//
//     var shipId = event.target.getAttribute('data-ship-id')
//     var ship = findShip(shipsInfo, shipId)
//     // showView($views, 'quote-form')
//     var $specsSwap = document.querySelector('#specifications')
//     $specsSwap.innerHTML = ''
//     $specsSwap.appendChild(renderSpecs(ship))
//
//     $quoteImg.src = ship.orderFrontView
//
//     var $formRowModel = document.getElementById('quote-model')
//     $formRowModel.textContent = ship.name
//
//
//   })
//
var $quoteButton = document.querySelector('.quote-button')

var $quoteModal = document.querySelector('#quote-modal')
var $paintName = document.querySelector('#quote-info-color-name')

function findShip(shipsInfo, shipId) {
  for (var i = 0; i < shipsInfo.length; i++) {
    if (shipsInfo[i].id === shipId) {
      return shipsInfo[i]
    }
  }
}

// function quoteShipImg(ship) {
//   var $quoteShipImg = document.querySelector('#quote-ship-img')
//   var $img = document.createElement('img')
//   $img.setAttribute('src', ship.quoteImg)
//   $quoteShipImg.appendChild($img)
//
//   return $img
// }

// $quoteShipName.id = shipsInfo[i].id
// $quoteShipName.textContent = shipsInfo[i].name

function renderQuote(ship) {
  // $quoteButton.setAttribute('info-ship-id', ship.id)
}

function quoteInfoStep(ship) {

}

function clearModal() {
  var $img = document.querySelector('#quote-ship-img')
  $img.src = ''
  $img.className = ''

  var $quoteShipName = document.querySelector('#quote-ship-name')
  $quoteShipName.textContent = ""
}

// NEED TO DYNAMICALLY POPULATE 300 SERIES info
// NEED TO CREATE BUTTON FUNCTIONALITY FOR OTHER BUTTONS
//  NEED TO AD FUNCTIONALITY FOR 890 BUTTONS
// ======================================================================================================
$(document).ready(function(){
  $('#ship-view-85x').mousemove(function(e){
    var x = -(e.pageX + this.offsetLeft) / 60;
    var y = -(e.pageY + this.offsetTop) / 60;
    $(this).css('background-position', x + 'px ' + y + 'px');
  });
});

// var parallax85x = document.getElementById("ship-view-85x")
//
// parallax85x.onmousemove = function(event) {img85xParallax(event)};
//
// function img85xParallax(e) {
//   var x = -(e.pageX + this.offsetLeft) / 60;
//   var y = -(e.pageY + this.offsetTop) / 60;
//   parallax85x.setAttribute('background-position', x + 'px ' + y + 'px')
// }


$('#ship-m50-btn-quote').click(function(){ // refers to: id on button
  $('')  // refers to: no clue but it's working
    .modal({
      inverted: false,
      allowMultiple: false,
      autofocus: false
    })
    .modal('refresh')
  ;
});

$('#ship-85x-btn-quote').click(function(){
  $('')  // refers to: no clue but it's working
    .modal({
      inverted: false,
      allowMultiple: false,
      autofocus: false
    })
    .modal('refresh')
  ;
});

$('#ship-300i-btn-quote').click(function(){
  $('')  // refers to: no clue but it's working
    .modal({
      inverted: false,
      allowMultiple: false,
      autofocus: false
    })
    .modal('refresh')
  ;
});

$('#ship-315p-btn-quote').click(function(){
  $('')  // refers to: no clue but it's working
    .modal({
      inverted: false,
      allowMultiple: false,
      autofocus: false
    })
    .modal('refresh')
  ;
});

$('#ship-325a-btn-quote').click(function(){
  $('')  // refers to: no clue but it's working
    .modal({
      inverted: false,
      allowMultiple: false,
      autofocus: false
    })
    .modal('refresh')
  ;
});

$('#ship-350r-btn-quote').click(function(){
  $('')
    .modal({
      inverted: false,
      allowMultiple: false,
      autofocus: false
    })
    .modal('refresh')
  ;
});

$('.img-title-300series .quote-button').on('click', function(){
	// using the attribute data-modal to identify for what modal the button references
	modal = $(this).attr('data-modal');
	// creating the individual event attached to click over button
	$('#'+modal+'.modal').modal(
		'show'
	);
});

$('.ten.wide.column div .quote-button').on('click', function(){
	// using the attribute data-modal to identify for what modal the button references
	modal = $(this).attr('data-modal');
	// creating the individual event attached to click over button
	$('#'+modal+'.modal').modal(
		'show'
	);
});

$('center .button').on('click', function(){
	// using the attribute data-modal to identify for what modal the button references
	modal = $(this).attr('data-modal');
	// creating the individual event attached to click over button
	$('#'+modal+'.modal').modal(
		'show'
	);
});

// =================================== TEST ================================

function shipConfigureStep(n) {
    var i = 1, s = document.querySelector(".shipStep"+1), o = document.getElementById("shipStepIcon"+1);

    while (s !== null){
        if (i === n){
            s.style.display = "";
            o.className = "circle icon";
        }
        else{
            s.style.display = "none";
            o.className = "circle thin icon";
        }
        i++;
        s = document.querySelector(".shipStep"+i);
        o = document.getElementById("shipStepIcon"+i);
    }
}

function masterPaint() {
  paintSelection(n);
  summaryPaint(paintColor);
}

function paintSelection(n) {
  var i = n, p = document.querySelector(".paint"+n), color = p.getAttribute("value"), cost = p.getAttribute("uec-upgrade")

  while (p !== null){
    if((i === n).checked = true) {
      document.querySelector(".quote-info-color-name").textContent = color.toUpperCase()
      document.querySelector(".paint-price").textContent = "+ ¤" + cost.toUpperCase() + " UEC"
      document.querySelector(".paint-price-sum").textContent = "+ ¤" + cost.toUpperCase() + " UEC"
      document.querySelector(".paint-name-sum").textContent = color.toUpperCase()
    }
    i++;
    p = document.querySelector(".paint"+i);

  }
}

function materialSelection(n) {
  var i = n, p = document.querySelector(".material"+n), material = p.getAttribute("value"), cost = p.getAttribute("uec-upgrade")

  while (p !== null){
    if((i === n).checked = true) {
      document.querySelector(".quote-info-material-name").textContent = material.toUpperCase()
      document.querySelector(".material-price").textContent = "+ ¤" + cost.toUpperCase() + " UEC"
      document.querySelector(".material-price-sum").textContent = "+ ¤" + cost.toUpperCase() + " UEC"
      document.querySelector(".material-name-sum").textContent = material.toUpperCase()
    }
    i++;
    p = document.querySelector(".material"+i);

  }
}

function planetSelection(n) {
  var i = n, p = document.querySelector(".planet"+n), planet = p.getAttribute("value")

  while (p !== null){
    if((i === n).checked = true) {
      document.querySelector(".planet-name").textContent = planet.toUpperCase()
      document.querySelector(".planet-name-sum").textContent = planet.toUpperCase()
    }
    i++;
    p = document.querySelector(".planet"+i);

  }
}

function summaryPaint() {
  var selectedPaint = document.querySelector(".quote-info-color-name").textContent
  var $sumPaint = document.querySelector(".summary-paint")

  $sumPaint.innerHTML = selectedPaint

}

function sumUEC() {
	var sum = parseInt(document.querySelector(".paint-price-sum").innerHTML.match(/\d+/)) +
            parseInt(document.querySelector(".material-price-sum").innerHTML.match(/\d+/)) +
            shipsInfo[5].basePrice;
  var $sum = "¤ " + sum + " UEC"
  return $sum
}

document.querySelector('.msrp-sum').textContent = sumUEC()


// math for testing purposes
function submit_form() {
	var sum = parseInt(document.querySelector(".paint-price-sum").innerHTML.match(/\d+/)) +
            parseInt(document.querySelector(".material-price-sum").innerHTML.match(/\d+/)) +
            shipsInfo[5].basePrice;
  alert("Your summary is: ¤ " + sum + " UEC");
}
// function submit_form() {
// 	var sum = parseInt(document.querySelector(".paint-price-sum").value) +
//             parseInt(document.querySelector(".material-price-sum").value) +
//             parseInt(document.querySelector("num3").value);
//   alert("Your summary is: " + sum);
// }

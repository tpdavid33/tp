var encryptionKey = '421c954c-a305-4f3e-8b44-f04372b1659f';
var stableDiffusionAPIkey = 'XaVI61HoG6UmkdCT5hrG9PgVczKrMcxQ2nMxgjCn8QbgQ1cDwrXLThYWFiD1';
var loadingSvg = `
    <g transform="translate(80,50)">
    <g transform="rotate(0)">
        <circle cx="0" cy="0" r="6" fill="#ffffff" fill-opacity="1">
        <animateTransform attributeName="transform" type="scale" begin="-0.875s"
            values="1.5 1.5;1 1" keyTimes="0;1" dur="1s" repeatCount="indefinite"></animateTransform>
        <animate attributeName="fill-opacity" keyTimes="0;1" dur="1s" repeatCount="indefinite"
            values="1;0" begin="-0.875s"></animate>
        </circle>
    </g>
    </g>
    <g transform="translate(71.21320343559643,71.21320343559643)">
    <g transform="rotate(45)">
        <circle cx="0" cy="0" r="6" fill="#ffffff" fill-opacity="0.875">
        <animateTransform attributeName="transform" type="scale" begin="-0.75s" values="1.5 1.5;1 1"
            keyTimes="0;1" dur="1s" repeatCount="indefinite"></animateTransform>
        <animate attributeName="fill-opacity" keyTimes="0;1" dur="1s" repeatCount="indefinite"
            values="1;0" begin="-0.75s"></animate>
        </circle>
    </g>
    </g>
    <g transform="translate(50,80)">
    <g transform="rotate(90)">
        <circle cx="0" cy="0" r="6" fill="#ffffff" fill-opacity="0.75">
        <animateTransform attributeName="transform" type="scale" begin="-0.625s"
            values="1.5 1.5;1 1" keyTimes="0;1" dur="1s" repeatCount="indefinite"></animateTransform>
        <animate attributeName="fill-opacity" keyTimes="0;1" dur="1s" repeatCount="indefinite"
            values="1;0" begin="-0.625s"></animate>
        </circle>
    </g>
    </g>
    <g transform="translate(28.786796564403577,71.21320343559643)">
    <g transform="rotate(135)">
        <circle cx="0" cy="0" r="6" fill="#ffffff" fill-opacity="0.625">
        <animateTransform attributeName="transform" type="scale" begin="-0.5s" values="1.5 1.5;1 1"
            keyTimes="0;1" dur="1s" repeatCount="indefinite"></animateTransform>
        <animate attributeName="fill-opacity" keyTimes="0;1" dur="1s" repeatCount="indefinite"
            values="1;0" begin="-0.5s"></animate>
        </circle>
    </g>
    </g>
    <g transform="translate(20,50.00000000000001)">
    <g transform="rotate(180)">
        <circle cx="0" cy="0" r="6" fill="#ffffff" fill-opacity="0.5">
        <animateTransform attributeName="transform" type="scale" begin="-0.375s"
            values="1.5 1.5;1 1" keyTimes="0;1" dur="1s" repeatCount="indefinite"></animateTransform>
        <animate attributeName="fill-opacity" keyTimes="0;1" dur="1s" repeatCount="indefinite"
            values="1;0" begin="-0.375s"></animate>
        </circle>
    </g>
    </g>
    <g transform="translate(28.78679656440357,28.786796564403577)">
    <g transform="rotate(225)">
        <circle cx="0" cy="0" r="6" fill="#ffffff" fill-opacity="0.375">
        <animateTransform attributeName="transform" type="scale" begin="-0.25s" values="1.5 1.5;1 1"
            keyTimes="0;1" dur="1s" repeatCount="indefinite"></animateTransform>
        <animate attributeName="fill-opacity" keyTimes="0;1" dur="1s" repeatCount="indefinite"
            values="1;0" begin="-0.25s"></animate>
        </circle>
    </g>
    </g>
    <g transform="translate(49.99999999999999,20)">
    <g transform="rotate(270)">
        <circle cx="0" cy="0" r="6" fill="#ffffff" fill-opacity="0.25">
        <animateTransform attributeName="transform" type="scale" begin="-0.125s"
            values="1.5 1.5;1 1" keyTimes="0;1" dur="1s" repeatCount="indefinite"></animateTransform>
        <animate attributeName="fill-opacity" keyTimes="0;1" dur="1s" repeatCount="indefinite"
            values="1;0" begin="-0.125s"></animate>
        </circle>
    </g>
    </g>
    <g transform="translate(71.21320343559643,28.78679656440357)">
    <g transform="rotate(315)">
        <circle cx="0" cy="0" r="6" fill="#ffffff" fill-opacity="0.125">
        <animateTransform attributeName="transform" type="scale" begin="0s" values="1.5 1.5;1 1"
            keyTimes="0;1" dur="1s" repeatCount="indefinite"></animateTransform>
        <animate attributeName="fill-opacity" keyTimes="0;1" dur="1s" repeatCount="indefinite"
            values="1;0" begin="0s"></animate>
        </circle>
    </g>
    </g>`;

const modelList = [
    {
        name: 'MidJourney V4',
        id: 'midjourney',
        src: 'https://cdn.jsdelivr.net/gh/tubeproapp/tp/models-pictures/midjourneyv4.png?v=1.0.0'
    },
    {
        name: 'Realistic Vision',
        id: 'realistic-vision-v13',
        src: 'https://cdn.jsdelivr.net/gh/tubeproapp/tp/models-pictures/realistic-vision-v13.png?v=1.0.0'
    },
    {
        name: 'GTA5 Artwork',
        id: 'gta5-artwork-diffusi',
        src: 'https://cdn.jsdelivr.net/gh/tubeproapp/tp/models-pictures/gta5.png?v=1.0.0'
    },
    {
        name: 'Dream Shaper',
        id: 'dream-shaper-8797',
        src: 'https://cdn.jsdelivr.net/gh/tubeproapp/tp/models-pictures/dream-shaper.png?v=1.0.0'
    },
    {
        name: 'SynthwavePunk',
        id: 'synthwave-diffusion',
        src: 'https://cdn.jsdelivr.net/gh/tubeproapp/tp/models-pictures/synthwave-punk.png?v=1.0.0'
    },
    {
        name: 'Drood Lyriel',
        id: 'droodlyrielv15',
        src: 'https://cdn.jsdelivr.net/gh/tubeproapp/tp/models-pictures/drood-lyriel.jpeg?v=1.0.0'
    },
    {
        name: 'Redshift Diffusion',
        id: 'redshift-diffusion',
        src: 'https://cdn.jsdelivr.net/gh/tubeproapp/tp/models-pictures/redshift-diffusion.png?v=1.0.0'
    },
    {
        name: 'Disco Diffusion',
        id: 'disco-diffusion',
        src: 'https://cdn.jsdelivr.net/gh/tubeproapp/tp/models-pictures/disco-diffusion.jpeg?v=1.0.0'
    },
    {
        name: 'Low Poly World',
        id: 'lowpoly-diffusion',
        src: 'https://cdn.jsdelivr.net/gh/tubeproapp/tp/models-pictures/lowpoly-diffusion.png?v=1.0.0'
    },
    {
        name: 'MidJv4-PaintArt',
        id: 'midjourney-v4-painta',
        src: 'https://cdn.jsdelivr.net/gh/tubeproapp/tp/models-pictures/midjourney-v4-painta.png?v=1.0.0'
    },
]

function initUI() {
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = 'https://fonts.googleapis.com/css2?family=Open+Sans&display=swap';
    document.head.appendChild(link);

    var link = document.createElement("link");
    link.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css";
    link.rel = "stylesheet";
    link.type = "text/css";
    document.head.appendChild(link);

    // var script = document.createElement("script");
    // script.src = "https://cdnjs.cloudflare.com/ajax/libs/FileSaver.js/2.0.0/FileSaver.min.js";
    // document.head.appendChild(script);

    var parentElement = document.getElementById('ai-image-gen-f1b9d815-780f-4a64-875e-4f2b9284ced6');
    parentElement.style.backgroundColor = '#fafafa';
    parentElement.style.overflow = 'visible';
    parentElement.style.borderRadius = '25px';
    parentElement.style.opacity = '1';
    parentElement.style.placeSelf = 'center';
    parentElement.style.minWidth = '80%';
    parentElement.style.minHeight = '800px';
    parentElement.style.maxWidth = '80%';
    parentElement.style.width = '80%';
    parentElement.style.height = 'calc(100% - 0px)';
    parentElement.style.margin = 'auto';
    parentElement.style.zIndex = 2;

    // Container Element
    var container = document.createElement('div');

    container.style.justifyContent = 'flex-start';
    container.style.position = 'relative';
    container.style.zIndex = 0;
    container.style.maxWidth = '100%';
    container.style.flexGrow = 1;
    container.style.flexFlow = 'column';
    container.style.height = 'initial';
    container.style.overflow = 'inherit';
    container.style.display = 'flex';
    container.setAttribute('id', 'generation_container');
    // Container Element

    // Title Element
    var titleElement = document.createElement('div');
    titleElement.style.whiteSpace = 'pre-wrap';
    titleElement.style.overflow = 'visibile';
    titleElement.style.fontFamily = 'Open Sans, sans-serif';
    titleElement.style.fontSize = '30px';
    titleElement.style.fontWeight = 'bold';
    titleElement.style.color = '#2d2d2d';
    titleElement.style.textAlign = 'center';
    titleElement.style.lineHeight = 1.4;
    titleElement.style.borderRadius = 0;
    titleElement.style.opacity = '1';
    titleElement.style.alignSelf = 'center';
    titleElement.style.minWidth = '285px';
    titleElement.style.maxWidth = '285px';
    titleElement.style.order = '1';
    titleElement.style.minHeight = '30px';
    titleElement.style.height = 'max-contnet';
    titleElement.style.flexGrow = 0;
    titleElement.style.flexShrink = 0;
    titleElement.style.width = '285px';
    titleElement.style.margin = '20px 0px 0px';
    titleElement.style.zIndex = 2;
    titleElement.innerHTML = 'ProAI';
    // Title Element

    // Subtitle Element
    var subtitleElement = document.createElement('div');
    subtitleElement.style.whiteSpace = 'pre-wrap';
    subtitleElement.style.overflow = 'visibile';
    subtitleElement.style.fontFamily = 'Open Sans, sans-serif';
    subtitleElement.style.fontSize = '14px';
    subtitleElement.style.fontWeight = '400';
    subtitleElement.style.color = '#141414';
    subtitleElement.style.textAlign = 'center';
    subtitleElement.style.lineHeight = 1.4;
    subtitleElement.style.borderRadius = 0;
    subtitleElement.style.opacity = '1';
    subtitleElement.style.alignSelf = 'center';
    subtitleElement.style.minWidth = '211px';
    subtitleElement.style.maxWidth = '211px';
    subtitleElement.style.order = '2';
    subtitleElement.style.minHeight = '20px';
    subtitleElement.style.height = 'max-contnet';
    subtitleElement.style.flexGrow = 0;
    subtitleElement.style.flexShrink = 0;
    subtitleElement.style.width = '211px';
    subtitleElement.style.margin = '-5px 0px 0px 0px';
    subtitleElement.style.zIndex = 3;
    subtitleElement.innerHTML = 'AI Image Generator';
    // Subtitle Element

    // Gradient Element
    var gradientElement = document.createElement('div');
    gradientElement.style.background = 'linear-gradient(135deg, #4aeadc, #9778d1, #cf2aba, #ee2c82, #fb6962, #fef84c)';
    // gradientElement.style.background = 'linear-gradient(90deg, rgb(112, 205, 245) 0%, rgb(177, 75, 241) 50%, rgb(246, 92, 34) 100%)';
    gradientElement.style.borderRadius = '15px';
    gradientElement.style.opacity = '1';
    gradientElement.style.alignSelf = 'center';
    gradientElement.style.minWidth = '80%';
    gradientElement.style.maxWidth = '80%';
    gradientElement.style.width = '80%';
    gradientElement.style.order = '4';
    gradientElement.style.minHeight = '65px';
    gradientElement.style.maxHeight = '65px';
    gradientElement.style.height = '65px';
    gradientElement.style.flexGrow = 1;
    gradientElement.style.margin = '15px 0px 0px 0px';
    gradientElement.style.zIndex = 10;
    // Gradient Element

    // Description Element
    var descriptionElement = document.createElement('div');
    descriptionElement.style.whiteSpace = 'pre-wrap';
    descriptionElement.style.overflow = 'visibile';
    // descriptionElement.style.fontFamily = 'Open Sans';
    descriptionElement.style.fontSize = '16px';
    descriptionElement.style.fontWeight = '400';
    descriptionElement.style.color = '#2c2c2d';
    descriptionElement.style.textAlign = 'center';
    descriptionElement.style.lineHeight = 1.4;
    descriptionElement.style.borderRadius = 0;
    descriptionElement.style.opacity = '1';
    descriptionElement.style.alignSelf = 'center';
    descriptionElement.style.minWidth = '70%';
    descriptionElement.style.maxWidth = '70%';
    descriptionElement.style.order = '5';
    descriptionElement.style.minHeight = '45px';
    descriptionElement.style.height = 'max-contnet';
    descriptionElement.style.flexGrow = 0;
    descriptionElement.style.flexShrink = 0;
    descriptionElement.style.width = '70%';
    descriptionElement.style.margin = '15px 0px 0px 0px';
    descriptionElement.style.zIndex = 11;
    descriptionElement.style.fontFamily = 'Open Sans, sans-serif';
    descriptionElement.innerHTML = `Welcome to TubePro's AI image generator ProAI. This is a free AI image generator you can use to generate creative art, whenever necessary.`;
    // Description Element

    // Description Element
    var promptLabel = document.createElement('div');
    var promptLabelContainer = document.createElement('div');
    promptLabelContainer.style.whiteSpace = 'pre-wrap';
    promptLabelContainer.style.overflow = 'visibile';
    promptLabelContainer.style.fontFamily = 'Open Sans, sans-serif';
    promptLabelContainer.style.fontSize = '14px';
    promptLabelContainer.style.fontWeight = '400';
    promptLabelContainer.style.color = '#1a1919';
    promptLabelContainer.style.textAlign = 'center';
    promptLabelContainer.style.lineHeight = 1.4;
    promptLabelContainer.style.borderRadius = 0;
    promptLabelContainer.style.opacity = '1';
    promptLabelContainer.style.alignSelf = 'center';
    promptLabelContainer.style.minWidth = '80%';
    promptLabelContainer.style.maxWidth = '80%';
    promptLabelContainer.style.order = '6';
    promptLabelContainer.style.minHeight = '45px';
    promptLabelContainer.style.height = 'max-contnet';
    promptLabelContainer.style.flexGrow = 0;
    promptLabelContainer.style.flexShrink = 0;
    promptLabelContainer.style.width = '80%';
    promptLabelContainer.style.margin = '20px 0px -55px 0px';
    promptLabelContainer.style.zIndex = 12;
    promptLabel.style.textAlign = 'left';
    promptLabel.innerHTML = `Start with a detailed description, be specific:`;
    // Description Element

    // Textarea Element
    var textarea = document.createElement('textarea');
    textarea.style.alignSelf = 'center';
    textarea.style.background = 'white';
    textarea.style.minWidth = '80%';
    textarea.style.maxWidth = '80%';
    textarea.style.order = '7';
    textarea.style.width = '80%';
    textarea.style.margin = '35px 0px 0px';
    textarea.style.flexGrow = 0;
    textarea.style.flexShrink = 0;
    textarea.style.zIndex = 4;
    textarea.style.fontSize = '14px';
    textarea.style.fontWeight = '400';
    textarea.style.fontFamily = 'Open Sans, sans-serif';
    textarea.style.border = '1px solid rgba(104, 104, 104, 0.15)';
    textarea.style.overflow = 'hidden';
    textarea.style.overflowWrap = 'break-word';
    textarea.style.borderRadius = '5px';
    textarea.style.color = '#7f7f7e';
    textarea.style.lineHeight = 1.5;
    textarea.style.opacity = '1';
    textarea.style.height = '95px';
    textarea.style.padding = '6px';

    textarea.setAttribute("id", "prompt");
    textarea.setAttribute("placeholder", "A futuristic city....");
    // Textarea Element

    // Size Selection Elements
    var sizeSelectionContainer = document.createElement('div');
    var widthLabelContainer = document.createElement('div');
    var widthLabel = document.createElement('div');
    widthLabel.innerHTML = 'Width (pixels): ';
    var widthOptions = document.createElement('div');

    var heightLabelContainer = document.createElement('div');
    var heightLabel = document.createElement('div');
    heightLabel.innerHTML = 'Height (pixels): ';
    var heightOptions = document.createElement('div');

    sizeSelectionContainer.style.justifyContent = 'flex-start';
    sizeSelectionContainer.style.borderRadius = '0px';
    sizeSelectionContainer.style.opacity = '1';
    sizeSelectionContainer.style.alignSelf = 'center';
    sizeSelectionContainer.style.minWidth = '80%';
    sizeSelectionContainer.style.maxWidth = '80%';
    sizeSelectionContainer.style.order = '11';
    sizeSelectionContainer.style.minHeight = '30px';
    sizeSelectionContainer.style.height = 'max-content';
    sizeSelectionContainer.style.flexGrow = '0';
    sizeSelectionContainer.style.flexShrink = '0';
    sizeSelectionContainer.style.width = '80%';
    sizeSelectionContainer.style.margin = '10px 0px 0px 0px';
    sizeSelectionContainer.style.zIndex = '9';
    sizeSelectionContainer.style.flexDirection = 'row';
    sizeSelectionContainer.style.flexWrap = 'wrap';
    sizeSelectionContainer.style.display = 'flex';
    sizeSelectionContainer.style.alignContent = 'stretch';

    widthLabelContainer.style.whiteSpace = 'pre-wrap';
    widthLabelContainer.style.overflow = 'visible';
    widthLabelContainer.style.fontFamily = 'Open Sans, sans-serif';
    widthLabelContainer.style.fontSize = '14px';
    widthLabelContainer.style.fontWeight = 'bold';
    widthLabelContainer.style.color = 'rgba(77,79,79,1)';
    widthLabelContainer.style.lineHeight = '1.4';
    widthLabelContainer.style.borderRadius = '0px';
    widthLabelContainer.style.opacity = '1';
    widthLabelContainer.style.alignSelf = 'flex-start';
    widthLabelContainer.style.minWidth = '60px';
    widthLabelContainer.style.order = '3';
    widthLabelContainer.style.minHeight = '27px';
    widthLabelContainer.style.width = 'max-content';
    widthLabelContainer.style.flexGrow = '0';
    widthLabelContainer.style.height = 'max-content';
    widthLabelContainer.style.margin = '0px';
    widthLabelContainer.style.zIndex = '8';
    widthLabelContainer.style.display = 'flex';
    widthLabelContainer.style.flexDirection = 'column';
    widthLabelContainer.style.justifyContent = 'center';
    widthLabelContainer.appendChild(widthLabel);

    widthOptions.style.alignSelf = 'flex-start';
    widthOptions.style.minWidth = '50px';
    widthOptions.style.order = '7';
    widthOptions.style.minHeight = '75px';
    widthOptions.style.width = 'max-content';
    widthOptions.style.flexGrow = '0';
    widthOptions.style.height = 'max-content';
    widthOptions.style.margin = '0px 0px 0px';
    widthOptions.style.zIndex = '10';
    widthOptions.style.gridTemplateColumns = 'repeat(1, 1fr)';
    widthOptions.style.fontFamily = 'Open Sans, sans-serif';
    widthOptions.style.fontSize = '14px';
    widthOptions.style.fontWeight = '400';
    widthOptions.style.color = 'rgb(79, 76, 247)';
    widthOptions.style.opacity = '1';
    widthOptions.style.position = 'relative';
    widthOptions.style.paddingTop = '0px';
    widthOptions.style.paddingBottom = '20px';
    widthOptions.style.display = 'grid';
    widthOptions.style.gridAutoRows = 'max-content';
    widthOptions.style.paddingLeft = '20px';
    widthOptions.style.gap = '0px 5px';
    widthOptions.classList.add('size-radio-container');

    const options = [512, 768, 1024];

    options.map((option, index) => {
        var widthOption = document.createElement('input');
        var widthOptionLabel = document.createElement('label');
        var optionContainer = document.createElement('div');
        widthOption.setAttribute('type', 'radio');
        widthOption.setAttribute('name', 'ai_image_width');
        widthOption.setAttribute('id', `ai_image_width_option_${index}`);
        widthOption.setAttribute('value', `${option}`);

        widthOptionLabel.style.display = 'inline-block';
        widthOptionLabel.style.verticalAlign = 'middle';
        widthOptionLabel.style.position = 'relative';
        widthOptionLabel.style.paddingLeft = '6px';
        widthOptionLabel.style.paddingRight = '6px';
        widthOptionLabel.style.cursor = 'pointer';
        widthOptionLabel.style.width = '100%';
        widthOptionLabel.style.minWidth = '80px';
        widthOptionLabel.style.marginTop = '3px';
        widthOptionLabel.style.fontFamily = 'Open Sans, sans-serif';
        widthOptionLabel.setAttribute('for', `ai_image_width_option_${index}`);
        widthOptionLabel.innerHTML = option;
        optionContainer.style.display = 'flex';
        optionContainer.style.alignItems = 'center';
        optionContainer.style.height = '25px';
        optionContainer.style.height = '25px';
        optionContainer.style.paddingTop = '4px';
        optionContainer.style.paddingBottom = '4px';
        optionContainer.appendChild(widthOption);
        optionContainer.appendChild(widthOptionLabel);
        widthOptions.appendChild(optionContainer);
    })


    heightLabelContainer.style.whiteSpace = 'pre-wrap';
    heightLabelContainer.style.overflow = 'visible';
    heightLabelContainer.style.fontFamily = 'Open Sans, sans-serif';
    heightLabelContainer.style.fontSize = '14px';
    heightLabelContainer.style.fontWeight = 'bold';
    heightLabelContainer.style.color = 'rgba(77,79,79,1)';
    heightLabelContainer.style.lineHeight = '1.4';
    heightLabelContainer.style.borderRadius = '0px';
    heightLabelContainer.style.opacity = '1';
    heightLabelContainer.style.alignSelf = 'flex-start';
    heightLabelContainer.style.minWidth = '60px';
    heightLabelContainer.style.order = '8';
    heightLabelContainer.style.minHeight = '27px';
    heightLabelContainer.style.width = 'max-content';
    heightLabelContainer.style.flexGrow = '0';
    heightLabelContainer.style.height = 'max-content';
    heightLabelContainer.style.margin = '0px';
    heightLabelContainer.style.zIndex = '8';
    heightLabelContainer.style.display = 'flex';
    heightLabelContainer.style.flexDirection = 'column';
    heightLabelContainer.style.justifyContent = 'center';
    heightLabelContainer.appendChild(heightLabel);

    heightOptions.style.alignSelf = 'flex-start';
    heightOptions.style.minWidth = '50px';
    heightOptions.style.order = '9';
    heightOptions.style.minHeight = '75px';
    heightOptions.style.width = 'max-content';
    heightOptions.style.flexGrow = '0';
    heightOptions.style.height = 'max-content';
    heightOptions.style.margin = '0px 0px 0px';
    heightOptions.style.zIndex = '10';
    heightOptions.style.gridTemplateColumns = 'repeat(1, 1fr)';
    heightOptions.style.fontFamily = 'Open Sans, sans-serif';
    heightOptions.style.fontSize = '14px';
    heightOptions.style.fontWeight = '400';
    heightOptions.style.color = 'rgb(79, 76, 247)';
    heightOptions.style.opacity = '1';
    heightOptions.style.position = 'relative';
    heightOptions.style.paddingTop = '0px';
    heightOptions.style.paddingBottom = '0px';
    heightOptions.style.display = 'grid';
    heightOptions.style.gridAutoRows = 'max-content';
    heightOptions.style.paddingLeft = '20px';
    heightOptions.style.gap = '0px 5px';
    heightOptions.classList.add('size-radio-container');

    options.map((option, index) => {
        var heightOption = document.createElement('input');
        var heightOptionLabel = document.createElement('label');
        var optionContainer = document.createElement('div');
        heightOption.setAttribute('type', 'radio');
        heightOption.setAttribute('name', 'ai_image_height');
        heightOption.setAttribute('id', `ai_image_height_option_${index}`);
        heightOption.setAttribute('value', `${option}`);

        heightOptionLabel.style.display = 'inline-block';
        heightOptionLabel.style.verticalAlign = 'middle';
        heightOptionLabel.style.fontFamily = 'Open Sans, sans-serif';
        heightOptionLabel.style.position = 'relative';
        heightOptionLabel.style.paddingLeft = '6px';
        heightOptionLabel.style.paddingRight = '6px';
        heightOptionLabel.style.cursor = 'pointer';
        heightOptionLabel.style.width = '100%';
        heightOptionLabel.style.minWidth = '80px';
        heightOptionLabel.style.marginTop = '3px';
        heightOptionLabel.setAttribute('for', `ai_image_height_option_${index}`);
        heightOptionLabel.innerHTML = option;
        optionContainer.style.display = 'flex';
        optionContainer.style.alignItems = 'center';
        optionContainer.style.height = '25px';
        optionContainer.style.paddingTop = '4px';
        optionContainer.style.paddingBottom = '4px';
        optionContainer.appendChild(heightOption);
        optionContainer.appendChild(heightOptionLabel);
        heightOptions.appendChild(optionContainer);
    })

    sizeSelectionContainer.appendChild(widthLabelContainer);
    sizeSelectionContainer.appendChild(widthOptions);
    sizeSelectionContainer.appendChild(heightLabelContainer);
    sizeSelectionContainer.appendChild(heightOptions);

    // Size Selection Elements

    // Image Container
    var imageContainer = document.createElement('div');
    imageContainer.style.borderRadius = '0px';
    imageContainer.style.opacity = '1';
    imageContainer.style.alignSelf = 'center';
    imageContainer.style.minWidth = '80%';
    imageContainer.style.maxWidth = '80%';
    imageContainer.style.order = '31';
    imageContainer.style.height = 'max-content';
    imageContainer.style.flexGrow = '0';
    imageContainer.style.flexShrink = '0';
    imageContainer.style.width = '80%';
    imageContainer.style.margin = '0px';
    imageContainer.style.zIndex = '6';
    imageContainer.style.display = 'flex';
    imageContainer.style.position = 'relative';
    imageContainer.style.flexDirection = 'row';
    imageContainer.style.alignItems = 'stretch';
    imageContainer.style.justifyContent = 'center';
    imageContainer.style.paddingBottom = '0';
    imageContainer.setAttribute('id', 'result_container');

    // SampleCount Selection
    var sampleSelectionContainer = document.createElement('div');
    var sampleLabelContainer = document.createElement('div');
    var sampleLabel = document.createElement('div');
    sampleLabel.innerHTML = 'Samples: ';
    var sampleOptions = document.createElement('div');

    sampleSelectionContainer.style.justifyContent = 'flex-start';
    sampleSelectionContainer.style.borderRadius = '0px';
    sampleSelectionContainer.style.opacity = '1';
    sampleSelectionContainer.style.alignSelf = 'center';
    sampleSelectionContainer.style.minWidth = '80%';
    sampleSelectionContainer.style.maxWidth = '80%';
    sampleSelectionContainer.style.order = '12';
    sampleSelectionContainer.style.minHeight = '30px';
    sampleSelectionContainer.style.height = 'max-content';
    sampleSelectionContainer.style.flexGrow = '0';
    sampleSelectionContainer.style.flexShrink = '0';
    sampleSelectionContainer.style.width = '80%';
    sampleSelectionContainer.style.margin = '10px 0px 0px 0px';
    sampleSelectionContainer.style.zIndex = '9';
    sampleSelectionContainer.style.flexDirection = 'row';
    sampleSelectionContainer.style.flexWrap = 'wrap';
    sampleSelectionContainer.style.display = 'flex';
    sampleSelectionContainer.style.alignContent = 'stretch';

    sampleLabelContainer.style.whiteSpace = 'pre-wrap';
    sampleLabelContainer.style.overflow = 'visible';
    sampleLabelContainer.style.fontFamily = 'Open Sans, sans-serif';
    sampleLabelContainer.style.fontSize = '14px';
    sampleLabelContainer.style.fontWeight = 'bold';
    sampleLabelContainer.style.color = 'rgba(77,79,79,1)';
    sampleLabelContainer.style.lineHeight = '1.4';
    sampleLabelContainer.style.borderRadius = '0px';
    sampleLabelContainer.style.opacity = '1';
    sampleLabelContainer.style.alignSelf = 'flex-start';
    sampleLabelContainer.style.minWidth = '60px';
    sampleLabelContainer.style.order = '3';
    sampleLabelContainer.style.minHeight = '27px';
    sampleLabelContainer.style.width = 'max-content';
    sampleLabelContainer.style.flexGrow = '0';
    sampleLabelContainer.style.height = 'max-content';
    sampleLabelContainer.style.margin = '0px';
    sampleLabelContainer.style.zIndex = '8';
    sampleLabelContainer.style.display = 'flex';
    sampleLabelContainer.style.flexDirection = 'column';
    sampleLabelContainer.style.justifyContent = 'center';
    sampleLabelContainer.appendChild(sampleLabel);

    sampleOptions.style.alignSelf = 'flex-start';
    sampleOptions.style.minWidth = '50px';
    sampleOptions.style.order = '7';
    sampleOptions.style.width = 'max-content';
    sampleOptions.style.flexGrow = '0';
    sampleOptions.style.height = 'max-content';
    sampleOptions.style.margin = '0px 0px 0px';
    sampleOptions.style.zIndex = '10';
    sampleOptions.style.gridTemplateColumns = 'repeat(1, 1fr)';
    sampleOptions.style.fontFamily = 'Open Sans, sans-serif';
    sampleOptions.style.fontSize = '14px';
    sampleOptions.style.fontWeight = '400';
    sampleOptions.style.color = 'rgb(79, 76, 247)';
    sampleOptions.style.opacity = '1';
    sampleOptions.style.position = 'relative';
    sampleOptions.style.paddingTop = '0px';
    sampleOptions.style.paddingBottom = '0px';
    sampleOptions.style.display = 'flex';
    sampleOptions.style.gridAutoRows = 'max-content';
    sampleOptions.style.paddingLeft = '20px';
    sampleOptions.style.gap = '0px 5px';
    sampleOptions.classList.add('size-radio-container');

    const upscale_options = [1, 2, 3, 4];

    upscale_options.map((option, index) => {
        var sampleOption = document.createElement('input');
        var sampleOptionLabel = document.createElement('label');
        var optionContainer = document.createElement('div');
        sampleOption.setAttribute('type', 'radio');
        sampleOption.setAttribute('name', 'ai_sample_count');
        sampleOption.setAttribute('id', `ai_sample_count_option_${index}`);
        sampleOption.setAttribute('value', `${option}`);

        sampleOptionLabel.style.display = 'inline-block';
        sampleOptionLabel.style.verticalAlign = 'middle';
        sampleOptionLabel.style.position = 'relative';
        sampleOptionLabel.style.paddingLeft = '6px';
        sampleOptionLabel.style.paddingRight = '6px';
        sampleOptionLabel.style.cursor = 'pointer';
        sampleOptionLabel.style.width = '100%';
        sampleOptionLabel.style.minWidth = '5px';
        sampleOptionLabel.style.marginTop = '3px';
        sampleOptionLabel.style.fontFamily = 'Open Sans, sans-serif';
        sampleOptionLabel.setAttribute('for', `ai_sample_count_option_${index}`);
        sampleOptionLabel.innerHTML = option;
        optionContainer.style.display = 'flex';
        optionContainer.style.alignItems = 'center';
        optionContainer.style.height = '25px';
        optionContainer.style.height = '25px';
        optionContainer.style.paddingTop = '4px';
        optionContainer.style.paddingBottom = '4px';
        optionContainer.appendChild(sampleOption);
        optionContainer.appendChild(sampleOptionLabel);
        sampleOptions.appendChild(optionContainer);
    })

    sampleSelectionContainer.appendChild(sampleLabelContainer);
    sampleSelectionContainer.appendChild(sampleOptions);
    // Sampleout selection

    // Button Element
    var button = document.createElement('div');
    var buttonLabel = document.createElement('div');
    var buttonElement = document.createElement('div');
    buttonElement.style.display = 'flex';
    buttonElement.style.justifyContent = 'center';
    buttonElement.style.alignItems = 'center';
    button.style.whiteSpace = 'pre-wrap';
    button.style.background = 'rgb(75, 72, 255)';
    button.style.overflow = 'visible';
    button.style.fontFamily = 'var(--font_default)';
    button.style.fontSize = '18px';
    button.style.fontWeight = 'bold';
    button.style.color = 'rgba(255,255,255,1)';
    button.style.textAlign = 'center';
    button.style.lineHeight = '1.4';
    button.style.borderRadius = '5px';
    button.style.opacity = '1';
    button.style.cursor = 'pointer';
    button.style.alignSelf = 'center';
    button.style.minWidth = '80%';
    button.style.maxWidth = '80%';
    button.style.order = '29';
    button.style.minHeight = '40px';
    button.style.height = 'max-content';
    button.style.flexGrow = '0';
    button.style.flexShrink = '0';
    button.style.width = '80%';
    button.style.marginLeft = '0px';
    button.style.marginTop = '10px';
    button.style.marginRight = '0px';
    button.style.marginBottom = '0px';
    button.style.zIndex = '5';
    button.style.display = 'flex';
    button.style.flexDirection = 'column';
    button.style.justifyContent = 'center';
    buttonLabel.style.fontFamily = 'Open Sans, sans-serif';
    buttonLabel.innerHTML = 'Generate';
    button.setAttribute('id', 'btn-generate');
    var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute('xmlns:xlink', "http://www.w3.org/1999/xlink");
    svg.setAttribute('style', "margin: 0; background: transparent; display: inline-block; shape-rendering: auto;");
    svg.setAttribute('width', "40px");
    svg.setAttribute('height', "40px");
    svg.setAttribute('viewBox', "0 0 100 100");
    svg.setAttribute('preserveAspectRatio', "xMidYMid");
    svg.setAttribute('id', "loading-icon");
    svg.classList.add('loading-icon');
    svg.style.display = 'none';

    // Set the content of the SVG element to the SVG markup for the loading spinner
    svg.innerHTML = loadingSvg;
    buttonElement.appendChild(svg);
    buttonElement.appendChild(buttonLabel);
    button.appendChild(buttonElement);

    // Button Element

    // Image Label
    var imageLabel = document.createElement('div');
    imageLabel.style.whiteSpace = 'pre-wrap';
    imageLabel.style.overflow = 'visible';
    imageLabel.style.fontSize = '12px';
    imageLabel.style.fontWeight = '400';
    imageLabel.style.color = 'rgba(127,127,126,1)';
    imageLabel.style.textAlign = 'center';
    imageLabel.style.lineHeight = '1.4';
    imageLabel.style.borderRadius = '0px';
    imageLabel.style.opacity = '1';
    imageLabel.style.alignSelf = 'center';
    imageLabel.style.minWidth = '65%';
    imageLabel.style.maxWidth = '65%';
    imageLabel.style.order = '30';
    imageLabel.style.minHeight = '45px';
    imageLabel.style.height = 'max-content';
    imageLabel.style.flexGrow = '0';
    imageLabel.style.flexShrink = '0';
    imageLabel.style.width = '65%';
    imageLabel.style.marginLeft = '0px';
    imageLabel.style.marginTop = '20px';
    imageLabel.style.marginRight = '0px';
    imageLabel.style.marginBottom = '0px';
    imageLabel.style.zIndex = '14';
    imageLabel.style.fontFamily = 'Open Sans, sans-serif';
    imageLabel.innerHTML = 'Your image will appear below and may take a few seconds to generate.';
    // Image Label

    // Model Options
    var modelOptions = document.createElement('div');
    modelOptions.style.borderRadius = '0px';
    modelOptions.style.opacity = '1';
    modelOptions.style.alignSelf = 'center';
    modelOptions.style.minWidth = '80%';
    modelOptions.style.maxWidth = '80%';
    modelOptions.style.order = '11';
    modelOptions.style.height = 'max-content';
    modelOptions.style.flexGrow = '0';
    modelOptions.style.flexShrink = '0';
    modelOptions.style.width = '80%';
    modelOptions.style.margin = '0px';
    modelOptions.style.zIndex = '6';
    modelOptions.style.display = 'block';
    modelOptions.style.position = 'relative';
    modelOptions.style.paddingBottom = '0px';
    modelOptions.style.textAlign = 'center';
    for (var i = 0; i < modelList.length; i++) {
        var modelItemContainer = document.createElement('div');
        modelItemContainer.style.textAlign = 'center';
        // modelItemContainer.style.width = 'fit-content';
        // modelItemContainer.style.width = '25%';
        // modelItemContainer.style.maxWidth = '25%';
        // modelItemContainer.style.maxWidth = '120px';
        // modelItemContainer.style.minHeight = '130px';
        // modelItemContainer.style.height = '130px';
        modelItemContainer.style.display = 'inline-block';
        modelItemContainer.style.flexDirection = 'column';
        modelItemContainer.classList.add('model-image-container');
        var modelImg = document.createElement('img');
        var modelLabel = document.createElement('div');
        modelLabel.innerHTML = modelList[i].name;
        modelLabel.style.fontWeight = '600';
        modelLabel.style.marginTop = '5px';
        modelLabel.style.fontSize = '10px';
        modelLabel.style.fontFamily = 'Open Sans, sans-serif';
        modelImg.style.top = '0px';
        modelImg.style.left = '0px';
        modelImg.style.display = 'block';
        modelImg.style.margin = 'auto';
        modelImg.style.width = '80%';
        modelImg.style.height = '80%';
        // modelImg.style.width = '100%';
        // modelImg.style.height = '100%';
        modelImg.style.borderRadius = '10px';
        modelImg.style.objectFit = 'cover';
        modelImg.style.position = 'relative';
        modelImg.style.cursor = 'pointer';
        modelImg.style.border = '4px solid black';
        modelImg.setAttribute('src', modelList[i].src);
        modelImg.setAttribute('id', `${modelList[i].id}`);
        modelImg.setAttribute('data-id', `${modelList[i].id}`);
        modelImg.classList.add('model-option-img');
        modelLabel.classList.add('model-option-label');
        modelLabel.style.marginBottom = '5px';
        modelLabel.setAttribute('data-id', `${modelList[i].id}`);
        modelItemContainer.appendChild(modelImg);
        modelItemContainer.appendChild(modelLabel);
        modelOptions.appendChild(modelItemContainer);
    }

    // Model Options

    // Upscale Options Container
    var upscaleContainer = document.createElement('div');
    upscaleContainer.style.display = 'flex';
    upscaleContainer.style.justifyContent = 'center';
    upscaleContainer.style.alignItems = 'center';
    upscaleContainer.style.order = '32';
    upscaleContainer.style.maxWidth = '80%';
    upscaleContainer.style.minWidth = '80%';
    upscaleContainer.style.width = '80%';
    upscaleContainer.style.whiteSpace = 'pre-wrap';
    upscaleContainer.style.height = 'max-content';
    upscaleContainer.style.flexGrow = '0';
    upscaleContainer.style.flexShrink = '0';
    upscaleContainer.style.marginLeft = '0px';
    upscaleContainer.style.marginTop = '10px';
    upscaleContainer.style.marginRight = '0px';
    upscaleContainer.style.marginBottom = '20px';
    upscaleContainer.style.zIndex = '5';
    upscaleContainer.style.display = 'flex';
    upscaleContainer.style.flexDirection = 'row';
    upscaleContainer.style.justifyContent = 'center';
    upscaleContainer.style.alignSelf = 'center';
    // Upscale Options Container

    // Upscale Button Elements
    var upscale2button = document.createElement('div');
    var upscale2buttonLabel = document.createElement('div');
    var upscale2buttonElement = document.createElement('div');
    upscale2buttonElement.style.display = 'flex';
    upscale2buttonElement.style.justifyContent = 'center';
    upscale2buttonElement.style.alignItems = 'center';
    upscale2button.style.whiteSpace = 'pre-wrap';
    upscale2button.style.background = 'rgb(75, 72, 255)';
    upscale2button.style.overflow = 'visible';
    upscale2button.style.fontFamily = 'var(--font_default)';
    upscale2button.style.fontSize = '18px';
    upscale2button.style.fontWeight = 'bold';
    upscale2button.style.color = 'rgba(255,255,255,1)';
    upscale2button.style.textAlign = 'center';
    upscale2button.style.lineHeight = '1.4';
    upscale2button.style.borderRadius = '5px';
    upscale2button.style.opacity = '1';
    upscale2button.style.cursor = 'pointer';
    upscale2button.style.alignSelf = 'center';
    upscale2button.style.minHeight = '40px';
    upscale2button.style.height = 'max-content';
    upscale2button.style.flexGrow = '0';
    upscale2button.style.flexShrink = '0';
    upscale2button.style.marginLeft = '5px';
    upscale2button.style.marginTop = '10px';
    upscale2button.style.marginRight = '5px';
    upscale2button.style.marginBottom = '0px';
    upscale2button.style.paddingLeft = '20px';
    upscale2button.style.paddingRight = '20px';
    upscale2button.style.zIndex = '5';
    upscale2button.style.display = 'flex';
    upscale2button.style.flexDirection = 'column';
    upscale2button.style.justifyContent = 'center';
    upscale2buttonLabel.style.fontFamily = 'Open Sans, sans-serif';
    upscale2buttonLabel.innerHTML = 'Upscale 2x';
    upscale2button.setAttribute('id', 'btn-upscale2');
    upscale2button.classList.add('btn-upscale');
    upscale2button.setAttribute('data-value', 2);
    var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute('xmlns:xlink', "http://www.w3.org/1999/xlink");
    svg.setAttribute('style', "margin: 0; background: transparent; display: inline-block; shape-rendering: auto;");
    svg.setAttribute('width', "40px");
    svg.setAttribute('height', "40px");
    svg.setAttribute('viewBox', "0 0 100 100");
    svg.setAttribute('preserveAspectRatio', "xMidYMid");
    svg.setAttribute('id', "loading-icon2");
    svg.classList.add('loading-icon');
    svg.style.display = 'none';

    // Set the content of the SVG element to the SVG markup for the loading spinner
    svg.innerHTML = loadingSvg;
    upscale2buttonElement.appendChild(svg);
    upscale2buttonElement.appendChild(upscale2buttonLabel);
    upscale2button.appendChild(upscale2buttonElement);

    var upscale3button = document.createElement('div');
    var upscale3buttonLabel = document.createElement('div');
    var upscale3buttonElement = document.createElement('div');
    upscale3buttonElement.style.display = 'flex';
    upscale3buttonElement.style.justifyContent = 'center';
    upscale3buttonElement.style.alignItems = 'center';
    upscale3button.style.whiteSpace = 'pre-wrap';
    upscale3button.style.background = 'rgb(75, 72, 255)';
    upscale3button.style.overflow = 'visible';
    upscale3button.style.fontFamily = 'var(--font_default)';
    upscale3button.style.fontSize = '18px';
    upscale3button.style.fontWeight = 'bold';
    upscale3button.style.color = 'rgba(255,255,255,1)';
    upscale3button.style.textAlign = 'center';
    upscale3button.style.lineHeight = '1.4';
    upscale3button.style.borderRadius = '5px';
    upscale3button.style.opacity = '1';
    upscale3button.style.cursor = 'pointer';
    upscale3button.style.alignSelf = 'center';
    upscale3button.style.minHeight = '40px';
    upscale3button.style.height = 'max-content';
    upscale3button.style.flexGrow = '0';
    upscale3button.style.flexShrink = '0';
    upscale3button.style.marginLeft = '5px';
    upscale3button.style.marginTop = '10px';
    upscale3button.style.marginRight = '5px';
    upscale3button.style.marginBottom = '0px';
    upscale3button.style.paddingLeft = '20px';
    upscale3button.style.paddingRight = '20px';
    upscale3button.style.zIndex = '5';
    upscale3button.style.display = 'flex';
    upscale3button.style.flexDirection = 'column';
    upscale3button.style.justifyContent = 'center';
    upscale3buttonLabel.style.fontFamily = 'Open Sans, sans-serif';
    upscale3buttonLabel.innerHTML = 'Upscale 3x';
    upscale3button.setAttribute('id', 'btn-upscale3');
    upscale3button.classList.add('btn-upscale');
    upscale3button.setAttribute('data-value', 3);
    var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute('xmlns:xlink', "http://www.w3.org/1999/xlink");
    svg.setAttribute('style', "margin: 0; background: transparent; display: inline-block; shape-rendering: auto;");
    svg.setAttribute('width', "40px");
    svg.setAttribute('height', "40px");
    svg.setAttribute('viewBox', "0 0 100 100");
    svg.setAttribute('preserveAspectRatio', "xMidYMid");
    svg.setAttribute('id', "loading-icon3");
    svg.classList.add('loading-icon');
    svg.style.display = 'none';

    // Set the content of the SVG element to the SVG markup for the loading spinner
    svg.innerHTML = loadingSvg;
    upscale3buttonElement.appendChild(svg);
    upscale3buttonElement.appendChild(upscale3buttonLabel);
    upscale3button.appendChild(upscale3buttonElement);
    // Upscale Button Element

    upscaleContainer.appendChild(upscale2button);
    upscaleContainer.appendChild(upscale3button);

    // Upscale Image Container
    var upscaleImageContainer = document.createElement('div');
    upscaleImageContainer.style.borderRadius = '0px';
    upscaleImageContainer.style.opacity = '1';
    upscaleImageContainer.style.alignSelf = 'center';
    upscaleImageContainer.style.minWidth = '80%';
    upscaleImageContainer.style.maxWidth = '80%';
    upscaleImageContainer.style.order = '33';
    upscaleImageContainer.style.marginTop = '20px';
    upscaleImageContainer.style.marginBottom = '20px';
    upscaleImageContainer.style.height = 'max-content';
    upscaleImageContainer.style.flexGrow = '0';
    upscaleImageContainer.style.flexShrink = '0';
    upscaleImageContainer.style.width = '80%';
    upscaleImageContainer.style.zIndex = '6';
    upscaleImageContainer.style.display = 'none';
    upscaleImageContainer.style.position = 'relative';
    upscaleImageContainer.style.flexDirection = 'row';
    upscaleImageContainer.style.alignItems = 'stretch';
    upscaleImageContainer.style.justifyContent = 'center';
    upscaleImageContainer.setAttribute('id', 'upscale_img_container');
    var upscaleImg = document.createElement('img');
    var upscaleImgItem = document.createElement('div');

    var downloadElement = document.createElement('a');
    var iconElement = document.createElement('i');
    downloadElement.classList.add('btn-download');
    iconElement.setAttribute('class', 'fa fa-download');
    downloadElement.style.position = 'absolute';
    downloadElement.style.right = '10px';
    downloadElement.style.bottom = '10px';
    downloadElement.style.cursor = 'pointer';
    downloadElement.style.display = 'none';
    iconElement.style.color = 'white';
    iconElement.style.fontSize = '20px';

    upscaleImgItem.style.top = '0px';
    upscaleImgItem.style.left = '0px';
    upscaleImgItem.style.display = 'block';
    upscaleImgItem.style.margin = '0 10px';
    upscaleImgItem.style.height = '100%';
    upscaleImgItem.style.position = 'relative';
    upscaleImgItem.style.borderRadius = '0px';
    upscaleImgItem.style.width = '30%';
    upscaleImg.setAttribute('src', 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7');
    // upscaleImg.setAttribute('src', 'https://cdn.stablediffusionapi.com/generations/7e70928c-3404-40da-9ed5-9f5bfaf34de2-0.png');
    upscaleImg.setAttribute('id', `result_upscale_img`);
    upscaleImg.style.cursor = 'pointer';
    upscaleImg.classList.add('result_upscale_img_item');
    upscaleImg.style.width = '100%';
    upscaleImgItem.appendChild(upscaleImg);
    downloadElement.appendChild(iconElement);
    upscaleImgItem.appendChild(downloadElement);
    upscaleImageContainer.appendChild(upscaleImgItem);

    container.appendChild(titleElement);
    container.appendChild(subtitleElement);
    container.appendChild(gradientElement);
    // container.appendChild(descriptionElement);
    promptLabelContainer.appendChild(promptLabel);
    promptLabel.style.fontFamily = 'Open Sans, sans-serif';
    container.appendChild(promptLabelContainer);
    container.appendChild(textarea);
    container.appendChild(sizeSelectionContainer);
    container.appendChild(sampleSelectionContainer);
    container.appendChild(imageContainer);
    container.appendChild(modelOptions);
    // container.appendChild(modelOptions2);

    container.appendChild(button);
    container.appendChild(upscaleContainer);
    container.appendChild(imageLabel);
    container.appendChild(upscaleImageContainer);

    parentElement.appendChild(container);
}

function completeGeneration(resultObject) {
    var loadingIcon = document.getElementById("loading-icon");
    loadingIcon.style.display = 'none';
    
    var imageContainer = document.getElementById("result_container");
    imageContainer.innerHTML = "";
    for (var i = 0; i < resultObject.output.length; i++) {
        var img = document.createElement('img');
        var imgItem = document.createElement('div');

        var downloadElement = document.createElement('a');
        var iconElement = document.createElement('i');
        downloadElement.classList.add('btn-download');
        iconElement.setAttribute('class', 'fa fa-download');
        downloadElement.style.position = 'absolute';
        downloadElement.style.right = '10px';
        downloadElement.style.bottom = '10px';
        downloadElement.style.cursor = 'pointer';
        downloadElement.style.display = 'block';
        iconElement.style.color = 'white';
        iconElement.style.fontSize = '20px';
        
        imgItem.style.top = '0px';
        imgItem.style.left = '0px';
        imgItem.style.display = 'block';
        imgItem.style.width = '40%';
        imgItem.style.margin = '0 10px';
        imgItem.style.height = '100%';
        imgItem.style.position = 'relative';
        imgItem.style.borderRadius = '0px';
        img.setAttribute('src', resultObject.output[i]);
        img.setAttribute('id', `result_img_${i}`);
        img.classList.add('result_img_item');
        img.style.width = '100%';
        imgItem.appendChild(img);
        downloadElement.appendChild(iconElement);
      //  imgItem.appendChild(downloadElement);
        imageContainer.appendChild(imgItem);
    }
    var container = document.getElementById("generation_container");
    container.appendChild(imageContainer);
    
    var resultImageElements = document.getElementsByClassName("result_img_item");

    for (var i = 0; i < resultImageElements.length; i++) {
        resultImageElements[i].addEventListener("click", function () {
            for (var j = 0; j < resultImageElements.length; j++) {
                resultImageElements[j].classList.remove("selected");
            }
            this.classList.add("selected");
        });
    }

    var downloadElements = document.getElementsByClassName("btn-download");
    for (var i = 0; i < downloadElements.length; i++) {
        downloadElements[i].addEventListener("click", async function() {
            var parent = this.parentElement;
            var childElements = parent.getElementsByTagName("img");
            var imgElement = childElements[0];
            var url = imgElement.src;
            console.log(url);
            downloadImage(url, 'image.png');
        });
    }
}

function completeUpscale(resultObject) {
    var loadingIcons = document.getElementsByClassName("loading-icon");
    var imgObject = document.getElementById(`result_upscale_img`);
    for (var index = 0; index < loadingIcons.length; index++) {
        loadingIcons[index].style.display = 'none';
    }
    
    downloadUpscaleImage(resultObject.output);

    // const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    // const imageUrl = proxyUrl + resultObject.output;
    // fetch(imageUrl)
    //     .then(resp => resp.blob())
    //     .then(blob => {
    //         for (var index = 0; index < loadingIcons.length; index++) {
    //             loadingIcons[index].style.display = 'none';
    //         }
    //         const url = window.URL.createObjectURL(blob);
    //         imgObject.setAttribute('src', url);
            
    //         var parentElement = imgObject.parentElement;
    //         var childElements = parentElement.getElementsByTagName("a");
    //         var downloadElement = childElements[0];
    //         downloadElement.style.display = 'block';

    //         downloadElement.addEventListener("click", async function() {
    //             downloadUpscaleImage(url);
    //         });
    //     })
    //     .catch((e) => {
    //         console.log(e);
    //         for (var a = 0; a < loadingIcons.length; a++) {
    //             loadingIcons[a].style.display = 'none';
    //         }
    //     });
    
    // var upscaleContainer = document.getElementById("upscale_img_container");
    // upscaleContainer.style.display = 'flex';

    // var downloadElements = document.getElementsByClassName("btn-download");
    // for (var i = 0; i < downloadElements.length; i++) {
    //     downloadElements[i].addEventListener("click", async function() {
    //         var parent = this.parentElement;
    //         var childElements = parent.getElementsByTagName("img");
    //         var imgElement = childElements[0];
    //         var url = imgElement.src;
    //         console.log(url);
    //         downloadImage(url, 'image.png');
    //     });
    // }
}

function fetchResult(fetchUrl) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    var raw = JSON.stringify({
        "key": stableDiffusionAPIkey
    });

    var requestOptions = {
        method: 'POST',
        headers: headers,
        body: raw,
        redirect: 'follow'
    };

    fetch(fetchUrl, requestOptions)
        .then(response => response.text())
        .then(result => {
            var resultObj = JSON.parse(result);
            if (resultObj.status == 'success') {
                completeGeneration(resultObj);
            } else if (resultObj.status = 'processing') {
                fetchResult(fetchUrl);
            }
        })
        .catch(error => {
            loadingIcon.style.display = 'none';
            alert('Something went wrong! Please try again');
            console.log('error', error)
        });
}

function downloadImage(image_url, name) {
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const imageUrl = proxyUrl + image_url;
    fetch(imageUrl)
        .then(resp => resp.blob())
        .then(blob => {
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.style.display = 'none';
            a.href = url;
            a.download = name;
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);
        })
        .catch((e) => console.log(e));
}

function downloadUpscaleImage(image_url) {
    const a = document.createElement('a');
    a.style.display = 'none';
    a.href = image_url;
    a.setAttribute('target', '_blank');
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(image_url);
}

function addEvents() {
    var modelOptionElements = document.getElementsByClassName("model-option-img");

    for (var i = 0; i < modelOptionElements.length; i++) {
        modelOptionElements[i].addEventListener("click", function () {
            for (var j = 0; j < modelOptionElements.length; j++) {
                modelOptionElements[j].classList.remove("selected");
            }
            this.classList.add("selected");
        });
    }

    var downloadElements = document.getElementsByClassName("btn-download");
    for (var i = 0; i < downloadElements.length; i++) {
        downloadElements[i].addEventListener("click", async function() {
            var parent = this.parentElement;
            var childElements = parent.getElementsByTagName("img");
            var imgElement = childElements[0];
            var url = imgElement.src;
            console.log(url);
            downloadImage(url, 'image.png');
        });
    }

    var resultImageElements = document.getElementsByClassName("result_img_item");

    for (var i = 0; i < resultImageElements.length; i++) {
        resultImageElements[i].addEventListener("click", function () {
            for (var j = 0; j < resultImageElements.length; j++) {
                resultImageElements[j].classList.remove("selected");
            }
            this.classList.add("selected");
        });
    }
    var generateButton = document.getElementById("btn-generate");

    generateButton.addEventListener("click", function () {
        var prompt = document.getElementById("prompt");
        var selectedHeight = '', selectedWidth = '', sample = '';
        var modelId = '';

        var selectedModelElement = document.querySelector(".model-option-img.selected");
        if (selectedModelElement) {
            modelId = selectedModelElement.getAttribute('data-id');
        }

        var widthOption = document.getElementsByName("ai_image_width");
        for (var i = 0; i < widthOption.length; i++) {
            if (widthOption[i].checked) {
                selectedWidth = widthOption[i].value;
                break;
            }
        }

        var heightOption = document.getElementsByName("ai_image_height");
        for (var i = 0; i < heightOption.length; i++) {
            if (heightOption[i].checked) {
                selectedHeight = heightOption[i].value;
                break;
            }
        }

        var sampleOption = document.getElementsByName("ai_sample_count");
        for (var i = 0; i < sampleOption.length; i++) {
            if (sampleOption[i].checked) {
                sample = sampleOption[i].value;
                break;
            }
        }

        if (prompt.value != '' && selectedHeight != '' && selectedWidth != '' && modelId != '' && sample != '') {
            var loadingIcon = document.getElementById("loading-icon");
            loadingIcon.style.display = 'block';

            var raw = `{\n    \"key\": \"${stableDiffusionAPIkey}\",\n    \"prompt\": \"${prompt.value}\",\n    \"negative_prompt\": \"\",\n    \"width\": \"${selectedWidth}\",\n    \"height\": \"${selectedHeight}\",\n    \"samples\": \"${sample}\",\n   \"upscale\": \"no\",\n   \"model_id\": \"${modelId}\",\n    \"num_inference_steps\": \"30\",\n    \"seed\": null,\n    \"guidance_scale\": 7.5,\n    \"webhook\": null,\n    \"track_id\": null\n}`;

            var headers = new Headers();
            headers.append('Content-Type', 'application/json');

            var requestOptions = {
                method: 'POST',
                body: raw,
                headers: headers,
                redirect: 'follow'
            };

            fetch("https://stablediffusionapi.com/api/v4/dreambooth", requestOptions)
                .then(response => response.text())
                .then(result => {
                    var resultObject = JSON.parse(result);
                    loadingIcon.style.display = 'none';
                    if (resultObject.status == 'success') {
                        completeGeneration(resultObject);
                    } else if (resultObject.status == 'processing') {
                        loadingIcon.style.display = 'block';
                        setTimeout(function () {
                            fetchResult(resultObject.fetch_result);
                        }, resultObject.eta);
                    } else {
                        alert('Something went wrong! Please try again');
                        console.log(resultObject.message);
                    }
                })
                .catch(error => {
                    loadingIcon.style.display = 'none';
                    alert('Something went wrong! Please try again');
                    console.log('error', error)
                });
        } else {
            var message = '';
            if (prompt.value == '') {
                message += 'Please input prompt';
            }
            if (selectedWidth == '') {
                message += message != '' ? '\nPlease select width' : 'Please select width';
            }
            if (selectedHeight == '') {
                message += message != '' ? '\nPlease select height' : 'Please select height';
            }
            if (modelId == '') {
                message += message != '' ? '\nPlease select model' : 'Please select model';
            }
            if (sample == '') {
                message += message != '' ? '\nPlease select sample number' : 'Please select sample number';
            }

            if (message != '') {
                alert(message);
            }
        }

    });

    var upscaleButtons = document.getElementsByClassName("btn-upscale");

    for (var i = 0; i < upscaleButtons.length; i++) {
        upscaleButtons[i].addEventListener("click", async function () {
            var upscaleValue = parseInt(this.getAttribute('data-value'));
            var selectedImgUrl = '';

            var selectedImageElement = document.querySelector(".result_img_item.selected");
            if (selectedImageElement) {
                selectedImgUrl = selectedImageElement.getAttribute('src');
            }

            if (selectedImgUrl != '') {
                var loadingIcon = this.querySelector(".loading-icon");
                loadingIcon.style.display = 'block';
                console.log(selectedImgUrl);

                var raw = `{\n    \"key\": \"${stableDiffusionAPIkey}\",\n    \"url\": \"${selectedImgUrl}\",\n    \"scale\": \"${upscaleValue}\",\n   \"webhook\": null,\n    \"face_enhance\": false\n}`;

                var headers = new Headers();
                headers.append('Content-Type', 'application/json');

                var requestOptions = {
                    method: 'POST',
                    body: raw,
                    headers: headers,
                    redirect: 'follow'
                };

                fetch("https://stablediffusionapi.com/api/v3/super_resolution", requestOptions)
                    .then(response => response.text())
                    .then(result => {
                        var resultObject = JSON.parse(result);
                        loadingIcon.style.display = 'none';
                        if (resultObject.status == 'success') {
                            completeUpscale(resultObject);
                        } else if (resultObject.status == 'processing') {
                            loadingIcon.style.display = 'block';
                            setTimeout(function () {
                                fetchResult(resultObject.fetch_result);
                            }, resultObject.eta);
                        } else {
                            alert('Something went wrong! Please try again');
                            console.log(resultObject.message);
                        }
                    })
                    .catch(error => {
                        loadingIcon.style.display = 'none';
                        alert('Something went wrong! Please try again');
                        console.log('error', error)
                    });
            } else {
                alert('Please selecte image');
            }
        });
    }
}

function addStyle() {
    // Get all the radio buttons inside the container
    var radioButtons = document.querySelectorAll('.size-radio-container input[type="radio"]');

    // Loop through each radio button
    for (var i = 0; i < radioButtons.length; i++) {
        radioButtons[i].addEventListener('change', function () {
            // Remove the "selected" class from all labels
            var labels = document.querySelectorAll('label');
            for (var j = 0; j < labels.length; j++) {
                labels[j].classList.remove('selected');
            }

            // Add the "selected" class to the label of the selected radio button
            var selectedLabel = this.nextSibling;
            while (selectedLabel.nodeType != 1) {
                selectedLabel = selectedLabel.nextSibling;
            }
            selectedLabel.classList.add('selected');
        });
    }

    var style = document.createElement('style');

    style.innerHTML = `
        .size-radio-container input[type=radio] {
            appearance: none;
            padding: 5px;
            background-color: white;
            border: 2px solid grey;
            width: 15px;
            height: 15px;
            border-radius: 50%;
        }
        .size-radio-container input[type=radio]:checked {
            background-color: black;
        }
        .model-option-img.selected {
            border: 4px solid #4b48ff !important;
        }

        .result_img_item.selected {
            border: 4px solid #4b48ff !important;
        }

        .result_img_item {
            border: 4px solid transparent;
        }

        /* Styles for mobile devices */
        @media only screen and (max-width: 480px) {
            .model-image-container {
                width: 50%;
                height: 20%;
                max-height: 20%;
            }

            // .model-option-img {
            //     width: inherit !important;
            //     height: auto !important;
            // }
        }

        /* Styles for desktop devices */
        @media only screen and (min-width: 768px) {
            .model-image-container {
                width: 20%;
                height: 50%;
            }
        }

        .model-option-img {
            margin: 5px;
        }
    `;

    document.head.appendChild(style);
}

initUI();
addStyle();
addEvents();
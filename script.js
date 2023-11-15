
let slides, dots;
let slideIndex = 1;
projectCount = 40;
let slideContainer;
let audio;
audio = new Audio(`audio/audio${slideIndex}.mp3`);
audio.play();
console.log(audio)
let name = ["Azaliia Abdullina","Riguel Assis","Wanyu Chen","Xinyu Chen","Victoria Cheng","Tania Hartanto","Haomeng Lu","Arnold Shin","Silas Sui","Lein Wu","Chenhan Xu","Nuo Xu","Tansholpan Zhanabekova"
,"Natalya Charlemagne","Junzhe Chen","Victoria Chen","Joy Cheng","Jinghan Cui","Chynna Julienne Dorado","Shuer Gu","irene katakis","Leah Lin","Evan Pan","Yunshan Shao","Qiran Xie","Sixian Yu","Alina Zhang","Dana Zinchenko",
"Santiago Hernandez","Ryan Hiew","Shahd Kamal","Beichen Li","Shuyu Li","Calvin Lin","Karla Liwanes","Anita Luo","Denny Wang","Katy Wang","Alex Wu","William Zheng"];
let text = ["",
"For this project, I decided to use one of my oldest memories. The day I traveled to a small village by the beach to visit my now-deceased aunt. During this trip, she gave me a birthday gift: a Sega Master System. I mostly remember playing Sonic 3 while my aunt would cook and hum on the back. ",
"The memory I have chosen for the project was about hanging out randomly with my Grandma when I was in a young age. We visited the market, play swings and caught fishes together. The sound of water, steps and wind are the actual sounds in the memory. I wanted to not only share these actual sounds, but also share a feeling of joy and relax. Therefore, I intended to record some bright and crisp sounds to composite my soundscape.",
"","For the Memory Soundscape, I wanted to revisit my high school days and capture the key moments that stand out. The soundscape concludes with me turning off the lights, symbolizing a moment of peace in the darkness. This represents the stressful and distracting aspects of high school, where notifications often interfered with my thoughts. It’s a reflection of those times.",
"For my Memory Soundscape project, I aimed to encapsulate the unsettling aftermath of watching a horror movie. The memory I chose was characterized by a lingering sense of paranoia and heightened awareness, often resulting in staying awake past midnight, feeling alone and scared. To recreate this experience, I selected sounds that would transport the listener into the same eerie mindset I used to feel. Key elements included the sounds of creaking floorboards, ominous knocks, a racing heartbeat, and subtle, tension-building music. My goal was to convey the impression of never being truly alone, even in the most familiar settings."
,"","I wanted to work on a memory that I would have the strongest emotional associations and reactions to. My first year in New York City I was shocked by the degree of disorder and instability everywhere. The streets and subways were often very dangerous and filled with mentally unstable people. I’d witness violence every few days. The extreme density and the loud subways that would rattle buildings all around made it impossible for me to get any sense of escape. I felt trapped in a place that I felt I could never be happy in. I wanted to encapsulate this feeling inside my soundscape. "
,"In this memory, I will take you on a journey back to those idyllic afternoons of my childhood. I find myself reminiscing about a time when life was simpler, a time when the only sounds that filled the air were the soothing murmur of running water and the melodious chorus of birdsong. In that distant era, worries were virtually non-existent, and I didn’t have to be burdened with concerns about GPAs or job responsibilities."
,"The memory I picked as the subject for my Memory Soundscape project dates back to my childhood, which is the piano class I had every week in my childhood. The result of the practice assignment was always unsatisfactory, and the instructor was always pointing out my mistakes, which made me not willing to have the class every week."
,"A middle-aged man runs away due to the stress of life, seeking a kind of spiritual relaxation and relief"
,"The memory that I have chosen for the assignment is a dream about an earthquake. There are two major elements, a dream and an earthquake. I think the feature of a dream is “unreal”, which predetermines the structure of the piece and the type of sound as a cue. In terms of an earthquake, I want to show the different stages and how the emotions can be invoked, such as the contrast between the normal state before the earthquake, the feeling of loss when the cup moves slightly at the beginning stage, and quite shocked when things fall like a symphony."
,"After moving here, I felt a little homesick and wanted to make a memory of the New Year when I was 7 years old. We celebrated it with my extended relatives. Through this project, I wanted to convey the emotions and vibe of an ordinary Kazakh holiday. We are all preparing something, making noise, children are screaming, mothers are cooking, fathers are carrying things, everyone has contributed to this event, and we are all just waiting for the new year to start."
,"This memory soundscape conveys a recurring nightmare I had as a child. I was haunted by the Joker, portrayed by Heath Ledger in “The Dark Knight.” In my dream, this character relentlessly tried to find me in my house while I was hiding in my bedroom closet. In the end, he finds me and the nightmare ends. The concept of my soundscape was fear, dream, and suspense."
,"For this Soundscape project, I wanted to present a bboxer’s recording session in a noisy environment, where he is interrupted and restarted over and over again, and then, in the end, he improvises a freestyle performance by treating all the noise around him as part of his own work. Through such a piece of work, I want to show that we should have the passion to embrace our surroundings. There are a lot of noises in our lives, but by incorporating them into our lives and responding to them with enthusiasm and positivity, life will become beautiful."
,"For the project I want to focus on the actual sounds and a portion of the feelings I experienced while biking with my family by the beach. The sounds were important, but I wanted to create a soundscape that brought a sense of peace to the audience because that was how I felt when biking."
,"The memory I chose for this assignment was from the night of my high school graduation, in which I had woken up from a nap to a beautiful sunset casting shadows into my backyard and room. The noises and smells of my parents making me dinner also drifted in from afar. I knew I wanted to include specific sounds from those vivid scenes, so I included authentic reenactments such as cooking noises (cutting vegetables, grilling meat) and my backyard door opening and closing. The feeling I wanted to convey was one that was a drifting state. Starting off from a half-awake, dreamlike state, I wanted the listener to drift into the kitchen and discover themself in the midst of a conversation and flurry of action."
,"The memory I intended to capture was the experience of scuba-diving in Indonesia. As I dived into the water, where gravity seems to lose its grip and time slows down, the entire marine realm unfolded before me, revealing crystal-clear aqua blue water and shimmering schools of fish.The silence of this submerged world was punctuated by the sooth sound of my breath, until it started drizzling above the ocean surface."
,"The memory I chose revolves around the experience of trying Coca-Cola for the first time during a community event, ‘Brigada Escuela,’ where my family was involved in rebuilding a school. It highlights the scorching heat, the exhaustion from physical labor, and the unexpected delight of discovering the refreshing taste of Coke. Furthermore, the memory is tied to the emotional significance of the beverage, as it coincided with my father’s employment at Coca-Cola, which provided support for my education."
,"The memory I want to recreate is that I got lost at the Expo 2010 when I was five years old. I still remember that day very clearly. At the petroleum museum, I was attracted by one of the exhibits so I walked over. I thought my mother would follow me the way she always did. However, when I turned around, my mum disappeared. I was terrified. Then two tourists spotted me and signaled me to ask the volunteer for help. So I went over and borrowed the volunteer’s phone to call my mother, but no matter how many times I tried, all I could hear was endless busy signals. When I was getting desperate, fortunately, my mother came back and we were reunited."
,"For my Memory Soundscape project, I’ve chosen to explore the tumultuous emotional landscape of a painful breakup and heartache. Throughout the memory soundscape, listeners are taken on a journey of emotions through the process of loss, grief, and finally, healing."
,"The memory I chose was an ordinary birthday in my childhood. Because I wanted to express that birthdays used to be very different for me than they are now. It used to be more about anticipation. So I mainly want to convey a warm feeling of the past that exists in the memory rather than what happened on a particular day. In fact, I can’t remember much about what happened, but in my memory, I always feel that the day was very warm, although it was raining. That’s why I use the sound of rain as my main emotional transmission."
,"","The memory I want to pick as my subject is a period in my high school. I used to have the habit of cycling after the Friday courses ended,which is a great chance for me to enjoy the sound of the breeze and the sunset with a relaxed mind. I loved the sunlight and the shadows, the shadow of which changes rather quickly at dusk，which always makes me think of the glinting sea, so besides the normal sound I heard when cycling, I will also use the sound of water to describe the change of light to create a holistic picture."
,"The piece of memory I chose is about the early days of the epidemic outbreak in China. As a student, we were instructed to delay the commencement of the school year, resulting in students taking online classes from home for a duration of two months. During that time, although my family and I held concerns about the epidemic spreading, I experienced an overwhelming sense of tranquility and happiness. "
,"For this assignment, I chose a high school memory as I mentioned before. In my soundscape, I aimed to convey the feelings of excitement, and apprehension in that moment. The thought process behind my composition involved recreating the emotional atmosphere and the audial elements that stood out, like chaos."
,"The concept of my project is to reflect memory beside the sea. In the audio, we can hear two long pauses, which separate two different memories. The first part of the memory is about the bay in the city, where you can hear the sound of a vessel and the ring by the bell tower. In order to run away from the hustle and bustle of city life, I took the subway across the sea and then walked slowly to the beach. All I could hear was the waves in the ocean. I sat there, staring at the sea, and gradually calmed down."
,"I snuggle up on a soft pillow by the window, all cozied up in fluffy blankets. Gently flipping through the pages of a book I sit next to the window. It’s raining outside, but I’m home. My window is open, so I hear how bad the weather is, but the wind is actually refreshing. Savoring every sip of my yummy caramel latte from a cute mug, I smile as I remember why I’m here. Today, I decided to stay snuggled up at home because I felt under the weather. I got sick, so my mom let me miss the school. But little did I know, a book that I chose to read that day would steal my heart away. My incredible mom brewed the most perfect coffee ever and I can still hear her mumbling a song. I carefully placed my pills on a tiny table beforehand and nestled myself beside the window. It felt just like scenes from a movie. The atmosphere was simply amazing, as this book transformed my worldview in a big way. Despite my sniffles and coughs, I couldn’t help but have a truly amazing time. Wrapped in warmth and comfort, my body felt so relaxed and cozy."
,"","","I specifically chose sounds that represented sound that I could by a swimming pool such as water splashing, water sounds caused by swimming movements such as kicking, water dragging through the body, and the sound of people to later use in my final memory soundscape. I mark a big part of my childhood enjoying swimming pools. It is a place where I find quiet relaxation especially during hot summer. It is a core part of my memory. I wanted the listener to feel the same sense of feeling I have felt. It has a similar essence to meditation."
,"","I have chosen to encapsulate the experience of my serene and routine days at home during continuous rainfall. These days have cultivated a sense of solace and security, transforming my house into a sanctuary. The perpetual sound of rain gently tapping against the windows sets a rhythmic, calming melody, familiar and comforting."
,"Working in the Chinese restaurant from a young age etched a vibrant tapestry of memories in my mind. Stepping into the bustling kitchen, I was greeted by a rush of aromatic spices and the rhythmic symphony of clattering stainless steel and chopping cleavers. In the open dining area, laughter, conversations, and the clinking of dinnerware blended harmoniously, creating an energetic atmosphere where savory dishes brought people together. The hum of excitement accompanied the emergence of fresh dumplings and spring rolls, as the swift waitstaff gracefully served the eager diners, their footsteps synchronizing with the heartbeat of the restaurant."
,"","John Cage suggested that “Everything we do is music.” Even in silence, one can find music—its presence lies in the sounds that decorate time. I intend to approach this project by exploring how sound can evoke certain human emotions and by experimenting with different ways of producing sounds to broaden the horizons of timbres received by the human ear to create an interesting and emotive piece of art."
,"The audio basically portrays the daily grind of millions of people, either people at work or students, including me, catching up the metro/shuttle bus in the noise of the city, going to work/school and endless work, feeling overwhelmed and losing ourselves. However, I want to remind everyone that we always have our own Wonderland that could be the place for us to relax by taking a break from work and emphasize the importance of being aware of our mental health. "
,"","The memory piece I want to choose is the last time I went back home from my junior high school. This way back home contained a lot of precious memory and interesting things which had happened among me and my friends. I can remember almost every sound through this road, as I can still walk on this road, but the situation changes. "
,""];

let sectionBtn;

function disappear(){
  console.log("disappear")
  sectionBtn.style.display = "none";
}

window.addEventListener("load", function(event) {
  slideContainer = document.getElementById("slideshow-container");
  console.log(slideContainer)
  for(let i = 0; i < projectCount; i++){
    slideContainer.innerHTML += `<div class="mySlides fade" style="width: 100%">`+`<div class="text">${name[i]}</div>`+`<div class="text2">${text[i]}</div>`+`</div>`
  }
  slides = document.getElementsByClassName("mySlides");
  dots = document.getElementsByClassName("dot");
  showSlides(slideIndex);
  sectionBtn = document.getElementById("dropdown");
});


function plusSlides(n) {
  audio.pause();
  showSlides(slideIndex += n);
  audio = new Audio(`audio/audio${slideIndex}.wav`);
  audio.play();

}

function currentSlide(n) {
  showSlides(slideIndex = n);
}



function showSlides(n) {
  let i;
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  // for (i = 0; i < dots.length; i++) {
  //   dots[i].className = dots[i].className.replace(" active", "");
  // }
  slides[slideIndex-1].style.display = "block";  
  // dots[slideIndex-1].className += " active";

  //play audio
}

document.addEventListener("keydown", (event) => {
  var keyName = event.key;
  var keyCode = event.code;
  console.log(keyName);
  if(keyName == "a"){
    plusSlides(-1);
  }else if(keyName == "b"){
    plusSlides(1);
  }
})